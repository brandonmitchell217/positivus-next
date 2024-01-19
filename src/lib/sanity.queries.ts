import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
export const ctasQuery = groq`*[_type == "cta"]`
export const partnersQuery = groq`*[_type == "partner"] | order(_createdAt asc)`
export const headersQuery = groq`*[_type == "header"] | order(_createdAt asc)`
export const serviceCardsQuery = groq`*[_type == "card"] | order(orderNumber asc)`
export const caseStudiesQuery = groq`*[_type == "caseStudy"] | order(orderNumber asc)`
export const accordionsQuery = groq`*[_type == "accordion"] | order(orderNumber asc)`
export const teamMembersQuery = groq`*[_type == "teamBio"] | order(orderNumber asc)`
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(orderNumber asc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}
export async function getCtas(client: SanityClient): Promise<Cta[]> {
  return await client.fetch(ctasQuery)
}
export async function getPartners(client: SanityClient): Promise<Partner[]> {
  return await client.fetch(partnersQuery)
}
export async function getHeaders(client: SanityClient): Promise<Header[]> {
  return await client.fetch(headersQuery)
}
export async function getServiceCards(
  client: SanityClient,
): Promise<ServiceCardProps[]> {
  return await client.fetch(serviceCardsQuery)
}
export async function getCaseStudies(
  client: SanityClient,
): Promise<CaseStudy[]> {
  return await client.fetch(caseStudiesQuery)
}
export async function getAccordionItems(
  client: SanityClient,
): Promise<AccordionProps[]> {
  return await client.fetch(accordionsQuery)
}
export async function getTeamMembers(
  client: SanityClient,
): Promise<TeamMemberProps[]> {
  return await client.fetch(teamMembersQuery)
}
export async function getTestimonials(
  client: SanityClient,
): Promise<TestimonialProps[]> {
  return await client.fetch(testimonialsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`
export const ctaByOrderNumberQuery = groq`*[_type == "cta" && slug.current == $slug][0]`
export const partersByNameQuery = `*[_type == "partner" && title == $title]`
export const headersByTitleQuery = `*[_type == "header" && slug.current == $slug][0]`
export const serviceCardsByTitleQuery = `*[_type == "card" && title == $title]`
export const caseStudyByOrderNumberQuery = `*[_type == "caseStudy" && orderNumber == $orderNumber]`
export const accordionByOrderNumberQuery = `*[_type == "accordion" && orderNumber == $orderNumber]`
export const teamMemberByOrderNumberQuery = `*[_type == "teamBio" && orderNumber == $orderNumber]`
export const testimonialByOrderNumberQuery = `*[_type == "testimonial" && orderNumber == $orderNumber]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}
export async function getCta(client: SanityClient, slug: string): Promise<Cta> {
  return await client.fetch(ctaByOrderNumberQuery, {
    slug,
  })
}

export async function getPartner(
  client: SanityClient,
  title: string,
): Promise<Partner> {
  return await client.fetch(partersByNameQuery, {
    title,
  })
}

export async function getHeader(
  client: SanityClient,
  slug: string,
): Promise<Header> {
  return await client.fetch(headersByTitleQuery, {
    slug,
  })
}

export async function getServiceCard(
  client: SanityClient,
  title: string,
): Promise<ServiceCardProps> {
  return await client.fetch(serviceCardsByTitleQuery, {
    title,
  })
}

export async function getCaseStudy(
  client: SanityClient,
  orderNumber: number,
): Promise<CaseStudy> {
  return await client.fetch(caseStudyByOrderNumberQuery, {
    orderNumber,
  })
}

export async function getAccordionItem(
  client: SanityClient,
  orderNumber: number,
): Promise<AccordionProps> {
  return await client.fetch(accordionByOrderNumberQuery, {
    orderNumber,
  })
}

export async function getTeamMember(
  client: SanityClient,
  orderNumber: number,
): Promise<TeamMemberProps> {
  return await client.fetch(teamMemberByOrderNumberQuery, {
    orderNumber,
  })
}

export async function getTestimonial(
  client: SanityClient,
  orderNumber: number,
): Promise<TestimonialProps> {
  return await client.fetch(testimonialByOrderNumberQuery, {
    orderNumber,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current`

export const ctaOrderNumbersQuery = groq`
*[_type == "cta" && defined(slug.current)][].slug.current`

export const partnerNamesQuery = groq`
*[_type == "partner" && defined(title)][].title`

export const headerTitlesQuery = groq`
*[_type == "header" defined(slug.current)][].slug.current`

export const serviceCardTitlesQuery = groq`
*[_type == "card" && defined(title)][].title`

export const caseStudyOrderNumbersQuery = groq`
*[_type == "caseStudy" && defined(orderNumber)][].orderNumber`

export const accordionOrderNumbersQuery = groq`
*[_type == "accordion" && defined(orderNumber)][].orderNumber`

export const teamMemberOrderNumbersQuery = groq`
*[_type == "teamBio" && defined(orderNumber)][].orderNumber`

export const testimonialOrderNumbersQuery = groq`
*[_type == "testimonial" && defined(orderNumber)][].orderNumber`

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface Cta {
  _type: 'cta'
  _id: string
  _createdAt: string
  title: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  buttonText?: string
  buttonUrl?: string
}

export interface Partner {
  _type: 'partner'
  _id: string
  _createdAt: string
  title: string
  image: ImageAsset
}

export interface SectionHeader {
  _type: 'header'
  _id: string
  _createdAt: string
  slug: Slug
  title: string
  excerpt?: string
}

export interface Card {
  _type: 'card'
  _id: string
  _createdAt: string
  slug: Slug
  title: string
  subtitle?: string
  excerpt?: string
  buttonText?: string
  cardLink?: string
  image?: ImageAsset
}

export interface ServiceCardProps extends Card {
  orderNumber?: number
}

export interface Header {
  _type: 'header'
  _id: string
  _createdAt: string
  title: string
  excerpt?: PortableTextBlock[]
}

export interface CaseStudy {
  _type: 'caseStudy'
  _id: string
  _createdAt: string
  slug: Slug
  excerpt: string
  orderNumber: number
}

export interface AccordionProps {
  _type: 'accordion'
  _id: string
  _createdAt: string
  title: string
  slug: Slug
  excerpt?: string
  orderNumber?: number
}

export interface TeamMemberProps {
  _type: 'teamBio'
  _id: string
  _createdAt: string
  slug: Slug
  name: string
  position: string
  excerpt?: string
  image?: ImageAsset
  orderNumber?: number
}

export interface TestimonialProps {
  _type: 'testimonial'
  _id: string
  _createdAt: string
  slug: Slug
  excerpt: string
  name: string
  position: string
  orderNumber: number
}
