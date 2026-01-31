/**
 * Centralized page content definitions
 * Eliminates redundant pageContent objects across pages
 */

export const PAGE_CONTENT = {
  dance: {
    headline: 'Dance Portfolio',
    subheadline: 'Choreography, freestyle performances, and artistic movement.',
    ctaTitle: 'Let\'s Create Together',
    ctaDescription: 'Ready to collaborate on a dance project? Reach out with your vision.',
    ctaButtonText: 'Start a Project'
  },
  
  showcase: {
    headline: 'Showcase',
    subheadline: 'Gunpla builds, model photography, and creative hobby projects.',
    gunplaTitle: 'Gunpla Builds',
    gunplaDescription: 'High-quality Gundam model kit builds with professional photography.',
    pokemonTitle: 'Pokémon Collection',
    pokemonDescription: 'Curated Pokémon collectibles and unboxing content.',
    ctaTitle: 'Let\'s Create Together',
    ctaDescription: 'Interested in collaborating on a project?',
    ctaButtonText: 'Get in Touch'
  },

  collaborations: {
    headline: 'Collaborations & Services',
    subheadline: 'Let\'s work together. I\'m open to brand partnerships, sponsored content, and creative projects.',
    ctaTitle: 'Let\'s Make It Happen',
    ctaDescription: 'Have a project in mind? Let\'s discuss how we can create something amazing together.',
    ctaButtonText: 'Get Started'
  },

  contact: {
    headline: 'Get in Touch',
    subheadline: 'Whether you\'re interested in collaboration, have a question, or just want to say hi—I\'d love to hear from you.',
    contactOptions: [
      { icon: '📧', title: 'Email', description: 'jon@example.com' },
      { icon: '🔗', title: 'Instagram', description: '@jonathandance' },
      { icon: '💬', title: 'Twitter', description: '@jontheartist' }
    ]
  },

  mediaKit: {
    headline: 'Media Kit',
    subheadline: 'Audience statistics and engagement metrics'
  }
};

export const DANCE_FILTER_CATEGORIES = ["All", "Choreography", "Freestyle", "Performance"];
