import Image from 'next/image'
import React from 'react'

import { urlForImage } from '~/lib/sanity.image'
import { Partner } from '~/lib/sanity.queries'

export default function PartnerImages({ partners }: { partners: Partner[] }) {
  const firstThree = partners?.slice(0, 3)
  const lastThree = partners?.slice(3, 6)

  const PartnerContainer = ({ partner }) => {
    return (
      <div id={partner.title}>
        <Image
          src={urlForImage(partner.image).url()}
          width={130}
          height={56}
          alt={`${partner.title} logo`}
          className="w-24 h-auto lg:w-[130px]"
        />
      </div>
    )
  }

  return (
    <div className="lg:container pt-10 pb-[60px] lg:pb-[140px] overflow-x-hidden">
      <div className="hidden lg:flex items-center justify-between">
        {partners?.map((partner) => (
          <PartnerContainer key={partner._id} partner={partner} />
        ))}
      </div>

      {/* Mobile */}
      <div className="block lg:hidden space-y-6">
        <div className="w-[110vw] flex justify-evenly items-center">
          {firstThree.map((partner) => (
            <PartnerContainer key={partner._id} partner={partner} />
          ))}
        </div>
        <div className="w-[110vw] -ml-16 flex justify-evenly items-center">
          {lastThree.map((partner) => (
            <PartnerContainer key={partner._id} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  )
}
