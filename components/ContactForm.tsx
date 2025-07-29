"use client";

import Button from "./ui/Button";
import { Card, CardContent, CardHeader } from "./ui/Card";
import SimpleCaptcha from "./ui/SimpleCaptcha";
import { useState, FormEvent, ChangeEvent } from "react";

const ContactForm = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
    honeypot: "", // Bot trap field
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [startTime] = useState(Date.now()); // Track form load time
  //   const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaResetTrigger, setCaptchaResetTrigger] = useState(0);

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFormError(null);

    const data: { [key: string]: string } = {
      general: "General Inquiry",
      admission: "Admissions",
      courses: "Course Information",
      support: "Student Support",
      partnerships: "Partnerships",
    };

    setFormData((prev) => ({ ...prev, subject: data[prev.subject] }));

    // Bot protection: Check CAPTCHA
    // if (!captchaValid) {
    //   setFormError("Please complete the security check.");
    //   setLoading(false);
    //   return;
    // }

    // Bot protection: Check honeypot field
    if (formData.honeypot) {
      setFormError("Invalid submission detected.");
      setLoading(false);
      return;
    }

    // Bot protection: Check minimum time spent on form (3 seconds)
    const timeSpent = Date.now() - startTime;
    if (timeSpent < 3000) {
      setFormError(
        "Please take a moment to review your message before submitting."
      );
      setLoading(false);
      return;
    }

    // Bot protection: Check for suspicious patterns
    const suspiciousPatterns = [
      /\b(viagra|cialis|loan|casino|poker)\b/i,
      /https?:\/\/[^\s]+/g, // Multiple URLs
      /(.)\1{10,}/, // Repeated characters
    ];

    const fullText = `${formData.firstName} ${formData.lastName} ${formData.email} ${formData.message}`;
    const hasSuspiciousContent = suspiciousPatterns.some((pattern) =>
      pattern.test(fullText)
    );

    if (hasSuspiciousContent) {
      setFormError(
        "Your message contains content that cannot be processed. Please review and try again."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-mail", {
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
        setIsSubmitted(true);
        setFormData(initialFormData);
      } else {
        const errorData = await response.json();
        setFormError(
          errorData.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setFormError(
        "Sorry, an error occurred. Please try again or contact us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  // Handle back to form
  const handleBackToForm = () => {
    setIsSubmitted(false);
    setFormData(initialFormData);
    setFormError(null);
    setLoading(false);
    // setCaptchaValid(false);
    setCaptchaResetTrigger((prev) => prev + 1);
  };

  // Success state
  if (isSubmitted) {
    return (
      <div>
        <Card>
          <CardContent className="p-8 text-center">
            {/* Success Icon */}
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
              <svg
                className="h-8 w-8 text-green-600 dark:text-green-400"
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Message Sent Successfully!
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Thank you for reaching out to us. We've received your message and
              will get back to you within 24 hours.
            </p>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleBackToForm}
                className="w-full bg-red-800 hover:bg-yellow-500 cursor-pointer"
                size="md"
              >
                Send Another Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <h2 className="font-bold text-gray-900 dark:text-white text-2xl text-center">
            Send us a Message
          </h2>
        </CardHeader>
        <CardContent>
          {formError && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg">
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-red-400 mr-2"
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

          <form className="space-y-6 text-gray-800" onSubmit={handleSubmit}>
            {/* Honeypot field - Hidden from users, visible to bots */}
            <div style={{ display: "none" }}>
              <label htmlFor="honeypot">Leave this field empty</label>
              <input
                type="text"
                name="honeypot"
                id="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
                required
                disabled={loading}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="admissions">Admissions</option>
                <option value="courses">Course Information</option>
                <option value="support">Student Support</option>
                <option value="partnerships">Partnerships</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
                Message
              </label>
              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="dark:bg-gray-700 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-white resize-none"
                placeholder="Tell us how we can help you..."
                required
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
                size="lg"
                className="w-full bg-red-800 hover:bg-yellow-500 cursor-pointer"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
