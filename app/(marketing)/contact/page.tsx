import type { Metadata } from 'next'
import { PageTransition, SectionWrapper, SectionContent } from '@/components/layout'

// The previous /contact ran SegmentedInquiryForm, which posted to /api/inquiries,
// wrote the lead to Supabase, notified via Resend, and surfaced in /admin/inquiries.
// That whole pipeline was retired, so the form had nowhere left to submit.
//
// Rather than leave a form pointing at a deleted endpoint, this is a plain mailto.
// It works with no backend, no database, and no third-party service. If the
// portfolio redesign wants a real form back, it needs a new destination first.

const CONTACT_EMAIL = 'hello@jonchalant.com'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Jon.',
  alternates: {
    canonical: 'https://jonchalant.com/contact',
  },
}

export default function Contact() {
  return (
    <PageTransition animation="fade">
      <SectionWrapper variant="primary">
        <SectionContent>
          <div className="page-placeholder">
            <h1 className="page-placeholder-title">Contact</h1>
            <p className="page-placeholder-body">
              The best way to reach me is email.
            </p>
            <p className="page-placeholder-links">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
        </SectionContent>
      </SectionWrapper>
    </PageTransition>
  )
}
