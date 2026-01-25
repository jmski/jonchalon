export default function Header() {
  return (
    <header className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/30 py-20 sm:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl" style={{backgroundColor: '#5FDBFD'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl" style={{backgroundColor: '#80EED3'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-6 sm:mb-8 animate-fadeIn">
          <p className="text-sm sm:text-base font-bold text-cyan-500 mb-3" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.75rem'}}>
            WELCOME TO MY WORLD
          </p>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black bg-linear-to-r text-transparent bg-clip-text mb-6 transition-all duration-300" style={{fontFamily: 'var(--font-press-start)', backgroundImage: 'linear-gradient(to right, #5FDBFD, #00E3B5)'}}>
          Jonchalon
        </h1>
        
        <p className="text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
          Developer • Coach • Content Creator • Hip Hop Enthusiast
        </p>
        
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
          I build beautiful websites, mentor people through career transitions, share knowledge on sales & personal growth, and celebrate the culture that inspires me.
        </p>
      </div>
    </header>
  );
}
