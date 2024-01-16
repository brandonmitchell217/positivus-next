import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Accordion from '~/components/Accordion'
import ServiceCard from '~/components/Card/ServiceCard'
import CaseStudies from '~/components/CaseStudies'
import Contact from '~/components/Contact'
import FlexLanding from '~/components/FlexLanding'
import HomeCta from '~/components/HomeCta'
import PartnerImages from '~/components/PartnerImages'
import SectionHeader from '~/components/SectionHeader'
import TeamContainer from '~/components/Team'
import TestimoialCarousel from '~/components/Testimonials'
import Container from '~/components/ui/Container'
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

  // TODO: Section padding

  return (
    <main>
      <section className="pt-[70px]">
        <FlexLanding landing={landing} />
        <PartnerImages partners={partners} />
      </section>
      <section>
        <SectionHeader header={serviceHeader} />
        <Container className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceCards?.map((card) => (
            <ServiceCard key={card.orderNumber} card={card} />
          ))}
        </Container>
      </section>
      <section>
        <Container className="pb-20">
          <HomeCta cta={homeCta} />
        </Container>
      </section>
      <section>
        <SectionHeader header={caseStudyHeader} />
        <Container className="pb-20">
          <CaseStudies caseStudies={caseStudies} />
        </Container>
      </section>
      <section>
        <SectionHeader header={workingProcessHeader} />
        <Container className="py-20">
          <Accordion accordions={accordions} />
        </Container>
      </section>
      <section>
        <SectionHeader header={teamHeader} />
        <Container className="py-20">
          <TeamContainer team={bios} />
        </Container>
      </section>
      <section>
        <SectionHeader header={testimonialHeader} />
        <Container className="py-20">
          <TestimoialCarousel testimonials={testimonials} />
        </Container>
      </section>
      <section>
        <SectionHeader header={contactHeader} />
        <Container className="py-20">
          <Contact />
        </Container>
      </section>
    </main>
  )
}
