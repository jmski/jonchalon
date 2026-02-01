'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Dance', href: '/dance' },
  { label: 'Showcase', href: '/showcase' },
  { label: 'Collaborations', href: '/collaborations' },
  { label: 'Media Kit', href: '/media-kit' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav className="sticky top-0 z-40 border-b backdrop-blur-sm bg-opacity-95" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl bg-clip-text text-transparent transition-all duration-300"
          >
            Jonchalon
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 transition-transform duration-300"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            style={{ color: 'var(--text-heading)' }}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block py-2 nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
