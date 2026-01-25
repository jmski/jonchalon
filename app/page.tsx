import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Header />
      
      {/* Hero Section with Introduction */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-black bg-linear-to-r text-transparent bg-clip-text mb-6 transition-all duration-300" style={{fontFamily: 'var(--font-press-start)', backgroundImage: 'linear-gradient(to right, #5FDBFD, #80EED3)'}}>
              Who I Am
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
              <p className="text-lg leading-relaxed">
                I'm a creative developer with a passion for building beautiful web experiences while staying true to my passions: hip hop culture, anime, gaming, and dance.
              </p>
              <p className="text-lg leading-relaxed">
                With 10+ years in customer service and a background in sales coaching, I help people navigate their career transitions and reach their goals. Whether you need a website built or guidance on your professional journey, I'm here to help.
              </p>
              <p className="text-lg leading-relaxed">
                I create long and short-form content about dance, sales techniques, mental health, and personal growth. Let's connect and grow together.
              </p>
            </div>
          </div>
          
          {/* Right - Interests Grid */}
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { emoji: '🎤', label: 'Hip Hop' },
                { emoji: '🕺', label: 'Dancing' },
                { emoji: '⚡', label: 'Pokemon' },
                { emoji: '🤖', label: 'Gundam' },
                { emoji: '✨', label: 'Anime' },
                { emoji: '🎮', label: 'Gaming' },
                { emoji: '🗡️', label: 'RO' },
                { emoji: '💻', label: 'Dev' },
                { emoji: '🧠', label: 'Coaching' },
              ].map((interest, idx) => (
                <div
                  key={idx}
                  className="pokemon-card p-6 sm:p-8 text-center hover:scale-110 active:scale-95 transition-transform duration-300"
                >
                  <div className="text-4xl sm:text-5xl mb-3">{interest.emoji}</div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm sm:text-base" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.75rem'}}>
                    {interest.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Skills Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-black bg-linear-to-r text-transparent bg-clip-text mb-12 transition-all duration-300" style={{fontFamily: 'var(--font-press-start)', backgroundImage: 'linear-gradient(to right, #F9C62C, #F4EBA7)'}}>
          What I Offer
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Web Development',
              description: 'Custom websites and applications built with modern technologies',
              icon: '💻',
              details: ['React & TypeScript', 'Next.js', 'Full Stack Solutions']
            },
            {
              title: 'Career Coaching',
              description: 'Navigate transitions and reach your professional goals',
              icon: '🚀',
              details: ['Resume Review', 'Interview Prep', 'Career Strategy']
            },
            {
              title: 'Sales Coaching',
              description: 'Learn proven sales techniques and strategies',
              icon: '📈',
              details: ['Sales Training', 'Technique Coaching', 'Mindset Shift']
            },
            {
              title: 'Content Creation',
              description: 'Long and short-form content on various topics',
              icon: '✍️',
              details: ['Dance Tutorials', 'Life Lessons', 'Mental Health']
            },
            {
              title: 'Personal Growth',
              description: 'Mentorship for personal and professional development',
              icon: '🧠',
              details: ['1-on-1 Sessions', 'Group Workshops', 'Custom Plans']
            },
            {
              title: 'Community Building',
              description: 'Creating spaces where people can connect and grow',
              icon: '👥',
              details: ['Discord Communities', 'Online Groups', 'Events']
            },
          ].map((service, idx) => (
            <div key={idx} className="pokemon-card p-6 sm:p-8 hover:shadow-lg active:scale-95 transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.875rem'}}>
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 font-semibold" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
                    <span style={{color: '#5FDBFD'}}>▸</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="pokemon-card p-8 sm:p-12 bg-linear-to-br from-cyan-500/15 to-mint-500/15 dark:from-cyan-500/10 dark:to-mint-500/10 text-center">
          <h2 className="text-3xl sm:text-4xl font-black bg-linear-to-r text-transparent bg-clip-text mb-6 transition-all duration-300" style={{fontFamily: 'var(--font-press-start)', backgroundImage: 'linear-gradient(to right, #5FDBFD, #00E3B5)'}}>
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
            Whether you're looking to build a website, need career guidance, or want to explore collaborations, I'm here to help you level up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="pokemon-button px-8 py-4 text-lg transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
            >
              Book a Consultation
            </a>
            <a
              href="/projects"
              className="pokemon-card px-8 py-4 text-lg font-bold text-slate-900 dark:text-white transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
              style={{fontFamily: 'var(--font-press-start)', fontSize: '0.875rem', color: '#5FDBFD', borderColor: '#5FDBFD'}}
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* Content Highlights Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-black bg-linear-to-r text-transparent bg-clip-text mb-12 transition-all duration-300" style={{fontFamily: 'var(--font-press-start)', backgroundImage: 'linear-gradient(to right, #F9C62C, #5FDBFD)'}}>
          Latest Content
        </h2>
        <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
          Coming soon! Blog and content library launching soon. Check back to dive into my thoughts on dance, sales, mental health, and personal growth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { category: 'Dance', title: 'Hip Hop Fundamentals', icon: '🕺' },
            { category: 'Sales', title: 'Closing Techniques', icon: '📈' },
            { category: 'Mental Health', title: 'Building Resilience', icon: '🧠' },
          ].map((post, idx) => (
            <div
              key={idx}
              className="pokemon-card p-6 sm:p-8 border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-cyan-400 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{post.icon}</div>
              <p className="text-sm font-bold text-cyan-500 mb-2" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.625rem'}}>
                {post.category.toUpperCase()}
              </p>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
                {post.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-4" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
                Coming soon...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-12 sm:h-20"></div>
    </div>
  );
}
