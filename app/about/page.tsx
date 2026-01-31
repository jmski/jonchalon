import Navbar from "@/components/Navbar";
import ScrollFade from "@/components/ScrollFade";
import { sanityClient } from "@/lib/sanityClient";
import { aboutQuery } from "@/lib/sanityQueries";

export const metadata = {
  title: "About | Jon",
  description: "Dancer, content creator, and otaku. Connecting movement, creativity, and community."
};

interface AboutData {
  headline: string;
  tagline: string;
  bio: Array<{ heading: string; content: string }>;
  philosophy: Array<{ principle: string; description: string }>;
  expertise: Array<{ category: string; skills: string[] }>;
}

export default async function About() {
  let aboutData: AboutData | null = null;

  try {
    aboutData = await sanityClient.fetch(aboutQuery);
  } catch (error) {
    console.error("Error fetching about data:", error);
  }

  if (!aboutData) {
    return <div>Unable to load about page data</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="py-20 sm:py-28">
          <ScrollFade>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 font-display">
              {aboutData.headline}
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              {aboutData.tagline}
            </p>
          </ScrollFade>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          {aboutData.bio.map((section, idx) => (
            <ScrollFade key={idx}>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-display">
                {section.heading}
              </h2>
              <div className="space-y-6 mb-12">
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  {section.content}
                </p>
              </div>
            </ScrollFade>
          ))}
        </section>

        {/* Skills & Expertise */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-display">
              What I Do
            </h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.expertise.map((section, idx) => (
              <ScrollFade key={idx} delay={idx * 100}>
                <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {section.category}
                  </h3>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    {section.skills.map((skill, i) => (
                      <li key={i}>✓ {skill}</li>
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 font-display">
              My Philosophy
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-lg">
              {aboutData.philosophy.map((item, idx) => (
                <p key={idx}>
                  <strong>{item.principle}:</strong> {item.description}
                </p>
              ))}
            </div>
          </ScrollFade>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-slate-200 dark:border-slate-700">
          <ScrollFade>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                Let&apos;s Create Something Together
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Whether it&apos;s a dance collaboration, hobby content, or brand partnership, I&apos;d love to hear your ideas.
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
