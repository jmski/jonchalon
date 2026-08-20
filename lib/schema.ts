/**
 * JSON-LD Schema Generators
 * Provides structured data for SEO and search engine crawlers
 *
 * Retirement note (2026-08-19): LocalBusinessSchema, CourseSchema, and
 * AggregateRatingSchema were removed with the coaching business. LocalBusiness
 * in particular asserted an active coaching service — service types, a price
 * range, and a placeholder telephone of +1-555-0000 — which would now be false
 * structured data served on every page. Person and Organization were rewritten
 * to describe Jon and the site rather than a coaching practice; they will want
 * another pass once the portfolio redesign settles what the site claims to be.
 */

/**
 * Person Schema — Jon as the site's author
 */
export function PersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jon Chal',
    url: 'https://jonchalant.com',
    image: 'https://jonchalant.com/jon-photo.jpg',
    sameAs: [
      'https://www.tiktok.com/@jonchalant',
      'https://www.instagram.com/jonchalant',
      'https://www.youtube.com/@jonchalant',
      'https://www.linkedin.com/in/jonchalant'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@jonchalant.com'
    }
  };
}

/**
 * Organization Schema — Jonchalant as the site
 */
export function OrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jonchalant',
    url: 'https://jonchalant.com',
    logo: 'https://jonchalant.com/logo.svg',
    sameAs: [
      'https://www.tiktok.com/@jonchalant',
      'https://www.instagram.com/jonchalant',
      'https://www.youtube.com/@jonchalant'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@jonchalant.com'
    }
  };
}

/**
 * FAQPage Schema - for FAQ sections
 */
export function FAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
