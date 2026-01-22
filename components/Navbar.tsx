export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <h1 className="text-xl font-bold text-black dark:text-white">
              Bento
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Projects
            </a>
            <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
