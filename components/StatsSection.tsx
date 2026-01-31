import { sanityClient } from '@/lib/sanityClient';
import { statsQuery } from '@/lib/sanityQueries';

interface PlatformStats {
  platform: string;
  followers: number;
  totalViews: number;
  avgEngagementRate: number;
  monthlyGrowth: number;
  profileUrl: string;
  updatedAt: string;
}

export default async function StatsSection() {
  let stats: PlatformStats[] = [];

  try {
    stats = await sanityClient.fetch(statsQuery);
  } catch (error) {
    console.error('Error fetching stats:', error);
    // Return empty or placeholder stats if fetch fails
  }

  if (stats.length === 0) {
    return (
      <section className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-12 text-center font-display">
            By The Numbers
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400">
            Platform metrics coming soon. Follow along to see the journey!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 dark:bg-slate-800 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-12 text-center font-display">
          By The Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <a
              key={stat.platform}
              href={stat.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-6 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow"
            >
              <div className="text-sm font-medium text-amber-900 dark:text-amber-400 mb-2 uppercase tracking-wider">
                {stat.platform}
              </div>
              <div className="text-4xl font-bold text-amber-900 dark:text-amber-400 mb-4">
                {stat.followers ? `${(stat.followers / 1000).toFixed(0)}K` : '-'}
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">Followers</p>

              {stat.totalViews > 0 && (
                <div className="py-3 border-t border-slate-200 dark:border-slate-600">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {stat.totalViews ? `${(stat.totalViews / 1000000).toFixed(1)}M` : '-'}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs">Total Views</p>
                </div>
              )}

              {stat.avgEngagementRate > 0 && (
                <div className="py-3 border-t border-slate-200 dark:border-slate-600">
                  <p className="text-lg font-bold text-amber-900 dark:text-amber-400">
                    {stat.avgEngagementRate}%
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs">Avg Engagement</p>
                </div>
              )}
            </a>
          ))}
        </div>

        <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-8">
          Stats update automatically from Sanity CMS
        </p>
      </div>
    </section>
  );
}
