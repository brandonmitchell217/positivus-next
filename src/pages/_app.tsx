import '~/styles/global.css'
import 'swiper/css'

import type { AppProps } from 'next/app'
import { IBM_Plex_Mono, Inter, PT_Serif, Space_Grotesk } from 'next/font/google'
import { lazy } from 'react'

import Footer from '~/components/ui/Footer'
import Nav from '~/components/ui/Nav'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

const mono = IBM_Plex_Mono({
  variable: '--font-family-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const sans = Inter({
  variable: '--font-family-sans',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

const serif = PT_Serif({
  variable: '--font-family-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})

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
            --font-family-sans: ${sans.style.fontFamily};
            --font-family-serif: ${serif.style.fontFamily};
            --font-family-mono: ${mono.style.fontFamily};
            --font-space: ${space.style.fontFamily};
          }
        `}
      </style>
      <Nav />
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
      <Footer />
    </>
  )
}
