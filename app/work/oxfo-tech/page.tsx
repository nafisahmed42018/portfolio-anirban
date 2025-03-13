import Cover from "@/components/projects/Cover";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectPara from "@/components/projects/ProjectPara";
import Figure from "@/components/projects/Figure";
import React from "react";

type Props = {};
const pageData = {
  title: "Oxfo.tech",
  shortDesc: "Your Full-stack engineering platform.",
  overview:
    "For an independent Team to recognize that they are able to concede and solve a real life problem, is a call to start a platform where they'll be able to showcase their skills and expertise. Team Safewheel had an idea to expand their services to address some of these larger and diverse problem. Thus they started Oxfo, which would serve as a hub for clients to connect with the talented developer. Clients will be able to submit their project requirements and the team will work collaboratively to provide innovative solutions. The platform will also highlight the team's previous successful projects and testimonials from satisfied clients.",
  role: "Product designer/ manager",
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
        <ProjectPara title="Requirement Analysis">
          <p>
          Now unlike any other project I've previously worked on, Oxfo is led to be 
          a solution provider. Let's zoom into that for a bit. It's a platform that 
          is run by the projects that clients want them to build. It can be as small 
          as a generic media graphic, or as large as a giant scale E-commerce with 
          inventory management. As there were a plethora of web based services associated 
          with it, you bet the end users are going to be diverse.<br />
          <br />
          For that we would require a much more eye-pleasing and bouncy, colorful 
          design with vibrant and contrasted elements that would help any user feel welcome.<br />
          </p>
        </ProjectPara>
      </section>
    </main>
  );
};

export default OxfoTechWorkPage;
