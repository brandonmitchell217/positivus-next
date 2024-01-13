'use client'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import DarkLogo from '../../assets/logo_footer.svg'
import Logo from '../../assets/logo_nav.svg'
import { navLinks } from '../../lib/util'
import Button from './Button'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const matches = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    if (matches) {
      setIsOpen(false)
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    })

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, matches])
  return (
    <nav className="fixed z-40 top-0 left-0 right-0 pt-[30px] lg:pt-[60px] text-dark">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="Positivus logo"
            width={220}
            height={36}
            className="w-[180px] h-auto lg:w-[220px]"
          />
        </Link>

        <ul className="hidden lg:flex gap-10 items-center">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              {index === navLinks.length - 1 ? (
                <Button
                  href={link.path}
                  className="bg-white !text-dark hover:!bg-dark hover:!text-white"
                >
                  {link.name}
                </Button>
              ) : (
                <Link href={link.path}>{link.name}</Link>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } fixed z-50 top-0 right-0 bottom-0 left-0 bg-dark text-white`}
        >
          <div className="container h-full relative flex flex-col justify-center items-center space-y-16">
            <button
              type="button"
              className="absolute top-[35px] right-[1rem]"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            <Link href="/">
              <Image
                src={DarkLogo}
                alt="Positivus logo"
                width={220}
                height={36}
              />
            </Link>

            <ul className="flex flex-col gap-10 items-center">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  {index === navLinks.length - 1 ? (
                    <Button
                      href={link.path}
                      className="bg-white !text-dark hover:!bg-dark hover:!text-white block"
                    >
                      {link.name}
                    </Button>
                  ) : (
                    <Link href={link.path}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
