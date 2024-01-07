'use client'
import React, { useState } from 'react'

import AccordionItem from './AccordionItem'

// { title, children }

export default function Accordion() {
  const [isOpen, setOpen] = useState<string>('')
  const titles = ['title1', 'title2', 'title3', 'title4', 'title5']

  const handleOpen = (title: string) => {
    setOpen(isOpen === title ? '' : title)
  }
  return (
    <div className="container py-16">
      <div className="flex flex-col gap-5 lg:gap-10">
        {titles.map((title, index) => (
          <AccordionItem
            key={index}
            title={title}
            open={isOpen}
            toggle={handleOpen}
          />
        ))}
      </div>
    </div>
  )
}
