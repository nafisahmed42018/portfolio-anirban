import React from 'react'
import { Button } from '../ui/button'
import { LucideMail } from 'lucide-react'
import HighFive from './HighFive'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section className="w-full bg-matchaBad text-monochrome00 rounded-tr-[60px] rounded-tl-[60px]">
      <div className="container px-[120px] py-[124px] flex flex-col items-center justify-center gap-[52px]">
        {/* Graphic */}
        <div className="h-[180px] w-[180px] rounded-full bg-monochrome00 relative">
          <HighFive
            styleProps={
              'absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            }
          />
        </div>
        {/* Text */}
        <h3 className="text-5xl text-center text-monochrome90 font-semibold leading-[60.5px]">
          Tell me about your
          <br />
          <span className=" text-matchaBase">Next project</span>
        </h3>
        {/* Buttons */}
        <div className=" flex items-center justify-center gap-8 leading-[22.7px]">
          <Button className="flex items-center gap-5 rounded-none px-7 h-12 font-medium text-lg text-monochrome00 bg-monochrome90 hover:text-monochrome90 hover:bg-monochrome00">
            <LucideMail className="!size-6" />
            <p>Email Me</p>
          </Button>
          <Button className="rounded-none px-7 h-12 font-medium text-lg text-monochrome90 bg-monochrome00 border-[1.5px] border-monochrome90 hover:text-monochrome00 hover:bg-monochrome90">
            Direct Message
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Contact
