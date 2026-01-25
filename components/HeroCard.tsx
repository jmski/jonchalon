'use client';

import { useState } from 'react';

export default function HeroCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="lg:col-span-2 lg:row-span-2 pokemon-card bg-gradient-to-br from-cyan-500/20 to-mint-500/20 dark:from-cyan-500/10 dark:to-mint-500/10 p-8 sm:p-10 flex flex-col justify-between cursor-pointer group active:scale-95"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div>
        <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r text-transparent bg-clip-text mb-4 transition-all duration-300" style={{fontFamily: 'var(--font-press-start)', backgroundImage: 'linear-gradient(to right, #5FDBFD, #80EED3)'}}>
          JONCHALON
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 font-semibold transition-all duration-300" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
          Full-stack developer passionate about creating beautiful, functional applications with modern technologies.
        </p>
      </div>
      {isExpanded && (
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-600 animate-fadeIn">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 transition-all duration-300" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
            With expertise in React, TypeScript, Next.js, and modern UI design, I build applications that combine aesthetics with functionality.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-all duration-300" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
            Let's collaborate and create something amazing together.
          </p>
        </div>
      )}
      <button className="pokemon-button w-fit mt-8">
        VIEW PROFILE
      </button>
    </div>
  );
}
