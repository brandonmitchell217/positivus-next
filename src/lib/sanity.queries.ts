import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
export const ctasQuery = groq`*[_type == "cta"]`
export const partnersQuery = groq`*[_type == "partner"] | order(_createdAt asc)`
export const headersQuery = groq`*[_type == "header"] | order(_createdAt asc)`
export const serviceCardsQuery = groq`*[_type == "card"] | order(order asc)`

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

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

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
  title: string
  excerpt?: string
}

export interface Card {
  _type: 'card'
  _id: string
  _createdAt: string
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
  excerpt?: string
}
