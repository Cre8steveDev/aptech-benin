"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./testimonial-carousel.css";

interface TestimonialCarouselProps {
  testimonials: Array<{
    id: number;
    image: string;
    name: string;
    course: string;
    comment: string;
  }>;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
}

const TestimonialCarousel = ({
  testimonials,
  autoPlay = true,
  autoPlaySpeed = 5000,
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Desktop: 3 items
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(1); // Mobile: 1 item
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / itemsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
    }, autoPlaySpeed);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlaySpeed, totalPages]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get visible testimonials for current page
  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * itemsPerView;
    return testimonials.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      {/* Carousel Container */}
      <div
        className="rounded-lg overflow-hidden"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(autoPlay)}
      >
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 ease-in-out">
          {getVisibleTestimonials().map((testimonial) => (
            <div key={`${testimonial.id}-${currentIndex}`} className="w-full">
              <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl p-6 border-yellow-500 border-t-4 h-full transition-all duration-300">
                {/* Student Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} - Aptech Student`}
                      className="border-4 border-yellow-200 dark:border-yellow-600 rounded-full w-16 h-16 object-cover"
                      loading="lazy"
                    />
                    <div className="-right-1 -bottom-1 absolute flex justify-center items-center bg-green-500 border-2 border-white dark:border-gray-800 rounded-full w-6 h-6">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="font-medium text-blue-600 dark:text-blue-400 text-sm">
                      {testimonial.course}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <p className="pl-6 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center items-center mt-3 pt-3 border-gray-200 dark:border-gray-700 border-t">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Only show if more than one page */}
      {totalPages > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="top-1/2 left-0 z-10 absolute bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-lg p-3 border border-gray-200 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 dark:text-gray-300 hover:scale-110 transition-all -translate-y-1/2 duration-200"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="top-1/2 right-0 z-10 absolute bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-lg p-3 border border-gray-200 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 dark:text-gray-300 hover:scale-110 transition-all -translate-y-1/2 duration-200"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots Indicator - Only show if more than one page */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                index === currentIndex
                  ? "bg-yellow-500 scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-yellow-300 dark:hover:bg-yellow-700"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Play/Pause Button - Only show if more than one page */}
      {totalPages > 1 && (
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="right-4 bottom-4 z-10 absolute bg-black/50 hover:bg-black/70 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white transition-all duration-200"
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default TestimonialCarousel;
