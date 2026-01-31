import ScrollFade from "@/components/ScrollFade";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title,
  description,
  buttonText = "Get Started",
  buttonLink = "#"
}: CTASectionProps) {
  return (
    <div className="py-16 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
      <ScrollFade>
        <div className="rounded-lg p-12 text-center border" style={{ background: 'linear-gradient(135deg, #1a1f3a, #0f172a)', borderColor: 'var(--border-accent)' }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display" style={{ background: 'var(--text-gradient-heading)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {title}
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>
          <a
            href={buttonLink}
            className="inline-block text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{ background: 'var(--cta-gradient)', boxShadow: 'var(--shadow-accent-lg)' }}
          >
            {buttonText}
          </a>
        </div>
      </ScrollFade>
    </div>
  );
}
