"use client";

interface ProjectParaProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ProjectPara: React.FC<ProjectParaProps> = ({
  title,
  children,
 
}) => {
  return (
    <div className="flex flex-col gap-4 items-start justify-center text-lg leading-[1.5] text-[#474747]">
      <h3 className="!text-2xl font-semibold text-matcha60">{title}</h3>
      {children}
    </div>
  );
};

export default ProjectPara;
