import Navbar from "@/components/Navbar";
import ScrollFade from "@/components/ScrollFade";

export const metadata = {
  title: "Media Kit | Jon",
  description: "Audience statistics, engagement metrics, and media information"
};

const stats = [
  { label: "Total Videos", value: "150+", change: "+12% YoY" },
  { label: "Total Followers", value: "10K+", change: "+8% YoY" },
  { label: "Avg Views/Video", value: "25K+", change: "+15% YoY" },
  { label: "Engagement Rate", value: "8.5%", change: "+2.3% YoY" }
];

const platforms = [
  {
    name: "YouTube",
    handle: "@jondancelife",
    followers: "8,500",
    avgViews: "28,000",
    category: "Dance & Lifestyle"
  },
  {
    name: "TikTok",
    handle: "@jondance",
    followers: "14,200",
    avgViews: "45,000",
    category: "Short-form Content"
  },
  {
    name: "Instagram",
    handle: "@jondancelife",
    followers: "6,800",
    avgViews: "2,500",
    category: "Reels & Stories"
  }
];

const contentCategories = [
  {
    name: "Dance Content",
    percentage: 60,
    description: "Choreography tutorials, freestyle performances, dance challenges"
  },
  {
    name: "Hobby Content",
    percentage: 25,
    description: "Gunpla builds, Pokémon collection features, unboxings"
  },
  {
    name: "Lifestyle & Collab",
    percentage: 15,
    description: "Behind-the-scenes, collaborations, personal moments"
  }
];

const audience = {
  age: [
    { range: "13-17", percentage: 15 },
    { range: "18-24", percentage: 35 },
    { range: "25-34", percentage: 32 },
    { range: "35-44", percentage: 12 },
    { range: "45+", percentage: 6 }
  ],
  gender: [
    { label: "Male", percentage: 45 },
    { label: "Female", percentage: 48 },
    { label: "Other", percentage: 7 }
  ],
  locations: [
    { country: "United States", percentage: 55 },
    { country: "Canada", percentage: 12 },
    { country: "UK", percentage: 10 },
    { country: "Australia", percentage: 8 },
    { country: "Other", percentage: 15 }
  ]
};

export default function MediaKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-20 sm:py-28">
          <ScrollFade>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
              Media Kit
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl">
              Comprehensive overview of audience, reach, and engagement metrics across all platforms.
            </p>
          </ScrollFade>
        </div>

        {/* Key Stats */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8" style={{fontFamily: 'Georgia, serif'}}>
              Key Metrics
            </h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
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
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8" style={{fontFamily: 'Georgia, serif'}}>
              Platform Presence
            </h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, idx) => (
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
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8" style={{fontFamily: 'Georgia, serif'}}>
              Content Distribution
            </h2>
          </ScrollFade>
          <div className="space-y-6">
            {contentCategories.map((category, idx) => (
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
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8" style={{fontFamily: 'Georgia, serif'}}>
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
                  {audience.age.map((age, idx) => (
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
                  {audience.gender.map((gender, idx) => (
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
                  {audience.locations.map((location, idx) => (
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
            <div className="bg-gradient-to-r from-amber-900 to-orange-700 dark:from-amber-800 dark:to-orange-600 rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily: 'Georgia, serif'}}>
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
