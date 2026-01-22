export default function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Bento Grid
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          A modern, responsive layout
        </p>
      </div>
    </header>
  );
}
