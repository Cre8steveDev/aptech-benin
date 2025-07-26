import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Whatsapp } from "iconsax-reactjs";

// Call To Action Section

const CTASection = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-[rgb(166,0,0)] p-6  md:p-12 h-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="space-y-8">
          {/* Main CTA */}
          <div className="space-y-4">
            <h2 className="font-bold text-white text-xl md:text-3xl">
              Ready to Start Your Tech Journey?
            </h2>

            <p className="text-md text-white md:text-md">
              Join thousands of successful graduates globally who launched their
              careers with Aptech. Start building your future in technology
              today.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
            <Link href="/admissions" className="flex items-center">
              <Button
                size="sm"
                className="bg-yellow-500 hover:bg-yellow-600 px-8 py-4 font-semibold text-gray-900 text-lg hover:scale-90 transition-transform duration-300 cursor-pointer"
              >
                Apply for Admission
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-white px-8 py-4 border-2 border-white text-white hover:!text-red-700 text-lg hover:scale-90 transition-transform duration-300 cursor-pointer"
              >
                Schedule a Visit
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="">
            <p className="mb-4 text-white">
              Have questions? We're here to help!
            </p>
            <div className="flex sm:flex-row flex-col justify-center items-center gap-6 text-blue-100">
              <Link href="https://wa.link/p1ko8b">
                <Button
                  size="md"
                  className="bg-green-600 flex gap-2 hover:bg-transparent hover:border-2 hover:border-white border-2 border-transparent cursor-pointer"
                >
                  <Whatsapp size={24} variant="Bold" /> Chat On WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
