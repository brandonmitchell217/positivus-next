import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ContactInfoProps } from '~/lib/types'
import { navLinks, socialLinks } from '~/lib/util'

import Logo from '../../assets/logo_footer.svg'
import Button from './Button'

export default function Footer() {
  const contactInfo: ContactInfoProps = {
    label: 'Contact Us',
    phone: {
      label: 'Phone',
      number: '555-567-8901',
    },
    email: {
      label: 'Email',
      email: 'info@positivus.com',
    },
    address: {
      label: 'Address',
      street: '1234 Main St',
      city: 'Moonstone City',
      state: 'Stardust State',
      zip: '12345',
    },
  }

  return (
    <footer className="mt-28">
      <div className="lg:container relative pt-[55px] px-[30px] lg:px-[60px] bg-dark text-white text-lg rounded-none lg:rounded-tl-45xl lg:rounded-tr-45xl text-center lg:text-left">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-9 lg:space-y-0">
          <Link href="/">
            <Image src={Logo} alt="Positivus logo" width={220} height={36} />
          </Link>

          <ul className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-10 underline">
            {navLinks.slice(0, navLinks.length - 1).map((link) => (
              <li key={link.name}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <ul className="hidden lg:flex items-center space-x-5 lg:text-2xl xl:text-3xl">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.url}>{link.icon}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* MIDDLE */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center my-9 lg:mt-[66px] lg:mb-[50px]">
          <div className="text-lg space-y-6 lg:space-y-2 flex-1">
            <h6 className="bg-green rounded-md text-dark text-xl leading-none px-0.5 inline-block">
              {contactInfo.label}
            </h6>
            <div className="space-y-1.5">
              <div>
                <span>{contactInfo.email.label}: </span>
                <a>{contactInfo.email.email}</a>
              </div>
              <div>
                <span>{contactInfo.phone.label}: </span>
                <a>{contactInfo.phone.number}</a>
              </div>
              <div>
                <span>{contactInfo.address.label}: </span>
                <a>
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}, {contactInfo.address.state}{' '}
                  {contactInfo.address.zip}
                </a>
              </div>
            </div>
          </div>
          <div className="bg-darkAlt flex-1 rounded-xl.5 py-[58px] px-5 xl:px-10 w-full lg:w-auto">
            <form className="flex flex-col lg:flex-row items-center gap-5">
              <input
                type="email"
                id="footerEmail"
                name="footerEmail"
                placeholder="Email"
                className="w-full lg:w-auto flex-1 rounded-xl.5 border py-4 px-3 text-base bg-transparent leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
              />
              <Button className="w-full lg:w-auto lg:px-2 xl:px-8 !bg-green !text-dark hover:!bg-dark hover:!text-green">
                Subscribe to news
              </Button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="py-[50px] border-t border-white flex flex-col lg:flex-row items-center gap-3.5 lg:gap-10">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a className="underline">Privacy Policy</a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-green text-dark text-xs xs:text-sm flex justify-around items-center py-1">
          <p>
            Design by
            <Link
              target="_blank"
              href="https://olgaaverchenko.gumroad.com/"
              className="pl-1 hover:underline"
            >
              Olga Averchenko
            </Link>
          </p>
          <p>
            Developed by
            <Link
              target="_blank"
              href="https://www.brandon-mitchell.dev/?ref=positivus"
              className="pl-1 hover:underline"
            >
              Brandon
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
