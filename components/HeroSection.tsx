import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const HeroSection = () => {
  return (
    <section className="relative bg-black md:shadow-2xl md:mx-auto md:my-8 py-0 md:rounded-4xl max-w-[1200px] h-fit md:h-[90dvh] lg:min-h-[700px] overflow-hidden text-white">
      <video
        src="/hero-video.mp4"
        className="top-0 left-0 absolute w-full h-full object-cover"
        muted
        loop
        autoPlay
      ></video>
      <section className="relative bg-black/50 px-8 w-full h-full">
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-7xl">
          <div className="items-center gap-4 grid grid-cols-1 lg:grid-cols-2">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-5">
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl md:text-left text-center leading-none">
                  Build Your
                  <span className="text-yellow-400"> Tech Career </span>
                  With Our Professional I.T. Courses.
                </h1>
                <p className="text-md text-white md:text-lg md:leading-relaxed md:text-left text-center">
                  Aptech Benin ensures the quality of its training programs
                  through a standardized curriculum that is regularly updated to
                  reflect industry trends and technological advancements.
                </p>
              </div>

              <div className="flex sm:flex-row flex-col gap-4">
                <Button
                  size="lg"
                  className="bg-red-700 hover:bg-yellow-500 font-semibold text-gray-900 hover:text-white animate"
                >
                  <Link href="/courses" className="flex items-center">
                    Explore Courses
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent hover:bg-white border-2 border-white text-white hover:text-gray-700"
                >
                  <Link href="/admissions">Apply Now</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="z-10 relative">
                <img
                  src="/graduate-hero-img-new.webp"
                  alt="Aptech Computer Education hero image"
                  width={600}
                  height={400}
                  className="mx-auto w-full max-w-md h-full -mb-20 sm:mb-0 lg:translate-y-6"
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
