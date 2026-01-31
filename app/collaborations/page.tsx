import Navbar from "@/components/Navbar";
import ScrollFade from "@/components/ScrollFade";
import CTASection from "@/components/CTASection";
import CollaborationForm from "@/components/CollaborationForm";
import { sanityClient } from "@/lib/sanityClient";
import { collaborationQuery } from "@/lib/sanityQueries";

export const metadata = {
  title: "Collaborations | Jon",
  description: "Brand partnerships, sponsored content, and collaboration opportunities"
};

const pageContent = {
  headline: 'Collaborations & Services',
  subheadline: 'Let\'s create something amazing together. From sponsored content to brand partnerships.',
  servicesTitle: 'Services & Collaboration Types',
  getInTouchTitle: 'Get in Touch',
  getInTouchDescription: 'Ready to collaborate? Fill out the form below with your project details.'
};

export default async function Collaborations() {
  let services: any[] = [];

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

        {/* Services Grid */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 font-display">
              {pageContent.servicesTitle}
            </h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <ScrollFade key={service._id} delay={idx * 100}>
                <div
                  className="p-8 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {service.description}
                  </p>
                  {service.price && (
                    <p className="text-lg font-semibold text-amber-900 dark:text-amber-400">
                      {service.price}
                    </p>
                  )}
                </div>
              </ScrollFade>
            ))}
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-display">
              {pageContent.getInTouchTitle}
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-12 max-w-2xl">
              {pageContent.getInTouchDescription}
            </p>
          </ScrollFade>
          <div className="max-w-2xl">
            <CollaborationForm />
          </div>
        </section>

        {/* Info */}
        <CTASection
          title="Ready to Collaborate?"
          description="Let's create something amazing together. Reach out using the form above or connect with me on social media."
          buttonText="Get Started"
          buttonLink="#contact-form"
        />
      </main>
    </div>
  );
}
