import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <h1 className="text-2xl font-black bg-linear-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent" style={{fontFamily: 'var(--font-press-start)'}}>
              JONCHALON
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-700 dark:text-slate-300 font-semibold hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95 relative" style={{fontFamily: 'var(--font-airbnb-cereal)'}}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-slate-700 dark:text-slate-300 font-semibold hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95 relative" style={{fontFamily: 'var(--font-airbnb-cereal)'}}
            >
              ABOUT
            </Link>
            <Link
              href="/projects"
              className="text-slate-700 dark:text-slate-300 font-semibold hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95 relative" style={{fontFamily: 'var(--font-airbnb-cereal)'}}
            >
              PROJECTS
            </Link>
            <Link
              href="/blog"
              className="text-slate-700 dark:text-slate-300 font-semibold hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95 relative" style={{fontFamily: 'var(--font-airbnb-cereal)'}}
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className="pokemon-button"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
