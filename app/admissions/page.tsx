import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply for admission to Aptech Computer Education. Learn about our admission requirements, application process, and start your journey to a successful tech career.",
};

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Aptech Today
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Start your journey to a successful tech career. Apply now and
            transform your future with quality education.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Follow these simple steps to begin your learning journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Your Course",
                description:
                  "Select the course that aligns with your career goals and interests.",
              },
              {
                step: "2",
                title: "Submit Application",
                description:
                  "Fill out our online application form with your personal details.",
              },
              {
                step: "3",
                title: "Interview & Assessment",
                description:
                  "Attend a brief interview and basic skills assessment.",
              },
              {
                step: "4",
                title: "Start Learning",
                description:
                  "Complete enrollment and begin your exciting learning journey.",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Admission Requirements
              </h2>
              <ul className="space-y-4">
                {[
                  "Minimum age of 16 years",
                  "Basic computer literacy",
                  "Secondary school certificate or equivalent",
                  "Valid identification document",
                  "Passport photographs (2 copies)",
                  "Completed application form",
                ].map((requirement, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      className="h-5 w-5 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Intake Periods
              </h2>
              <div className="space-y-6">
                {[
                  {
                    period: "January Intake",
                    deadline: "December 15th",
                    status: "Open",
                  },
                  {
                    period: "April Intake",
                    deadline: "March 15th",
                    status: "Open",
                  },
                  {
                    period: "July Intake",
                    deadline: "June 15th",
                    status: "Open",
                  },
                  {
                    period: "October Intake",
                    deadline: "September 15th",
                    status: "Open",
                  },
                ].map((intake, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {intake.period}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Application Deadline: {intake.deadline}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                      {intake.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Apply?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Take the first step towards your tech career today
            </p>
          </div>

          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                Application Form
              </h3>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Course of Interest
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                    <option value="">Select a course</option>
                    <option value="web-development">Web Development</option>
                    <option value="software-development">
                      Software Development
                    </option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="networking-cybersecurity">
                      Networking & Cybersecurity
                    </option>
                    <option value="graphics-design">Graphics Design</option>
                    <option value="data-science">
                      Data Science & Analytics
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Educational Background
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Tell us about your educational background..."
                  />
                </div>

                <div className="text-center">
                  <Button size="lg" className="w-full md:w-auto px-12">
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300">
              Need help with your application?
              <Link
                href="/contact"
                className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
              >
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
