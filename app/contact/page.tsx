import { Metadata } from "next";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aptech Computer Education in Benin City, Edo State. Visit our campus, call us, or send us a message. We're here to help you start your tech career.",
};

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 hero-bg-contact py-20 bg-blend-overlay">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-white text-center">
          <h1 className="mb-6 font-bold text-4xl md:text-5xl">Contact Us</h1>
          <p className="text-blue-100 md:text-xl md:max-w-2xl mx-auto">
            Ready to start your tech journey? Get in touch with us today. We're
            here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 font-bold text-gray-900 dark:text-white text-3xl">
                  Get in Touch
                </h2>
                <p className="mb-8 text-gray-600 dark:text-gray-300 md:text-lg text-sm">
                  We're here to help you take the next step in your education
                  and career. Reach out to us through any of the following
                  channels.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                        <svg
                          className="w-6 h-6 text-blue-600 dark:text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white text-lg">
                          Centre Location
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 -mt-2">
                          Austin's Building, 99B First East Circular Rd,
                          <br />
                          Benin City, Edo State, Nigeria
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                        <svg
                          className="w-6 h-6 text-blue-600 dark:text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white text-lg">
                          Call Us
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 -mt-2">
                          <a href="tel:+234808621315" target="_blank">
                            +234-808-621-3157
                          </a>
                          <br />
                          <a href="tel:+2347077388482" target="_blank">
                            +234-707-738-8482
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                        <svg
                          className="w-6 h-6 text-blue-600 dark:text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white text-lg">
                          Email Us
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 -mt-2">
                          <Link href={"mailto:aptechbenin@gmail.com"}>
                            aptechbenin@gmail.com
                          </Link>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                        <svg
                          className="w-6 h-6 text-blue-600 dark:text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white text-lg">
                          Office Hours
                        </h3>
                        <div className="space-y-1 text-gray-600 dark:text-gray-300">
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-3xl">
              Find Us on the Map
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Located in the heart of Benin City, easily accessible by public
              transport
            </p>
          </div>

          <div className="flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-lg h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.51016646434!2d5.631863175038577!3d6.327873693661661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d39b394b455d%3A0xf2f324ad81a2636a!2s99%20First%20East%20Circular%20Rd%2C%20Avbiama%2C%20Benin%20City%20300104%2C%20Edo!5e0!3m2!1sen!2sng!4v1753804023954!5m2!1sen!2sng&z=20"
              style={{ border: "0px", width: "100%", height: "100%" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* 
              <p className="mt-2 text-gray-400 dark:text-gray-500 text-sm">
                Austin's Building - 99B First East Circular Road, Benin City,
                Edo State
              </p> */}
          </div>
        </div>
      </section>
    </div>
  );
}
