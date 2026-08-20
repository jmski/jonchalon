// Retirement note: the Coaching group (Programs, The Foundation, Ikigai), the
// Learn group (The Blueprint, The Archives, Presence Audit), and the Account
// group (Sign In) were removed with the coaching routes and the client area.
// The blog itself was removed in the pivot to a creative portfolio.

export const FOOTER_NAV = [
  {
    heading: 'Essentials',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const FALLBACK_SOCIAL = {
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jonchalant', icon: 'in' },
  instagram: { label: 'Instagram', href: 'https://www.instagram.com/jonchalant', icon: 'ig' },
};

// Matches the mailto address on /contact — keep the two in sync.
export const CONTACT_EMAIL = 'hello@jonchalant.com';
