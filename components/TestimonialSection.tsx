"use client";

import SimpleTestimonialCarousel from "./ui/SimpleTestimonialCarousel";

// Testimonial Page

const TestimonialSection = () => {
  return (
    <section className="dark:bg-gray-900 md:px-20 py-12 text-gray-900 dark:text-slate-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        {/* <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> */}
        <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Hear from our successful graduates who have transformed their careers
          through our comprehensive IT training programs.
        </p>
      </div>

      {/* Simple Carousel */}
      <div className="mb-12">
        <SimpleTestimonialCarousel
          testimonials={TESTIMONIALS}
          autoPlay={true}
          autoPlaySpeed={6000}
        />
      </div>

      {/* Collaboration Banner */}
      <div className="flex flex-col justify-center items-center px-4 md:px-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          In Collaboration with
        </h3>
        <img
          src="/affiliations-aptech-benin-global-brand.webp"
          alt="Aptech is proudly affiliated with international schools, guaranteeing pathways for our students who will like to pursue international degrees."
          className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;

const TESTIMONIALS = [
  {
    id: 1,
    image: "/testimonials/testimonial-student-1.webp",
    name: "Abu Godswill",
    course: "Web App With Python",
    comment:
      "Being here at APTECH has been so sweet and educative. Aptech is one of the best I.T firm you can ever think of. I have learnt a lot for the past weeks, and enjoy every class.",
  },

  {
    id: 2,
    image: "/testimonials/testimonial-student-2.jpeg",
    name: "Bukola",
    course: "Responsive Web",
    comment:
      "Since I started this program, I have been able to take in new things and it has helped me become a better version of myself",
  },

  {
    id: 3,
    image: "/testimonials/testimonial-student-3.webp",
    name: "Adejonwo Ayomide",
    course: "ADSE",
    comment:
      "Being an adse student at aptech ota has helped me improve my innovation in many fields, and acquainted me with job related skills.",
  },

  {
    id: 4,
    image: "/testimonials/testimonial-student-4.webp",
    name: "Akinoso Israel",
    course: "ADSE",
    comment:
      "Being trained by a team of experts at Aptecch has helped me to grasp the latest technonologies in the I.T industry and as well make me job ready for the I.T. industry.",
  },

  {
    id: 5,
    image: "/testimonials/testimonial-student-5.webp",
    name: "Oguntolu Esther",
    course: "Responsive Web",
    comment:
      "Aptech Ota gave me good a foundation I.T knowlege in programming, web development, database management that prepares me for any industrial work.",
  },

  {
    id: 6,
    image: "/testimonials/testimonial-student-6.jpeg",
    name: "Anthonio Amirat",
    course: "Responsive Web",
    comment:
      "To be better at something, you need the right people and information-based environment. This and more are the reason why I choose Aptech ota.",
  },
];
