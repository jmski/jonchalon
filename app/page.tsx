import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Header />
      <BentoGrid />
    </div>
  );
}
