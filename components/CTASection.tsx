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
    <div className="py-16 border-t border-slate-200 dark:border-slate-700">
      <ScrollFade>
        <div
          className="rounded-lg p-12 text-center"
          style={{
            background: "linear-gradient(to right, rgb(249, 115, 22), rgb(234, 88, 12))"
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
            {title}
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <a
            href={buttonLink}
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors"
          >
            {buttonText}
          </a>
        </div>
      </ScrollFade>
    </div>
  );
}
