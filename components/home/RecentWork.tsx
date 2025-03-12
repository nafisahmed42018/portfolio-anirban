import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

type Props = {}

const works = [
  {
    url: '/work-invoicegen.png',
    name: 'invoicegenerator.biz',
    type: 'Website/SaaS',
    year: '2024',
    description:
      'This victory will forever stand as a testament to the power of teamwork, the strength of character, and the universal language of sport that transcends boundaries and inspires millions.',
  },
  {
    url: '/home-recent-works-2.png',
    name: 'Songjog Caregiver',
    type: 'App/SaaS',
    year: '2023',
    description:
      'Songjog Caregiver is a platform that connects care receivers with qualified caregivers, offering features like caregiver selection, booking appointments and, customized care plans.',
  },
]

const RecentWork = (props: Props) => {
  return (
    <section className="w-full bg-monochrome110 text-monochrome00 ">
      <div className="container flex flex-col items-center gap-16 px-[120px] py-[60px]">
        {/* Title */}
        <h2 className=" self-start font-semibold text-[64px] leading-[80.6px]">
          My recent works
        </h2>
        {/* Works */}
        <div className="flex items-center justify-between gap-10 w-full">
          {works.map((work) => (
            <div
              key={work.name}
              className="flex flex-col items-center justify-start gap-6 max-w-[50%]"
            >
              <Image src={work.url} width={580} height={435} alt={work.name} />
              <div className="flex items-center justify-between w-full">
                <h4 className="text-[28px] leading-[37.8px] font-medium">
                  {work.name}
                </h4>
                <div className="flex items-center gap-3 text-xl font-medium">
                  <div className="px-4 py-1 border-2 border-monochrome00 rounded-[30px] text-monochrome00">
                    <p className='text-[20px]'>{work.type}</p>
                  </div>
                  <div className="px-4 py-1 border-2 border-monochrome00 bg-monochrome00 rounded-[30px] text-monochrome90">
                    <p className='text-[20px]'>{work.year}</p>
                  </div>
                </div>
              </div>
              <p className="w-full text-lg font-medium">{work.description}</p>
            </div>
          ))}
        </div>
        {/* Button */}
        <Button className=" w-fit h-14 px-9 py-4 text-lg font-semibold bg-transparent border-monochrome00 border-2 rounded-none hover:bg-monochrome00 hover:text-monochrome90">
          VIEW MORE
        </Button>
      </div>
    </section>
  )
}

export default RecentWork
