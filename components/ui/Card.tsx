import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  data_attrib?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
  data_attrib,
}) => {
  const baseClasses =
    "bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-200";
  const hoverClasses = hover ? "hover:shadow-lg hover:scale-105" : "";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      data-aos={data_attrib}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return <div className={`p-6 pb-4 ${className}`}>{children}</div>;
};

const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
};

const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div
      className={`px-6 py-4 bg-gray-50 dark:bg-gray-700 rounded-b-lg ${className}`}
    >
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent, CardFooter };
