import React from 'react'

type ProjectHeaderProps = {
    title: string
    shortDesc: string
}

const ProjectHeader = ({title,shortDesc}: ProjectHeaderProps) => {
  return (
    <div className=' flex flex-col gap-1'>
        <div className="flex items-center gap-2">
            {/* Pulse Animation */}
            <div className="w-7 h-7 relative -ml-2">
              <div className=" w-2 h-2 rounded-full bg-monochrome90 absolute top-1/2 2xl:left-1/2  left-[90%] -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="w-7 h-7 rounded-full bg-matchaBad absolute top-0 left-0 animate-scaleFade"></div>
            </div>
            <p className=" font-medium text-lg leading-[21.6px]">
              Project Title
            </p>
        </div>
        <h2 className=' text-[48px] font-medium tracking-normal text-monochrome110'>{title}</h2>
        <h4 className='font-medium text-lg text-[#636363]'>{shortDesc}</h4>
    </div>
  )
}

export default ProjectHeader