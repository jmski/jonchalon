import VideoEmbed from '@/components/VideoEmbed';

interface HeroProps {
  videoUrl?: string;
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  videoUrl,
  headline,
  subheadline,
  ctaText = "Let's Collaborate",
  ctaLink = '/collaborations',
}: HeroProps) {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background video (optional) */}
      {videoUrl && (
        <div className="absolute inset-0 z-0">
          <VideoEmbed
            src={videoUrl}
            title="Hero Video"
            lazy={false}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${videoUrl ? 'text-white text-center' : 'text-slate-900 dark:text-white'}`}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          {subheadline}
        </p>
        <a href={ctaLink} className="inline-block btn-primary">
          {ctaText}
        </a>
      </div>
    </section>
  );
}
