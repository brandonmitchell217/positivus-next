import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { urlForImage } from '~/lib/sanity.image'
import { ServiceCardProps } from '~/lib/sanity.queries'

export default function ServiceCard({ card }: { card: ServiceCardProps }) {
  const titleSplit = card.title.split(' ')
  const firstWords = titleSplit.slice(0, titleSplit.length - 1).join(' ')
  const lastWord = titleSplit[titleSplit.length - 1]

  const colors: { bg: string; circle: string; text: string } = {
    bg: '',
    circle: '',
    text: '',
  }

  if (card.orderNumber === 1 || card.orderNumber === 4) {
    colors.bg = 'bg-grey'
    colors.circle = 'bg-dark text-green'
    colors.text = 'bg-green'
  }
  if (card.orderNumber === 2 || card.orderNumber === 5) {
    colors.bg = 'bg-green'
    colors.circle = 'bg-dark text-green'
    colors.text = 'bg-grey'
  }
  if (card.orderNumber === 3 || card.orderNumber === 6) {
    colors.bg = 'bg-dark'
    colors.circle = 'bg-grey text-dark'
  }
  if (card.orderNumber === 3) {
    colors.text = 'bg-grey'
  }
  if (card.orderNumber === 6) {
    colors.text = 'bg-green'
  }

  return (
    <div
      className={`relative  card-${card.orderNumber} ${colors.bg} p-[50px] w-full xl:max-w-[600px] h-[310px] border border-dark rounded-45xl shadow-3xl`}
    >
      <div className="space-y-[93px]">
        <h3 className="flex flex-col items-start text-2xl lg:text-3xl leading-relaxed">
          <span className={`${colors.text} rounded-[7px] p-0.5`}>
            {firstWords}
          </span>
          <span className={`${colors.text}  rounded-[7px] p-0.5`}>
            {lastWord}
          </span>
        </h3>

        <a className="flex items-center gap-2.5 group text-xl">
          <span
            className={`border border-dark ${colors.circle} p-0.5 rounded-full`}
          >
            <ArrowRight className="-rotate-[30deg] group-hover:rotate-0 transition-transform" />
          </span>
          <span
            className={`group-hover:underline ${
              card.orderNumber === 3 || card.orderNumber === 6
                ? 'text-grey'
                : 'text-dark'
            }`}
          >
            {card.buttonText}
          </span>
        </a>
      </div>
      <Image
        src={urlForImage(card.image).url()}
        alt="Illustration for services"
        className="absolute w-[180px] h-auto md:w-[120px] md:h-auto lg:w-[210px] bottom-[50px] md:bottom-[75px] lg:bottom-[50px] right-[50px]"
        width={210}
        height={210}
      />
    </div>
  )
}
