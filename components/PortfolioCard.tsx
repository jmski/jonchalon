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
    <div className="card-enhanced overflow-hidden h-full group">
      {/* Image */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-slate-800">
          <Image
            src={image}
            alt={title}
            width={500}
            height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }}></div>
          
          {category && (
            <div className="absolute top-3 left-3 group-hover:top-2 group-hover:left-2 transition-all duration-300">
              <span className="badge">{category}</span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6" style={{ background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}>
        <h3 className="text-lg font-bold mb-2 group-hover:transition-colors group-hover:duration-300" style={{ color: 'var(--text-accent-bright)' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
          {description}
        </p>
        {link && (
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: 'var(--text-accent-bright)' }}>
            Learn more <span>→</span>
          </div>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="no-underline">
        {content}
      </a>
    );
  }

  return content;
}
