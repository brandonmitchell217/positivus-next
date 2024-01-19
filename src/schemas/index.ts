import { SchemaTypeDefinition } from 'sanity'

import accordion from './accordion'
import blockContent from './blockContent'
import card from './card'
import caseStudy from './caseStudy'
import cta from './cta'
import header from './header'
import partner from './partner'
import post from './post'
import teamBio from './teamBio'
import testimonial from './testimonial'

export const schemaTypes = [
  post,
  cta,
  header,
  partner,
  card,
  caseStudy,
  accordion,
  teamBio,
  testimonial,
  blockContent,
]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    cta,
    header,
    partner,
    card,
    caseStudy,
    accordion,
    teamBio,
    testimonial,
    blockContent,
  ],
}
