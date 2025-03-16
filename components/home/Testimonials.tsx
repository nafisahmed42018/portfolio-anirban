import React from "react";
import TestimonialQuote from "./TestimonialQuote";
import Image from "next/image";

type Props = {};

const testimonials = [
  {
    desc: "I am very happy with the work that Anirban Has done in Safewheel. I love the design, and the understanding of technology could be a huge asset for any Startup. He really brings out a great dynamics within any team composition.",
    url: "/testimonials/Pieter_profile1.png",
    author: "Faysal Islam",
    designation: "Co-Founder",
    company: "Safewheel",
  },
  {
    desc: "Anirban is a sincere and responsive person when it comes to his responsibilities. I used to work with him during our internships. I was amazed how well he is able to grasp a user story, simply by just looking at the products business model. A 10/10 guy to work with.",
    url: "/testimonials/Pieter_profile2.png",
    author: "Najish Mahmood",
    designation: "Software Engineer",
    company: "TherapBD",
  },
];

const Testimonials = (props: Props) => {
  return (
    <section className="w-full bg-monochrome110 text-monochrome00">
      <div className=" container relative z-10">
        <div className=" absolute px-[160px] grid grid-cols-7 h-full w-full -z-10">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="custom-border" />
          ))}
          <div className="custom-border border-r" />
        </div>
        <div className="flex flex-col gap-12 items-center justify-center px-[120px] pt-[60px] pb-20 ">
          {/* Title */}
          <h3 className="self-start font-semibold text-[40px] leading-[50.4px]">
            Testimonials
          </h3>
          {/* Content Box */}
          <div className="flex items-center justify-center xl:flex-nowrap flex-wrap gap-9">
            {testimonials.map((testimonial, index) => (
              // Content Card
              <div
                key={index}
                className=" flex flex-col items-start justify-center gap-6 border-none px-[42px] py-[51px] bg-monochrome90 relative w-full"
              >
                <TestimonialQuote styleProps={"absolute top-0 left-0"} />
                <p className=" font-medium text-xl">{testimonial.desc}</p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full">
                    <Image
                      src={testimonial.url}
                      width={64}
                      height={64}
                      alt={testimonial.author}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h4 className="text-white text-2xl font-semibold">
                      {testimonial.author}
                    </h4>
                    <p className="text-[#CACACA] text-xl font-medium">
                      {testimonial.designation},{" "}
                      <span>{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
