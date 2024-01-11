import { ChevronRightCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { urlForImage } from '~/lib/sanity.image'
import { ServiceCardProps } from '~/lib/sanity.queries'

export default function ServiceCard({ card }: { card: ServiceCardProps }) {
  const titleSplit = card.title.split(' ')
  const firstWords = titleSplit.slice(0, titleSplit.length - 1).join(' ')
  const lastWord = titleSplit[titleSplit.length - 1]

  return (
    <div
      className={`relative card-${card.orderNumber} p-[50px]  w-full xl:max-w-[600px] h-[310px] border border-dark rounded-45xl shadow-3xl`}
    >
      <div className="space-y-[93px]">
        <h3 className="flex flex-col items-start text-2xl lg:text-3xl leading-relaxed">
          <span className="bg-green rounded-[7px] p-0.5">{firstWords}</span>
          <span className="bg-green rounded-[7px] p-0.5">{lastWord}</span>
        </h3>

        <a className="flex items-center space-x-1">
          <span>
            <ChevronRightCircle />
          </span>
          <span>{card.buttonText}</span>
        </a>
      </div>
      <Image
        src={urlForImage(card.image).url()}
        alt="Illustration for services"
        className="absolute w-[180px] h-auto md:w-[120px] md:h-auto lg:w-[210px] bottom-[50px] right-[50px]"
        width={210}
        height={210}
      />
    </div>
  )
}
