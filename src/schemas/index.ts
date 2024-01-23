import { SchemaTypeDefinition } from 'sanity'

import accordion from './accordion'
import blockContent from './blockContent'
import card from './card'
import caseStudy from './caseStudy'
import cta from './cta'
import header from './header'
import partner from './partner'
import teamBio from './teamBio'
import testimonial from './testimonial'

export const schemaTypes = [
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
