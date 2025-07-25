"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  Avalanche,
  ChartSquare,
  CodeCircle,
  ShoppingCart,
  TickCircle,
  WifiSquare,
} from "iconsax-reactjs";

// Import Animate on Scroll Class
import AOS from "aos";

const CoursesSection = () => {
  // Initialize animate on scroll library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 font-bold text-gray-900 dark:text-white text-4xl md:text-5xl">
            Our Professional Courses
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-md dark:text-gray-300">
            Choose from our comprehensive range of industry-relevant courses
            designed to prepare you for successful careers in technology.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {courses.map((course) => (
            <Card
              key={course.id}
              hover
              className="flex flex-col h-full"
              data_attrib={"fade-up"}
            >
              <CardHeader>
                <div className="bg-yellow-400 mb-2 ml-auto px-4 py-1 rounded-xl w-fit text-[10px] text-black">
                  {course.type}
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-red-700 dark:bg-blue-900 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                    {course.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-xl">
                    {course.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div className="pt-4">
                    <h4 className="mb-2 font-medium text-gray-900 dark:text-white text-sm">
                      What you'll learn:
                    </h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"
                        >
                          <TickCircle
                            color="green"
                            size={18}
                            variant="Outline"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <div className="flex space-x-2 w-full">
                  <Link
                    href={`/courses/${course.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="flex-1"
                  >
                    <Button
                      className="bg-red-900 hover:bg-yellow-500 w-full hover:text-black"
                      size="sm"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Link
                    href={`/admissions?course=${course.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-yellow-500 border-yellow-500 hover:border-transparent !text-black hover:text-white dark:!text-white"
                    >
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center">
          <Button
            size="sm"
            variant="outline"
            className="hover:!bg-black !border-black !text-black dark:!border-white dark:!text-white hover:!text-white animate-pulse"
          >
            <Link href="/courses" className="flex items-center">
              View All Courses
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

// DATA FOR RENDERING LIST
const courses = [
  {
    id: 1,
    title: "Advanced Diploma in Software Engineering",
    description:
      "Master programming fundamentals and advanced concepts with Python, Java, Database and AI. Build desktop and mobile applications.",
    duration: "2 years",

    features: [
      "Python Programming",
      "Java Development",
      "Mobile App Dev",
      "Software Architecture",
      "Study Abroad Opportunity",
    ],
    icon: <CodeCircle size="24" color="#ffffff" variant="Bold" />,
    type: "Career Course",
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    description:
      "Analyze data, create insights, and build predictive models using Python, SQL, and machine learning techniques.",
    duration: "7 months",
    level: "Intermediate to Advanced",

    features: [
      "Data Analysis with MS Excel",
      "Python for Data Science",
      "SQL & Databases",
      "Machine Learning",
      "Data Visualization",
    ],
    icon: <ChartSquare size="24" color="#ffffff" variant="Bold" />,
    type: "Smart Professional",
  },

  {
    id: 3,
    title: "Responsive Web Design",
    description:
      "Learn modern web development with HTML, CSS, JavaScript, React. Design and build responsive, dynamic websites and web applications.",
    duration: "4 months",
    level: "Beginner to Advanced",

    features: [
      "HTML5 & CSS3",
      "JavaScript & React",
      "UI/UX for Web",
      "Git & GitHub",
    ],
    icon: <CodeCircle size="24" color="#ffffff" variant="Bold" />,
    type: "Skill Builder",
  },

  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Learn digital marketing strategies, social media marketing, SEO, Google Ads, and content marketing to grow businesses online.",
    duration: "4 months",
    level: "Beginner to Intermediate",

    features: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Strategy",
      "Analytics & ROI",
    ],
    icon: <ShoppingCart size="24" color="#ffffff" />,
    type: "Skill Builder",
  },
  {
    id: 5,
    title: "Ethical Hacking",
    description:
      "Understand network infrastructure, security protocols, and cybersecurity best practices. Prepare for industry certifications.",
    duration: "6 months",
    level: "Intermediate to Advanced",

    features: [
      "Network Administration",
      "Cybersecurity",
      "Cloud Computing",
      "Industry Certifications",
    ],
    icon: <WifiSquare size="24" color="#ffffff" />,
    type: "Smart Professional",
  },
  {
    id: 6,
    title: "Graphics Design",
    description:
      "Create stunning visual designs using Adobe Creative Suite. Learn typography, branding, and user interface design principles.",
    duration: "4 months",
    level: "Beginner to Intermediate",

    features: [
      "Adobe Photoshop",
      "Illustrator & InDesign",
      "UI/UX Design",
      "Brand Identity",
    ],
    icon: <Avalanche size="24" color="#ffffff" />,
    type: "Skill Builder",
  },
];
