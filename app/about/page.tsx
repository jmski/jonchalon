import type { Metadata } from 'next';
import { PageTransition, SectionWrapper, SectionContent } from '@/components/layout';

// Placeholder. The previous /about was entirely coaching content — the story
// scroll, the "who this is for" columns, and a coaching CTA, all sourced from the
// deleted pageAbout singleton. The route is kept (it is linked from nav and
// footer) but its content waits for the portfolio redesign.

export const metadata: Metadata = {
  title: 'About',
  description: 'About Jon.',
  alternates: {
    canonical: 'https://jonchalant.com/about',
  },
};

export default function About() {
  return (
    <PageTransition animation="fade">
      <SectionWrapper variant="primary">
        <SectionContent>
          <div className="page-placeholder">
            <h1 className="page-placeholder-title">About</h1>
            <p className="page-placeholder-body">
              This page is being rewritten. Back soon.
            </p>
          </div>
        </SectionContent>
      </SectionWrapper>
    </PageTransition>
  );
}
