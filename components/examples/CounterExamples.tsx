import React from "react";
import Counter from "@/components/ui/Counter";
import StatsSection from "@/components/ui/StatsSection";

/**
 * Example usage of the Counter and StatsSection components
 */

// Example 1: Using Counter component directly
const DirectCounterExample = () => {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-800">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Direct Counter Usage
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Counter
          end={500}
          suffix="+"
          label="Students"
          className="text-blue-600 dark:text-blue-400"
          labelClassName="text-gray-700 dark:text-gray-300"
        />
        <Counter
          end={95}
          suffix="%"
          label="Success Rate"
          className="text-green-600 dark:text-green-400"
          labelClassName="text-gray-700 dark:text-gray-300"
          duration={3000}
        />
        <Counter
          end={1500000}
          prefix="₦"
          label="Average Salary"
          className="text-purple-600 dark:text-purple-400"
          labelClassName="text-gray-700 dark:text-gray-300"
        />
      </div>
    </div>
  );
};

// Example 2: Using StatsSection component
const StatsSectionExample = () => {
  const companyStats = [
    { value: 500, label: "Happy Students", suffix: "+" },
    { value: 15, label: "Courses", suffix: "+" },
    { value: 95, label: "Job Placement", suffix: "%" },
    { value: 10, label: "Years Experience", suffix: "+" },
  ];

  const alternativeStats = [
    { value: 1200, label: "Graduates", suffix: "+" },
    { value: 50, label: "Corporate Partners", suffix: "+" },
    { value: 98, label: "Student Satisfaction", suffix: "%" },
  ];

  return (
    <div className="space-y-8">
      {/* Blue themed stats */}
      <StatsSection
        stats={companyStats}
        title="Our Impact"
        description="Numbers that speak for our commitment to excellence"
        backgroundColor="bg-blue-600 dark:bg-blue-800"
        textColor="text-white"
      />

      {/* Green themed stats */}
      <StatsSection
        stats={alternativeStats}
        backgroundColor="bg-green-600 dark:bg-green-800"
        textColor="text-white"
      />

      {/* Custom styled stats */}
      <StatsSection
        stats={[
          { value: 24, label: "Support", suffix: "/7" },
          { value: 100, label: "Online Access", suffix: "%" },
        ]}
        backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
        textColor="text-white"
        className="shadow-xl"
      />
    </div>
  );
};

// Combined example component
const CounterExamples = () => {
  return (
    <div className="space-y-12 p-8">
      <DirectCounterExample />
      <StatsSectionExample />
    </div>
  );
};

export default CounterExamples;
export { DirectCounterExample, StatsSectionExample };
