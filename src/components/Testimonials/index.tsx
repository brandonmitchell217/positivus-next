'use client'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { TestimonialProps } from '~/lib/sanity.queries'

export default function TestimoialCarousel({
  testimonials,
}: {
  testimonials: TestimonialProps[]
}) {
  const TestimonialSlide = ({
    testimonial,
  }: {
    testimonial: TestimonialProps
  }) => {
    return (
      <>
        <div className="border border-green rounded-45xl p-6 pb-12 h-[266xpx] max-w-none w-[606px]">
          <p className="text-base relative leading-normal h-full overflow-y-scroll lg:overflow-y-visible">
            {testimonial.excerpt}
          </p>
        </div>
        <div>
          <span className="font-medium text-lg lg:text-xl text-green">
            {testimonial.name}
          </span>
          <span className="text-base lg:text-lg">{testimonial.position}</span>
        </div>
      </>
    )
  }

  return (
    <div className="relative container h-[568px] lg:h-[625px] bg-dark text-white rounded-45xl p-[30px] pb-0 md:p-0 md:pt-[84px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.orderNumber}
            className="justify-center bg-red-600 border-b-8 border-blue-600"
          >
            <TestimonialSlide testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
