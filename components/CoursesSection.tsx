import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const courses = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Learn modern web development with HTML, CSS, JavaScript, React, and Node.js. Build responsive, dynamic websites and web applications.",
    duration: "6 months",
    level: "Beginner to Advanced",
    price: "₦150,000",
    features: [
      "HTML5 & CSS3",
      "JavaScript & React",
      "Node.js & Express",
      "Database Management",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Software Development",
    description:
      "Master programming fundamentals and advanced concepts with Python, Java, and C++. Build desktop and mobile applications.",
    duration: "8 months",
    level: "Beginner to Expert",
    price: "₦200,000",
    features: [
      "Python Programming",
      "Java Development",
      "Mobile App Dev",
      "Software Architecture",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Learn digital marketing strategies, social media marketing, SEO, Google Ads, and content marketing to grow businesses online.",
    duration: "4 months",
    level: "Beginner to Intermediate",
    price: "₦120,000",
    features: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Strategy",
      "Analytics & ROI",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Networking & Cybersecurity",
    description:
      "Understand network infrastructure, security protocols, and cybersecurity best practices. Prepare for industry certifications.",
    duration: "6 months",
    level: "Intermediate to Advanced",
    price: "₦180,000",
    features: [
      "Network Administration",
      "Cybersecurity",
      "Cloud Computing",
      "Industry Certifications",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Graphics Design",
    description:
      "Create stunning visual designs using Adobe Creative Suite. Learn typography, branding, and user interface design principles.",
    duration: "4 months",
    level: "Beginner to Intermediate",
    price: "₦100,000",
    features: [
      "Adobe Photoshop",
      "Illustrator & InDesign",
      "UI/UX Design",
      "Brand Identity",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Data Science & Analytics",
    description:
      "Analyze data, create insights, and build predictive models using Python, SQL, and machine learning techniques.",
    duration: "7 months",
    level: "Intermediate to Advanced",
    price: "₦220,000",
    features: [
      "Python for Data Science",
      "SQL & Databases",
      "Machine Learning",
      "Data Visualization",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Professional Courses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive range of industry-relevant courses
            designed to prepare you for successful careers in technology.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <Card key={course.id} hover className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Duration:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Level:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Price:
                    </span>
                    <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                      {course.price}
                    </span>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      What you'll learn:
                    </h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
                          <svg
                            className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <div className="flex space-x-2 w-full">
                  <Button className="flex-1" size="sm">
                    <Link
                      href={`/courses/${course.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      Learn More
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link href="/admissions">Enroll Now</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center">
          <Button size="lg" variant="outline">
            <Link href="/courses" className="flex items-center">
              View All Courses
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
