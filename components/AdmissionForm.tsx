"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import { Card, CardContent, CardHeader } from "./ui/Card";
import { useSearchParams } from "next/navigation";
import { TickCircle } from "iconsax-reactjs";

const AdmissionForm = () => {
  const searchParam =
    useSearchParams().get("course")?.replaceAll("-", "_") || "none";

  // Pick Course Choice Label from URL
  const courseChoice: { [key: string]: string } = {
    none: "Select a course",
    data_science_and_analytics: "Data Science and Analytics",
    advanced_diploma_in_software_engineering:
      "Advanced Diploma in Software Engineering",
    responsive_web_design: "Responsive Web Design",
    digital_marketing: "Digital Marketing",
    ethical_hacking: "Ethical Hacking",
  };

  // Setup form data
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<null | string>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    courseChoice: courseChoice[searchParam],
    educationalBackground: "",
  });

  // Handle Form Submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form State
    console.log(formData);
    setLoading(true);
    setFormError(null);

    try {
      const response = await fetch("/api/send-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
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
  const handleBackToForm = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      courseChoice: courseChoice.none,
      educationalBackground: "",
    });
    setFormError(null);
    setLoading(false);
  };

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
              <option value="responsive_web_design">
                Responsive Web Design
              </option>
              <option value="advanced_diploma_in_software_engineering">
                Advanced Diploma in Software Engineering
              </option>
              <option value="digital_marketing">Digital Marketing</option>
              <option value="ethical_hacking">Ethical Hacking</option>
              <option value="graphics_design">Graphics Design</option>
              <option value="data_science_and_analytics">
                Data Science and Analytics
              </option>
            </select>
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

          <div className="text-center">
            <Button
              type="submit"
              size="md"
              className="px-12 w-full md:w-auto cursor-pointer bg-red-800 hover:bg-red-950"
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
