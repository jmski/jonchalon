import Image from 'next/image';

interface PortfolioCardProps {
  title: string;
  description: string;
  image?: string;
  category?: string;
  link?: string;
}

export default function PortfolioCard({
  title,
  description,
  image,
  category,
  link,
}: PortfolioCardProps) {
  const content = (
    <div className="card overflow-hidden h-full hover:border-accent-primary transition-colors group">
      {/* Image */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            width={500}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {category && (
            <div className="absolute top-3 left-3">
              <span className="badge">{category}</span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="group no-underline">
        {content}
      </a>
    );
  }

  return content;
}
