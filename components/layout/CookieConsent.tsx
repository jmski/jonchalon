'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'jc-cookie-consent-v1'

type Choice = 'granted' | 'denied'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function applyConsent(choice: Choice) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('consent', 'update', {
    analytics_storage: choice,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

// External-store subscription for the consent choice. Storage is the
// authoritative source; using useSyncExternalStore avoids a setState-in-effect
// cascade on mount and stays in sync if another tab updates the choice.
function subscribeStorage(callback: () => void) {
  if (typeof window === 'undefined') return () => {}
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

function getStoredChoice(): Choice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === 'granted' || raw === 'denied') return raw
  } catch {
    // localStorage blocked — banner shows each visit, don't crash.
  }
  return null
}

/**
 * Lightweight Consent Mode v2 banner.
 *
 * Defaults to denied (matching the inline script in `app/layout.tsx`). On
 * user choice we persist to localStorage and call `gtag('consent', 'update')`.
 * Returning visitors with a stored choice are not shown the banner again
 * (their stored value is re-applied on mount).
 */
export default function CookieConsent() {
  const stored = useSyncExternalStore(subscribeStorage, getStoredChoice, () => null)
  const [dismissed, setDismissed] = useState(false)
  const visible = stored === null && !dismissed

  // Re-apply persisted choice to the analytics consent API on every change.
  useEffect(() => {
    if (stored) applyConsent(stored)
  }, [stored])

  const choose = (choice: Choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      /* ignore */
    }
    applyConsent(choice)
    setDismissed(true)
  }

  if (!visible) return null

  return (
    <div role="dialog" aria-label="Cookie preferences" className="cookie-consent">
      <div className="cookie-consent-inner">
        <p className="cookie-consent-text">
          We use a privacy-respecting analytics cookie to understand which pages
          help people most. No ads, no cross-site tracking.{' '}
          <Link href="/privacy" className="cookie-consent-link">
            Privacy policy
          </Link>
          .
        </p>
        <div className="cookie-consent-actions">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="cookie-consent-btn cookie-consent-btn--secondary"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="cookie-consent-btn cookie-consent-btn--primary"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
