'use client';

import { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  expandedContent?: string;
  className?: string;
  children?: React.ReactNode;
  icon?: string;
}

export default function Card({
  title,
  description,
  expandedContent,
  className = "",
  children,
  icon = "✨",
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`pokemon-card p-6 sm:p-8 flex flex-col justify-between cursor-pointer group active:scale-95 ${className}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl transition-transform duration-300 group-hover:scale-110">{icon}</span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-all duration-300" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.875rem'}}>
            {title}
          </h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 font-medium transition-all duration-300" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>{description}</p>
      </div>
      {isExpanded && expandedContent && (
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-600 animate-fadeIn">
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed transition-all duration-300" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
            {expandedContent}
          </p>
        </div>
      )}
      {children}
    </div>
  );
}
