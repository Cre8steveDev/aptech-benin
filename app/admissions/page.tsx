import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AdmissionForm from "@/components/AdmissionForm";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply for admission to Aptech Computer Education. Learn about our admission requirements, application process, and start your journey to a successful tech career.",
};

export default function AdmissionsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-black/80 text-white py-24 bg-[url('/group-photo-laptop.webp')] bg-blend-overlay bg-cover bg-fixed">
        {/* Hero Section */}
        <section className="">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl md:text-5xl font-bold md:mb-6">
              Join Aptech Benin Today
            </h1>
            <p className="text-sm md:text-lg">
              Start your journey to a successful tech career. Apply now and
              transform your future with quality education.
            </p>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-12 bg-white dark:bg-gray-800 mt-5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Application Process
              </h2>
              <p className="text-sm px-5 md:px-0 md:text-md text-gray-600 dark:text-gray-300">
                Follow these simple steps to begin your learning journey with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 sm:gap-8">
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
                  title: "Make Payment",
                  description:
                    "Walk in to the centre and make payment for your chosen course.",
                },
                {
                  step: "4",
                  title: "Start Learning",
                  description:
                    "Complete enrollment and begin your exciting learning journey.",
                },
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <Link href={"#form"}>
                    <CardContent className="p-8">
                      <div className="w-8 h-8 sm:w-16 sm:h-16 bg-red-900 text-white rounded-full flex items-center justify-center text-xs sm:text-2xl font-bold mx-auto mb-1 sm:mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-md md:text-lg font-semibold text-gray-900 dark:text-white sm:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-md">
                        {item.description}
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 !bg-transparent">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                Ready to Apply?
              </h2>
              <p className="text-sm md:text-lg text-gray-300">
                Take the first step towards your tech career today
              </p>
            </div>

            <AdmissionForm />

            <div className="text-center mt-8">
              <p className="text-gray-50 dark:text-gray-300">
                Need help with your application?
                <Link
                  href="https://wa.link/p1ko8b"
                  className="text-green-600 hover:underline ml-1"
                >
                  Let's Talk on WhatsApp
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}
