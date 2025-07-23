import { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore our comprehensive range of professional technology courses at Aptech Computer Education. From web development to data science, find the perfect course to launch your tech career.",
};

const courses = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Learn modern web development with HTML, CSS, JavaScript, React, and Node.js. Build responsive, dynamic websites and web applications.",
    duration: "6 months",
    level: "Beginner to Advanced",
    price: "₦150,000",
    modules: [
      "HTML5 & CSS3",
      "JavaScript & React",
      "Node.js & Express",
      "Database Management",
      "Version Control",
    ],
    slug: "web-development",
  },
  {
    id: 2,
    title: "Software Development",
    description:
      "Master programming fundamentals and advanced concepts with Python, Java, and C++. Build desktop and mobile applications.",
    duration: "8 months",
    level: "Beginner to Expert",
    price: "₦200,000",
    modules: [
      "Python Programming",
      "Java Development",
      "Mobile App Development",
      "Software Architecture",
      "Testing & Deployment",
    ],
    slug: "software-development",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Learn digital marketing strategies, social media marketing, SEO, Google Ads, and content marketing to grow businesses online.",
    duration: "4 months",
    level: "Beginner to Intermediate",
    price: "₦120,000",
    modules: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Strategy",
      "Email Marketing",
      "Analytics & ROI",
    ],
    slug: "digital-marketing",
  },
  {
    id: 4,
    title: "Networking & Cybersecurity",
    description:
      "Understand network infrastructure, security protocols, and cybersecurity best practices. Prepare for industry certifications.",
    duration: "6 months",
    level: "Intermediate to Advanced",
    price: "₦180,000",
    modules: [
      "Network Administration",
      "Cybersecurity",
      "Cloud Computing",
      "Ethical Hacking",
      "Industry Certifications",
    ],
    slug: "networking-cybersecurity",
  },
  {
    id: 5,
    title: "Graphics Design",
    description:
      "Create stunning visual designs using Adobe Creative Suite. Learn typography, branding, and user interface design principles.",
    duration: "4 months",
    level: "Beginner to Intermediate",
    price: "₦100,000",
    modules: [
      "Adobe Photoshop",
      "Illustrator & InDesign",
      "UI/UX Design",
      "Brand Identity",
      "Print & Digital Design",
    ],
    slug: "graphics-design",
  },
  {
    id: 6,
    title: "Data Science & Analytics",
    description:
      "Analyze data, create insights, and build predictive models using Python, SQL, and machine learning techniques.",
    duration: "7 months",
    level: "Intermediate to Advanced",
    price: "₦220,000",
    modules: [
      "Python for Data Science",
      "SQL & Databases",
      "Machine Learning",
      "Data Visualization",
      "Statistical Analysis",
    ],
    slug: "data-science-analytics",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Professional Courses
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Choose from our comprehensive range of industry-relevant courses
            designed to prepare you for successful careers in technology.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} hover className="h-full flex flex-col">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {course.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 dark:text-gray-400 block">
                          Duration:
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {course.duration}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400 block">
                          Level:
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {course.level}
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        {course.price}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Course Modules:
                      </h3>
                      <ul className="space-y-2">
                        {course.modules.map((module, index) => (
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
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <div className="flex space-x-2 w-full">
                    <Button className="flex-1">
                      <Link href={`/courses/${course.slug}`}>Learn More</Link>
                    </Button>
                    <Button variant="outline">
                      <Link href="/admissions">Enroll</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful graduates who launched their careers
            with Aptech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
            >
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-700"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
