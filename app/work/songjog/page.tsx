import Cover from "@/components/projects/Cover";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import React from "react";

type Props = {};
const pageData = {
  title: "Songjog Caregiver",
  shortDesc: "A junction to take care of your needs & Loved ones.",
  overview:
    "Taking care of a loved one or managing multiple patients can be overwhelming. We struggle with keeping track of medications, appointments, and daily tasks, often leading to stress and missed care. In Bangladesh, connecting to suitable & reliable caregivers can be such a daunting task. The Caregiver App was created to make life easier for both family and professional caregivers. Inspired by real experiences, it aims to simplify care by helping families find qualified caregivers while also providing training and resources for those who want to enter the field. By combining education and employment opportunities in one platform, the app makes caregiving more accessible, professional, and rewarding for everyone involved.",
  role: "Product designer",
  duration: "2 months",
  client: "Songjog Foundation",
  tools: "Figma, Protopie, Miro, Zeplin, Jira",
};
const SongjogWorkPage = (props: Props) => {
  return (
    <main className="pt-[80px] flex flex-col items-center justify-center font-[family-name:var(--font-plus-jakarta-sans)]">
      <Cover url="/songjog/cover.png" alt="songjog-cover" />
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

export default SongjogWorkPage;
