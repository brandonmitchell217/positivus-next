import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CaseStudy } from '~/lib/sanity.queries'

export default function MobileCarousel({
  caseStudies,
}: {
  caseStudies: CaseStudy[]
}) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {caseStudies.map((caseStudy) => (
        <SwiperSlide key={caseStudy.orderNumber}>
          {caseStudy.excerpt}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
