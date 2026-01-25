import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioCard from "@/components/PortfolioCard";
import ScrollFade from "@/components/ScrollFade";

export const metadata = {
  title: "Dance Portfolio | Jon",
  description: "Dance choreography, freestyle performances, and movement artistry"
};

const dancePortfolio = [
  {
    id: 1,
    title: "Choreography: Urban Flow",
    category: "Choreography",
    description: "Original choreography set to modern hip-hop, blending street movement with contemporary technique.",
    image: "https://images.unsplash.com/photo-1599184861866-38f3d3eeae60?w=500&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Freestyle Cypher - Music Festival",
    category: "Freestyle",
    description: "Improvisational freestyle performance at summer music festival, 3-minute continuous dance.",
    image: "https://images.unsplash.com/photo-1598594882280-3ced26c2da9a?w=500&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Contemporary Performance",
    category: "Performance",
    description: "Full-length contemporary dance piece exploring storytelling through movement.",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c6ed9c9f8?w=500&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Choreography: K-Pop Cover",
    category: "Choreography",
    description: "Precise choreography recreation with personal stylistic adaptations.",
    image: "https://images.unsplash.com/photo-1590599810694-f3ee930c9895?w=500&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Battle Performance - Street Dance",
    category: "Performance",
    description: "Competitive street dance battle showcasing popping, locking, and freestyle elements.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Freestyle Jam Session",
    category: "Freestyle",
    description: "Organic freestyle moment with live musicians, unplanned and spontaneous.",
    image: "https://images.unsplash.com/photo-1516027306614-7c99dcc0a9b6?w=500&h=400&fit=crop"
  }
];

const categories = ["All", "Choreography", "Freestyle", "Performance"];

export default function Dance() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-20 sm:py-28">
          <ScrollFade>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
              Dance Portfolio
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              A collection of choreography, freestyle performances, and movement moments. Each piece represents growth, creativity, and the joy of moving to music.
            </p>
          </ScrollFade>
        </div>

        {/* Category Filter */}
        <ScrollFade>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  cat === "All"
                    ? "bg-amber-900 dark:bg-amber-700 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-amber-900 dark:hover:bg-amber-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollFade>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {dancePortfolio.map((item, idx) => (
            <ScrollFade key={item.id} delay={idx * 100}>
              <PortfolioCard
                title={item.title}
                category={item.category}
                description={item.description}
                image={item.image}
              />
            </ScrollFade>
          ))}
        </div>

        {/* CTA Section */}
        <div className="py-16 border-t border-slate-200 dark:border-slate-700">
          <ScrollFade>
            <div className="bg-gradient-to-r from-amber-900 to-orange-700 dark:from-amber-800 dark:to-orange-600 rounded-lg p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{fontFamily: 'Georgia, serif'}}>
                Want to collaborate on a dance project?
              </h2>
              <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
                I'm open to choreography commissions, performances, and creative collaborations.
              </p>
              <a
                href="/collaborations"
                className="inline-block bg-white text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors"
              >
                Let's Work Together
              </a>
            </div>
          </ScrollFade>
        </div>
      </main>
    </div>
  );
}
