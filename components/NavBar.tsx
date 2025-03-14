'use client'
import Link from 'next/link'
import React from 'react'
import NavLogo from './NavLogo'
import { Button } from './ui/button'
import { LucideSquareArrowOutUpRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import NavLink from './NavLink'
type Props = {}

const NavBar = (props: Props) => {
  const router = useRouter()
  return (
    <header
      className={`flex py-4 fixed top-0 w-full z-50 bg-background/95 `}
    >
      <nav className="container flex items-center justify-between gap-10 px-[120px] mx-auto">
        <div>
          <Link href={'/'} className="">
            <NavLogo />
          </Link>
        </div>
        <div className="flex items-center gap-[52px]">
          <div className="text-link flex items-center gap-8">
            <NavLink href='/work'>Work</NavLink>            
            <NavLink href='/about-me'>About Me</NavLink>            
            <Button
              variant={'resume'}
              className="text-base flex items-center gap-2 p-0"
              onClick={() => window.open("https://www.dropbox.com/home/Documents?preview=Resume_Anirban_Tasfin_Azad.pdf")}
            >
              Resume
              <LucideSquareArrowOutUpRight width={20} height={20} />
            </Button>
          </div>
          <Button
            variant={'common'}
            className="xl:flex xl:items-center hidden text-base font-semibold h-10 px-7 "
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
