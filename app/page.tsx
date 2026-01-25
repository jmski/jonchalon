import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PortfolioCard from '@/components/PortfolioCard';
import ScrollFade from '@/components/ScrollFade';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <Hero
        headline="Dancer, Content Creator & Collaborator"
        subheadline="Showcasing dance expertise, creative projects, and exciting partnership opportunities"
        ctaText="Explore My Work"
        ctaLink="#featured"
      />

      {/* Featured Section */}
      <section id="featured" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollFade>
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4" style={{fontFamily: 'Georgia, serif'}}>
            Featured Work
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-12 max-w-2xl text-lg">
            A curated selection of my best dance videos, creative projects, and recent collaborations
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
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4" style={{fontFamily: 'Georgia, serif'}}>
              What I Offer
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-12 max-w-2xl text-lg">
              Professional services spanning dance, content creation, and brand collaborations
            </p>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Dance Services',
                description: 'Choreography, performance, tutorials, and dance content creation for brands and collaborators',
              },
              {
                title: 'Content Creation',
                description: 'High-quality video production, unboxing/reviews, and lifestyle content in otaku culture niche',
              },
              {
                title: 'Brand Collaborations',
                description: 'Influencer partnerships, sponsored content, and promotional campaigns across multiple niches',
              },
              {
                title: 'Media Kit',
                description: 'Comprehensive audience analytics, engagement metrics, and collaboration packages',
              },
            ].map((service, idx) => (
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{fontFamily: 'Georgia, serif'}}>
              Let&apos;s Collaborate
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Interested in working together? Explore collaboration opportunities and partnerships
            </p>
            <a href="/collaborations" className="inline-block bg-white text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
              View Collaboration Options
            </a>
          </div>
        </ScrollFade>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFade>
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-12 text-center" style={{fontFamily: 'Georgia, serif'}}>
              By The Numbers
            </h2>
          </ScrollFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Videos Created', value: '150+' },
              { label: 'Followers', value: '10K+' },
              { label: 'Avg Views', value: '25K+' },
              { label: 'Collaborations', value: '20+' },
            ].map((stat, idx) => (
              <ScrollFade key={idx} delay={idx * 150}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-900 dark:text-amber-400 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">{stat.label}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
