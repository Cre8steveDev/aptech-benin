import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting (use Redis in production)
// const rateLimitMap = new Map();

// Rate limiting function
// function rateLimit(ip: string, limit: number = 2, windowMs: number = 900000) {
//   // 15 minutes, 2 applications max
//   const now = Date.now();
//   const windowStart = now - windowMs;

//   if (!rateLimitMap.has(ip)) {
//     rateLimitMap.set(ip, []);
//   }

//   const requests = rateLimitMap.get(ip);
//   // Remove old requests outside the window
//   const validRequests = requests.filter(
//     (timestamp: number) => timestamp > windowStart
//   );
//   rateLimitMap.set(ip, validRequests);

//   if (validRequests.length >= limit) {
//     return false;
//   }

//   validRequests.push(now);
//   rateLimitMap.set(ip, validRequests);
//   return true;
// }

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Apply rate limiting
    // if (!rateLimit(ip)) {
    //   return NextResponse.json(
    //     {
    //       error:
    //         "Too many applications submitted. Please wait before submitting again.",
    //     },
    //     { status: 429 }
    //   );
    // }

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      courseChoice,
      educationalBackground,
      honeypot,
      timestamp,
      timeSpent,
      userAgent,
    } = await req.json();

    // Bot protection: Check honeypot field
    if (honeypot) {
      return NextResponse.json(
        { error: "Invalid submission detected." },
        { status: 400 }
      );
    }

    // Bot protection: Check time spent on form (minimum 5 seconds for applications)
    if (timeSpent && timeSpent < 3000) {
      return NextResponse.json(
        {
          error:
            "Application submitted too quickly. Please review your information.",
        },
        { status: 400 }
      );
    }

    // Bot protection: Check for suspicious user agents
    const suspiciousUserAgents = [
      /bot/i,
      /crawler/i,
      /spider/i,
      /scraper/i,
      /curl/i,
      /wget/i,
      /python/i,
      /php/i,
    ];

    if (
      userAgent &&
      suspiciousUserAgents.some((pattern) => pattern.test(userAgent))
    ) {
      return NextResponse.json(
        { error: "Automated applications are not allowed." },
        { status: 403 }
      );
    }

    // Bot protection: Content validation
    const suspiciousPatterns = [
      /\b(viagra|cialis|loan|casino|poker|binary|forex|crypto|bitcoin)\b/i,
      /(https?:\/\/[^\s]+.*){2,}/, // Multiple URLs
      /(.)\1{15,}/, // Many repeated characters
      /<[^>]*>/, // HTML tags
      /\b[A-Z]{10,}\b/, // Long uppercase words
    ];

    const fullText = `${firstName} ${lastName} ${email} ${educationalBackground}`;
    const hasSuspiciousContent = suspiciousPatterns.some((pattern) =>
      pattern.test(fullText)
    );

    if (hasSuspiciousContent) {
      return NextResponse.json(
        {
          error:
            "Application content validation failed. Please review your information.",
        },
        { status: 400 }
      );
    }

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !courseChoice ||
      !educationalBackground
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      secure: process.env.ENVIRONMENT == "development" ? false : true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Create email content
    const textContent = `
New Course Application Received - Aptech Computer Education

Student Information:
====================
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phoneNumber}
Course of Interest: ${courseChoice}

Educational Background:
======================
${educationalBackground}

Application Details:
===================
Submitted: ${new Date().toLocaleString("en-NG", {
      timeZone: "Africa/Lagos",
      dateStyle: "full",
      timeStyle: "short",
    })}
Source: Website Application Form

Next Steps:
===========
1. Review application details
2. Contact student within 24-48 hours
3. Schedule admission interview if applicable
4. Send admission requirements and next steps

---
This is an automated message from the Aptech Computer Education [Benin] website.
`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Course Application - Aptech Computer Education</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
        .header p { margin: 10px 0 0 0; opacity: 0.9; }
        .content { padding: 30px 20px; }
        .section { margin-bottom: 25px; }
        .section h2 { color: #1d4ed8; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
        .info-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 10px; margin-bottom: 10px; }
        .info-label { font-weight: 600; color: #374151; }
        .info-value { color: #6b7280; }
        .highlight { background-color: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; }
        .footer { background-color: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
        .button { display: inline-block; background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 10px 0; }
        @media (max-width: 600px) {
            .info-grid { grid-template-columns: 1fr; gap: 5px; }
            .container { margin: 10px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎓 New Course Application Received</h1>
            <p>Aptech Computer Education - Benin City</p>
        </div>
        
        <div class="content">
            <div class="highlight">
                <strong>Action Required:</strong> A new student has applied for admission. Please review and follow up within 24-48 hours.
            </div>
            
            <div class="section">
                <h2>👤 Student Information</h2>
                <div class="info-grid">
                    <div class="info-label">Full Name:</div>
                    <div class="info-value">${firstName} ${lastName}</div>
                    
                    <div class="info-label">Email Address:</div>
                    <div class="info-value">${email}</div>
                    
                    <div class="info-label">Phone Number:</div>
                    <div class="info-value">${phoneNumber}</div>
                    
                    <div class="info-label">Course of Interest:</div>
                    <div class="info-value"><strong>${courseChoice}</strong></div>
                </div>
            </div>
            
            <div class="section">
                <h2>🎯 Educational Background</h2>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; color: #374151;">
                    ${educationalBackground.replace(/\n/g, "<br>")}
                </div>
            </div>
            
            <div class="section">
                <h2>📅 Application Details</h2>
                <div class="info-grid">
                    <div class="info-label">Submitted:</div>
                    <div class="info-value">${new Date().toLocaleString(
                      "en-NG",
                      {
                        timeZone: "Africa/Lagos",
                        dateStyle: "full",
                        timeStyle: "short",
                      }
                    )}</div>
                    
                    <div class="info-label">Source:</div>
                    <div class="info-value">Website Application Form</div>
                    
                    <div class="info-label">IP Address:</div>
                    <div class="info-value">${
                      req.headers.get("x-forwarded-for") ||
                      req.headers.get("x-real-ip") ||
                      "Unknown"
                    }</div>
                </div>
            </div>
            
            <div class="section">
                <h2>📋 Next Steps</h2>
                <ol style="color: #374151; padding-left: 20px;">
                    <li>Review application details above</li>
                    <li>Contact student via phone or email within 24-48 hours</li>
                    <li>Schedule admission interview if required</li>
                    <li>Send admission requirements and course details</li>
                    <li>Update student record in the admission system</li>
                </ol>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${email}" class="button">📧 Reply to Student</a>
                <a href="tel:${phoneNumber}" class="button" style="background-color: #059669;">📞 Call Student</a>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Aptech Computer Education</strong><br>
            Unleash your potential<br>
            Benin City, Edo State, Nigeria</p>
            <p><em>This is an automated message from the website application form.</em></p>
        </div>
    </div>
</body>
</html>
`;

    // Log application submission for monitoring (remove sensitive data)
    console.log(
      `Application submission from IP: ${ip}, Email: ${email}, Course: ${courseChoice}, Time spent: ${timeSpent}ms`
    );

    await transporter.sendMail({
      from: `Aptech Benin <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_RECEIVER,
      subject: `🎓 New Course Application: ${firstName} ${lastName} - ${courseChoice}`,
      text: textContent,
      html: htmlContent,
    });

    // Send confirmation email to student
    const studentConfirmationText = `
Dear ${firstName} ${lastName},

Thank you for your interest in Aptech Computer Education!

We have successfully received your application for the ${courseChoice} course. Here are the details we received:

Application Summary:
===================
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phoneNumber}
Course: ${courseChoice}
Submitted: ${new Date().toLocaleString("en-NG", {
      timeZone: "Africa/Lagos",
      dateStyle: "full",
      timeStyle: "short",
    })}

What's Next?
============
1. Our admissions team will review your application within 24-48 hours
2. You will receive a call or email from our team to discuss next steps
3. We may schedule an interview or campus visit
4. You'll receive detailed course information and admission requirements

Why Choose Aptech?
==================
✓ Industry-relevant curriculum
✓ Expert instructors with real-world experience
✓ Hands-on learning with practical projects
✓ Modern facilities and equipment

Contact Us:
===========
If you have any questions, feel free to contact us:
📞 WhatsApp: +2347077388482
📧 Email: aptech.benin@gmail.com
🏢 Address: Austin's Building, 99B, First East Circular Road, Benin City, Edo State

Thank you for choosing Aptech Computer Education!

Best regards,
The Admissions Team
Aptech Computer Education - Benin City
"Unleash your potential"
`;

    const studentConfirmationHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application Received - Aptech Computer Education</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
        .content { padding: 30px 20px; }
        .success-badge { background-color: #dcfce7; color: #166534; padding: 15px; border-radius: 8px; text-align: center; margin-bottom: 25px; border: 1px solid #bbf7d0; }
        .section { margin-bottom: 25px; }
        .section h2 { color: #1d4ed8; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
        .info-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 10px; margin-bottom: 10px; }
        .info-label { font-weight: 600; color: #374151; }
        .info-value { color: #6b7280; }
        .feature-list { list-style: none; padding: 0; }
        .feature-list li { padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
        .feature-list li:before { content: "✓"; color: #059669; font-weight: bold; margin-right: 10px; }
        .contact-info { background-color: #f8fafc; padding: 20px; border-radius: 8px; }
        .footer { background-color: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
        .cta-button { display: inline-block; background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 10px 5px; }
        @media (max-width: 600px) {
            .info-grid { grid-template-columns: 1fr; gap: 5px; }
            .container { margin: 10px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✅ Application Received!</h1>
            <p>Aptech Computer Education - Benin City</p>
        </div>
        
        <div class="content">
            <div class="success-badge">
                <strong>🎉 Success!</strong> Your course application has been successfully submitted.
            </div>
            
            <p>Dear <strong>${firstName} ${lastName}</strong>,</p>
            
            <p>Thank you for your interest in Aptech Computer Education! We have successfully received your application for the <strong>${courseChoice}</strong> course.</p>
            
            <div class="section">
                <h2>📋 Application Summary</h2>
                <div class="info-grid">
                    <div class="info-label">Name:</div>
                    <div class="info-value">${firstName} ${lastName}</div>
                    
                    <div class="info-label">Email:</div>
                    <div class="info-value">${email}</div>
                    
                    <div class="info-label">Phone:</div>
                    <div class="info-value">${phoneNumber}</div>
                    
                    <div class="info-label">Course:</div>
                    <div class="info-value"><strong>${courseChoice}</strong></div>
                    
                    <div class="info-label">Submitted:</div>
                    <div class="info-value">${new Date().toLocaleString(
                      "en-NG",
                      {
                        timeZone: "Africa/Lagos",
                        dateStyle: "full",
                        timeStyle: "short",
                      }
                    )}</div>
                </div>
            </div>
            
            <div class="section">
                <h2>🚀 What's Next?</h2>
                <ol style="color: #374151; padding-left: 20px;">
                    <li>Our admissions team will review your application within <strong>24-48 hours</strong></li>
                    <li>You will receive a call or email from our team to discuss next steps</li>
                    <li>We may schedule an interview or campus visit</li>
                    <li>You'll receive detailed course information and admission requirements</li>
                </ol>
            </div>
            
            <div class="section">
                <h2>🏆 Why Choose Aptech?</h2>
                <ul class="feature-list">
                    <li>Industry-relevant curriculum updated regularly</li>
                    <li>Expert instructors with real-world experience</li>
                    <li>Hands-on learning with practical projects</li>
                    <li>Modern facilities and equipment</li>
                    <li>Flexible class schedules</li>
                </ul>
            </div>
            
            <div class="contact-info">
                <h3 style="margin-top: 0; color: #1d4ed8;">📞 Contact Us</h3>
                <p style="margin: 5px 0;"><strong>Phone:</strong> +2347077388482</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> aptech.benin@gmail.com</p>
                <p style="margin: 5px 0;"><strong>Address:</strong> Austin's Building, 99B First East Circular Road, Benin City, Edo State</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="https://wa.link/p1ko8b" class="cta-button" style="background-color: #059669;">Chat on WhatsApp</a>
                <a href="mailto:aptech.benin@gmail.com" class="cta-button">📧 Email Us</a>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Aptech Computer Education</strong><br>
            "Unleash your Potential"<br>
            Benin City, Edo State, Nigeria</p>
            <p><em>This is an automated confirmation email.</em></p>
        </div>
    </div>
</body>
</html>
`;

    // Send confirmation email to student
    await transporter.sendMail({
      from: `Aptech Computer Education <${process.env.SMTP_FROM}>`,
      to: email,
      subject: `✅ Application Received - ${courseChoice} Course | Aptech Computer Education`,
      text: studentConfirmationText,
      html: studentConfirmationHtml,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Failed to send email. Please try again later, or reach us directly on WhatsApp",
      },
      { status: 500 }
    );
  }
}
