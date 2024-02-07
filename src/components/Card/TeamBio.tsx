import { LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { urlForImage } from '~/lib/sanity.image'
import { TeamMemberProps } from '~/lib/sanity.queries'

export default function TeamBio({
  teamMember,
}: {
  teamMember: TeamMemberProps
}) {
  return (
    <div className="max-w-full md:max-w-[390px] h-full p-10 rounded-45xl border border-dark">
      <div className="relative flex items-end gap-2 mb-4">
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="absolute -top-4 -right-4 sm:top-0 sm:right-0 bg-dark text-green p-1.5 rounded-full"
        >
          <LinkedinIcon size={20} />
        </Link>
        <Image
          src={urlForImage(teamMember.image).url()}
          alt={`${teamMember.name} photo`}
          width={103}
          height={103}
        />
        <div>
          <h5 className="text-xl">{teamMember.name}</h5>
          <p className="text-lg">{teamMember.position}</p>
        </div>
      </div>
      <p className="border-t border-dark pt-7 text-lg">{teamMember.excerpt}</p>
    </div>
  )
}
