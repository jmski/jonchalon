import { defineType, defineField } from 'sanity'
import { BODY_DESCRIPTION } from '../../lib/fieldDescriptions'

const SHARED_REF_DESC = (name: string) =>
  `References the singleton ${name}. Edit content there, not here.`

// Retirement note: the featured-series banner fields and the audit CTA reference
// were removed when the coaching business was retired. The banner mapped series
// slugs onto the old blog category enum, and the audit CTA pointed at the
// deleted /audit route.

export default defineType({
  name: 'pageBlog',
  title: 'Blog page',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: 'Hero', options: { collapsible: true, collapsed: false } },
    { name: 'newsletter', title: 'Newsletter', options: { collapsible: true, collapsed: false } },
    { name: 'emptyState', title: 'Empty state', options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    defineField({ name: 'hero', title: 'Hero', type: 'hero', fieldset: 'hero' }),

    defineField({
      name: 'newsletter',
      title: 'Newsletter capture',
      type: 'reference',
      fieldset: 'newsletter',
      to: [{ type: 'newsletterCapture' }],
      description: SHARED_REF_DESC('newsletterCapture'),
    }),

    defineField({
      name: 'emptyState',
      title: 'Empty state (no posts)',
      type: 'object',
      fieldset: 'emptyState',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 3,
          description: BODY_DESCRIPTION,
          validation: (R) => R.required(),
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Blog page' }) },
})
