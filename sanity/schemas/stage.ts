import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'stage',
  title: 'Stage',
  type: 'document',
  description: 'A stage of The Foundation. Exactly three documents must exist: The Climb, The Vantage, The Leap. Do not create additional stage documents; do not delete existing ones.',
  fields: [
    defineField({
      name: 'slug',
      title: 'Stage Slug',
      type: 'string',
      description: 'Internal identifier. Must be one of: climb, vantage, leap. Do not change after creation.',
      options: {
        list: [
          { title: 'Climb', value: 'climb' },
          { title: 'Vantage', value: 'vantage' },
          { title: 'Leap', value: 'leap' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Display title, e.g. "The Climb". Use {{double-braces}} around any word that should render italic via the renderHeadline convention.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short framing line beneath the title. Optional. Use {{double-braces}} around any italic anchor word.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Body copy describing what this stage is and what it covers. Used on Home §4 and Foundation §4.',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'durationCopy',
      title: 'Duration Copy',
      type: 'string',
      description: 'Human-readable duration, e.g. "4–6 weeks", "12–16 weeks", "6–18 months". Not a number — write it the way it should appear on the page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lessonCount',
      title: 'Lesson Count',
      type: 'number',
      description: 'Total lessons in this stage. Climb: 7. Vantage: 10. Leap: 11 (8 effective).',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'orderRank',
      title: 'Order',
      type: 'number',
      description: 'Display order. Climb: 1, Vantage: 2, Leap: 3.',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'durationCopy',
      slug: 'slug',
    },
    prepare({ title, subtitle, slug }) {
      return {
        title: title || '(untitled stage)',
        subtitle: `${slug} · ${subtitle || ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Stage Order',
      name: 'orderRankAsc',
      by: [{ field: 'orderRank', direction: 'asc' }],
    },
  ],
})