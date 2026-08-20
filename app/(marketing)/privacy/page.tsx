import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Jonchalant collects, uses, and protects your personal information under PIPEDA.',
  robots: {
    index: true,
    follow: true,
  },
}

// Rewritten 2026-08-19, when the coaching business was retired. The previous
// version described a coaching portal, Supabase accounts, Google OAuth sign-in,
// lesson-progress records, and Stripe payments — none of which the site does any
// more. It also asserted "No analytics or tracking" while the root layout was
// conditionally loading Google Analytics, which was already inaccurate.
//
// What the site actually collects now: an email address, only if you submit the
// newsletter form, which goes to Kit (ConvertKit). Nothing else. There is no
// database, no accounts, and no payments.

export default function PrivacyPage() {
  return (
    /* LEGAL: this is a plain-language description of current data handling, not
       legal advice. Have a lawyer review before relying on it. */
    <main className="privacy-page">
      <div className="privacy-container">

        <p className="privacy-effective-date">Effective: August 19, 2026</p>
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-intro">
          Jonchalant is a personal website operated by Jon in Canada. This policy explains how
          personal information is collected, used, and protected in accordance with the{' '}
          <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA).
        </p>

        {/* 1 */}
        <h2>1. Information We Collect</h2>

        <p>
          <strong>Email opt-in.</strong> If you subscribe to the newsletter, we collect the email
          address you enter. You provide it voluntarily and consent to receiving emails from Jon at
          the time you submit the form. This is the only personal information the site asks you for.
        </p>

        <p>
          <strong>No accounts.</strong> The site has no login, no user accounts, and no member area.
          Nothing you do here is associated with an identity.
        </p>

        <p>
          <strong>No payments.</strong> The site does not sell anything and does not collect or
          process payment information.
        </p>

        <p>
          <strong>Analytics.</strong> The site may load Google Analytics to measure aggregate traffic.
          It runs under Google Consent Mode with all storage denied by default — no analytics cookies
          are set unless you accept them in the cookie banner. IP addresses are anonymized. We do not
          use advertising pixels, retargeting, or cross-site behavioural tracking.
        </p>

        {/* 2 */}
        <h2>2. How We Use Your Information</h2>

        <p>
          Your email address is used only to send you the newsletter you subscribed to. Analytics
          data, where collected, is used only in aggregate to understand which pages people read.
        </p>

        <p>
          We do not sell, rent, or share your personal information with any third parties for their
          own marketing purposes, under any circumstances.
        </p>

        {/* 3 */}
        <h2>3. Service Providers</h2>

        <p>
          <strong>Kit (formerly ConvertKit)</strong> stores the newsletter mailing list and sends the
          emails. <strong>Sanity</strong> hosts the site&rsquo;s written content; it holds no personal
          information about visitors. <strong>Netlify</strong> hosts the site and keeps standard
          server access logs. Each operates under its own privacy policy as a data processor acting
          on our behalf.
        </p>

        <p>
          While we take reasonable precautions, no method of electronic transmission or storage is
          100% secure.
        </p>

        {/* 4 */}
        <h2>4. Your Rights Under PIPEDA</h2>

        <p>
          As a resident of Canada, you have the following rights with respect to your personal
          information:
        </p>

        <p>
          <strong>Right to access.</strong> You may request a copy of the personal information we
          hold about you at any time.
        </p>

        <p>
          <strong>Right to correct.</strong> If any of your personal information is inaccurate or
          incomplete, you may request that we correct it.
        </p>

        <p>
          <strong>Right to withdraw consent.</strong> You may unsubscribe at any time using the link
          in any email, or by contacting us directly. Unsubscribing removes your address from the
          mailing list.
        </p>

        <p>
          To exercise any of these rights, please use the{' '}
          <Link href="/contact">contact page</Link>. We will respond to requests within 30 days.
        </p>

        {/* 5 */}
        <h2>5. Cookies</h2>

        <p>
          The site sets no cookies of its own. If you accept analytics in the cookie banner, Google
          Analytics sets its own measurement cookies; declining means none are set. Your banner
          choice is remembered locally in your browser so you are not asked repeatedly.
        </p>

        {/* 6 */}
        <h2>6. Policy Updates</h2>

        <p>
          We may update this Privacy Policy from time to time. When we do, the &ldquo;Effective&rdquo; date at
          the top of this page will be updated. We encourage you to review this page periodically.
        </p>

        {/* 7 */}
        <h2>7. Contact</h2>

        <p>
          If you have any questions, concerns, or requests relating to this Privacy Policy or how
          your personal information is handled, please reach out via the{' '}
          <Link href="/contact">contact page</Link>.
        </p>

        <div className="privacy-back">
          <Link href="/">← Back to home</Link>
        </div>

      </div>
    </main>
  )
}
