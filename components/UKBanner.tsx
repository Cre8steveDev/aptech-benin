import React from "react";
import CTASection from "./CTASection";

const UKBanner = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse justify-center items-center bg-[rgb(166,0,0)]">
      <div className="w-full">
        <CTASection />
      </div>
      {/* Big Banner */}
      <div className="w-full">
        <img
          className=""
          src="/uk-banner.jpg"
          alt="Study Abroad with an APTECH Advanced Diploma in Software Engineering (ADSE)"
        />
      </div>
    </section>
  );
};

export default UKBanner;
