import React from 'react'
import WorkCard from './WorkCard'

type Props = {}

const workData = [
  {
    workTitle: 'invoicegenerator.biz',
    workHead:
      'A Website and Dashboard For maintaining your invoices and inventories',
    clientName: 'SOFTEKO',
    workDesc:
      'This victory will forever stand as a testament to the power of teamwork, the strength of character, and the universal language of sport that transcends boundaries and inspires millions.',
    projectType: 'Website/SAAS',
    workImageURL: '/work-invoicegen.png',
  },
  {
    workTitle: 'Songjog Caregiver',
    workHead:
      'AN Application to Find Helpful Caregivers And a way to Empower them',
    clientName: 'Sonjog Foundation',
    workDesc:
      'This victory will forever stand as a testament to the power of teamwork, the strength of character, and the universal language of sport that transcends boundaries and inspires millions.',
    projectType: 'App/SAAS',
    workImageURL: '/work-songjog.png',
  },
  {
    workTitle: 'Oxfo.com',
    workHead: 'Website For A Dev-shop For All Your Digital Business Ideas',
    clientName: 'Safewheel LTD.',
    workDesc:
      'This victory will forever stand as a testament to the power of teamwork, the strength of character, and the universal language of sport that transcends boundaries and inspires millions.',
    projectType: 'Website',
    workImageURL: '/work-oxfo.png',
  },
  {
    workTitle: 'Beditor',
    workHead: 'A Customizable Software For Casual and Creative Writing',
    clientName: 'Safewheel LTD.',
    workDesc:
      'This victory will forever stand as a testament to the power of teamwork, the strength of character, and the universal language of sport that transcends boundaries and inspires millions.',
    projectType: 'Desktop Application',
    workImageURL: '/work-beditor.png',
  },
  {
    workTitle: 'Safewheel Redesign',
    workHead: 'Your Go-to-go Telemedicine & Healthcare Services ',
    clientName: 'Safewheel LTD.',
    workDesc:
      'This victory will forever stand as a testament to the power of teamwork, the strength of character, and the universal language of sport that transcends boundaries and inspires millions.',
    projectType: 'Website & Mobile App',
    workImageURL: '/work-safewheel.png',
  },
]

const WorkContainer = (props: Props) => {
  return (
    <section className="w-full bg-monochrome110 text-monochrome00 ">
      <div className="container p-[120px] flex flex-col items-center justify-center gap-[180px]">
        {workData.map((work) => (
          <WorkCard
            workTitle={work.workTitle}
            workHead={work.workHead}
            clientName={work.clientName}
            workDesc={work.workDesc}
            projectType={work.projectType}
            workImageURL={work.workImageURL}
          />
        ))}
      </div>
    </section>
  )
}

export default WorkContainer
