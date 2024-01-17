import Image from 'next/image'
import React from 'react'

import { urlForImage } from '~/lib/sanity.image'
import { Cta } from '~/lib/sanity.queries'

import Button from './ui/Button'

export default function FlexLanding({ landing }: { landing: Cta }) {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:items-stretch lg:justify-between text-left">
        <div className="lg:flex-[0.8] space-y-8">
          <h1 className="text-5xl lg:text-6xl leading-tight md:text-center lg:text-left m-auto lg:m-0">
            {landing?.title}
          </h1>
          <p className="hidden lg:block lg:max-w-[90%] m-auto lg:m-0 text-lg lg:text-xl">
            {landing?.excerpt}
          </p>
          <div className="hidden lg:block pt-6">
            <Button href={landing?.buttonUrl}>{landing?.buttonText}</Button>
          </div>
        </div>
        <div className="">
          <Image
            src={urlForImage(landing?.mainImage)
              .width(594)
              .height(503)
              .url()}
            width={594}
            height={503}
            alt="Landing Illustration"
            className="mx-auto"
          />
          <p className="block lg:hidden text-lg">{landing?.excerpt}</p>
          <div className="flex justify-center lg:hidden pt-6">
            <Button href={landing?.buttonUrl} className="w-full">
              {landing?.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
