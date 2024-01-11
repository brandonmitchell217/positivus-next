import { PortableText } from '@portabletext/react'
import React from 'react'

import { Header } from '~/lib/sanity.queries'

import Container from './ui/Container'

export default function SectionHeader({ header }: { header: Header }) {
  return (
    <Container className="sectionHeader flex flex-col md:flex-row items-center space-y-7 md:space-y-0 md:space-x-10 text-center md:text-left">
      <h2 className="bg-green md:px-1 inline-block text-4.5xl leading-[1.15] rounded-[7px]">
        {header.title}
      </h2>
      {header.excerpt && (
        <div className="max-w-[520px]">
          <PortableText value={header.excerpt} />
        </div>
      )}
    </Container>
  )
}
