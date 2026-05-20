import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  description:
    'Structural configuration for The Foundation: stage references, pricing, session pool shape. Singleton — exactly one program document exists. Editorial page copy lives in pageFoundation; this schema holds the structural data the page renders.',
  groups: [
    { name: 'structure', title: 'Structure', default: true },
    { name: 'pricing', title: 'Pricing' },
    { name: 'sessionPool', title: 'Session Pool' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Program Title',
      type: 'string',
      description:
        'Internal label. Currently "The Foundation". Not user-facing — public page copy lives in pageFoundation.',
      initialValue: 'The Foundation',
      validation: (Rule) => Rule.required(),
      group: 'structure',
    }),
    defineField({
      name: 'stages',
      title: 'Stages',
      type: 'array',
      description:
        'The three stages of The Foundation, in order: The Climb, The Vantage, The Leap. Each is a reference to a stage document. Canonical order is Climb → Vantage → Leap.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'stage' }],
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .length(3)
          .error('The Foundation has exactly three stages.'),
      group: 'structure',
    }),
    defineField({
      name: 'foundingPrice',
      title: 'Founding Cohort Price (USD)',
      type: 'number',
      description:
        'Price for the founding cohort. Currently $4,500. Locked in for founding-cohort clients for the life of their engagement.',
      validation: (Rule) => Rule.required().positive(),
      group: 'pricing',
    }),
    defineField({
      name: 'standardPrice',
      title: 'Standard Price (USD)',
      type: 'number',
      description:
        'Standard price after the founding cohort closes. Currently $5,000.',
      validation: (Rule) => Rule.required().positive(),
      group: 'pricing',
    }),
    defineField({
      name: 'foundingCohortActive',
      title: 'Founding Cohort Active',
      type: 'boolean',
      description:
        'When true, the Foundation page displays founding-cohort pricing and framing. When false, displays standard pricing. Toggle off when the founding cohort closes.',
      initialValue: true,
      validation: (Rule) => Rule.required(),
      group: 'pricing',
    }),
    defineField({
      name: 'sessionPoolTotal',
      title: 'Total Sessions in Pool',
      type: 'number',
      description:
        'Total coaching sessions included in The Foundation. Used for marketing copy and contract reference, not for per-client session tracking (which lives outside Sanity in Supabase).',
      validation: (Rule) => Rule.required().integer().positive(),
      group: 'sessionPool',
    }),
    defineField({
      name: 'topUpSessionPrice',
      title: 'Top-Up Session Price (USD)',
      type: 'number',
      description:
        'Price per additional coaching session beyond the pool. Currently $350. Active Foundation clients only.',
      validation: (Rule) => Rule.required().positive(),
      group: 'sessionPool',
    }),
    defineField({
      name: 'topUpPackPrice',
      title: 'Top-Up Pack Price (USD)',
      type: 'number',
      description:
        'Price for a discounted pack of top-up sessions. Currently $1,200 for a 4-pack.',
      validation: (Rule) => Rule.required().positive(),
      group: 'sessionPool',
    }),
    defineField({
      name: 'topUpPackSize',
      title: 'Top-Up Pack Size',
      type: 'number',
      description:
        'Number of sessions in a top-up pack. Currently 4.',
      validation: (Rule) => Rule.required().integer().positive(),
      group: 'sessionPool',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      founding: 'foundingPrice',
      standard: 'standardPrice',
      active: 'foundingCohortActive',
    },
    prepare({ title, founding, standard, active }: {
      title?: string
      founding?: number
      standard?: number
      active?: boolean
    }) {
      const price = active
        ? `$${founding} (founding)`
        : `$${standard} (standard)`
      return {
        title: title || 'Program',
        subtitle: founding && standard ? price : 'Pricing not set',
      }
    },
  },
})
