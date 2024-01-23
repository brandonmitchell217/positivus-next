'use client'
import { usePathname } from 'next/navigation'

import Footer from '~/components/ui/Footer'
import Nav from '~/components/ui/Nav'

export default function Page({ params }: { params: { slug: string } }) {
  const pathname = usePathname()
  return (
    <>
      <Nav />
      <main className="min-h-screen flex justify-center items-center">
        <h1>Page: {pathname?.substring(1)}</h1>
      </main>
      <Footer />
    </>
  )
}
