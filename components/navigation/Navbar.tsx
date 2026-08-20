'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, MOBILE_LINKS } from '@/lib/navData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    Promise.resolve().then(() => setMobileOpen(false));
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="jc-nav">
      <Link href="/" className="jc-nav-logo">
        JONCHALANT
      </Link>

      <div className="jc-nav-links">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`jc-nav-link${isActive(link.href) ? ' is-active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="jc-nav-actions">
        <button
          type="button"
          className={`jc-nav-hamburger${mobileOpen ? ' is-open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span className="jc-nav-hamburger-icon">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div className={`jc-nav-mobile${mobileOpen ? ' is-open' : ''}`}>
        <div className="jc-nav-mobile-links">
          {MOBILE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="jc-nav-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.emphasis ? <em>{link.label}</em> : link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
