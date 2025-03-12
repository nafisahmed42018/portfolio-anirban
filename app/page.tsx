import Contact from '@/components/home/Contact'
import Hero from '@/components/home/Hero'
import Intro from '@/components/home/Intro'
import RecentWork from '@/components/home/RecentWork'
import Service from '@/components/home/Service'
import SkillChart from '@/components/home/SkillChart'
import Testimonials from '@/components/home/Testimonials'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/Icon-small.png" />
      </Head>
      <main className="pt-[80px] font-[family-name:var(--font-plus-jakarta-sans)]">
        {/* Hero */}
        <Hero />
        {/* Body */}
        <section className="w-full py-16 flex flex-col items-center justify-center gap-[84px]">
          <Intro />
          <Service />
          <SkillChart />
        </section>
        <RecentWork />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
