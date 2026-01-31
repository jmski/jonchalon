import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PortfolioCard from '@/components/PortfolioCard';
import ScrollFade from '@/components/ScrollFade';
import StatsSection from '@/components/StatsSection';
import { sanityClient } from '@/lib/sanityClient';
import { homePageQuery } from '@/lib/sanityQueries';

interface HomePage {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  featuredTitle: string;
  featuredDescription: string;
  offerTitle: string;
  offerDescription: string;
  collaborateTitle: string;
  collaborateDescription: string;
  collaborateButtonText: string;
  services: Array<{ title: string; description: string }>;
}

export default async function Home() {
  let homeData: HomePage | null = null;

  try {
    homeData = await sanityClient.fetch(homePageQuery);
  } catch (error) {
    console.error('Error fetching home data:', error);
  }

  if (!homeData) {
    return <div>Unable to load home page data</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <Hero
        headline={homeData.headline}
        subheadline={homeData.subheadline}
        ctaText={homeData.ctaText}
        ctaLink={homeData.ctaLink}
      />

      {/* Featured Section */}
      <section id="featured" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollFade>
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4 font-display">
            {homeData.featuredTitle}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-12 max-w-2xl text-lg">
            {homeData.featuredDescription}
          </p>
        </ScrollFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollFade delay={100}>
            <PortfolioCard
              title="Choreography Reel"
              description="Original choreography combining hip-hop and contemporary dance"
              category="Dance"
              image="https://images.unsplash.com/photo-1599184861866-38f3d3eeae60?w=500&h=400&fit=crop"
            />
          </ScrollFade>
          <ScrollFade delay={200}>
            <PortfolioCard
              title="Freestyle Jam"
              description="Freestyle dance performance showcasing improvisation skills"
              category="Dance"
              image="https://images.unsplash.com/photo-1598594882280-3ced26c2da9a?w=500&h=400&fit=crop"
            />
          </ScrollFade>
          <ScrollFade delay={300}>
            <PortfolioCard
              title="Gunpla Build Showcase"
              description="Mobile suit builds with professional photography"
              category="Hobby"
              image="https://images.unsplash.com/photo-1612036782180-69c73116e76f?w=500&h=400&fit=crop"
            />
          </ScrollFade>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFade>
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4 font-display">
              {homeData.offerTitle}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-12 max-w-2xl text-lg">
              {homeData.offerDescription}
            </p>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homeData.services.map((service, idx) => (
              <ScrollFade key={idx} delay={idx * 100}>
                <div className="card p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollFade>
          <div className="bg-amber-900 dark:bg-amber-950 text-white rounded-lg p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">
              {homeData.collaborateTitle}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {homeData.collaborateDescription}
            </p>
            <a href="/collaborations" className="inline-block bg-white text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
              {homeData.collaborateButtonText}
            </a>
          </div>
        </ScrollFade>
      </section>

      {/* Stats Section */}
      <StatsSection />
    </div>
  );
}
