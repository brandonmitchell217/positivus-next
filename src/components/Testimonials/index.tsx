'use client'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useRef } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { TestimonialProps } from '~/lib/sanity.queries'

export default function TestimoialCarousel({
  testimonials,
}: {
  testimonials: TestimonialProps[]
}) {
  const pagination = {
    clickable: true,
    bulletClass: 'pagination-bullet',
    bulletActiveClass: 'pagination-bullet-active',
  }
  const swiperRef = useRef(null)
  // console.log(swiper)
  const TestimonialSlide = ({
    testimonial,
  }: {
    testimonial: TestimonialProps
  }) => {
    return (
      <div className="flex justify-center items-center">
        <div>
          <div className="testimonial rounded-45xl py-8 px-4 xs:p-8 max-w-[330px] xs:max-w-max h-auto xs:h-[336px] md:w-[606px] md:h-[266px]">
            <p className="text-sm md:text-base relative leading-normal">
              &ldquo;{testimonial.excerpt}&rdquo;
            </p>
          </div>
          <div className="pl-14 md:pl-20 pt-1.5 flex flex-col">
            <span className="font-medium text-lg lg:text-xl text-green">
              {testimonial.name}
            </span>
            <span className="text-base lg:text-lg">{testimonial.position}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-[568px] lg:h-[625px] bg-dark text-white rounded-45xl py-[30px] px-4 xs:p-[30px] pb-0 md:p-0 md:pt-[84px]">
      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        spaceBetween={10}
        slidesPerView={1}
        initialSlide={1}
        centeredSlides={true}
        loop={true}
        navigation={{
          enabled: true,
          nextEl: '.arrow-right',
          prevEl: '.arrow-left',
        }}
        pagination={pagination}
        style={{ height: '100%' }}
        breakpoints={{
          768: {
            spaceBetween: 100,
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.orderNumber}>
            <TestimonialSlide testimonial={testimonial} />
          </SwiperSlide>
        ))}
        <div className="absolute z-50 bottom-[2.5rem] w-full flex justify-between xs:justify-evenly items-center pointer-events-none">
          <button
            className="pointer-events-auto"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <ArrowLeft size={32} />
          </button>
          <button
            className="pointer-events-auto"
            onClick={() => swiperRef.current.slideNext()}
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </Swiper>
    </div>
  )
}
