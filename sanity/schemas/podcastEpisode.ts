import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'podcastEpisode',
  title: 'Podcast Episode',
  type: 'document',
  description:
    'An episode of Jonchalant and the Iki-Guys. References the guest (ikiGuy) and optionally a companion blog post.',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'publishing', title: 'Publishing' },
    { name: 'content', title: 'Content' },
    { name: 'companion', title: 'Companion writing' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Episode Title',
      type: 'string',
      description:
        'Episode title as it appears in the podcast feed and on the site. Use {{double-braces}} around any italic anchor word per the renderHeadline convention.',
      validation: (Rule) => Rule.required(),
      group: 'identity',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL slug for the episode page. Used in /podcast/[slug].',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'identity',
    }),
    defineField({
      name: 'episodeNumber',
      title: 'Episode Number',
      type: 'number',
      description:
        'Sequential episode number. Starts at 1. Used for display ("Episode 7") and for ordering.',
      validation: (Rule) => Rule.required().integer().positive(),
      group: 'identity',
    }),
    defineField({
      name: 'guest',
      title: 'Guest',
      type: 'reference',
      to: [{ type: 'ikiGuy' }],
      description:
        'The Iki-Guy featured in this episode. Required — every episode has at least one guest. (If multi-guest episodes become a thing later, convert this to an array; for now, single-guest only.)',
      validation: (Rule) => Rule.required(),
      group: 'identity',
    }),
    defineField({
      name: 'recordingDate',
      title: 'Recording Date',
      type: 'date',
      description: 'When the episode was recorded. Internal reference. Not displayed publicly.',
      group: 'publishing',
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      description:
        'When the episode goes live. Used for the public publish timestamp and to gate visibility.',
      validation: (Rule) => Rule.required(),
      group: 'publishing',
    }),
    defineField({
      name: 'audioUrl',
      title: 'Audio URL',
      type: 'url',
      description:
        'Direct link to the episode audio file (MP3 or equivalent). May point to a podcast host (Transistor, Buzzsprout, etc.) or direct CDN.',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
      group: 'publishing',
    }),
    defineField({
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'number',
      description: 'Episode length in minutes. Used for display ("57 min") and feed metadata.',
      validation: (Rule) => Rule.positive(),
      group: 'publishing',
    }),
    defineField({
      name: 'description',
      title: 'Description / Show Notes',
      type: 'array',
      description:
        'Episode description and show notes. Rich text — supports paragraphs, links, lists. Becomes the body of the episode page.',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'anchorQuestionExcerpt',
      title: 'Anchor Question Excerpt',
      type: 'text',
      description:
        'Optional pull-quote from the guest\'s answer to the signature anchor question: "What were you doing the year before you knew this was your work?" Used as a featured excerpt on the episode page.',
      rows: 4,
      group: 'content',
    }),
    defineField({
      name: 'companionBlogPost',
      title: 'Companion Blog Post',
      type: 'reference',
      to: [{ type: 'blogPost' }],
      description:
        'Optional. A blog post that accompanies this episode — usually a piece of writing exploring a thread the conversation surfaced. The reverse reference (from blogPost back to this episode) is added separately and is also optional.',
      group: 'companion',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      episodeNumber: 'episodeNumber',
      guestName: 'guest.name',
      media: 'guest.portrait',
    },
    prepare({ title, episodeNumber, guestName, media }: {
      title?: string
      episodeNumber?: number
      guestName?: string
      media?: unknown
    }) {
      const numLabel = episodeNumber ? `Ep ${episodeNumber}` : '—'
      const guestLabel = guestName || 'no guest'
      return {
        title: title || '(untitled episode)',
        subtitle: `${numLabel} · ${guestLabel}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Episode Number (newest first)',
      name: 'episodeNumberDesc',
      by: [{ field: 'episodeNumber', direction: 'desc' }],
    },
    {
      title: 'Publish Date (newest first)',
      name: 'publishDateDesc',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
  ],
})
