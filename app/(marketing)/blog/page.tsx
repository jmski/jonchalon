import type { Metadata } from 'next'
import { client, getPageBlog, getSiteConfig } from '@/lib/sanity'
import { CTA } from '@/components/sections'
import { PageTransition, SectionWrapper, SectionContent } from '@/components/layout'
import { BlogClient } from './BlogClient'
import { SeriesBanner } from '@/components/shared/series-banner'
import type { PageBlog, SiteConfig } from '@/lib/types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'The Archives | Jonchalant',
  description: 'Practical writing on presence, movement, and what it actually takes to stop disappearing in rooms. Articles on executive presence coaching for introverts and corporate leaders.',
  keywords: 'ikigai, purpose-led work, embodiment, presence, four circles, professional alignment, leadership, body language',
  openGraph: {
    title: 'The Archives | Jonchalant',
    description: 'Practical writing on presence, movement, and what it actually takes to stop disappearing in rooms.',
    type: 'website',
    url: 'https://jonchalant.com/blog',
    siteName: 'Jonchalant',
    locale: 'en_US',
    images: {
      url: 'https://jonchalant.com/social/og-blog-1200x630.png',
      width: 1200,
      height: 630,
      alt: 'The Archives — Jonchalant',
      type: 'image/png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jonchalant',
    creator: '@jonchalant',
    title: 'The Archives | Jonchalant',
    description: 'Practical writing on presence, movement, and what it actually takes to stop disappearing in rooms.',
    images: ['https://jonchalant.com/social/og-blog-1200x630.png'],
  },
}

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  metaDescription?: string
  category?: 'body' | 'presence' | 'work' | 'lab' | 'iki-guys'
  readingTime?: number
  publishedAt?: string
  featured?: boolean
  coverImage?: { asset?: { url?: string }; alt?: string }
}

const LEGACY_PILLAR_TO_CATEGORY: Record<string, 'body' | 'presence' | 'work' | 'lab'> = {
  'movement-body': 'body',
  'presence-confidence': 'presence',
  'leadership-career': 'work',
  'the-lab': 'lab',
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    metaDescription,
    category,
    readingTime,
    publishedAt,
    featured,
    coverImage { asset->{ url }, alt }
  }`

  try {
    const posts = await client.fetch(query)
    return posts || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ pillar?: string; category?: string }>
}) {
  const [posts, pageBlog, siteConfig, params] = await Promise.all([
    getBlogPosts(),
    getPageBlog().catch(() => null) as Promise<PageBlog | null>,
    getSiteConfig().catch(() => null) as Promise<SiteConfig | null>,
    searchParams,
  ])

  const legacyCategory = params.pillar ? LEGACY_PILLAR_TO_CATEGORY[params.pillar] : undefined
  const initialCategory = params.category ?? legacyCategory ?? null

  const newsletterSuccess = siteConfig?.successStates?.find((s) => s.key === 'newsletter')?.message

  return (
    <main className="blog-page-main">
      <PageTransition animation="fade">
        <BlogClient
          posts={posts}
          hero={pageBlog?.hero ?? null}
          newsletter={pageBlog?.newsletter ?? null}
          newsletterSuccess={newsletterSuccess}
          emptyState={pageBlog?.emptyState ?? null}
          initialCategory={initialCategory}
          seriesBanner={<SeriesBanner featuredSeries={pageBlog?.featuredSeries} />}
        />

        {/* ── Audit CTA ─────────────────────────────────────────────────────── */}
        {pageBlog?.auditCta && (
          <SectionWrapper variant="tertiary">
            <SectionContent>
              <section>
                <CTA
                  title={pageBlog.auditCta.headline}
                  description={pageBlog.auditCta.body}
                  buttonText={pageBlog.auditCta.primaryCta?.label}
                  buttonLink={pageBlog.auditCta.primaryCta?.href}
                  sub={pageBlog.auditCta.microcopy}
                />
              </section>
            </SectionContent>
          </SectionWrapper>
        )}
      </PageTransition>
    </main>
  )
}
