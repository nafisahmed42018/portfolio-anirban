import Cover from "@/components/projects/Cover";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import React from "react";

type Props = {};
const pageData = {
  title: "Oxfo.tech",
  shortDesc: "Your Full-stack engineering platform.",
  overview:
    "For an independent Team to recognize that they are able to concede and solve a real life problem, is a call to start a platform where they'll be able to showcase their skills and expertise. Team Safewheel had an idea to expand their services to address some of these larger and diverse problem. Thus they started Oxfo, which would serve as a hub for clients to connect with the talented developer. Clients will be able to submit their project requirements and the team will work collaboratively to provide innovative solutions. The platform will also highlight the team's previous successful projects and testimonials from satisfied clients.",
  role: "Product designer/manager",
  duration: "4 weeks",
  client: "Safewheel LTD",
  tools: "Figma, Miro, Zeplin.",
};
const OxfoTechWorkPage = (props: Props) => {
  return (
    <main className="pt-[80px] flex flex-col items-center justify-center font-[family-name:var(--font-plus-jakarta-sans)]">
      <Cover url="/oxfotech/cover.png" alt="oxfotech-cover" />
      <section className="container px-[320px] pt-[80px] pb-[84px] flex flex-col gap-12">
        <ProjectHeader title={pageData.title} shortDesc={pageData.shortDesc} />
        <ProjectInfo
          overview={pageData.overview}
          role={pageData.role}
          duration={pageData.duration}
          client={pageData.client}
          tools={pageData.tools}
        />
      </section>
    </main>
  );
};

export default OxfoTechWorkPage;
