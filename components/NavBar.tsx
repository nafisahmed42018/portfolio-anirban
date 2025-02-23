'use client'
import Link from 'next/link'
import React from 'react'
import NavLogo from './NavLogo'
import { Button } from './ui/button'
import { LucideSquareArrowOutUpRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
type Props = {}

const NavBar = (props: Props) => {
  const router = useRouter()
  return (
    <header
      className={`flex py-4 shadow-md fixed top-0 w-full z-10 bg-background/95 font-[family-name:var(--font-plus-jakarta-sans)]`}
    >
      <nav className="flex items-center justify-between gap-10 px-[120px] max-w-full w-full mx-auto">
        <div>
          <Link href={'/'} className="">
            <NavLogo />
          </Link>
        </div>
        <div className="flex items-center gap-[52px]">
          <div className="text-link flex items-center gap-8">
            <Link href={'/my-approach'}>My Approach</Link>
            <Link href={'/work'}>Work</Link>
            <Link href={'/about-me'}>About me</Link>
            <Button
              variant={'resume'}
              className="text-base flex items-center gap-2 p-0"
            >
              Resume
              <LucideSquareArrowOutUpRight width={20} height={20} />
            </Button>
          </div>
          <Button
            variant={'common'}
            className="xl:flex hidden px-[24px] py-[10px]"
            onClick={() => router.push('/contact')}
          >
            Let's Connect
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
