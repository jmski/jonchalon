import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-r text-transparent bg-clip-text mb-4" style={{fontFamily: 'var(--font-press-start)', backgroundImage: 'linear-gradient(to right, #5FDBFD, #80EED3)'}}>
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-semibold max-w-2xl" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
            Crafting elegant solutions through code and design.
          </p>
        </div>

        {/* Bio Card */}
        <div className="pokemon-card p-8 sm:p-10 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{fontFamily: 'var(--font-press-start)', fontSize: '1.125rem'}}>
            Hello! I'm Jon
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
            <p className="leading-relaxed">
              I'm a full-stack developer with a passion for building beautiful, functional web applications. With expertise spanning frontend and backend technologies, I create end-to-end solutions that delight users and solve real problems.
            </p>
            <p className="leading-relaxed">
              My journey in tech has been driven by curiosity and a commitment to continuous learning. I stay current with industry trends and best practices, always exploring new technologies and methodologies to improve my craft.
            </p>
            <p className="leading-relaxed">
              When I'm not coding, you'll find me exploring design trends, contributing to open-source projects, or staying updated on the latest web technologies.
            </p>
          </div>
        </div>

        {/* Skills and Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="pokemon-card p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6" style={{fontFamily: 'var(--font-press-start)', fontSize: '1.125rem'}}>Skills</h3>
            <ul className="space-y-3" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
              <li className="flex items-center gap-2">
                <span style={{color: '#5FDBFD'}}>✓</span>
                <span className="text-slate-700 dark:text-slate-300">React & TypeScript</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{color: '#5FDBFD'}}>✓</span>
                <span className="text-slate-700 dark:text-slate-300">Next.js 16</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{color: '#5FDBFD'}}>✓</span>
                <span className="text-slate-700 dark:text-slate-300">Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{color: '#5FDBFD'}}>✓</span>
                <span className="text-slate-700 dark:text-slate-300">Full-Stack Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{color: '#5FDBFD'}}>✓</span>
                <span className="text-slate-700 dark:text-slate-300">Database Design</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{color: '#5FDBFD'}}>✓</span>
                <span className="text-slate-700 dark:text-slate-300">UI/UX Design</span>
              </li>
            </ul>
          </div>

          <div className="pokemon-card p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6" style={{fontFamily: 'var(--font-press-start)', fontSize: '1.125rem'}}>Interests</h3>
            <ul className="space-y-3" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
              <li className="flex items-center gap-2">
                <span style={{color: '#F9C62C'}}>★</span>
                <span className="text-slate-700 dark:text-slate-300">Web Design & UX</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{color: '#F9C62C'}}>★</span>
                <span className="text-slate-700 dark:text-slate-300">Open Source</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{color: '#F9C62C'}}>★</span>
                <span className="text-slate-700 dark:text-slate-300">Cloud Technologies</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{color: '#F9C62C'}}>★</span>
                <span className="text-slate-700 dark:text-slate-300">AI & Machine Learning</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{color: '#F9C62C'}}>★</span>
                <span className="text-slate-700 dark:text-slate-300">Performance Optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{color: '#F9C62C'}}>★</span>
                <span className="text-slate-700 dark:text-slate-300">Tech Communities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Journey Section */}
        <div className="pokemon-card p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6" style={{fontFamily: 'var(--font-press-start)', fontSize: '1.125rem'}}>My Journey</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
            <p>
              My path in technology started with a passion for problem-solving and creating elegant solutions. Since then, I've worked on diverse projects ranging from personal initiatives to collaborative applications with impact.
            </p>
            <p>
              I'm constantly evolving my skillset, staying updated with industry best practices, and contributing to the developer community. Every project is an opportunity to learn something new and deliver exceptional value.
            </p>
            <p>
              My goal is to use technology as a tool to create meaningful experiences and solve real-world problems. Let's build something amazing together.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
