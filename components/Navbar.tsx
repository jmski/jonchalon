'use client';

import Link from 'next/link';
import { useCallback, useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
}

const DEFAULT_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Dance', href: '/dance' },
  { label: 'Showcase', href: '/showcase' },
  { label: 'Collaborations', href: '/collaborations' },
  { label: 'Media Kit', href: '/media-kit' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const LINK_STYLES = 'text-slate-700 dark:text-slate-300 hover:text-amber-900 dark:hover:text-amber-400 transition-colors text-sm font-medium';

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
  const [links, setLinks] = useState<NavLink[]>(DEFAULT_LINKS);

  useEffect(() => {
    // Fetch navigation links from Sanity
    const fetchNavLinks = async () => {
      try {
        const response = await fetch('/api/site-settings');
        const data = await response.json();
        if (data && data.navLinks) {
          setLinks(data.navLinks);
        }
      } catch (error) {
        console.error('Error fetching nav links:', error);
        // Keep default links on error
      }
    };
    fetchNavLinks();
  }, []);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl text-slate-900 dark:text-white hover:text-amber-900 dark:hover:text-amber-400 transition-colors"
          >
            Jonchalon
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={LINK_STYLES}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-900 dark:text-white p-2 transition-transform duration-300"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-800">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`block py-2 ${LINK_STYLES}`}
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
