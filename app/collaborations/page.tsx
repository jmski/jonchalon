import Navbar from "@/components/Navbar";
import ScrollFade from "@/components/ScrollFade";
import CollaborationForm from "@/components/CollaborationForm";
import { sanityClient } from "@/lib/sanityClient";
import { collaborationPageQuery, collaborationQuery } from "@/lib/sanityQueries";

export const metadata = {
  title: "Collaborations | Jon",
  description: "Brand partnerships, sponsored content, and collaboration opportunities"
};

interface CollaborationService {
  _id: string;
  title: string;
  description: string;
  price?: string;
}

interface CollaborationPageContent {
  headline: string;
  subheadline: string;
  servicesTitle: string;
  getInTouchTitle: string;
  getInTouchDescription: string;
  directEmailText: string;
  directEmail: string;
}

export default async function Collaborations() {
  let services: CollaborationService[] = [];
  let pageContent: CollaborationPageContent | null = null;

  try {
    services = await sanityClient.fetch(collaborationQuery);
    pageContent = await sanityClient.fetch(collaborationPageQuery);
  } catch (error) {
    console.error('Error fetching collaboration data:', error);
  }

  if (!pageContent) {
    return <div>Unable to load collaborations page data</div>;
  }

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
        <div className="py-12 border-t border-slate-200 dark:border-slate-700">
          <p className="text-center text-slate-600 dark:text-slate-400">
            {pageContent.directEmailText} <a href={`mailto:${pageContent.directEmail}`} className="font-semibold text-amber-900 dark:text-amber-400 hover:underline">{pageContent.directEmail}</a>
          </p>
        </div>
      </main>
    </div>
  );
}
