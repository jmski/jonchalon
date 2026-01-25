import Navbar from "@/components/Navbar";
import ScrollFade from "@/components/ScrollFade";

export const metadata = {
  title: "Collaborations | Jon",
  description: "Brand partnerships, sponsored content, and collaboration opportunities"
};

const services = [
  {
    title: "Sponsored Content",
    description: "Integrate your brand into dance performances, hobby content, or lifestyle pieces.",
    price: "Negotiate per project"
  },
  {
    title: "Event Performances",
    description: "Custom choreography and live performances for corporate events, festivals, and brand activations.",
    price: "Negotiate per event"
  },
  {
    title: "Content Creation",
    description: "Multi-format content (YouTube, TikTok, Instagram) featuring your products or services.",
    price: "Negotiate per package"
  },
  {
    title: "Brand Partnerships",
    description: "Long-term collaboration agreements for ongoing content and ambassador opportunities.",
    price: "Custom rates"
  }
];

const pastCollaborations = [
  {
    brand: "Dance Festival 2025",
    type: "Performance Partner",
    description: "Featured choreography and freestyle demonstration"
  },
  {
    brand: "Music Brand Collaboration",
    type: "Content Creator",
    description: "Dance choreography to emerging artist releases"
  },
  {
    brand: "Hobby Content Creator",
    type: "Model Showcase",
    description: "Gunpla and Pokémon collection features"
  }
];

export default function Collaborations() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="py-20 sm:py-28">
          <ScrollFade>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
              Let's Work Together
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              Open to brand partnerships, sponsored content, event performances, and creative collaborations. Let's create something amazing together.
            </p>
          </ScrollFade>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12" style={{fontFamily: 'Georgia, serif'}}>
              Collaboration Services
            </h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <ScrollFade key={idx} delay={idx * 100}>
                <div
                  className="p-8 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {service.description}
                  </p>
                  <p className="text-lg font-semibold text-amber-900 dark:text-amber-400">
                    {service.price}
                  </p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </section>

        {/* Past Collaborations */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8" style={{fontFamily: 'Georgia, serif'}}>
              Past Collaborations
            </h2>
          </ScrollFade>
          <div className="space-y-4">
            {pastCollaborations.map((collab, idx) => (
              <ScrollFade key={idx} delay={idx * 100}>
                <div
                  className="flex items-start p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {collab.brand}
                    </h3>
                    <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-2">
                      {collab.type}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      {collab.description}
                    </p>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8" style={{fontFamily: 'Georgia, serif'}}>
              Get in Touch
            </h2>
          </ScrollFade>
          <div className="max-w-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Company / Brand
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Collaboration Type
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Select a collaboration type...</option>
                  <option>Sponsored Content</option>
                  <option>Event Performance</option>
                  <option>Content Creation</option>
                  <option>Brand Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your collaboration idea..."
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-900 dark:bg-amber-800 hover:bg-amber-950 dark:hover:bg-amber-900 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </section>

        {/* Info */}
        <div className="py-12 border-t border-slate-200 dark:border-slate-700">
          <p className="text-center text-slate-600 dark:text-slate-400">
            Prefer to email directly? Reach out to jmski.dev@gmail.com
          </p>
        </div>
      </main>
    </div>
  );
}
