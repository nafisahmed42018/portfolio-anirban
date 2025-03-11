"use client";

interface ProjectParaProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ProjectPara: React.FC<ProjectParaProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div className="flex flex-col gap-4 items-start justify-center text-[#474747]">
      <h3 className="text-3xl font-semibold text-matcha60">{title}</h3>
      {children}
    </div>
  );
};

export default ProjectPara;
