'use client'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import { TeamMemberProps } from '~/lib/sanity.queries'

import TeamBio from '../Card/TeamBio'
import Button from '../ui/Button'

export default function TeamContainer({ team }: { team: TeamMemberProps[] }) {
  const matches = useMediaQuery('(min-width: 768px)')
  const [isMobile, setIsMobile] = useState<boolean>()

  useEffect(() => {
    setIsMobile(matches)
  }, [matches])

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-10">
        {!isMobile
          ? team
              ?.slice(0, 4)
              .map((bio) => <TeamBio key={bio.orderNumber} teamMember={bio} />)
          : team?.map((bio) => (
              <TeamBio key={bio.orderNumber} teamMember={bio} />
            ))}
      </div>

      <Button
        href="/"
        className="w-full md:w-fit self-end block mt-8 bg-dark text-white hover:bg-white hover:text-dark"
      >
        See more of the team
      </Button>
    </div>
  )
}
