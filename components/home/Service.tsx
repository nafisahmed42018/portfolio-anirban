import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { LucideArrowRight } from 'lucide-react'

type Props = {}

const services = [
  {
    url: '/Lightning.png',
    title: 'Strategy and Band Research',
    desc: 'Understand the market, define the audience & ideate solutions.',
    buttonText: 'Chat with me',
  },
  {
    url: '/box.png',
    title: 'Product Design',
    desc: 'Lets talk about project ideas and develop a prototype.',
    buttonText: 'Let’s work together',
  },
  {
    url: '/folder-code.png',
    title: 'Development',
    desc: 'Sharing handoffs and insights working in a diverse team.',
    buttonText: 'Hire me',
  },
]

const Service = (props: Props) => {
  return (
    <section className="container px-[120px] flex flex-col gap-10 items-start justify-center">
      {/* Section Title */}
      <h2 className=" font-medium text-4xl leading-[45.3px] text-monochrome90">
        3 ways I can help you
      </h2>
      {/* Service Container */}
      <div className="flex items-center justify-between gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className=" p-5 flex flex-col gap-4 items-start justify-center bg-[#F1E5D1]"
          >
            <div className="flex items-center justify-between gap-3">
              <Image
                src={service.url}
                height={24}
                width={24}
                alt="service-icon"
              />
              <h4 className=" text-base leading-[20.1px] font-normal text-[#5B5B5B]">
                {service.title}
              </h4>
            </div>
            <p className=" font-normal text-[28px] leading-[35.3px] text-monochrome90 h-[140px]">
              {service.desc}
            </p>
            <div className="flex items-center gap-3 text-monochrome90 group">
              <Button
                variant={'link'}
                className=" font-medium text-xl leading-[26px] p-0 text-monochrome110"
              >
                {service.buttonText}
              </Button>
              <LucideArrowRight
                width={20}
                height={20}
                className=" mt-1 group-hover:translate-x-1 group-hover:animate duration-500 text-monochrome110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service
