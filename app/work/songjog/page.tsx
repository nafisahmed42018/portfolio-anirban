import Cover from "@/components/projects/Cover";
import Figure from "@/components/projects/Figure";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectPara from "@/components/projects/ProjectPara";
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
        <ProjectPara title="Problem">
          <p>
          Finding and training caregivers is often a difficult and unstructured process. 
          In Bangladesh, even in cities families struggle to connect with qualified 
          caregivers due to scarcity, while aspiring ones lack accessible training and 
          job opportunities. Especially involvement of third parties & brokers in the 
          market increases costs and reduces transparency, making the bridging even more 
          challenging. Inconsistent skill levels, high turnover rates, and a lack of 
          proper support for both caregivers and seekers further complicate the 
          caregiving landscape.<br />
          </p>
          <div className="pl-[14px] border-l-2 border-[#D8790C]">
            <h5 className=" text-[#D8790C] font-semibold text-xl">
            Without a streamlined platform, families are left to navigate unreliable sources, 
            and potential caregivers lack the necessary guidance to build a stable career.
            </h5>
          </div>
        </ProjectPara>
        <ProjectPara title="Objective">
          <p>
          The app was designed with two main user panels—one for care receivers and another 
          for caregivers. While its primary function was to help book caregiving services, 
          it also encouraged users to learn caregiving skills. With Songjog Foundation’s 
          expertise, the platform provided training, certifications, and real job opportunities, 
          making it easier for aspiring caregivers to build a meaningful career.<br />
          </p>
          <h5 className=" text-monochrome110 font-semibold text-lg">
            Requirements
          </h5>
          <p>
          The app was designed with two main user panels—one for care receivers and another for 
          caregivers. While its primary function was to help book caregiving services, it also 
          encouraged users to learn caregiving skills. With Songjog Foundation’s expertise, the 
          platform provided training, certifications, and real job opportunities, making it easier 
          for aspiring caregivers to build a meaningful career.<br />
          </p>
          <Figure
            url="/songjog/requirement-chart.png"
            width={800}
            height={450}
            alt="requirements"
            title="Requirement chart"
          />
          <p>
          Quite a few features and subscriptions were supposed to be maintained manually. This was 
          due to shortage of server cost and development time. And the design was planned to 
          adhere these boundaries.<br />
          </p>
        </ProjectPara>
        <ProjectPara title="Focus groups">
          <p>
          Before jumping into the research we opted to figure out who our focus groups were. 
          Figuring out various use cases, we thought of quite a few personas and scenarios.<br />
          </p>
          <ul className="list-disc">
            <li>
              <span className="font-medium">Professional Caregivers - </span>
              Nurses, home aides, and personal caregivers.
            </li><li>
              <span className="font-medium">Family Caregivers - </span>
              Relatives providing care for loved ones.
            </li><li>
              <span className="font-medium">Healthcare Providers - </span>
              Doctors, therapists, and case managers.
            </li><li>
              <span className="font-medium">Patients - </span> 
              Individuals who require consistent care and monitoring.
            </li>
          </ul>
        </ProjectPara>
        <ProjectPara title="Research">
          <p>
          For a widespread application, user engagement was a crucial part of the research. Since 
          there was already an existing user base, I had the opportunity to conduct interviews. I 
          started the interview from my own house. And eventually extended It’s spread to a few 
          dedicated users that knew and loved Songjog’s services. Additionally, a quick Reddit 
          post allowed me to gather valuable insights from a global audience, providing a broader 
          perspective on user needs and expectations.<br />
          <br />
          After conducting several moderated interview and survey sessions, we developed an empathy 
          map. Since we had two to three different types of users, we ensured that their key 
          interests and concerns were incorporated. Additionally, we identified their pain points 
          and potential benefits, which we summarized in the Pains & Gains section.<br />
          </p>
          <Figure
            url="/songjog/empathy-map.png"
            width={800}
            height={568}
            alt="requirements"
            title="Empathy map"
          />
          <h5 className=" text-monochrome110 font-semibold text-lg">
            Key insights
          </h5>
          <p>
            After conducting several rounds of surveys, user interviews, and analyzing the data, we 
            identified the following issues preventing users from locating suitable caregivers.
          </p>
        </ProjectPara>
        <ProjectPara title="Define">
          <p>
          Based on the responses and summaries, it was still somewhat unclear how the application 
          would function in practice. Many processes were manually controlled, making an admin panel 
          essential for effective moderation. That’s why, after mapping the Customer Journey, we decided 
          to take it a step further and develop a Service Blueprint to clearly define the interactions, 
          roles, and system dependencies.<br /> 
          </p>
          <Figure
            url="/songjog/service-blueprint.png"
            width={1160}
            height={568}
            alt="service-blueprint"
            title="Service Blueprint"
          />
          <p>
          Throughout the process, we went through multiple iterations as requirements and client expectations 
          evolved. However, once we settled on a concrete solution and shared a sitemap with all stakeholders, 
          it became clear that further complexity would only delay deadlines and increase resource consumption. 
          This realization helped us define the project scope, allowing us to finally conclude the research 
          phase and move forward with the development of the app.<br />
          </p>
        </ProjectPara>
        <ProjectPara title="Design System">
          <p>
          Since the project was government-funded, a significant amount of time was spent on background 
          research and processes. After a month of research and presenting findings to the clients, I 
          sat on the drawing board. I began by establishing the design system, selecting Bright Teal 
          as the primary brand color. This choice was based on its universal association with health 
          and wellness, aligning with the website’s branding concept.<br /> 
          <br />
          The secondary color, Yellow Peach, was chosen as a triadic complementary color to enhance the 
          branding. Additionally, two accent colors were selected to represent the app’s diversity, state 
          indicators, and a contrasting monochrome set for better readability. For typography, I opted for 
          Lexend, a modern and sleek font that ensures clarity and accessibility.<br />
          </p>
          <Figure
            url="/songjog/color-typography.png"
            width={800}
            height={1308}
            alt="color-typography"
            title="Color and Typography"
          />
          <p>
          I chose two types of elevations for this project, ensuring a balanced visual hierarchy. Following 
          standard design practices, a 4px spacing system was implemented for consistency. Additionally, 
          I opted for rounded buttons to create a more approachable and user-friendly interface. Combined 
          with the use of drawn illustrations, these design choices help convey a sense of friendliness and 
          support throughout the app.<br />
          </p>
        </ProjectPara>
      </section>
    </main>
  );
};

export default SongjogWorkPage;
