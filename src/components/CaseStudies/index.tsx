'use client'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'

import { CaseStudy } from '~/lib/sanity.queries'

import MobileCarousel from './MobileCarousel'

export default function CaseStudies({
  caseStudies,
}: {
  caseStudies: CaseStudy[]
}) {
  const matches = useMediaQuery('(min-width: 768px)')

  if (matches) {
    // DESKTOP
    return (
      <div className="container hidden md:flex lg:px-[60px] md:py-16 mt-20 rounded-45xl bg-dark text-white justify-center gap-4 md:gap-0 md:justify-between items-center">
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy._id}
            className="caseStudy relative rounded-45xl py-8 px-5 xs:px-[40px] md:px-2 lg:p-0 space-y-5 h-[295px] sm:h-[252px] w-full xs:w-[350px] lg:h-auto lg:w-auto lg:max-w-[286px]"
          >
            <p className="lg:pr-2 xl:pr-0">{caseStudy.excerpt}</p>
            <a className="flex items-center space-x-1 text-green group">
              <span>Learn More</span>
              <span className="-rotate-[30deg] group-hover:rotate-0 duration-300 transition-all ease-in-out">
                <ArrowRight size={28} />
              </span>
            </a>
          </div>
        ))}
      </div>
    )
  }

  return <MobileCarousel caseStudies={caseStudies} />
}
