import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /portal, /admin, and /login were disallowed here until the coaching
      // client area was retired. Those routes no longer exist.
      disallow: ['/api'],
    },
    sitemap: 'https://jonchalant.com/sitemap.xml',
  };
}
