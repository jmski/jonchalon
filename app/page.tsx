import type { Metadata } from 'next';
import { PageTransition, SectionWrapper, SectionContent } from '@/components/layout';
import { renderHeadline } from '@/lib/render-headline';

// Temporary landing page. The coaching business is retired and the personal
// creative portfolio has not been designed yet, so this route deliberately holds
// a placeholder rather than stale positioning.
//
// It reads no Sanity content — pageHome was deleted with the other coaching
// singletons. It uses only preserved primitives (SectionWrapper, SectionContent,
// PageTransition, renderHeadline, the .jc-kinetic type class) so the redesign
// starts from the design system rather than from bespoke markup added here.

export const metadata: Metadata = {
  title: 'Jonchalant',
  description: 'Jonchalant — under redesign.',
  alternates: {
    canonical: 'https://jonchalant.com',
  },
  openGraph: {
    title: 'Jonchalant',
    description: 'Under redesign. Back soon.',
    type: 'website',
    url: 'https://jonchalant.com',
    siteName: 'Jonchalant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jonchalant',
    creator: '@jonchalant',
    title: 'Jonchalant',
    description: 'Under redesign. Back soon.',
  },
};

export default function Home() {
  return (
    <PageTransition animation="fade">
      <SectionWrapper variant="primary">
        <SectionContent>
          <div className="home-placeholder">
            <p className="jc-kinetic">
              {renderHeadline('Under {{redesign}}.')}
            </p>
            <p className="home-placeholder-body">
              Jonchalant is being rebuilt as a personal creative portfolio. Back soon.
            </p>
          </div>
        </SectionContent>
      </SectionWrapper>
    </PageTransition>
  );
}
