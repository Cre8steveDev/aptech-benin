import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  ChartSquare,
  Check,
  CodeCircle,
  Diagram,
  TickCircle,
} from "iconsax-reactjs";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

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
    icon: <CodeCircle size="32" color="#ffffff" variant="Bold" />,
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
      "Analysis with MS Excel",
      "Python for Data Science",
      "SQL & Databases",
      "Machine Learning",
      "Data Visualization",
    ],
    icon: <ChartSquare size="32" color="#ffffff" variant="Bold" />,
    type: "Smart Pro",
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
    icon: <CodeCircle size="32" color="#ffffff" variant="Bold" />,
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
    icon: <></>,
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
    icon: <></>,
    type: "Career Course",
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
    icon: <></>,
    type: "Skill Builder",
  },
];

const CoursesSection = () => {
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
            <Card key={course.id} hover className="flex flex-col h-full">
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
                  {/* <div className="flex justify-between items-center text-sm">
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
                  </div> */}

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
                  <Button
                    className="flex-1 bg-red-900 hover:bg-yellow-500 hover:text-black"
                    size="sm"
                  >
                    <Link
                      href={`/courses/${course.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      Learn More
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-yellow-500 border-yellow-500 hover:border-transparent !text-black hover:text-white dark:!text-white"
                  >
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
                className="ml-2 w-5 h-5"
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
