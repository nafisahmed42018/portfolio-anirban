import React from "react";
import WorkCard from "./WorkCard";

type Props = {};

const workData = [
  {
    workTitle: "invoicegenerator.biz",
    workHead:
      "A Website and Dashboard For maintaining your invoices and inventories",
    clientName: "SOFTEKO",
    workDesc:
      "invoicegenerator is an EMD website for Multiple purpose of invoices with a dashboard for management and shelving.",
    projectType: "Website/SAAS",
    workImageURL: "/work-invoicegen.png",
    href: "/invoice-generator",
  },
  {
    workTitle: "Songjog Caregiver",
    workHead:
      "AN Application to Find Helpful Caregivers And a way to Empower them",
    clientName: "Sonjog Foundation",
    workDesc:
      "Songjog Caregiver is a platform that connects care receivers with qualified caregivers, offering features like caregiver selection, booking appointments and, customized care plans.",
    projectType: "App/SAAS",
    workImageURL: "/work-songjog.png",
    href: "/songjog",
  },
  {
    workTitle: "Oxfo.com",
    workHead: "Website For A Dev-shop For All Your Digital Business Ideas",
    clientName: "Safewheel LTD.",
    workDesc:
      "Oxfo is a remotely worked full stack engineering platform who brings real world business and technical ideas into life.",
    projectType: "Website",
    workImageURL: "/work-oxfo.png",
    href: "/oxfo-tech",
  },
  {
    workTitle: "Beditor",
    workHead: "A Customizable Software For Casual and Creative Writing",
    clientName: "Safewheel LTD.",
    workDesc:
      "A user friendly minimal writing tool That I have worked and designed for casual text documents and literature.",
    projectType: "Desktop Application",
    workImageURL: "/work-beditor.png",
    href: "/beditor",
  },
  {
    workTitle: "Safewheel Redesign",
    workHead: "Your Go-to-go Telemedicine & Healthcare Services ",
    clientName: "Safewheel LTD.",
    workDesc:
      "Safewheel is a healthcare E-commerce platform which cares about more than just products. It broadens to encompass a knowledge ecosystem and community.",
    projectType: "Website & Mobile App",
    workImageURL: "/work-safewheel.png",
    href: "/safewheel",
  },
];

const WorkContainer = (props: Props) => {
  return (
    <section className="w-full bg-monochrome110 text-monochrome00 ">
      <div className="container relative z-10">
        <div className=" absolute px-[160px] grid grid-cols-7 h-full w-full -z-10">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="custom-border" />
          ))}
          <div className="custom-border border-r" />
        </div>
        <div className="p-[120px] flex flex-col items-center justify-center gap-[180px]">
          {workData.map((work) => (
            <WorkCard
              workTitle={work.workTitle}
              workHead={work.workHead}
              clientName={work.clientName}
              workDesc={work.workDesc}
              projectType={work.projectType}
              workImageURL={work.workImageURL}
              href={work.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkContainer;
