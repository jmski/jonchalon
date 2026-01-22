export default function HeroCard() {
  return (
    <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-900 dark:to-blue-950 rounded-2xl p-8 flex flex-col justify-between text-white min-h-64">
      <div>
        <h2 className="text-3xl font-bold mb-4">Welcome to Bento</h2>
        <p className="text-lg text-blue-100">
          Design beautiful grid layouts with Tailwind CSS
        </p>
      </div>
      <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors w-fit">
        Get Started
      </button>
    </div>
  );
}
