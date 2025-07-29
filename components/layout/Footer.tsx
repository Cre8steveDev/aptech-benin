import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Call, Location, Messages1 } from "iconsax-reactjs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/aptech_logo_small.png"
                alt="Aptech Computer Education"
                width={32}
                height={32}
                className="w-auto h-8"
              />
              <div>
                <span className="font-bold text-yellow-500 text-lg">
                  Aptech
                </span>
                <span className="block text-yellow-500 text-sm leading-tight">
                  Computer Education
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading computer education institute in Benin City, Edo State.
              Building tech careers since inception with professional IT courses
              and industry-relevant training.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors"
                >
                  Our Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Popular Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses/software-development"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors"
                >
                  ADSE (Software Engineering)
                </Link>
              </li>

              <li>
                <Link
                  href="/courses/web-development"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors"
                >
                  Responsive Web Development
                </Link>
              </li>

              <li>
                <Link
                  href="/courses/data-science"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors"
                >
                  Data Science & Analytics
                </Link>
              </li>

              <li>
                <Link
                  href="/courses/certified-ethical-hacking"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors"
                >
                  Certified Ethical Hacking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Location color="white" size={24} />
                <p className="text-gray-300 text-sm">
                  Austin's Plaza 99B First East Circular,
                  <br />
                  Benin City, Edo State,
                  <br />
                  Nigeria
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Call color="white" size={24} />
                <p className="text-gray-300 text-sm">
                  <a href="tel:+234808621315" target="_blank">
                    +234-808-621-3157
                  </a>
                  <br />
                  <a href="tel:+2347077388482" target="_blank">
                    +234-707-738-8482
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Messages1 color="white" size={24} />
                <a href="mailto:aptech.benin@gmail.com">
                  <p className="text-gray-300 text-sm">
                    aptech.benin@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex md:flex-row flex-col justify-center items-center mt-8 pt-8 border-gray-800 border-t">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Aptech Computer Education. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
