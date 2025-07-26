"use client";

import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import StatsSection from "@/components/ui/StatsSection";
import { Book, People, TickCircle, CloudLightning } from "iconsax-reactjs";

import AOS from "aos";

const features = [
  {
    icon: <Book size={28} color="#155dfc" variant="Outline" />,
    delay: "0",
    title: "Modern Curriculum",
    description:
      "Our courses are designed with input from industry professionals to ensure you learn the most current and in-demand skills.",
  },
  {
    icon: <People size={28} color="#155dfc" variant="Outline" />,
    delay: "50",
    title: "Expert Instructors",
    description:
      "Learn from experienced professionals with years of industry experience and a passion for teaching.",
  },
  {
    icon: <CloudLightning size={28} color="#155dfc" variant="Outline" />,
    delay: "100",
    title: "Hands-On Learning",
    description:
      "Get practical experience through projects, labs, and real-world applications that prepare you for the workplace.",
  },
  {
    icon: <TickCircle size={28} color="#155dfc" variant="Outline" />,
    delay: "150",
    title: "Industry Certifications",
    description:
      "Earn recognized certifications that validate your skills and enhance your credibility with employers.",
  },
];

// Featured Section Component
const FeaturesSection = () => {
  const statsData = [
    { value: 7, label: "Graduates Globally", suffix: "m+" },
    { value: 15, label: "Professional Courses", suffix: "+" },
    { value: 35, label: "Yearse of Expertise", suffix: "+" },
    { value: 40, label: "Countries", suffix: "+" },
  ];

  // Initialize animate on scroll library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800 py-14">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2
            className="mb-2 font-bold text-gray-800 dark:text-white text-2xl md:text-4xl"
            data-aos="fade-up"
          >
            APTECH is a Global Learning Solutions Provider
          </h2>
          <p
            className="mx-auto max-w-3xl text-gray-600 text-[14px] md:text-md dark:text-gray-300 px-6"
            data-aos="fade-up"
          >
            Are you considering a new career path or you are looking at adding a
            skill? Let's help you in your decision making and give options on
            how to reboot your career journey for success. We're committed to
            providing world-class computer education that prepares you for
            success in the rapidly evolving tech industry.
          </p>
        </div>

        {/* Features Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div data-aos="fade-up" key={index} data-aos-delay={feature.delay}>
              <Card hover className="text-center">
                <CardContent className="p-8">
                  <div className="inline-flex justify-center items-center bg-blue-100 dark:bg-blue-900 mb-6 rounded-full w-16 h-16 text-blue-600 dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <h3 className="mb-4 font-semibold text-gray-900 dark:text-white text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <StatsSection
          title="Why Choose Aptech?"
          description="Aptech has alliance with the best international Universities and institutes across the globe to benefit Aptech students."
          stats={statsData}
          backgroundColor="bg-red-800 dark:bg-red-900"
          textColor="text-white"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
