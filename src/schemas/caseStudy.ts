import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Order Number',
      name: 'orderNumber',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'orderNumber',
      author: 'author.name',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
