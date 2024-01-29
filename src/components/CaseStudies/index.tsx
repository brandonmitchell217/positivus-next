'use client'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CaseStudy } from '~/lib/sanity.queries'

export default function CaseStudies({
  caseStudies,
}: {
  caseStudies: CaseStudy[]
}) {
  const StudyLink = () => {
    return (
      <a className="flex items-center space-x-1 text-green group">
        <span>Learn More</span>
        <span className="md:-rotate-[30deg] md:group-hover:rotate-0 duration-300 transition-all ease-in-out">
          <ArrowRight size={28} />
        </span>
      </a>
    )
  }

  return (
    <div id="CaseStudies">
      <div className="hidden md:flex md:py-16 lg:px-[60px] mt-20 rounded-45xl bg-dark text-white justify-center gap-4 md:gap-0 md:justify-between items-center">
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy._id}
            className="caseStudy relative rounded-45xl py-8 px-5 xs:px-[40px] md:px-2 lg:p-0 space-y-5 h-[295px] sm:h-[252px] w-full xs:w-[350px] lg:h-auto lg:w-auto lg:max-w-[286px]"
          >
            <p className="lg:pr-2 xl:pr-0">{caseStudy.excerpt}</p>
            <StudyLink />
          </div>
        ))}
      </div>
      <div className="md:hidden pt-16">
        <Swiper
          spaceBetween={50}
          slidesPerView={1.2}
          loop={true}
          style={{ overflow: 'visible' }}
        >
          {caseStudies.map((caseStudy) => (
            <SwiperSlide
              key={caseStudy.orderNumber}
              className="py-[42px] px-[50px] h-[295px] space-y-5 rounded-45xl bg-dark text-white justify-center gap-4 md:gap-0 md:justify-between items-center"
            >
              <p>{caseStudy.excerpt}</p>
              <StudyLink />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
