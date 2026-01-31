#!/usr/bin/env node

/**
 * Sanity Data Migration Script - Complete
 * Automatically populates ALL hardcoded content into Sanity CMS
 * Run with: npm run migrate
 */

import { createClient } from "next-sanity";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "f0611nfi",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Site Settings
const siteSettings = {
  _id: "singletonSiteSettings",
  _type: "siteSettings",
  siteName: "Jonchalon",
  primaryEmail: "jmski.dev@gmail.com",
  youtubeHandle: "@jonchalon",
  instagramHandle: "@jonchalon",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Dance", href: "/dance" },
    { label: "Showcase", href: "/showcase" },
    { label: "Collaborations", href: "/collaborations" },
    { label: "Media Kit", href: "/media-kit" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

// Home Page
const homePage = {
  _id: "singletonHomePage",
  _type: "homePage",
  headline: "Choreographer, Content Creator & Creative Builder",
  subheadline:
    "Blending 10+ years of dance expertise with content creation across multiple niches. Let's build something authentic together.",
  ctaText: "Explore My Work",
  ctaLink: "#featured",
  featuredTitle: "Featured Work",
  featuredDescription:
    "A curated selection of my best dance videos, creative projects, and recent collaborations",
  offerTitle: "What I Offer",
  offerDescription:
    "Professional services spanning dance, content creation, and brand collaborations",
  collaborateTitle: "Let's Collaborate",
  collaborateDescription:
    "Interested in working together? Explore collaboration opportunities and partnerships",
  collaborateButtonText: "View Collaboration Options",
  services: [
    {
      title: "Dance Services",
      description:
        "Choreography, performance, tutorials, and dance content creation for brands and collaborators",
    },
    {
      title: "Content Creation",
      description:
        "High-quality video production, unboxing/reviews, and lifestyle content in otaku culture niche",
    },
    {
      title: "Brand Collaborations",
      description:
        "Influencer partnerships, sponsored content, and promotional campaigns across multiple niches",
    },
    {
      title: "Media Kit",
      description:
        "Comprehensive audience analytics, engagement metrics, and collaboration packages",
    },
  ],
};

// Dance Page
const dancePageContent = {
  _id: "singletonDancePage",
  _type: "dancePageContent",
  headline: "Dance Portfolio",
  subheadline:
    "A collection of choreography, freestyle performances, and movement moments. Each piece represents growth, creativity, and the joy of moving to music.",
  ctaTitle: "Want to collaborate on a dance project?",
  ctaDescription:
    "I'm open to choreography commissions, performances, and creative collaborations.",
  ctaButtonText: "Let's Work Together",
};

// Showcase Page
const showcasePage = {
  _id: "singletonShowcasePage",
  _type: "showcasePage",
  headline: "Showcase",
  subheadline:
    "Behind the camera: hobby photography, model building, and collection highlights. Where otaku culture meets meticulous craftsmanship.",
  gunplaTitle: "Gunpla Builds",
  gunplaDescription:
    "High-grade and master-grade Gundam model builds with detailed photography and assembly documentation.",
  pokemonTitle: "Pokémon Collection",
  pokemonDescription:
    "Trading card collection documentation, unboxing content, and rare card features spanning decades.",
  ctaTitle: "Share Your Collection",
  ctaDescription:
    "Looking to collaborate on hobby content? Let's create something cool together.",
  ctaButtonText: "Get in Touch",
};

// Collaboration Page
const collaborationPageContent = {
  _id: "singletonCollaborationPage",
  _type: "collaborationPageContent",
  headline: "Let's Work Together",
  subheadline:
    "Open to brand partnerships, sponsored content, event performances, and creative collaborations. Let's create something amazing together.",
  servicesTitle: "Collaboration Services",
  getInTouchTitle: "Get in Touch",
  getInTouchDescription:
    "Have a collaboration idea? Fill out the form below and I'll get back to you as soon as possible!",
  directEmailText: "Prefer to email directly? Reach out to",
  directEmail: "jmski.dev@gmail.com",
};

// Contact Page
const contactPage = {
  _id: "singletonContactPage",
  _type: "contactPage",
  headline: "Get in Touch",
  subheadline:
    "Have a collaboration idea, sponsorship opportunity, or just want to chat? I'd love to hear from you.",
  formTitle: "Send a Message",
  contactOptions: [
    { icon: "📧", title: "Email", value: "jmski.dev@gmail.com" },
    { icon: "🎥", title: "YouTube", value: "@jonchalon" },
    { icon: "📱", title: "Instagram", value: "@jonchalon" },
  ],
  directEmailText: "Have a question? Send us an email",
  directEmail: "jmski.dev@gmail.com",
};

// Media Kit Page
const mediaKitPage = {
  _id: "singletonMediaKitPage",
  _type: "mediaKitPage",
  headline: "Media Kit",
  subheadline:
    "Comprehensive overview of audience, reach, and engagement metrics across all platforms.",
  keyMetricsTitle: "Key Metrics",
  keyMetrics: [
    { label: "Total Videos", value: "150+", change: "+12% YoY" },
    { label: "Total Followers", value: "10K+", change: "+8% YoY" },
    { label: "Avg Views/Video", value: "25K+", change: "+15% YoY" },
    { label: "Engagement Rate", value: "8.5%", change: "+2.3% YoY" },
  ],
  platformTitle: "Platform Presence",
  platforms: [
    {
      name: "YouTube",
      handle: "@jondancelife",
      followers: "8,500",
      avgViews: "28,000",
      category: "Dance & Lifestyle",
    },
    {
      name: "TikTok",
      handle: "@jondance",
      followers: "14,200",
      avgViews: "45,000",
      category: "Short-form Content",
    },
    {
      name: "Instagram",
      handle: "@jondancelife",
      followers: "6,800",
      avgViews: "2,500",
      category: "Reels & Stories",
    },
  ],
  contentCategoriesTitle: "Content Breakdown",
  contentCategories: [
    {
      name: "Dance Content",
      percentage: 60,
      description:
        "Choreography tutorials, freestyle performances, dance challenges",
    },
    {
      name: "Hobby Content",
      percentage: 25,
      description: "Gunpla builds, Pokémon collection features, unboxings",
    },
    {
      name: "Lifestyle & Collab",
      percentage: 15,
      description: "Behind-the-scenes, collaborations, personal moments",
    },
  ],
  audienceTitle: "Audience Demographics",
};

// About Page
const aboutPage = {
  _id: "singletonAbout",
  _type: "about",
  headline: "About Me",
  tagline:
    "Dancer, content creator, and lifelong otaku. I create at the intersection of movement, creativity, and community.",
  bio: [
    {
      _type: "object",
      heading: "The Journey",
      content:
        "I grew up between disciplines. For most of my teenage years, I poured myself into music—clarinet, alto clarinet, bass clarinet—learning the value of structure, precision, and discipline. At the same time, I earned my black belt in Shotokan Karate, mastering patterns called Kata. These routines taught me that discipline and repetition are pathways to mastery. Little did I know, these lessons would become the foundation for everything that came next.",
    },
    {
      _type: "object",
      heading: "The Dance Journey",
      content:
        "In grade 10, something clicked. I stepped into a beginner hip-hop class, and suddenly, movement became my voice. Dance wasn't just physical—it was expression. Over the next decade, I pursued dance with the same intensity I'd brought to karate. I studied lyrical, breaking, and stepping. I competed in hip-hop internationals, auditioned for World of Dance, and battled in local events across Toronto. Dance became my identity.",
    },
    {
      _type: "object",
      heading: "The Break",
      content:
        "But life happens. Career responsibilities pulled me away from the studio around my 4th year of university. For 10 years, dance remained a passion I carried internally rather than expressed externally. Until now.",
    },
    {
      _type: "object",
      heading: "Reigniting the Fire",
      content:
        "Today, I'm reigniting that fire. I have three kids, and my youngest has caught the dance bug. Watching them move with unselfconscious joy has reminded me why I started. I'm building a dance program designed to help others—particularly young people—discover what movement can be. And I'm documenting my own journey: the choreography, the freestyle moments, the hobby passions (Gunpla builds, Pokémon collection), all of it.",
    },
    {
      _type: "object",
      heading: "Creating Authentically",
      content:
        "What I'm creating now isn't just content. It's proof that you can return to what you love. That discipline matters. That combining seemingly different passions—dance, hobbies, family—creates something uniquely authentic. I'm here to collaborate with brands and creators who value that authenticity.",
    },
  ],
  philosophy: [
    {
      _type: "object",
      principle: "Authenticity First",
      description:
        "I only create content and partnerships that align with my values and interests. My audience can tell when something's genuine.",
    },
    {
      _type: "object",
      principle: "Quality Over Quantity",
      description:
        "Whether it's a 10-second dance clip or a 20-minute build timelapse, every piece of content gets full attention and care.",
    },
    {
      _type: "object",
      principle: "Community Matters",
      description:
        "My followers aren't just numbers—they're creative people who love dance, gaming, and otaku culture. I build with them, not at them.",
    },
    {
      _type: "object",
      principle: "Keep Growing",
      description:
        "Every day is a chance to get better at my craft, learn new skills, and push creative boundaries.",
    },
  ],
  expertise: [
    {
      _type: "object",
      category: "Dance & Movement",
      skills: [
        "Choreography & Choreographing",
        "Freestyle & Improvisation",
        "Performance & Events",
        "Dance Tutorials & Breakdowns",
        "Music Video Work",
      ],
    },
    {
      _type: "object",
      category: "Content Creation",
      skills: [
        "Video Production & Editing",
        "Photography & Photo Documentation",
        "Multi-platform Content Strategy",
        "Brand Partnerships & Sponsorships",
        "Community Engagement",
      ],
    },
    {
      _type: "object",
      category: "Hobby Expertise",
      skills: [
        "Gunpla Building & Photography",
        "Model Restoration & Custom Work",
        "Pokémon Card Collecting",
        "Collection Documentation",
        "Hobby Content Creation",
      ],
    },
    {
      _type: "object",
      category: "Business",
      skills: [
        "Collaboration Planning",
        "Event Coordination",
        "Project Management",
        "Analytics & Growth",
        "Brand Strategy",
      ],
    },
  ],
};

// Collaboration Services
const collaborationServices = [
  {
    _type: "collaboration",
    title: "Sponsored Content",
    type: "Service",
    description:
      "Integrate your brand into dance performances, hobby content, or lifestyle pieces.",
  },
  {
    _type: "collaboration",
    title: "Event Performances",
    type: "Service",
    description:
      "Custom choreography and live performances for corporate events, festivals, and brand activations.",
  },
  {
    _type: "collaboration",
    title: "Content Creation",
    type: "Service",
    description:
      "Multi-format content (YouTube, TikTok, Instagram) featuring your products or services.",
  },
  {
    _type: "collaboration",
    title: "Brand Partnerships",
    type: "Service",
    description:
      "Long-term collaboration agreements for ongoing content and ambassador opportunities.",
  },
];

// Stats
const statsData = [
  {
    _type: "stats",
    platform: "Instagram",
    followers: 6800,
    engagementRate: 4.2,
    averageViews: 2500,
  },
  {
    _type: "stats",
    platform: "YouTube",
    followers: 8500,
    engagementRate: 5.8,
    averageViews: 28000,
  },
  {
    _type: "stats",
    platform: "TikTok",
    followers: 14200,
    engagementRate: 7.1,
    averageViews: 45000,
  },
];

async function migrateData() {
  try {
    console.log("🚀 Starting comprehensive Sanity data migration...\n");

    // Site Settings
    console.log("⚙️  Migrating site settings & navigation...");
    await client.createOrReplace(siteSettings);
    console.log("✅ Site settings configured\n");

    // Home Page
    console.log("🏠 Migrating home page content...");
    await client.createOrReplace(homePage);
    console.log("✅ Home page created\n");

    // Dance Page
    console.log("💃 Migrating dance page content...");
    await client.createOrReplace(dancePageContent);
    console.log("✅ Dance page created\n");

    // Showcase Page
    console.log("🎨 Migrating showcase page content...");
    await client.createOrReplace(showcasePage);
    console.log("✅ Showcase page created\n");

    // Collaboration Page
    console.log("🤝 Migrating collaboration page content...");
    await client.createOrReplace(collaborationPageContent);
    console.log("✅ Collaboration page created\n");

    // Contact Page
    console.log("📧 Migrating contact page content...");
    await client.createOrReplace(contactPage);
    console.log("✅ Contact page created\n");

    // Media Kit Page
    console.log("📊 Migrating media kit page content...");
    await client.createOrReplace(mediaKitPage);
    console.log("✅ Media kit page created\n");

    // About Page
    console.log("ℹ️  Migrating about page content...");
    await client.createOrReplace(aboutPage);
    console.log("✅ About page created\n");

    // Collaboration Services
    console.log("🎯 Migrating collaboration services...");
    for (const collab of collaborationServices) {
      const result = await client.create(collab);
      console.log(`  ✅ ${result.title}`);
    }
    console.log();

    // Stats
    console.log("📈 Migrating social media stats...");
    for (const stat of statsData) {
      const result = await client.create(stat);
      console.log(`  ✅ ${result.platform} - ${result.followers} followers`);
    }
    console.log();

    console.log("═".repeat(60));
    console.log("✨ MIGRATION COMPLETE!");
    console.log("═".repeat(60));
    console.log("\n📍 All hardcoded text is now in Sanity Studio!");
    console.log("📖 Visit http://localhost:3333 to edit content\n");
  } catch (error) {
    console.error("❌ Migration failed:", error.message);
    process.exit(1);
  }
}

migrateData();
