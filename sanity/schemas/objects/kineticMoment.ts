import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'kineticMoment',
  title: 'Kinetic Moment',
  type: 'object',
  description:
    'A single-line statement with one emphasized italic anchor word. Used across pages as a moment of typographic emphasis. Follows the renderHeadline convention.',
  fields: [
    defineField({
      name: 'line',
      title: 'Line',
      type: 'string',
      description:
        'The full line as it should read. Wrap the italic anchor word in {{double-braces}}, e.g. "The view from the top is just the {{start}}." Exactly one anchor word per line.',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (typeof value !== 'string') return true
          const matches = value.match(/\{\{[^{}]+\}\}/g) || []
          if (matches.length === 0) {
            return 'Line must contain one {{anchor}} word in double braces.'
          }
          if (matches.length > 1) {
            return 'Line must contain exactly one {{anchor}} word.'
          }
          return true
        }),
    }),
    defineField({
      name: 'anchorWord',
      title: 'Anchor Word',
      type: 'string',
      description:
        'The italic anchor word, repeated here without braces, e.g. "start". Must match the word inside {{double-braces}} in the line above. Used by renderHeadline for styling and by previews.',
      validation: (Rule) =>
        Rule.required().custom((value, context) => {
          const line = (context.parent as { line?: string } | undefined)?.line
          if (typeof value !== 'string' || typeof line !== 'string') return true
          const match = line.match(/\{\{([^{}]+)\}\}/)
          if (!match) return true
          if (match[1].trim() !== value.trim()) {
            return `Anchor word must exactly match the {{braced}} word in the line. Line has "${match[1]}", anchor is "${value}".`
          }
          return true
        }),
    }),
    defineField({
      name: 'placementNote',
      title: 'Placement Note (Internal)',
      type: 'string',
      description:
        'Optional. Internal note about where this kinetic moment appears or how it should be treated visually. Not rendered on the site.',
    }),
  ],
  preview: {
    select: {
      line: 'line',
      anchor: 'anchorWord',
    },
    prepare({ line, anchor }) {
      return {
        title: line || '(empty kinetic moment)',
        subtitle: anchor ? `anchor: ${anchor}` : '',
      }
    },
  },
})