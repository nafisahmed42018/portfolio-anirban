'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  const pathname = usePathname()

  const defaultPages = ['/', '/about-me', '/my-approach', '/work']
  const defaultStyle = 'bg-monochrome110 text-monochrome00'
  return (
    <footer
      className={`px-[120px] pt-[84px] pb-[56px]  font-[family-name:var(--font-plus-jakarta-sans)] ${
        defaultPages.includes(pathname)
          ? 'bg-monochrome00 text-monochrome90'
          : defaultStyle
      }`}
    >
      <div className="container flex flex-col gap-10">
        {/* Top - Salutaions */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[10px] font-semibold text-5xl">
            <div className="flex items-center justify-start gap-6">
              {' '}
              <div className="w-[60px] h-[60px] rounded-full">
                <Image src='/testimonials/Pieter_profile3.png' width={64} height={64} alt='Anirban'/>
              </div>
              <p className="">Thank You</p>
            </div>
            <div>
              <p
                className={` ${
                  defaultPages.includes(pathname)
                    ? 'text-matchaBase'
                    : 'text-matcha20'
                }`}
              >
                for stopping by
              </p>
            </div>
          </div>
          <div
            className={`flex flex-col items-end font-medium text-xl  gap-6 
                defaultPages.includes(pathname)
                  ? 'text-monochrome00'
                  : 'text-monochrome90'
              }`}
          >
            <Link href={'/'}>Back to top</Link>
            <Link href={'/'}>Writeups</Link>
            <Link href={'/'}>Resume</Link>
          </div>
        </div>
        {/* Horizontal Line */}
        <div className="w-full ">
          <hr className="bg-[#6B6B6B] h-[1px]" />
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-start gap-10 ">
          <Button
            variant={'common'}
            className=" text-lg font-semibold px-[30px] py-[17px]"
          >
            {'anirban.tasfin.azad@gmail.com'}
          </Button>
          <Button
            variant={'common'}
            className="text-[18px] font-semibold px-[30px] py-[17px]"
          >{`+880 192 621 4838`}</Button>
        </div>
        {/* Bottom - Copyright & Socials */}
        <div className="flex items-center justify-between mt-5 font-semibold">
          <div className="flex flex-col items-start justify-start gap-4">
            <div
              className={`text-xl  ${
                defaultPages.includes(pathname)
                  ? 'text-matchaBase'
                  : 'text-matcha20'
              }`}
            >
              Version
            </div>
            <div>&copy; {new Date().getFullYear()} Anirban Tasfin Azad</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 ">
            <div
              className={`text-xl ${
                defaultPages.includes(pathname)
                  ? 'text-matchaBase'
                  : 'text-matcha20'
              }`}
            >
              Socials
            </div>
            <div className="flex items-center justify-around gap-6">
              <Link href={'/'}>Instagram</Link>
              <Link href={'/'}>LinkedIn</Link>
              <Link href={'/'}>Dribble</Link>
              <Link href={'/'}>GitHub</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
