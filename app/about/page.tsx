import Navbar from "@/components/Navbar";
import ScrollFade from "@/components/ScrollFade";

export const metadata = {
  title: "About | Jon",
  description: "Dancer, content creator, and otaku. Connecting movement, creativity, and community."
};

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="py-20 sm:py-28">
          <ScrollFade>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
              About Me
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              Dancer, content creator, and lifelong otaku. I create at the intersection of movement, creativity, and community.
            </p>
          </ScrollFade>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8" style={{fontFamily: 'Georgia, serif'}}>
              The Journey
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                I grew up with two passions: dance and otaku culture. What started as hip-hop lessons in high school evolved into a lifestyle—I'm obsessed with movement as a form of expression and storytelling. Whether it's choreographing to the latest K-pop release or freestyling to underground beats, dance is where I feel most alive.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Outside of dance, I'm that person who builds Gundam models with meticulous care and collects Pokémon cards like they're going out of style. My hobby photography and model documentation have built a small but passionate community of fellow creators and collectors.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                The natural evolution was content creation. YouTube, TikTok, and Instagram became platforms to share my passions—both dance and hobbies—with people around the world. Over the years, this opened doors to brand collaborations, event performances, and creative partnerships I never expected.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                Today, I'm focused on building authentic partnerships where brands and creators can collaborate meaningfully. I believe in quality over quantity, and every collaboration should be something I genuinely believe in and am excited to share with my community.
              </p>
            </div>
          </ScrollFade>
        </section>

        {/* Skills & Expertise */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8" style={{fontFamily: 'Georgia, serif'}}>
              What I Do
            </h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Dance & Movement",
                items: [
                  "✓ Choreography & Choreographing",
                  "✓ Freestyle & Improvisation",
                  "✓ Performance & Events",
                  "✓ Dance Tutorials & Breakdowns",
                  "✓ Music Video Work"
                ]
              },
              {
                title: "Content Creation",
                items: [
                  "✓ Video Production & Editing",
                  "✓ Photography & Photo Documentation",
                  "✓ Multi-platform Content Strategy",
                  "✓ Brand Partnerships & Sponsorships",
                  "✓ Community Engagement"
                ]
              },
              {
                title: "Hobby Expertise",
                items: [
                  "✓ Gunpla Building & Photography",
                  "✓ Model Restoration & Custom Work",
                  "✓ Pokémon Card Collecting",
                  "✓ Collection Documentation",
                  "✓ Hobby Content Creation"
                ]
              },
              {
                title: "Business",
                items: [
                  "✓ Collaboration Planning",
                  "✓ Event Coordination",
                  "✓ Project Management",
                  "✓ Analytics & Growth",
                  "✓ Brand Strategy"
                ]
              }
            ].map((section, idx) => (
              <ScrollFade key={idx} delay={idx * 100}>
                <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollFade>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-20 bg-amber-50 dark:bg-amber-900/20 p-12 rounded-lg border border-amber-200 dark:border-amber-700">
          <ScrollFade>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
              My Philosophy
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-lg">
              <p>
                <strong>Authenticity First:</strong> I only create content and partnerships that align with my values and interests. My audience can tell when something's genuine.
              </p>
              <p>
                <strong>Quality Over Quantity:</strong> Whether it's a 10-second dance clip or a 20-minute build timelapse, every piece of content gets full attention and care.
              </p>
              <p>
                <strong>Community Matters:</strong> My followers aren't just numbers—they're creative people who love dance, gaming, and otaku culture. I build with them, not at them.
              </p>
              <p>
                <strong>Keep Growing:</strong> Every day is a chance to get better at my craft, learn new skills, and push creative boundaries.
              </p>
            </div>
          </ScrollFade>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-slate-200 dark:border-slate-700">
          <ScrollFade>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4" style={{fontFamily: 'Georgia, serif'}}>
                Let's Create Something Together
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Whether it's a dance collaboration, hobby content, or brand partnership, I'd love to hear your ideas.
              </p>
              <a
                href="/collaborations"
                className="inline-block bg-amber-900 dark:bg-amber-800 hover:bg-amber-950 dark:hover:bg-amber-900 text-white px-8 py-4 rounded-lg font-bold transition-colors"
              >
                Explore Collaborations
              </a>
            </div>
          </ScrollFade>
        </section>
      </main>
    </div>
  );
}
