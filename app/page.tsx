import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PortfolioCard from '@/components/PortfolioCard';
import ScrollFade from '@/components/ScrollFade';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';

const homeData = {
  headline: 'Dance Artist & Creator',
  subheadline: 'Transforming movement into stories. Specializing in choreography, content creation, and brand collaborations for creators who move the world.',
  ctaText: 'Start Collaboration',
  ctaLink: '/collaborations',
  secondaryCtaText: 'View Portfolio',
  secondaryCtaLink: '/dance',
  featuredTitle: 'Featured Work',
  featuredDescription: 'Explore my latest choreography, performances, and creative projects.',
  offerTitle: 'What I Offer',
  offerDescription: 'Professional dance content creation and brand collaborations',
  collaborateTitle: 'Ready to Work Together?',
  collaborateDescription: 'Let\'s create something amazing. From sponsored content to collaborations, I\'m always open to exciting opportunities.',
  collaborateButtonText: 'Explore Collaboration Options',
  services: [
    { title: 'Choreography', description: 'Custom choreography for your brand or project' },
    { title: 'Dance Content', description: 'High-quality dance videos for social media' },
    { title: 'Tutorials', description: 'Dance tutorials and how-to content' },
    { title: 'Brand Partnerships', description: 'Sponsored content and brand collaborations' }
  ]
};

export default async function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <Hero
        headline={homeData.headline}
        subheadline={homeData.subheadline}
        ctaText={homeData.ctaText}
        ctaLink={homeData.ctaLink}
        secondaryCtaText={homeData.secondaryCtaText}
        secondaryCtaLink={homeData.secondaryCtaLink}
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
              image="https://picsum.photos/500/400?random=1"
            />
          </ScrollFade>
          <ScrollFade delay={200}>
            <PortfolioCard
              title="Freestyle Jam"
              description="Freestyle dance performance showcasing improvisation skills"
              category="Dance"
              image="https://picsum.photos/500/400?random=2"
            />
          </ScrollFade>
          <ScrollFade delay={300}>
            <PortfolioCard
              title="Gunpla Build Showcase"
              description="Mobile suit builds with professional photography"
              category="Hobby"
              image="https://picsum.photos/500/400?random=3"
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection
          title={homeData.collaborateTitle}
          description={homeData.collaborateDescription}
          buttonText={homeData.collaborateButtonText}
          buttonLink="/collaborations"
        />
      </section>

      {/* Stats Section */}
      <StatsSection />
    </div>
  );
}
