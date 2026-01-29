
import Navbar from "@/components/Navbar";
import PortfolioCard from "@/components/PortfolioCard";
import ScrollFade from "@/components/ScrollFade";
import { sanityClient } from "@/lib/sanityClient";
import { showcaseQuery } from "@/lib/sanityQueries";

export const metadata = {
  title: "Showcase | Jon",
  description: "Gunpla builds, model photography, and Pokémon collection"
};

export default async function Showcase() {
  const showcaseItems = await sanityClient.fetch(showcaseQuery);
  const gunplaShowcase = showcaseItems.filter((item: any) => item.category === "Gunpla");
  const pokemonShowcase = showcaseItems.filter((item: any) => item.category === "Pokémon");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="py-20 sm:py-28">
          <ScrollFade>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
              Showcase
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              Behind the camera: hobby photography, model building, and collection highlights. Where otaku culture meets meticulous craftsmanship.
            </p>
          </ScrollFade>
        </div>

        {/* Gunpla Section */}
        <section className="mb-20">
          <ScrollFade>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2" style={{fontFamily: 'Georgia, serif'}}>
                Gunpla Builds
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                High-grade and master-grade Gundam model builds with detailed photography and assembly documentation.
              </p>
            </div>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gunplaShowcase.map((item: any, idx: number) => (
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
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2" style={{fontFamily: 'Georgia, serif'}}>
                Pokémon Collection
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Trading card collection documentation, unboxing content, and rare card features spanning decades.
              </p>
            </div>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pokemonShowcase.map((item: any, idx: number) => (
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{fontFamily: 'Georgia, serif'}}>
                Share Your Collection
              </h2>
              <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                Looking to collaborate on hobby content? Let's create something cool together.
              </p>
              <a
                href="/collaborations"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </ScrollFade>
        </div>
      </main>
    </div>
  );
}
