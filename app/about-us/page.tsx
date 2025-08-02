import UKBanner from "@/components/UKBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Aptech Computer Education - our mission, vision, and commitment to excellence in technology education in Benin City, Edo State.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-900 hero-bg-about py-20 bg-blend-overlay">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Aptech Computer Education Benin
          </h1>
          <p className="text-sm md:text-lg text-blue-100 max-w-xl mx-auto">
            Empowering minds, building futures, and creating technology leaders.
            Unleash your potential with our career courses.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Established in 1986, Aptech is a global leader in education,
              having trained over 7 million students in 40 countries across 5
              continents. With an updated curriculum, certified faculty and
              world-class infrastructure, Aptech has consistently offered
              industry-relevant training and education for over 35 years. Aptech
              has played an integral role in enhancing minds and building
              careers of students across the world. A number of international
              accolades and awards are a testament to this excellence in
              education.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our journey began with a simple belief: that everyone deserves
              access to quality technology education that can transform their
              lives and open doors to exciting career opportunities.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Aptech Computer Education Benin, came into being when Hansfelz
              Technology Limited acquired the ICT Educational franchise from
              Aptech Computer Education, Mumbai India.
            </p>
          </section>

          <section className="mb-12">
            <img
              src="/aptech-benin-building-small.webp"
              alt="Aptech Benin Computer Education"
              title="Aptech Computer Education Benin City"
              className="rounded-md w-full"
              loading="lazy"
            />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Alliances
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Hansfelz inculcates strict adherence to policies, procedures and
              high standards on every task whose overall effect will result to
              quality and guarantee job satisfaction at final delivery point.Our
              students are trained to compete with other Aptech Centers (about
              1,400 centers worldwide) as well as International
              students/graduates from other elite Universities.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
              Aptech Computer Education, Benin has alliance with Middlesex
              University as well as Portsmouth University, London, United
              Kingdom. To expatiate further, our students after 24 months
              programme in Advanced Diploma in Software Engineering (ADSE) will
              merit a full credit transfer to either Middlesex or Portsmouth
              Universities in the UK to start in the final year and after 12
              months, graduates in Software engineering with a Bachelor of
              Science (BSC).
            </p>

            <div className="">
              <img
                src="/aptech-students-tech-wiz.webp"
                alt="Aptech Benin Computer Education"
                title="Aptech Computer Education Benin City"
                className="rounded-md mt-5 w-full"
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </div>

      {/* UK Session */}
      <UKBanner />
    </div>
  );
}
