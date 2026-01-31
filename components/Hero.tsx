import VideoEmbed from '@/components/VideoEmbed';

interface HeroProps {
  videoUrl?: string;
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function Hero({
  videoUrl,
  headline,
  subheadline,
  ctaText = "Let's Collaborate",
  ctaLink = '/collaborations',
  secondaryCtaText = 'Explore Work',
  secondaryCtaLink = '/dance',
}: HeroProps) {
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Background video (optional) */}
      {videoUrl && (
        <div className="absolute inset-0 z-0 opacity-30">
          <VideoEmbed
            src={videoUrl}
            title="Hero Video"
            lazy={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24 lg:py-32">
        {/* Accent badge */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-100 text-sm font-semibold backdrop-blur-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Creative Professional
          </span>
        </div>

        {/* Headline with gradient */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-white">
          {headline.split(' ').map((word, idx) => (
            <span
              key={idx}
              className={
                idx === headline.split(' ').length - 1
                  ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600 bg-clip-text text-transparent'
                  : ''
              }
            >
              {word}{' '}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          {subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={ctaLink}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            {ctaText}
            <span className="text-xl">→</span>
          </a>
          <a
            href={secondaryCtaLink}
            className="px-8 py-4 border-2 border-slate-500 text-slate-100 hover:border-orange-500 hover:text-orange-400 font-semibold rounded-lg transition-all duration-300 hover:bg-orange-500/10 backdrop-blur-sm"
          >
            {secondaryCtaText}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
