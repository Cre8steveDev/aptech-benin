import { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import UKBanner from "@/components/UKBanner";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore our comprehensive range of professional technology courses at Aptech Computer Education. From web development to data science, find the perfect course to launch your tech career.",
};

// PAGE COMPONENT
export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-900 hero-bg-about py-20 bg-blend-overlay">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-500">
            Professional Courses
          </h1>
          <p className="text-sm sm:text-xl text-blue-100">
            Choose from our comprehensive range of industry-relevant courses
            designed to prepare you for successful careers in technology.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-default">
            {courses.map((course) => (
              <Card
                key={course.id}
                hover
                className="h-full flex flex-col relative"
              >
                {/* Course Category */}
                <div className="px-2 py-1 bg-yellow-500 w-fit text-xs text-black">
                  <p>{course.category}</p>
                </div>
                <CardHeader>
                  <h2 className="text-lg md:text-xl xxl:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm">
                    {course.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 dark:text-gray-400 block text-xs">
                          Duration:
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white text-sm">
                          {course.duration}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400 block text-xs">
                          Job Profile:
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white text-sm">
                          {course.profile}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Course Modules:
                      </h3>
                      <ul className="space-y-2">
                        {course.modules.map((module, index) => (
                          <li
                            key={index}
                            className="flex items-center text-xs text-gray-600 dark:text-gray-300"
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
                    <Link
                      href={`/admissions?choice=${course.slug}`}
                      className="flex-1"
                    >
                      <Button className=" bg-red-800 hover:bg-red-600 dark:bg-yellow-500 hover:dark:bg-yellow-700 text-sm dark:text-black w-full">
                        {/* <Link href={`/courses/${course.slug}`}>Get Advice</Link> */}
                        Enroll Now
                      </Button>
                    </Link>
                    <Link href="https://wa.link/f7ml81">
                      <Button
                        variant="outline"
                        className="border-yellow-500 text-gray-700 hover:bg-yellow-500 hover:border-transparent dark:text-white text-sm"
                      >
                        Get Expert Advice
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Download Complete Course Brochure */}
        <div className="text-center text-black mt-8">
          <h2>Download Our Complete Course Brochure</h2>
          {/* Smart Pro and STC */}
          <Link
            href={
              "/brochure/ACE Smart_Professional_and_Skill_Builder_Courses.pdf"
            }
            download={"ACE Smart_Professional_and_Skill_Builder_Courses.pdf"}
            className="hover:underline text-red-900 mr-2"
          >
            Smart Professional and Short Term Courses
          </Link>
          Or {/* ACCP Course - ADSE */}
          <Link
            href={"#"}
            download={"#"}
            className="hover:underline text-red-900"
          >
            ACCP (Advanced Diploma in Software Engineering)
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <UKBanner />
    </div>
  );
}

// COURSE DATA FOR COMPONENTS
const courses = [
  {
    id: 1,
    title: "Advance Diploma in Software Engineering",
    description:
      "ADSE is a two year Diploma programme designed to make you an industry professional in sofrware engineering field. ADSE gives you the professional edge to start your career in the global industry. You get to study abroad with our prestigious educational alliances.",
    duration: "2 Years",
    profile: "Software Engineer",
    category: "Career Course",
    modules: [
      "Web Development & Version Control",
      "Java Development",
      "Mobile App Development",
      "Software Architecture",
      "Python & Database Management",
      "Testing & Deployment",
    ],
    slug: "software-development",
  },

  {
    id: 2,
    title: "Aptech Computer Network Specialist",
    description:
      "ACNS is the leading Networking Career Course from Aptech. It is an hardware networking system administrator and database course. It has all the current IT technologies and offers the fastest and most economical pathway to a degree from a UK Institution.",
    duration: "?? months",
    profile: "Network Specialist",
    category: "Career Course",
    modules: [
      "Network Administration",
      "Cybersecurity",
      "Cloud Computing (Azure)",
      "Ethical Hacking",
      "Industry Certifications",
    ],
    slug: "aptech-computer-network-specialist",
  },

  {
    id: 3,
    title: "Certified Ethical Hacker",
    description:
      "Be equipped with the skills to identify security weaknesses, respond to malicious activity with experiential knowledge, and secure systems with the best methods. Learn thread modelling and how to perform wireless attacks using python programs and other hacking tools.",
    duration: "?? months",
    profile: "Ethical Hacker",
    category: "Smart Professional",
    modules: [
      "Fundamentals of JavaScript",
      "Security Programming with Python",
      "Security Architecture & Hacking",
      "Windows and Linux Hacking",
      "Kali Linux and Virtual Machines",
      "Ethical Hacking",
    ],
    slug: "certified-ethical-hacking",
  },

  {
    id: 4,
    title: "Data Science & Analytics",
    description:
      "Data science is a multidisicplinary blend of data inference, algorithm development and technology in order to solve analytically complex problems. It is about using data in creative ways to generate business value, aid decisions and predictions.",
    duration: "?? months",
    profile: "Data Scientist",
    category: "ACN Pro",
    modules: [
      "Data Analysis with MS Excel",
      "Python Programming",
      "Large Data Management",
      "R Programming",
      "Visual Analytics with Tableau",
      "Foundation of Big Data Systems",
    ],
    slug: "data-science-analytics",
  },

  {
    id: 5,
    title: "Full Stack MERN Development",
    description:
      "Learn how to build real world full stack web applications using the MERN Stack (MongoDB, ExpressJS, ReactJS and NodeJS). Master the techniques for building both client-side and server-side applications. ",
    duration: "?? months",
    profile: "Full Stack Developer",
    category: "Smart Professional",
    modules: [
      "Building Modern Websites",
      "Frontend Development with ReactJS",
      "Managing Data with MongoDB",
      "Server-Side Development with ExpressJS",
      "UI/UX for Web Design",
      "Version Control (Git & GitHub)",
    ],
    slug: "mern-stack-development",
  },

  {
    id: 6,
    title: "Responsive Web Development",
    description:
      "Use HTML5, CSS & JavaScript to develop interactive websites and apps. Learn frontend web development with ReactJS and the basic principles of effective and responsive web user interface and design (UI/UX)",
    duration: "4 months",
    profile: "Frontend Developer",
    category: "Skill Builder",
    modules: [
      "HTML5 & CSS3",
      "Programming with JavaScript",
      "Frontend Development with ReactJ",
      "Principles of UI/UX with Figma",
      "Version Control",
    ],
    slug: "responsive-web-development",
  },

  {
    id: 7,
    title: "Python Web App Development",
    description:
      "Learn how to build real world full stack web applications using the versatile Python programming language.  Master the techniques for building both client-side and server-side applications using Flask and Django. Be equipped with the skills to build complete digital products.",
    duration: "?? months",
    profile: "Python Developer",
    category: "Smart Professional",
    modules: [
      "Building Modern Websites",
      "Frontend Development with ReactJS",
      "Working with MySQL",
      "Server-Side Development (Flask/Django)",
      "UI/UX for Web Design",
      "Version Control (Git & GitHub)",
    ],
    slug: "python-web-development",
  },
];
