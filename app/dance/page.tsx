import Navbar from "@/components/Navbar";
import ScrollFade from "@/components/ScrollFade";
import DanceFilter from "@/components/DanceFilter";
import CTASection from "@/components/CTASection";
import { sanityClient } from "@/lib/sanityClient";
import { dancePortfolioQuery, dancePageQuery } from "@/lib/sanityQueries";

export const metadata = {
  title: "Dance Portfolio | Jon",
  description: "Dance choreography, freestyle performances, and movement artistry"
};

interface DancePageContent {
  headline: string;
  subheadline: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

const categories = ["All", "Choreography", "Freestyle", "Performance"];

export default async function Dance() {
  let dancePortfolio = [];
  let pageContent: DancePageContent | null = null;

  try {
    dancePortfolio = await sanityClient.fetch(dancePortfolioQuery);
    pageContent = await sanityClient.fetch(dancePageQuery);
  } catch (error) {
    console.error('Error fetching dance data:', error);
  }

  if (!pageContent) {
    return <div>Unable to load dance page data</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-20 sm:py-28">
          <ScrollFade>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 font-display">
              {pageContent.headline}
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              {pageContent.subheadline}
            </p>
          </ScrollFade>
        </div>

        {/* Dynamic Filter and Portfolio */}
        <DanceFilter items={dancePortfolio} categories={categories} />

        {/* CTA Section */}
        <CTASection
          title={pageContent.ctaTitle}
          description={pageContent.ctaDescription}
          buttonText={pageContent.ctaButtonText}
          buttonLink="/collaborations"
        />
      </main>
    </div>
  );
}
