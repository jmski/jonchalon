import Navbar from "@/components/Navbar";

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text mb-4 transition-all duration-300" style={{fontFamily: 'var(--font-press-start)', backgroundImage: 'linear-gradient(to right, #5FDBFD, #80EED3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-semibold max-w-2xl" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
            Insights on dance, sales techniques, mental health, and personal growth.
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="pokemon-card p-8 sm:p-12 text-center">
          <div className="text-6xl sm:text-8xl mb-6">📝</div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4" style={{fontFamily: 'var(--font-press-start)', fontSize: '1.5rem'}}>
            Coming Soon!
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
            I&apos;m currently working on building out my blog. Check back soon for articles on:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              { icon: '🕺', topic: 'Hip Hop Dance Tutorials' },
              { icon: '📈', topic: 'Sales Techniques & Mindset' },
              { icon: '🧠', topic: 'Mental Health & Resilience' },
              { icon: '💼', topic: 'Career Coaching Insights' },
              { icon: '🎮', topic: 'Gaming & Community' },
              { icon: '✨', topic: 'Personal Growth Journey' },
            ].map((item, idx) => (
              <div key={idx} className="pokemon-card p-4 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
                  {item.topic}
                </p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-8 font-semibold" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
            Subscribe to get notified when new content drops!
          </p>
        </div>
      </main>
    </div>
  );
}
