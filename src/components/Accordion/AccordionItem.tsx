import { Minus, Plus } from 'lucide-react'
import React from 'react'

import { AccordionProps } from '~/lib/sanity.queries'

interface Props {
  toggle: (title: string) => void
  open: string | any
  accordion: AccordionProps
}

export default function AccordionItem({ open, toggle, accordion }: Props) {
  return (
    <div
      className={`p-[30px] lg:py-[41px] lg:px-[60px] border border-dark shadow-3xl rounded-45xl cursor-pointer transition-all duration-300 ease-in-out ${
        open !== accordion.title ? 'bg-grey' : 'bg-green'
      }`}
      onClick={() => toggle(accordion.title)}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-7 lg:gap-6">
          {accordion.orderNumber && (
            <span className="text-3xl lg:text-6xl">
              0{accordion.orderNumber}
            </span>
          )}
          <h4 className="text-lg lg:text-3xl">{accordion.title}</h4>
        </div>
        <button type="button" className="rounded-full border border-dark p-2">
          {open === accordion.title ? <Minus size={36} /> : <Plus size={36} />}
        </button>
      </div>

      <div
        className={`mt-[30px] border-t border-dark ${
          open === accordion.title ? 'block' : 'hidden'
        }`}
      >
        {accordion.excerpt && (
          <p className="text-lg pt-[30px]">{accordion.excerpt}</p>
        )}
      </div>
    </div>
  )
}
