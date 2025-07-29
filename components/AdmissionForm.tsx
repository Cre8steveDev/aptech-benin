"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import { Card, CardContent, CardHeader } from "./ui/Card";
import { useSearchParams } from "next/navigation";
import { TickCircle } from "iconsax-reactjs";
import SimpleCaptcha from "./ui/SimpleCaptcha";

const AdmissionForm = () => {
  const searchParam =
    useSearchParams().get("course")?.replaceAll("-", "_") || "none";

  // Pick Course Choice Label from URL
  const courseChoice: { [key: string]: string } = {
    none: "Select a course",
    advanced_diploma_in_software_engineering:
      "Advanced Diploma in Software Engineering",
    aptech_computer_network_specialist: "Aptech Computer Network Specialist",
    certified_ethical_hacking: "Certified Ethical Hacking",
    data_science_and_analytics: "Data Science and Analytics",
    web_application_with_python_smartpro:
      "Web Application with Python (Smart Pro)",
    ethical_hacking_smartpro: "Ethical Hacking (Smart Pro)",
    responsive_web_development_stc: "Responsive Web Development (STC)",
    html5_responsive_web_design_stc: "HTML5 Responsive Web Design (STC)",
    advance_excel_2019_stc: "Advanced Microsoft Excel (STC)",
    java_i_and_ii: "Java I & II (STC)",
    digital_marketing_stc: "Digital Marketing (STC)",
    graphics_design_stc: "Graphic Design (STC)",
    need_help_to_decide: "Need Help to Decide",
  };

  // Setup form data
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<null | string>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [startTime] = useState(Date.now()); // Track form load time

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    courseChoice: courseChoice[searchParam],
    educationalBackground: "",
    honeypot: "", // Bot trap field
  });

  // Handle Form Submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form State
    setLoading(true);
    setFormError(null);

    // Bot protection: Check honeypot field
    if (formData.honeypot) {
      setFormError("Invalid submission detected.");
      setLoading(false);
      return;
    }

    // Bot protection: Check minimum time spent on form (5 seconds for applications)
    const timeSpent = Date.now() - startTime;
    if (timeSpent < 3000) {
      setFormError(
        "Please take a moment to review your application before submitting."
      );
      setLoading(false);
      return;
    }

    // Bot protection: Check for suspicious patterns in application
    const suspiciousPatterns = [
      /\b(viagra|cialis|loan|casino|poker|binary|forex|crypto|bitcoin)\b/i,
      /(https?:\/\/[^\s]+.*){2,}/, // Multiple URLs
      /(.)\1{10,}/, // Repeated characters
      /<[^>]*>/, // HTML tags
    ];

    const fullText = `${formData.firstName} ${formData.lastName} ${formData.email} ${formData.educationalBackground}`;
    const hasSuspiciousContent = suspiciousPatterns.some((pattern) =>
      pattern.test(fullText)
    );

    if (hasSuspiciousContent) {
      setFormError(
        "Your application contains content that cannot be processed. Please review and try again."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: Date.now(),
          timeSpent: timeSpent,
          userAgent: navigator.userAgent,
        }),
      });

      if (response.ok) {
        // Success - show success state
        setIsSubmitted(true);
        // Reset form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          courseChoice: courseChoice.none,
          educationalBackground: "",
          honeypot: "",
        });
      } else {
        // Handle error response
        const errorData = await response.json();
        setFormError(
          errorData.error || "Failed to submit application. Please try again."
        );
      }
    } catch (error) {
      setFormError(
        "Sorry, an error occurred. Please try again, or contact us directly on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  // Reset form and go back to form view
  // const handleBackToForm = () => {
  //   setIsSubmitted(false);
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phoneNumber: "",
  //     courseChoice: courseChoice.none,
  //     educationalBackground: "",
  //     honeypot: "",
  //   });
  //   setFormError(null);
  //   setLoading(false);
  //   setCaptchaValid(false);
  //   setCaptchaResetTrigger((prev) => prev + 1);
  // };

  // Return Component Details
  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        <div className="space-y-8 px-4 w-full max-w-md">
          <Card className="shadow-2xl">
            <CardContent className="p-8 text-center">
              {/* Success Icon */}
              <div className="flex justify-center items-center bg-green-100 dark:bg-green-900 mx-auto mb-6 rounded-full w-20 h-20">
                <svg
                  className="w-10 h-10 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Success Message */}
              <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-3xl">
                Application Submitted!
              </h2>

              <p className="mb-6 text-gray-600 md:text-md dark:text-gray-300 text-xs leading-relaxed">
                Thank you for your interest in Aptech Computer Education. We've
                received your application successfully.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/30 mb-6 p-4 border border-blue-200 dark:border-blue-700 rounded-lg">
                <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-300 text-lg">
                  What's Next?
                </h3>
                <ul className="space-y-1 text-blue-700 dark:text-blue-400 text-sm text-left">
                  <li>• You'll receive a confirmation email shortly</li>
                  <li>• Our admissions team will contact you</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 dark:bg-gray-800 mb-8 p-4 rounded-lg">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Need Immediate Assistance?
                </h3>
                <div className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                  <p>📧 Email: aptech.benin@gmail.com</p>
                  <p>💬 WhatsApp: +2347077388482</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link href="/" className="block">
                  <Button
                    className="bg-red-800 hover:bg-gray-800 w-full text-sm"
                    size="lg"
                  >
                    🏠 Back to Home Page
                  </Button>
                </Link>

                <Link href="/courses" className="block">
                  <Button
                    variant="ghost"
                    className="w-full text-gray-800 dark:text-blue-400 text-sm"
                    size="lg"
                  >
                    📚 Explore Our Courses
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <h3 className="font-bold text-gray-900 dark:text-white text-2xl text-center">
          Application Form
        </h3>
      </CardHeader>
      <CardContent>
        {formError && (
          <div className="bg-red-50 dark:bg-red-900/30 mb-6 p-4 border border-red-200 dark:border-red-700 rounded-lg">
            <div className="flex items-center">
              <svg
                className="mr-2 w-5 h-5 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-red-700 dark:text-red-400 text-sm">
                {formError}
              </p>
            </div>
          </div>
        )}

        <form
          className="space-y-4 md:space-y-6 px-4 text-gray-900"
          onSubmit={handleSubmit}
          id="form"
        >
          {/* Honeypot field - Hidden from users, visible to bots */}
          <div style={{ display: "none" }}>
            <label htmlFor="honeypot">Leave this field empty</label>
            <input
              type="text"
              name="honeypot"
              id="honeypot"
              value={formData.honeypot}
              onChange={(e) =>
                setFormData((fd) => ({ ...fd, honeypot: e.target.value }))
              }
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            <div>
              <label className="block sm:mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
                First Name
              </label>

              <input
                type="text"
                className="dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData((fd) => ({ ...fd, firstName: e.target.value }))
                }
                disabled={loading}
              />
            </div>
            <div>
              <label className="block sm:mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
                Last Name
              </label>
              <input
                type="text"
                className="dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData((fd) => ({ ...fd, lastName: e.target.value }))
                }
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <label className="block sm:mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
              Email Address
            </label>
            <input
              type="email"
              className="dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((fd) => ({ ...fd, email: e.target.value }))
              }
              disabled={loading}
            />
          </div>

          <div>
            <label className="block sm:mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              className="dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
              required
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData((fd) => ({ ...fd, phoneNumber: e.target.value }))
              }
              disabled={loading}
            />
          </div>

          <div>
            <label className="block sm:mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
              Course of Interest
            </label>
            <select
              className="dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
              value={formData.courseChoice}
              onChange={(e) =>
                setFormData((fd) => ({
                  ...fd,
                  courseChoice: courseChoice[e.target.value],
                }))
              }
              disabled={loading}
            >
              <option value="">{formData.courseChoice}</option>

              <option value="advanced_diploma_in_software_engineering">
                Advanced Diploma in Software Engineering
              </option>

              <option value="aptech_computer_network_specialist">
                Aptech Computer Network Specialist
              </option>

              <option value="certified_ethical_hackingethical_hacking">
                Certified Ethical Hacking
              </option>

              <option value="data_science_and_analytics">
                Data Science and Analytics
              </option>

              <option value="web_application_with_python_smartpro">
                Web Application with Python (Smart Pro)
              </option>

              <option value="ethical_hacking_smartpro">
                Ethical Hacking (Smart Pro)
              </option>

              <option value="responsive_web_development_stc">
                Responsive Web Development (STC)
              </option>

              <option value="html5_responsive_web_design_stc">
                HTML5 Responsive Web Design (STC)
              </option>

              <option value="advance_excel_2019_stc">
                Advanced Microsoft Excel (STC)
              </option>

              <option value="java_i_and_ii">Java I & II (STC)</option>

              <option value="digital_marketing_stc">
                Digital Marketing (STC)
              </option>

              <option value="graphics_design_stc">Graphic Design (STC)</option>

              <option value="need_help_to_decide">Need Help to Decide</option>
            </select>
            <p className="text-xs text-gray-900 dark:text-slate-100 mt-2">
              STC - Short Term Courses
            </p>
          </div>

          <div>
            <label className="block sm:mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
              Educational Background
            </label>
            <textarea
              rows={4}
              className="dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-white resize-none"
              placeholder="Tell us about your educational background..."
              value={formData.educationalBackground}
              onChange={(e) =>
                setFormData((fd) => ({
                  ...fd,
                  educationalBackground: e.target.value,
                }))
              }
              disabled={loading}
            />
          </div>

          {/* Security Check */}
          {/* <SimpleCaptcha
            onVerify={setCaptchaValid}
            resetTrigger={captchaResetTrigger}
          /> */}

          <div className="text-center">
            <Button
              type="submit"
              size="md"
              className="px-4 md:px-12 w-full md:w-auto cursor-pointer bg-red-800 hover:bg-red-950"
              disabled={loading}
            >
              {loading ? (
                <>
                  <TickCircle size={24} />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdmissionForm;
