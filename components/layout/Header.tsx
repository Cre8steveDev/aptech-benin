"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useDarkMode from "@/hooks/useDarkMode";

import { Facebook, Instagram, Moon, Sun, Whatsapp } from "iconsax-reactjs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const navigation = [
    { name: "Home", href: "/", current: pathname === "/" },
    { name: "About Us", href: "/about-us", current: pathname === "/about-us" },
    { name: "Courses", href: "/courses", current: pathname === "/courses" },
    {
      name: "Admissions",
      href: "/admissions",
      current: pathname === "/admissions",
    },
    { name: "Contact", href: "/contact", current: pathname === "/contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 sticky top-0 z-50 w-full max-w-7xl mx-auto md:rounded-bl-2xl rounded-br-2xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/aptech_logo_wide.png"
                alt="Aptech Computer Education"
                width={300}
                height={40}
                className="w-[150px] sm:w-[250px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    item.current
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun
                  size={24}
                  variant="Bold"
                  color={`${isDarkMode ? "#ffffff" : "#000000"}`}
                />
              ) : (
                <Moon
                  size={24}
                  variant="Bold"
                  color={`${isDarkMode ? "#ffffff" : "#000000"}`}
                />
              )}
            </button>

            {/* Icons buttons */}
            <section className="flex gap-3">
              <Link
                href={
                  "https://www.facebook.com/people/Aptech-Benin/61560921099200"
                }
                target="_blank"
              >
                <Facebook
                  size={28}
                  variant="Bold"
                  color={`${isDarkMode ? "#ffffff" : "gray"}`}
                  className="hover:scale-75 transition-all duration-300"
                />
              </Link>

              <Link href={"https://wa.link/p1ko8b"} target="_blank">
                <Whatsapp
                  size={28}
                  variant="Bold"
                  color={`${isDarkMode ? "#ffffff" : "gray"}`}
                  className="hover:scale-75 transition-all duration-300"
                />
              </Link>
            </section>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 dark:bg-gray-800 rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    item.current
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
