import React from "react";
import ExperienceJob from "./ExperienceJob";
import ExperienceEducation from "./ExperienceEducation";
import ExperienceSkill from "./ExperienceSkill";



const Experience = () => {
  return (
    <section className="w-full">
      <div className="container px-[120px] pt-[80px] pb-[108px] flex flex-col items-start justify-center gap-[84px]">
        {/* Experience */}
        <div className="w-full flex flex-col items-start justify-center gap-12">
          {/* Experience Heading */}
          <div className=" flex flex-col gap-3">
            <div className=" flex items-center justify-start gap-2">
              <div className="max-w-7 w-full h-7 relative">
                <div className=" w-2 h-2 rounded-full bg-monochrome90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"></div>
                <div className="w-7 h-7 rounded-full bg-matchaBad absolute top-0 left-0 animate-scaleFade"></div>
              </div>
              <h4 className=" font-medium text-lg leading-[24.3px] text-[#383838]">
                Experiences
              </h4>
            </div>
            <h2 className=" w-full max-w-[452px] font-medium text-[48px] leading-[60.48px] text-black">
              Explore My Journey Into Design
            </h2>
          </div>
          {/* Experience Body */}
          <ExperienceJob />
        </div>
        {/* Education & Skill */}
        <div className=" w-full flex items-center justify-between">
          <ExperienceEducation />
          <ExperienceSkill />
        </div>
      </div>
    </section>
  );
};

export default Experience;
