import Experience from '@/components/about/Experience'
import Hobby from '@/components/about/Hobby'
import Intro from '@/components/about/Intro'
import Journey from '@/components/about/Journey'
import React from 'react'

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <main className="pt-[80px] flex flex-col items-center justify-center ">
      <Intro />
      <Journey />
      <Experience />
      <Hobby />
    </main>
  )
}

export default AboutPage
