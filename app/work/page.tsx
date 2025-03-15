import WorkContainer from '@/components/work/WorkContainer'
import WorkHeader from '@/components/work/WorkHeader'
import React from 'react'

type Props = {}

const WorkPage = (props: Props) => {
  return (
    <main className="pt-[80px] flex flex-col items-center justify-center ">
      <WorkHeader />
      <WorkContainer />
    </main>
  )
}

export default WorkPage
