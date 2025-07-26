"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Testimonial Page

const TestimonialSection = () => {
  return (
    <section className="dark:bg-gray-900 md:px-20 py-8 text-gray-900 dark:text-slate-50">
      {/* Section Header */}
      <h2 className="text-3xl text-center px-8 md:px-2">
        Testimonials from APTECH Students
      </h2>

      {/* Carousel Items */}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={3000}
        containerClass="carousel-container p-[50px] max-w-[1208px] mx-auto"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType={undefined}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {TESTIMONIALS.map((testimonial) => (
          <section
            key={testimonial.id}
            className="bg-slate-50 dark:bg-slate-800 mx-2 p-4 border-t-4 border-t-yellow-500 h-full hover:scale-95 transition-all duration-300 cursor-default"
          >
            {/* Top Section of Testimonial */}
            <div className="flex items-center gap-2 mb-4">
              <img
                src={testimonial.image}
                alt="Student Testimonial Image"
                width={60}
                height={60}
                className="rounded-full w-[60px] h-[60px] object-center object-cover"
              />
              <section>
                <h3 className="font-bold text-sm">{testimonial.name}</h3>
                <p className="text-xs">{testimonial.course}</p>
              </section>
            </div>

            {/* Main Testimonial Comment */}
            <p className="md:text-md text-sm">{testimonial.comment}</p>
          </section>
        ))}
      </Carousel>

      {/* Collaboration Banner */}
      <div className="flex flex-col justify-center items-center px-4 md:px-0">
        <h3 className="z-10 mt-4">In Collaboration with</h3>
        <img
          src="/affiliations-aptech-benin-global-brand.webp"
          alt="Aptech is proudly affiliated with international schools, guaranteeing pathways for our students who will like to pursue international degrees."
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

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
