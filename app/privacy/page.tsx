import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Jonchalant handles data.',
  robots: {
    index: true,
    follow: true,
  },
}

// Rewritten 2026-08-20 for the creative-portfolio pivot. The previous version
// described a newsletter opt-in (Kit) and a CMS (Sanity), both removed. There
// are no forms left on the site at all — /contact is a plain mailto — so this
// is a short, honest disclosure rather than a full legal document.

export default function PrivacyPage() {
  return (
    /* LEGAL: this is a plain-language description of current data handling, not
       legal advice. Have a lawyer review before relying on it. */
    <main className="privacy-page">
      <div className="privacy-container">
        <p className="privacy-effective-date">Effective: August 20, 2026</p>
        <h1 className="privacy-title">Privacy Policy</h1>

        <p>
          Jonchalant runs no forms — no newsletter, no contact form, no accounts, nothing to buy.
          The only personal information the site handles is automatic: Google Analytics, which is
          off by default and only runs if you accept it in the cookie banner (IP addresses
          anonymized, no ad tracking, no cross-site tracking), and Sentry, which is always on and
          may log your IP address, browser/device info, and the page you were on if the site
          throws an error, so it can be found and fixed.
        </p>

        <p>
          Netlify hosts the site and keeps standard server access logs. Sentry and Google act as
          data processors for the purposes above, each under its own privacy policy. Nothing here
          is sold, rented, or shared with anyone for their own purposes. Questions, or want
          something about you removed? Reach out via the{' '}
          <Link href="/contact">contact page</Link>.
        </p>

        <div className="privacy-back">
          <Link href="/">← Back to home</Link>
        </div>
      </div>
    </main>
  )
}
