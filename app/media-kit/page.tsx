import Navbar from "@/components/Navbar";
import ScrollFade from "@/components/ScrollFade";
import CTASection from "@/components/CTASection";

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
  const fallbackData: MediaKitPageData = {
      headline: 'Media Kit',
      subheadline: 'Audience statistics and engagement metrics',
      keyMetrics: [
        { label: 'Total Followers', value: '150K+', change: '+15% YoY' },
        { label: 'Avg Monthly Views', value: '2.5M', change: '+22% YoY' },
        { label: 'Engagement Rate', value: '4.8%', change: '+0.5% YoY' },
        { label: 'Active Subscribers', value: '85K', change: '+18% YoY' }
      ],
      platforms: [
        { name: 'TikTok', handle: '@jonhandle', followers: '120K', avgViews: '2.1M', category: 'Dance Content' },
        { name: 'Instagram', handle: '@jonhandle', followers: '45K', avgViews: '8K', category: 'Photography & Reels' },
        { name: 'YouTube', handle: '@jonhandle', followers: '32K', avgViews: '125K', category: 'Long-form & Tutorials' }
      ],
      contentCategories: [
        { name: 'Dance Choreography', percentage: 45, description: 'Original choreography and dance covers' },
        { name: 'Tutorials', percentage: 25, description: 'Dance tutorials and how-to content' },
        { name: 'Lifestyle', percentage: 20, description: 'Behind-the-scenes and daily life' },
        { name: 'Collaborations', percentage: 10, description: 'Collaborations with other creators' }
      ],
      audience: {
        age: [
          { range: '13-17', percentage: 15 },
          { range: '18-24', percentage: 45 },
          { range: '25-34', percentage: 25 },
          { range: '35+', percentage: 15 }
        ],
        gender: [
          { label: 'Female', percentage: 68 },
          { label: 'Male', percentage: 28 },
          { label: 'Other', percentage: 4 }
        ],
        locations: [
          { country: 'United States', percentage: 42 },
          { country: 'Canada', percentage: 12 },
          { country: 'United Kingdom', percentage: 10 },
          { country: 'Australia', percentage: 8 },
          { country: 'Other', percentage: 28 }
        ]
      }
    };
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-20 sm:py-28">
          <ScrollFade>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 font-display">
              {fallbackData.headline}
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl">
              {fallbackData.subheadline}
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
            {fallbackData.keyMetrics.map((stat, idx) => (
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
            {fallbackData.platforms.map((platform, idx) => (
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
            {fallbackData.contentCategories.map((category, idx) => (
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
                  {fallbackData.audience.age.map((age, idx) => (
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
                  {fallbackData.audience.gender.map((gender, idx) => (
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
                  {fallbackData.audience.locations.map((location, idx) => (
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
        <CTASection
          title="Download Full Media Kit"
          description="Get a PDF version with complete statistics and collaboration packages."
          buttonText="Download PDF"
          buttonLink="#"
        />
      </main>
    </div>
  );
}
