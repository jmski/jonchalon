'use client';

import { useState } from 'react';

export default function FeaturedCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="lg:col-span-2 pokemon-card bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10 p-8 sm:p-10 flex flex-col gap-6 cursor-pointer group active:scale-95"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div>
        <h3 className="text-3xl font-black bg-gradient-to-r text-transparent bg-clip-text mb-3 transition-all duration-300" style={{fontFamily: 'var(--font-press-start)', backgroundImage: 'linear-gradient(to right, #5FDBFD, #80EED3)', fontSize: '1.5rem'}}>
          FEATURED PROJECT
        </h3>
        <p className="text-slate-700 dark:text-slate-300 font-semibold leading-relaxed transition-all duration-300" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
          A full-featured web application showcasing my expertise in modern web technologies and design.
        </p>
      </div>
      {isExpanded && (
        <div className="pt-6 border-t border-slate-200 dark:border-slate-600 animate-fadeIn">
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4 transition-all duration-300" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.75rem'}}>TECHNOLOGIES</p>
          <div className="flex flex-wrap gap-2">
            <span className="pokemon-badge">React</span>
            <span className="pokemon-badge">TypeScript</span>
            <span className="pokemon-badge">Tailwind CSS</span>
            <span className="pokemon-badge">Next.js</span>
          </div>
        </div>
      )}
    </div>
  );
}
