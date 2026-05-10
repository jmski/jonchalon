// ─────────────────────────────────────────────────────────────────────────────
// lib/navData.ts — Navigation link data
//
// Static, typed source of truth for navbar link copy. Mirrors the pattern in
// lib/footerData.ts. Edit nav copy here, not in components/navigation/Navbar.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

export interface MobileNavLink extends NavLink {
  emphasis?: boolean
}

export interface MobileCta {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Start Here', href: '/ikigai' },
  { label: 'Programs', href: '/programs' },
  { label: 'Lessons', href: '/lessons' },
  { label: 'About', href: '/about' },
]

export const MOBILE_LINKS: MobileNavLink[] = [
  { label: 'Start Here', href: '/ikigai', emphasis: true },
  { label: 'Programs', href: '/programs' },
  { label: 'The Foundation', href: '/foundation' },
  { label: 'Lessons', href: '/lessons' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const MOBILE_CTA: MobileCta = {
  label: 'Discover Your Ikigai',
  href: '/ikigai',
}
