import Navbar from "@/components/Navbar";
import ScrollFade from "@/components/ScrollFade";
import { sanityClient } from "@/lib/sanityClient";
import { mediaKitPageQuery } from "@/lib/sanityQueries";

export const metadata = {
  title: "Media Kit | Jon",
  description: "Audience statistics, engagement metrics, and media information"
};

interface Stat {
  label: string;
  value: string;
  change: string;
}

interface Platform {
  name: string;
  handle: string;
  followers: string;
  avgViews: string;
  category: string;
}

interface ContentCategory {
  name: string;
  percentage: number;
  description: string;
}

interface AudienceDemographic {
  age: Array<{ range: string; percentage: number }>;
  gender: Array<{ label: string; percentage: number }>;
  locations: Array<{ country: string; percentage: number }>;
}

interface MediaKitPageData {
  headline: string;
  subheadline: string;
  keyMetrics: Stat[];
  platforms: Platform[];
  contentCategories: ContentCategory[];
  audience: AudienceDemographic;
}

export default async function MediaKit() {
  let pageData: MediaKitPageData | null = null;

  try {
    pageData = await sanityClient.fetch(mediaKitPageQuery);
  } catch (error) {
    console.error('Error fetching media kit page:', error);
  }

  if (!pageData) {
    return <div>Unable to load media kit data</div>;
  }
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-20 sm:py-28">
          <ScrollFade>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 font-display">
              {pageData.headline}
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl">
              {pageData.subheadline}
            </p>
          </ScrollFade>
        </div>

        {/* Key Stats */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-display">
              Key Metrics
            </h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageData.keyMetrics.map((stat, idx) => (
              <ScrollFade key={idx} delay={idx * 100}>
                <div
                  className="p-8 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                >
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    {stat.change}
                  </p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </section>

        {/* Platform Breakdown */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-display">
              Platform Presence
            </h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageData.platforms.map((platform, idx) => (
              <ScrollFade key={idx} delay={idx * 100}>
                <div
                  className="p-8 border border-slate-200 dark:border-slate-700 rounded-lg"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {platform.handle}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Followers
                      </p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        {platform.followers}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Avg Views
                      </p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        {platform.avgViews}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-sm text-amber-900 dark:text-amber-400 font-medium">
                        {platform.category}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </section>

        {/* Content Mix */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-display">
              Content Distribution
            </h2>
          </ScrollFade>
          <div className="space-y-6">
            {pageData.contentCategories.map((category, idx) => (
              <ScrollFade key={idx} delay={idx * 100}>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {category.name}
                    </h3>
                    <span className="text-lg font-bold text-amber-900 dark:text-amber-400">
                      {category.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div
                      className="bg-amber-900 dark:bg-amber-700 h-3 rounded-full"
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    {category.description}
                  </p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </section>

        {/* Audience Demographics */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-display">
              Audience Demographics
            </h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Age */}
            <ScrollFade delay={0}>
              <div className="p-8 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Age Distribution
                </h3>
                <div className="space-y-4">
                  {pageData.audience.age.map((age, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {age.range}
                        </span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          {age.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-orange-500 dark:bg-orange-600 h-2 rounded-full"
                          style={{ width: `${age.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFade>

            {/* Gender */}
            <ScrollFade delay={100}>
              <div className="p-8 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Gender
                </h3>
                <div className="space-y-4">
                  {pageData.audience.gender.map((gender, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {gender.label}
                        </span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          {gender.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-amber-900 dark:bg-amber-700 h-2 rounded-full"
                          style={{ width: `${gender.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFade>

            {/* Locations */}
            <ScrollFade delay={200}>
              <div className="p-8 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Top Locations
                </h3>
                <div className="space-y-3">
                  {pageData.audience.locations.map((location, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {location.country}
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        {location.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-700">
          <ScrollFade>
            <div className="rounded-lg p-12 text-center" style={{ background: 'linear-gradient(to right, rgb(120, 53, 15), rgb(194, 102, 0))' }}>
              <h2 className="text-3xl font-bold text-white mb-4 font-display">
                Download Full Media Kit
              </h2>
              <p className="text-amber-100 mb-8">
                Get a PDF version with complete statistics and collaboration packages.
              </p>
              <button className="inline-block bg-white text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
                Download PDF
              </button>
            </div>
          </ScrollFade>
        </section>
      </main>
    </div>
  );
}
