import React from 'react'

import { Header } from '~/lib/sanity.queries'

export default function SectionHeader({ header }: { header: Header }) {
  return (
    <div className="container flex flex-col md:flex-row items-center space-y-7 md:space-y-0 md:space-x-10 text-center md:text-left">
      <h2 className="bg-green md:px-1 inline-block text-4.5xl leading-[1.15] rounded-[7px]">
        {header.title}
      </h2>
      {header.excerpt && <p className="max-w-[520px]">{header.excerpt}</p>}
    </div>
  )
}
