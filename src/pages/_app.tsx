import '~/styles/global.css'
import 'swiper/css'

import type { AppProps } from 'next/app'
import { Space_Grotesk } from 'next/font/google'
import Head from 'next/head'
import { lazy } from 'react'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

const space = Space_Grotesk({
  variable: '--font-space',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-space: ${space.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <title>Positivus</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
