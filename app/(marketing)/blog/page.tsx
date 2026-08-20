import type { Metadata } from 'next'
import { client, getPageBlog, getSiteConfig } from '@/lib/sanity'
import { PageTransition } from '@/components/layout'
import { BlogClient } from './BlogClient'
import type { PageBlog, SiteConfig } from '@/lib/types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'The Archives | Jonchalant',
  description: 'Writing, notes, and work in progress from Jon.',
  openGraph: {
    title: 'The Archives | Jonchalant',
    description: 'Writing, notes, and work in progress from Jon.',
    type: 'website',
    url: 'https://jonchalant.com/blog',
    siteName: 'Jonchalant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jonchalant',
    creator: '@jonchalant',
    title: 'The Archives | Jonchalant',
    description: 'Writing, notes, and work in progress from Jon.',
  },
}

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  metaDescription?: string
  readingTime?: number
  publishedAt?: string
  featured?: boolean
  coverImage?: { asset?: { url?: string }; alt?: string }
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    metaDescription,
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

export default async function BlogPage() {
  const [posts, pageBlog, siteConfig] = await Promise.all([
    getBlogPosts(),
    getPageBlog().catch(() => null) as Promise<PageBlog | null>,
    getSiteConfig().catch(() => null) as Promise<SiteConfig | null>,
  ])

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
        />
      </PageTransition>
    </main>
  )
}
