'use client'
import React, { useState } from 'react'

import { AccordionProps } from '~/lib/sanity.queries'

import AccordionItem from './AccordionItem'

// { title, children }

export default function Accordion({
  accordions,
}: {
  accordions: AccordionProps[]
}) {
  const [isOpen, setOpen] = useState<string>('')

  const handleOpen = (title: string) => {
    setOpen(isOpen === title ? '' : title)
  }
  return (
    <div className="flex flex-col gap-5 lg:gap-10">
      {accordions.map((accordion) => (
        <AccordionItem
          key={accordion.orderNumber}
          accordion={accordion}
          open={isOpen}
          toggle={handleOpen}
        />
      ))}
    </div>
  )
}
