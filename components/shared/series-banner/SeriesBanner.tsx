import type { FeaturedSeries } from '@/lib/types'

interface SeriesBannerProps {
  featuredSeries?: FeaturedSeries | null
}

const SERIES_SLUG_TO_CATEGORY: Record<string, 'body' | 'presence' | 'work' | 'lab' | 'iki-guys'> = {
  'movement-body': 'body',
  'presence-confidence': 'presence',
  'leadership-career': 'work',
  'the-lab': 'lab',
}

export function SeriesBanner({ featuredSeries }: SeriesBannerProps) {
  if (!featuredSeries?.seriesBannerEnabled) return null

  const {
    seriesStatus,
    seriesName,
    seriesDescription,
    seriesCurrentPhase,
    seriesCtaLabel,
    seriesSlug,
  } = featuredSeries

  return (
    <div className="series-banner">
      <div className="series-banner-inner">
        {seriesStatus && <p className="series-banner-eyebrow">{seriesStatus}</p>}
        {seriesName && <h2 className="series-banner-title">{seriesName}</h2>}
        {seriesDescription && (
          <p className="series-banner-description">{seriesDescription}</p>
        )}
        {seriesCurrentPhase && (
          <p className="series-banner-phase">Currently: {seriesCurrentPhase}</p>
        )}
        {seriesCtaLabel && seriesSlug && (
          <a href={`/blog?category=${SERIES_SLUG_TO_CATEGORY[seriesSlug] ?? seriesSlug}`} className="series-banner-cta">
            {seriesCtaLabel}
          </a>
        )}
      </div>
    </div>
  )
}

export default SeriesBanner
