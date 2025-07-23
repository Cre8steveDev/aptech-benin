import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import StatsSection from "@/components/ui/StatsSection";
import { Book, People, TickCircle, CloudLightning } from "iconsax-reactjs";

const features = [
  {
    icon: <Book size={28} color="#155dfc" variant="Outline" />,
    title: "Industry-Relevant Curriculum",
    description:
      "Our courses are designed with input from industry professionals to ensure you learn the most current and in-demand skills.",
  },
  {
    icon: <People size={28} color="#155dfc" variant="Outline" />,
    title: "Expert Instructors",
    description:
      "Learn from experienced professionals with years of industry experience and a passion for teaching.",
  },
  {
    icon: <CloudLightning size={28} color="#155dfc" variant="Outline" />,
    title: "Hands-On Learning",
    description:
      "Get practical experience through projects, labs, and real-world applications that prepare you for the workplace.",
  },
  {
    icon: <TickCircle size={28} color="#155dfc" variant="Outline" />,
    title: "Industry Certifications",
    description:
      "Earn recognized certifications that validate your skills and enhance your credibility with employers.",
  },
];

// Featured Section Component
const FeaturesSection = () => {
  const statsData = [
    { value: 500, label: "Graduates", suffix: "+" },
    { value: 15, label: "Courses", suffix: "+" },
    { value: 95, label: "Job Placement", suffix: "%" },
    { value: 10, label: "Years Experience", suffix: "+" },
  ];

  return (
    <section className="py-14 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Why Choose Aptech Benin?
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're committed to providing world-class computer education that
            prepares you for success in the rapidly evolving tech industry.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <StatsSection
          stats={statsData}
          backgroundColor="bg-red-800 dark:bg-red-900"
          textColor="text-white"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
