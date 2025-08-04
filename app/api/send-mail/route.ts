import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      subject,
      message,
      honeypot,
      timestamp,
      timeSpent,
      userAgent,
    } = body;

    // Bot protection: Check honeypot field
    if (honeypot) {
      return NextResponse.json(
        { error: "Invalid submission detected." },
        { status: 400 }
      );
    }

    // Bot protection: Check time spent on form (minimum 3 seconds)
    if (timeSpent && timeSpent < 3000) {
      return NextResponse.json(
        { error: "Submission too fast. Please review your message." },
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
        { error: "Automated requests are not allowed." },
        { status: 403 }
      );
    }

    // Bot protection: Content validation
    const suspiciousPatterns = [
      /\b(viagra|cialis|loan|casino|poker|binary|forex|crypto|bitcoin)\b/i,
      /(https?:\/\/[^\s]+.*){3,}/, // Multiple URLs
      /(.)\1{15,}/, // Many repeated characters
      /<[^>]*>/, // HTML tags
      /\b[A-Z]{10,}\b/, // Long uppercase words
    ];

    const fullText = `${firstName} ${lastName} ${email} ${message}`;
    const hasSuspiciousContent = suspiciousPatterns.some((pattern) =>
      pattern.test(fullText)
    );

    if (hasSuspiciousContent) {
      return NextResponse.json(
        { error: "Content validation failed. Please review your message." },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      // secure: process.env.ENVIRONMENT == "development" ? false : true,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content for admin notification
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 10px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1f2937; margin: 0;">New Contact Form Submission</h1>
            <div style="width: 50px; height: 3px; background-color: #3b82f6; margin: 10px auto;"></div>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 10px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #374151; margin-top: 0;">Contact Details</h2>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> ${
              phoneNumber || "Not provided"
            }</p>
            <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1e40af; margin-top: 0;">Message</h3>
            <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This message was sent from the Aptech Computer Education contact form.
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: `Aptech Website <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_RECEIVER,
      subject: `New Contact Form Submission - ${subject}`,
      html: adminEmailContent,
      text: `
        New Contact Form Submission
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phoneNumber || "Not provided"}
        Subject: ${subject}
        IP: ${ip}
        User Agent: ${userAgent}
        Time Spent: ${timeSpent}ms
        
        Message:
        ${message}
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
