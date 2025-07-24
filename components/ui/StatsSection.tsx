import React from "react";
import Counter from "@/components/ui/Counter";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface StatsSectionProps {
  stats: StatItem[];
  title?: string;
  description?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  stats,
  title,
  description,
  backgroundColor = "bg-blue-600 dark:bg-blue-800",
  textColor = "text-white",
  className = "",
}) => {
  return (
    <div
      className={`mt-20 ${backgroundColor}/50 rounded-2xl p-8 md:p-8 ${className} bg-[url('/top-view-using-laptop-overlay.webp')] bg-blend-multiply bg-center`}
      data-aos="fade-up"
    >
      {(title || description) && (
        <div className="text-center mb-8">
          {title && (
            <h3 className={`text-2xl md:text-3xl font-bold mb-1 ${textColor}`}>
              {title}
            </h3>
          )}
          {description && (
            <p className={`text-md opacity-90 max-w-2xl mx-auto ${textColor}`}>
              {description}
            </p>
          )}
        </div>
      )}

      <div
        className={`grid grid-cols-2 md:grid-cols-${Math.min(
          stats.length,
          4
        )} gap-8 ${textColor}`}
      >
        {stats.map((stat, index) => (
          <Counter
            key={index}
            end={stat.value}
            suffix={stat.suffix || ""}
            prefix={stat.prefix || ""}
            label={stat.label}
            className={textColor}
            labelClassName={"text-yellow-400"}
            duration={2000 + index * 200} // Stagger animation
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
