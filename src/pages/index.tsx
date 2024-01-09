import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Accordion from '~/components/Accordion'
import ServiceCard from '~/components/Card/ServiceCard'
import TeamBio from '~/components/Card/TeamBio'
import CaseStudies from '~/components/CaseStudies'
import FlexLanding from '~/components/FlexLanding'
import HomeCta from '~/components/HomeCta'
import PartnerImages from '~/components/PartnerImages'
import SectionHeader from '~/components/SectionHeader'
import TestimoialCarousel from '~/components/Testimonials'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  AccordionProps,
  accordionsQuery,
  caseStudiesQuery,
  type CaseStudy,
  type Cta,
  ctasQuery,
  getAccordionItems,
  getCaseStudies,
  getCtas,
  getHeaders,
  getPartners,
  getPosts,
  getServiceCards,
  getTeamMembers,
  getTestimonials,
  type Header,
  headersQuery,
  Partner,
  partnersQuery,
  type Post,
  postsQuery,
  ServiceCardProps,
  serviceCardsQuery,
  TeamMemberProps,
  teamMembersQuery,
  TestimonialProps,
  testimonialsQuery,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)
  const ctas = await getCtas(client)
  const partners = await getPartners(client)
  const headers = await getHeaders(client)
  const serviceCards = await getServiceCards(client)
  const caseStudies = await getCaseStudies(client)
  const accordions = await getAccordionItems(client)
  const bios = await getTeamMembers(client)
  const testimonials = await getTestimonials(client)

  // console.log(serviceCards)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
      ctas,
      partners,
      headers,
      serviceCards,
      caseStudies,
      accordions,
      bios,
      testimonials,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  const [ctas] = useLiveQuery<Cta[]>(props.ctas, ctasQuery)
  const [partners] = useLiveQuery<Partner[]>(props.partners, partnersQuery)
  const [headers] = useLiveQuery<Header[]>(props.headers, headersQuery)
  const [serviceCards] = useLiveQuery<ServiceCardProps[]>(
    props.serviceCards,
    serviceCardsQuery,
  )
  const [caseStudies] = useLiveQuery<CaseStudy[]>(
    props.caseStudies,
    caseStudiesQuery,
  )
  const [accordions] = useLiveQuery<AccordionProps[]>(
    props.accordions,
    accordionsQuery,
  )
  const [bios] = useLiveQuery<TeamMemberProps[]>(props.bios, teamMembersQuery)
  const [testimonials] = useLiveQuery<TestimonialProps[]>(
    props.testimonials,
    testimonialsQuery,
  )

  // console.log(testimonials)

  // Landing & CTA
  const landing = ctas?.find(
    (cta) => cta.slug.current.toLowerCase() === 'landing',
  )
  const homeCta = ctas?.find(
    (cta) => cta.slug.current.toLowerCase() === 'home-cta',
  )

  // Section Headers
  const serviceHeader = headers?.find(
    (header) => header.title.toLowerCase() === 'services',
  )
  const caseStudyHeader = headers?.find(
    (header) => header.title.toLowerCase() === 'case studies',
  )
  const workingProcessHeader = headers?.find(
    (header) => header.title.toLowerCase() === 'our working process',
  )
  const teamHeader = headers?.find(
    (header) => header.title.toLowerCase() === 'team',
  )
  const testimonialHeader = headers?.find(
    (header) => header.title.toLowerCase() === 'testimonials',
  )
  const contactHeader = headers?.find(
    (header) => header.title.toLowerCase() === 'contact us',
  )

  // console.log(workingProcessHeader)

  return (
    <main>
      <section className="py-32">
        <FlexLanding landing={landing} />
        <PartnerImages partners={partners} />
      </section>
      <section>
        <SectionHeader header={serviceHeader} />
        <div className="container py-20 flex flex-wrap gap-12">
          {serviceCards?.map((card) => (
            <ServiceCard key={card.orderNumber} card={card} />
          ))}
        </div>
      </section>
      <section>
        <HomeCta cta={homeCta} />
      </section>
      <section className="py-32">
        <SectionHeader header={caseStudyHeader} />
        <CaseStudies caseStudies={caseStudies} />
      </section>
      <section>
        <SectionHeader header={workingProcessHeader} />
        <Accordion accordions={accordions} />
      </section>
      <section>
        <SectionHeader header={teamHeader} />
        <div className="grid grid-cols-2 xl:grid-cols-3 place-items-center gap-10">
          {bios?.map((bio) => (
            <TeamBio key={bio.orderNumber} teamMember={bio} />
          ))}
        </div>
      </section>
      <section>
        <SectionHeader header={testimonialHeader} />
        <TestimoialCarousel testimonials={testimonials} />
      </section>
      <section>
        <SectionHeader header={contactHeader} />
      </section>
    </main>
  )
}
