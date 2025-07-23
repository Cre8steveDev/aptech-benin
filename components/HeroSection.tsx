import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const HeroSection = () => {
  return (
    <section className=" text-white overflow-hidden bg-black h-[90dvh] lg:min-h-[700px] max-w-[1200px] md:mx-auto md:my-8 md:rounded-4xl md:shadow-2xl relative py-0">
      <video
        src="/hero-video.mp4"
        className="w-full h-full absolute top-0 left-0"
        muted
        loop
        autoPlay
      ></video>
      <section className="relative w-full h-full bg-black/50 px-8">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none">
                  Build Your
                  <span className="text-yellow-400"> Tech Career </span>
                  With Our Professional I.T. Courses.
                </h1>
                <p className="text-md md:text-lg text-white leading-relaxed">
                  Aptech Benin ensures the quality of its training programs
                  through a standardized curriculum that is regularly updated to
                  reflect industry trends and technological advancements.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="hover:bg-yellow-500 bg-red-700 hover:text-white text-gray-900 font-semibold animate"
                >
                  <Link href="/courses" className="flex items-center">
                    Explore Courses
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="border-white border-2 text-white bg-transparent hover:bg-white hover:text-blue-700"
                >
                  <Link href="/admissions">Apply Now</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/graduate-hero-img.webp"
                  alt="Aptech Computer Education"
                  width={600}
                  height={400}
                  className="w-full h-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
