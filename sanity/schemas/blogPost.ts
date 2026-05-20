import { defineType, defineField } from 'sanity'
import type { StringRule, SlugRule } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule: SlugRule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description:
        'Blog category. Determines which filter pill the post appears under on The Archives. Iki-Guys is reserved for posts that are companion writing to podcast episodes or otherwise guest-focused.',
      options: {
        list: [
          { title: 'Movement & Body', value: 'body' },
          { title: 'Presence & Confidence', value: 'presence' },
          { title: 'Leadership & Career', value: 'work' },
          { title: 'The Lab', value: 'lab' },
          { title: 'Iki-Guys', value: 'iki-guys' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'podcastEpisode',
      title: 'Companion Podcast Episode',
      type: 'reference',
      to: [{ type: 'podcastEpisode' }],
      description:
        'Optional. If this post accompanies a podcast episode, reference the episode here. Used to render an episode card or "Listen to the conversation" link on the post page, and to surface the post on the episode page. Most posts will not have this — only those written as companion writing to a specific episode.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      description: 'SEO meta description (150-160 chars)',
      validation: (Rule: StringRule) => Rule.max(160),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short summary for listing pages',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for screen readers and SEO',
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Show on homepage/featured section',
      initialValue: false,
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'CTA Text',
          type: 'string',
        }),
        defineField({
          name: 'url',
          title: 'CTA URL',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      publishedAt: 'publishedAt',
      media: 'coverImage',
    },
    prepare({ title, slug, publishedAt, media }) {
      let subtitle = 'Unpublished'
      if (publishedAt) {
        const d = new Date(publishedAt)
        if (!isNaN(d.getTime())) {
          subtitle = d.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
        }
      }
      return {
        title: title || slug || 'Untitled',
        subtitle,
        media,
      }
    },
  },
})
