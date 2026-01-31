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
      <section className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent mb-12 text-center font-display" style={{ background: 'var(--gradient-heading)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            By The Numbers
          </h2>
          <p className="text-center text-lg" style={{ color: 'var(--text-secondary)' }}>
            Platform metrics coming soon. Follow along to see the journey!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent mb-12 text-center font-display" style={{ background: 'var(--gradient-heading)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          By The Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <a
              key={stat.platform}
              href={stat.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-6 card-enhanced hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-sm font-medium mb-2 uppercase tracking-wider group-hover:transition-colors" style={{ color: 'var(--text-accent-secondary)' }}>
                {stat.platform}
              </div>
              <div className="text-4xl font-bold mb-4 group-hover:transition-colors" style={{ color: 'var(--text-accent-bright)' }}>
                {stat.followers ? `${(stat.followers / 1000).toFixed(0)}K` : '-'}
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>Followers</p>

              {stat.totalViews > 0 && (
                <div className="py-3 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  <p className="text-2xl font-bold mb-1" style={{ color: 'var(--text-light)' }}>
                    {stat.totalViews ? `${(stat.totalViews / 1000000).toFixed(1)}M` : '-'}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Total Views</p>
                </div>
              )}

              {stat.avgEngagementRate > 0 && (
                <div className="py-3 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  <p className="text-lg font-bold group-hover:transition-colors" style={{ color: 'var(--text-accent-secondary)' }}>
                    {stat.avgEngagementRate}%
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Avg Engagement</p>
                </div>
              )}
            </a>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: 'var(--text-muted)' }}>
          Stats update automatically from Sanity CMS
        </p>
      </div>
    </section>
  );
}
