import HeroCard from "./HeroCard";
import FeaturedCard from "./FeaturedCard";
import Card from "./Card";

const gridCards = [
  { title: "Design", description: "Beautiful and modern" },
  { title: "Responsive", description: "Works on all devices" },
  { title: "Fast", description: "Optimized performance" },
  { title: "Flexible", description: "Customize easily" },
  { title: "Modern", description: "Latest technologies" },
  { title: "Scalable", description: "Grows with your needs" },
];

export default function BentoGrid() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {/* Hero Card */}
        <HeroCard />

        {/* Regular Cards */}
        {gridCards.slice(0, 3).map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}

        {/* Featured Card */}
        <FeaturedCard />

        {/* Remaining Cards */}
        {gridCards.slice(3).map((card, index) => (
          <Card
            key={index + 3}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </main>
  );
}
