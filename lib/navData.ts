// ─────────────────────────────────────────────────────────────────────────────
// lib/navData.ts — Navigation link data
//
// Static, typed source of truth for navbar link copy. Mirrors the pattern in
// lib/footerData.ts. Edit nav copy here, not in components/navigation/Navbar.tsx.
//
// Retirement note: the coaching links (Start Here → /ikigai, Programs, The
// Foundation, Lessons) and the "Discover Your Ikigai" mobile CTA were removed
// with those routes. What's left is the structural minimum until the portfolio
// redesign defines the real IA.
// ─────────────────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

export interface MobileNavLink extends NavLink {
  emphasis?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const MOBILE_LINKS: MobileNavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
