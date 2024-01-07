import { Minus, Plus } from 'lucide-react'
import React from 'react'

interface Props {
  toggle: (title: string) => void
  open: string | any
  title: string
}

export default function AccordionItem({ open, toggle, title }: Props) {
  return (
    <div
      className={`p-[30px] lg:py-[41px] lg:px-[60px] border border-dark shadow-3xl rounded-45xl cursor-pointer transition-all duration-300 ease-in-out ${
        open !== title ? 'bg-grey' : 'bg-green'
      }`}
      onClick={() => toggle(title)}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-7 lg:gap-6">
          <span className="text-3xl lg:text-6xl">01</span>
          <h4 className="text-lg lg:text-3xl">{title}</h4>
        </div>
        <button type="button" className="rounded-full border border-dark p-2">
          {open === title ? <Minus size={36} /> : <Plus size={36} />}
        </button>
      </div>

      <div
        className={`mt-[30px] border-t border-dark ${
          open === title ? 'block' : 'hidden'
        }`}
      >
        <p className="text-lg pt-[30px]">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements
        </p>
      </div>
    </div>
  )
}
