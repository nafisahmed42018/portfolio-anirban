import Cover from "@/components/projects/Cover";
import Figure from "@/components/projects/Figure";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectPara from "@/components/projects/ProjectPara";
import React from "react";

type Props = {};
const pageData = {
  title: "Invoicegenerator.biz",
  shortDesc: "A Text editor for casual writing exercise.",
  overview:
    "An invoice generator simplifies creating and managing invoices, making the process fast and user-friendly. And at times with all the products and features, it can be very complicated. This case study highlights our research and design approach, focusing on ease of use and efficiency to meet user needs effectively.",
  role: "Sr. UI/UX designer",
  duration: "6 weeks",
  client: "SOFTEKO",
  tools: "Figma, Adobe CC, Miro, Whimsical, Zeplin.",
};
const InvoiceGenWorkPage = (props: Props) => {
  return (
    <main className="pt-[80px] flex flex-col items-center justify-center font-[family-name:var(--font-plus-jakarta-sans)]">
      <Cover url="/invoicegen/cover.png" alt="invoicegen-cover" />
      <section className="container px-[320px] pt-[80px] pb-[84px] flex flex-col gap-12">
        <ProjectHeader title={pageData.title} shortDesc={pageData.shortDesc} />
        <ProjectInfo
          overview={pageData.overview}
          role={pageData.role}
          duration={pageData.duration}
          client={pageData.client}
          tools={pageData.tools}
        />
        <ProjectPara title="Goals">
          <p>
            Our goal was to efficiently let business owners manage their sales
            and customers and achieve a complete oversight on their businesses.
            We aimed to simplify invoicing and transaction tracking, making it
            easier to monitor cash flow and business performance. By integrating
            customer management, businesses can keep records of client
            interactions and payment histories. The inventory system ensures
            better stock control, reducing errors and improving efficiency.
            Overall, the purpose was to create a seamless system that helps
            businesses stay organized, make informed decisions, and save time on
            administrative tasks.
          </p>
        </ProjectPara>
        <ProjectPara title="Problem">
          <p>
            Problem with the invoice generators in market is that they are
            single purpose, hence the users jump from one to another for their
            specific requirements in invoices. What we though out is to make the
            app more general purpose. Letting users insert and manipulate any
            information that they find necessary to do so. <br /> <br />
            Another issue we noticed is that businesses struggle to keep track
            of their sales and inventory. Limited customization options make it
            harder for users to create invoices that fit their specific needs.
            On top of that, poor data organization and transaction tracking in
            existing solutions make it difficult to get a clear financial
            picture. These gaps not only add unnecessary complexity but also
            waste valuable time—problems we aimed to solve.
          </p>
        </ProjectPara>
        <ProjectPara title="Process">
          <p>
            A double-diamond approach was chosen throughout the design phases.
            It is because Ideas had to be explored for covering the vast amount
            of general purpose users and their use cases. Alongside that the
            proper analyses that a user may require can be rather complicated.
            Which is why, a divergent approaches gave us more room to
            incorporate probable solutions for different business perspectives.
          </p>
          <Figure
            url="/invoicegen/design-timeline.png"
            width={800}
            height={475}
            alt="design-timeline"
            title="Design Timeline"
          />
        </ProjectPara>
        <ProjectPara title="Research">
          <p>
            The background product research was primarily conducted by the
            product team at SOFTEKO. Since this was an Exact Match Domain (EMD)
            web app, an SEO-based approach was incorporated. The team gathered
            resources such as competitors, keywords, and frameworks to generate
            a topical map for the project. They then assessed user needs to form
            a basic idea of the MVP. The details of the research work can be
            found in the spreadsheet below. <br />
            <br />{" "}
            <a
              href="https://docs.google.com/spreadsheets/u/0/d/15Ji6sK1GESlHy4mnnVsd0QjdGCQWOA-Rs-SxwjTAuGI/htmlview#"
              target="_blank"
              rel="noopener noreferrer"
              className=" border-b border-b-[#D8790C] text-[#D8790C]"
            >
              Invoicegenerator research
            </a>
            <br />
            <br /> From my end, I had the opportunity to assess the requirements
            and collaborate with the product analysis team to create a Product
            Requirements Document (PRD) for the project. This process helped me
            gather features and distribute my work efficiently. By creating a
            persona, I analyzed a business's sales and their impact on inventory
            stocks. Later, I simulated a Customer Journey Map (CJM) to identify
            shelving problems. <br />
            <br />
            <a
              href="https://docs.google.com/document/d/1yGzaTWkCrTA7UI67ajJTIBSF6KYQh8pOo4PQmPjyPu8/edit?tab=t.0#heading=h.4sh2g3a76u2n"
              target="_blank"
              rel="noopener noreferrer"
              className=" border-b border-b-[#D8790C] text-[#D8790C]"
            >
              Invoicegenerator PRD
            </a>
          </p>
          <Figure
            url="/invoicegen/personas.png"
            width={800}
            height={670}
            alt="personas"
            title="One of the few personas"
          />
        </ProjectPara>
        <ProjectPara title="Design System Kit">
          <Figure
            url="/invoicegen/color-palette.png"
            width={800}
            height={429}
            alt="color-palette"
            title="Color Palette"
          />
          <Figure
            url="/invoicegen/grid-systems.png"
            width={800}
            height={752}
            alt="grid-systems"
            title="grid-systems"
          />
          <Figure
            url="/invoicegen/type-scales.png"
            width={800}
            height={500}
            alt="type-scales"
            title="Type Scales"
          />
        </ProjectPara>
        <ProjectPara title="Information Architecture">
          <Figure
            url="/invoicegen/Information-architecture.png"
            width={800}
            height={1150}
            alt="Information-architecture"
            title="User flow"
          />
        </ProjectPara>
        <ProjectPara title="Wireframe">
          <Figure
            url="/invoicegen/wireframe.png"
            width={1000}
            height={820}
            alt="wireframe"
            title="Mid level wireframe"
          />
        </ProjectPara>
        <ProjectPara title="Design Breakdown">
          <Figure
            url="/invoicegen/tool-page.png"
            width={800}
            height={1078}
            alt="tool-page"
            title="Main Tool Page"
          />
          <Figure
            url="/invoicegen/dashboard-pages.png"
            width={800}
            height={466}
            alt="dashboard-pages"
            title="Dashboard Pages"
          />
          <Figure
            url="/invoicegen/sticker-sheet.png"
            width={800}
            height={318}
            alt="sticker-sheet"
            title="Sticker Sheet"
          />
          <Figure
            url="/invoicegen/invoice-templates.png"
            width={1000}
            height={1672}
            alt="invoice-templates"
            title="invoice-templates"
          />
        </ProjectPara>
      </section>
    </main>
  );
};

export default InvoiceGenWorkPage;
