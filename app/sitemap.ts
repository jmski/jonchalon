import { MetadataRoute } from 'next';

const BASE_URL = 'https://jonchalant.com';

// Retirement note: /programs, /audit, /lessons, and /ikigai were removed with the
// coaching business and are no longer listed here. Expect 404s for a while as
// search engines re-crawl — add redirects in netlify.toml if any of them turn out
// to carry meaningful inbound traffic.
const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' },
  { url: `${BASE_URL}/about`, priority: 0.5, changeFrequency: 'monthly' },
  { url: `${BASE_URL}/contact`, priority: 0.5, changeFrequency: 'monthly' },
  { url: `${BASE_URL}/privacy`, priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_ROUTES;
}
