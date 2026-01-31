
import Navbar from "@/components/Navbar";
import PortfolioCard from "@/components/PortfolioCard";
import ScrollFade from "@/components/ScrollFade";
import { sanityClient } from "@/lib/sanityClient";
import { showcaseQuery, showcasePageQuery } from "@/lib/sanityQueries";

export const metadata = {
  title: "Showcase | Jon",
  description: "Gunpla builds, model photography, and Pokémon collection"
};

interface ShowcaseItem {
  _id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  videoUrl?: string;
}

interface ShowcasePageContent {
  headline: string;
  subheadline: string;
  gunplaTitle: string;
  gunplaDescription: string;
  pokemonTitle: string;
  pokemonDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

export default async function Showcase() {
  let showcaseItems: ShowcaseItem[] = [];
  let pageContent: ShowcasePageContent | null = null;

  try {
    showcaseItems = await sanityClient.fetch(showcaseQuery);
    pageContent = await sanityClient.fetch(showcasePageQuery);
  } catch (error) {
    console.error('Error fetching showcase data:', error);
  }

  if (!pageContent) {
    return <div>Unable to load showcase page data</div>;
  }

  const gunplaShowcase = showcaseItems.filter((item) => item.category === "Gunpla");
  const pokemonShowcase = showcaseItems.filter((item) => item.category === "Pokémon");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
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

        {/* Gunpla Section */}
        <section className="mb-20">
          <ScrollFade>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 font-display">
                {pageContent.gunplaTitle}
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                {pageContent.gunplaDescription}
              </p>
            </div>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gunplaShowcase.map((item, idx) => (
              <ScrollFade key={item._id} delay={idx * 100}>
                <PortfolioCard
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  image={item.image}
                />
              </ScrollFade>
            ))}
          </div>
        </section>

        {/* Pokémon Section */}
        <section className="mb-20">
          <ScrollFade>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 font-display">
                {pageContent.pokemonTitle}
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                {pageContent.pokemonDescription}
              </p>
            </div>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pokemonShowcase.map((item, idx) => (
              <ScrollFade key={item._id} delay={idx * 100}>
                <PortfolioCard
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  image={item.image}
                />
              </ScrollFade>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="py-16 border-t border-slate-200 dark:border-slate-700">
          <ScrollFade>
            <div className="bg-linear-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800 rounded-lg p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
                {pageContent.ctaTitle}
              </h2>
              <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                {pageContent.ctaDescription}
              </p>
              <a
                href="/collaborations"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors"
              >
                {pageContent.ctaButtonText}
                </a>
              </div>
            </ScrollFade>
          </section>
        </main>
      </div>
    </div>
  );
}
