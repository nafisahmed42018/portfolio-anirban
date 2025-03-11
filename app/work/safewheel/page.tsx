import Cover from "@/components/projects/Cover";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import React from "react";

type Props = {};
const pageData = {
  title: "Safewheel Redesign",
  shortDesc: "A wide range of healthcare products at your doorstep!",
  overview:
    "Healthcare is a daunting task. For many, it's difficult to focus on medicene, physicians or even healthy lifestyles especially in Bangladesh. The complexities of the healthcare system, coupled with socio-economic factors, often create barriers to prioritizing one's well-being. But, healthcare is not just about medicine and treatment - it's also about information and connection. That's what safewheel intends to create a super app that connects existing healthcare platforms under one roof, providing users with quick and easy access to the information and services. Safewheel should be caring and more humane.",
  role: "UI/UX designer",
  duration: "4 months + 3 month",
  team: "Graphic Designer, Mobile & Backend Developers, Product Managers, Content Managers.",
  client: "Safewheel LTD",
  tools: "Figma, Miro, Zeplin, Invision, Jira.",
};
const SafewheelWorkPage = (props: Props) => {
  return (
    <main className="pt-[80px] flex flex-col items-center justify-center font-[family-name:var(--font-plus-jakarta-sans)]">
      <Cover url="/safewheel/cover.png" alt="safewheel-cover" />
      <section className="container px-[320px] pt-[80px] pb-[84px] flex flex-col gap-12">
        <ProjectHeader title={pageData.title} shortDesc={pageData.shortDesc} />
        <ProjectInfo
          overview={pageData.overview}
          role={pageData.role}
          duration={pageData.duration}
          team={pageData.team}
          client={pageData.client}
          tools={pageData.tools}
        />
      </section>
    </main>
  );
};

export default SafewheelWorkPage;
