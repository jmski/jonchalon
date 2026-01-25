import HeroCard from "./HeroCard";
import FeaturedCard from "./FeaturedCard";
import Card from "./Card";

const gridCards = [
  { 
    title: "Design", 
    description: "Beautiful and intuitive user interfaces",
    expandedContent: "I create designs that prioritize user experience, combining modern aesthetics with functional layouts.",
    icon: "🎨"
  },
  { 
    title: "Development", 
    description: "Clean, scalable code",
    expandedContent: "Building robust applications with React, TypeScript, and Next.js, following best practices and modern patterns.",
    icon: "💻"
  },
  { 
    title: "Full Stack", 
    description: "End-to-end solutions",
    expandedContent: "From database architecture to polished UI, I handle complete project lifecycles with expertise.",
    icon: "🚀"
  },
  { 
    title: "Performance", 
    description: "Lightning-fast applications",
    expandedContent: "Optimization is key. I ensure smooth, responsive experiences with best practices for speed and efficiency.",
    icon: "⚡"
  },
  { 
    title: "Modern Stack", 
    description: "Next.js, React & TypeScript",
    expandedContent: "Expert in the latest web technologies and frameworks, staying current with industry trends.",
    icon: "🎯"
  },
  { 
    title: "Innovation", 
    description: "Always learning and growing",
    expandedContent: "Passionate about exploring new technologies and pushing the boundaries of what's possible.",
    icon: "✨"
  },
];

export default function BentoGrid() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {/* Hero Card */}
        <HeroCard />

        {/* Regular Cards */}
        {gridCards.slice(0, 3).map((card, index) => (
          <Card key={index} title={card.title} description={card.description} expandedContent={card.expandedContent} />
        ))}

        {/* Featured Card */}
        <FeaturedCard />

        {/* Remaining Cards */}
        {gridCards.slice(3).map((card, index) => (
          <Card
            key={index + 3}
            title={card.title}
            description={card.description}
            expandedContent={card.expandedContent}
          />
        ))}
      </div>
    </main>
  );
}
