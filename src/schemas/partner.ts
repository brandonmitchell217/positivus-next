import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partner Image Group',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    {
      title: 'Partner Images',
      type: 'array',
      name: 'partnerImages',
      of: [
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image',
          validation: (Rule) => Rule.required(),
          options: {
            hotspot: true, // <-- Defaults to false
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution',
            },
          ],
        }),
      ],
      // options: {
      //   list: [
      //     { _type: "inline", title: "Big amount", amount: 100 },
      //     { _type: "inline", title: "Small amount", amount: 1 }
      //   ]
      // }
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
