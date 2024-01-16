import Image from 'next/image'
import React from 'react'

import { urlForImage } from '~/lib/sanity.image'
import { Partner } from '~/lib/sanity.queries'

export default function PartnerImages({ partners }: { partners: Partner[] }) {
  const firstThree = partners?.slice(0, 3)
  const lastThree = partners?.slice(3, 6)

  return (
    <div className="lg:container py-16 overflow-x-hidden">
      <div className="hidden lg:flex items-center justify-between">
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
      <div className="block lg:hidden space-y-6">
        <div className="w-[108vw] flex justify-between items-center">
          {firstThree.map((partner) => (
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
        <div className="w-[108vw] -ml-16 flex justify-between items-center">
          {lastThree.map((partner) => (
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
      </div>
    </div>
  )
}
