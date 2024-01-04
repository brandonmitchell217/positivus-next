import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import card from './card'
import cta from './cta'
import header from './header'
import landing from './landing'
import partner from './partner'
import post from './post'

export const schemaTypes = [post, landing, cta, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, landing, cta, header, partner, card, blockContent],
}
