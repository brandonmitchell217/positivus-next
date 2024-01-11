import Image from 'next/image'
import React from 'react'

import { urlForImage } from '~/lib/sanity.image'
import { Partner } from '~/lib/sanity.queries'

export default function PartnerImages({ partners }: { partners: Partner[] }) {
  return (
    <div className="grid grid-cols-6 place-items-center">
      {partners?.map((partner) => (
        <div key={partner._id}>
          <Image
            src={urlForImage(partner.image).width(130).height(56).url()}
            width={130}
            height={56}
            alt={`${partner.title} logo`}
          />
        </div>
      ))}
    </div>
  )
}
