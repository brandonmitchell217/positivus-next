import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamBio',
  title: 'Team Member Bio',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Position',
      name: 'position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Team Member image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      title: 'name',
      author: 'author.name',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
