import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'siteConfig',
  title: 'Site configuration',
  type: 'document',
  fieldsets: [
    { name: 'footer', title: 'Footer', options: { collapsible: true, collapsed: false } },
    {
      name: 'socials',
      title: 'Socials',
      description:
        'Social media presence. Linked from footer if populated; not displayed if the array is empty.',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'formMicrocopy',
      title: 'Form microcopy',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
      description:
        'The canonical contact email address. Used in the footer, form error messages, and contact page email fallback. Changing this updates every surface that references it.',
      validation: (Rule) =>
        Rule.required().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          name: 'email',
          invert: false,
        }),
    }),

    // ----- footer -----
    defineField({
      name: 'brandLine',
      title: 'Brand line',
      type: 'string',
      fieldset: 'footer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
      fieldset: 'footer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'privacyLink',
      title: 'Privacy link',
      type: 'cta',
      fieldset: 'footer',
      validation: (Rule) => Rule.required(),
    }),

    // ----- socials -----
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      fieldset: 'socials',
      description:
        'Social platforms where the brand has an active presence. Empty array is allowed.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'socialLink',
          title: 'Social link',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'Twitter / X', value: 'twitter' },
                  { title: 'Threads', value: 'threads' },
                  { title: 'Bluesky', value: 'bluesky' },
                  { title: 'Substack', value: 'substack' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'Other', value: 'other' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'Full URL including https://',
              validation: (Rule) =>
                Rule.required().regex(/^https:\/\//, {
                  name: 'https URL',
                  invert: false,
                }),
            }),
            defineField({
              name: 'label',
              title: 'Accessible label',
              type: 'string',
              description:
                'Optional accessible label for screen readers, e.g. "Jon Young on LinkedIn".',
            }),
          ],
          preview: { select: { title: 'platform', subtitle: 'url' } },
        }),
      ],
    }),

    // ----- formMicrocopy -----
    defineField({
      name: 'successStates',
      title: 'Success states',
      type: 'array',
      fieldset: 'formMicrocopy',
      description:
        'Canonical success messages keyed by form: general, newsletter, starterGuide, contact.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'successState',
          title: 'Success state',
          fields: [
            defineField({
              name: 'key',
              title: 'Key',
              type: 'string',
              options: {
                list: [
                  { title: 'General', value: 'general' },
                  { title: 'Newsletter', value: 'newsletter' },
                  { title: 'Starter Guide', value: 'starterGuide' },
                  { title: 'Contact', value: 'contact' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'message',
              title: 'Message',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: 'key', subtitle: 'message' } },
        }),
      ],
      validation: (Rule) => Rule.required().length(4),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site configuration (footer, socials, microcopy)' }),
  },
})
