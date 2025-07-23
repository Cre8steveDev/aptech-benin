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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Aptech Computer Education
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Empowering minds, building futures, and creating technology leaders
            since our inception in Benin City.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Aptech Computer Education has been at the forefront of technology
              education in Benin City, Edo State, for over a decade. Founded
              with the vision of bridging the gap between academic learning and
              industry requirements, we have consistently delivered quality
              education that prepares students for successful careers in the
              technology sector.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our journey began with a simple belief: that everyone deserves
              access to quality technology education that can transform their
              lives and open doors to exciting career opportunities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To provide world-class computer education and training that
              empowers individuals with the skills, knowledge, and confidence
              needed to excel in the rapidly evolving technology landscape. We
              are committed to fostering innovation, creativity, and lifelong
              learning while building a strong foundation for our students'
              professional success.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To be the leading computer education institute in West Africa,
              recognized for excellence in technology training, innovation in
              education delivery, and the success of our graduates in the global
              technology workforce.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Expert Faculty
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our instructors are industry professionals with years of
                  experience and a passion for teaching.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Modern Facilities
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  State-of-the-art computer labs and equipment to provide
                  hands-on learning experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Industry Connections
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Strong partnerships with leading technology companies for
                  internships and job placements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Proven Track Record
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Over 500 successful graduates working in leading technology
                  companies worldwide.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
