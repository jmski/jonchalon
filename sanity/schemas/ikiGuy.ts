import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ikiGuy',
  title: 'Iki-Guy',
  type: 'document',
  description:
    'A featured podcast guest. Someone whose work and life align visibly, honestly, across decades, and who teaches or shares what they know. NOT a trained coach — the Coach Training Program graduate designation is separate and TBD. Do not conflate the two.',
  groups: [
    { name: 'profile', title: 'Profile', default: true },
    { name: 'public', title: 'Public-facing' },
    { name: 'internal', title: 'Internal notes' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name as it should appear on the podcast and blog.',
      validation: (Rule) => Rule.required(),
      group: 'profile',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'URL slug derived from name. Used in /iki-guys/[slug] if a guest archive page is added later.',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'profile',
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'string',
      description:
        'One-line description of what this person does. The medium through which their ikigai expresses itself. E.g. "luthier", "jazz drummer", "documentary director". Used in subtitles and metadata.',
      validation: (Rule) => Rule.required(),
      group: 'public',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description:
        'Public-facing bio. 1–3 short paragraphs. Used on episode pages and any guest archive page.',
      rows: 5,
      validation: (Rule) => Rule.required(),
      group: 'public',
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      description:
        'Portrait image. Used on episode pages, blog companion posts, and any guest archive page. Aim for warm, low-light, intimate framing per the brand visual direction.',
      options: { hotspot: true },
      group: 'public',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      description:
        'Optional. External links the guest wants featured — personal site, social, project links. Each is a label + URL pair.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'E.g. "Website", "Instagram", "Project name".',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) =>
                Rule.required().uri({ scheme: ['http', 'https'] }),
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'url' },
          },
        },
      ],
      group: 'public',
    }),
    defineField({
      name: 'notesFromJon',
      title: 'Notes from Jon (Internal)',
      type: 'text',
      description:
        'Private internal notes about this guest — how the conversation went, follow-ups, anything Jon wants to remember. Not rendered anywhere on the site. For internal reference only.',
      rows: 5,
      group: 'internal',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'medium',
      media: 'portrait',
    },
  },
  orderings: [
    {
      title: 'Name (A–Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
})
