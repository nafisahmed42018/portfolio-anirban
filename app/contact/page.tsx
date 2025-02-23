import ContactBody from '@/components/contact/ContactBody'
import React from 'react'

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <main className="pt-[80px] font-[family-name:var(--font-plus-jakarta-sans)]">
      <ContactBody />
    </main>
  )
}

export default ContactPage
