import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'standaloneModule',
  title: 'Standalone Module',
  type: 'document',
  description:
    'A purchasable standalone product corresponding to a Foundation stage (The Climb or The Vantage). Self-paced, sold on /modules. Distinct from the curriculum-chapter "module" schema, which is internal structural grouping. Public copy refers to these as "modules"; the schema name is "standaloneModule" to avoid collision.',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'commerce', title: 'Commerce' },
    { name: 'content', title: 'Content' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'Display title, e.g. "The Climb" or "The Vantage". Use {{double-braces}} around any word that should render italic via the renderHeadline convention.',
      validation: (Rule) => Rule.required(),
      group: 'identity',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'URL slug, e.g. "the-climb" or "the-vantage". Used in /modules/[slug].',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'identity',
    }),
    defineField({
      name: 'stage',
      title: 'Corresponding Stage',
      type: 'reference',
      to: [{ type: 'stage' }],
      description:
        'Which Foundation stage this standalone module corresponds to. Climb or Vantage. The Leap is not sold standalone — do not reference it here.',
      validation: (Rule) => Rule.required(),
      group: 'identity',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description:
        'Display order on the /modules page. Climb: 1. Vantage: 2. Lower numbers appear first.',
      validation: (Rule) => Rule.required().integer().positive(),
      group: 'identity',
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      description:
        'Price for this standalone module. Climb: $500. Vantage: $750.',
      validation: (Rule) => Rule.required().positive(),
      group: 'commerce',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      description:
        'Text on the primary purchase button. Defaults to "Get the module" if unset — but you can override per module.',
      group: 'commerce',
    }),
    defineField({
      name: 'lifetimeAccess',
      title: 'Lifetime Access',
      type: 'boolean',
      description:
        'When true, customers retain access to this module indefinitely after purchase. Currently true for all standalone modules; included as a field in case this policy changes.',
      initialValue: true,
      validation: (Rule) => Rule.required(),
      group: 'commerce',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description:
        'Body copy describing what this module is and who it is for. Used on /modules and on the individual module page.',
      rows: 4,
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'whatsIncluded',
      title: "What's Included",
      type: 'array',
      description:
        'Bulleted list of what the customer gets when they purchase this module. One line per item.',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
      group: 'content',
    }),
    defineField({
      name: 'whatsNotIncluded',
      title: "What's Not Included",
      type: 'array',
      description:
        "Bulleted list clarifying what is NOT included — typically \"no live coaching\", \"no community access\", etc. Sets expectations honestly relative to the Foundation. One line per item.",
      of: [{ type: 'string' }],
      group: 'content',
    }),
    defineField({
      name: 'prerequisiteCopy',
      title: 'Prerequisite Copy',
      type: 'text',
      description:
        'Optional. Any prerequisite framing — what the customer should be ready for, what they should expect, what assumptions the module makes about them.',
      rows: 3,
      group: 'content',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      stageTitle: 'stage.title',
    },
    prepare({ title, price, stageTitle }: {
      title?: string
      price?: number
      stageTitle?: string
    }) {
      const priceLabel = price ? `$${price}` : 'no price'
      const stageLabel = stageTitle || 'no stage'
      return {
        title: title || '(untitled module)',
        subtitle: `${priceLabel} · ${stageLabel}`,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
