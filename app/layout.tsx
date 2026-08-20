import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { PersonSchema, OrganizationSchema } from "@/lib/schema";
import { Navbar, SiteFooter } from "@/components/navigation";
import MochaCursor from "@/components/utilities/cursor/MochaCursor";
import MochaSweep from "@/components/layout/MochaSweep";
import CookieConsent from "@/components/layout/CookieConsent";
// Validate env at boot — throws on missing required vars.
import "@/lib/env";

// Fraunces loads via Google Fonts @import in globals.css (next/font strips WONK silently).
// DM Sans stays on next/font — no exotic axes, no penalty.
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase lets Next.js resolve relative OG/Twitter image URLs from /public
  metadataBase: new URL("https://jonchalant.com"),

  // title.template appends "| Jonchalant" to every page title automatically.
  // Individual pages should omit the "| Jonchalant" suffix from their own title strings.
  // title.default is used by pages with no metadata export.
  title: {
    default: "Jonchalant",
    template: "%s | Jonchalant",
  },

  // Site-level copy is deliberately minimal while the portfolio redesign is
  // pending. The coaching positioning ("Find the Work You Were Meant For", the
  // ikigai keyword set) was removed with the business it described.
  description: "The personal site of Jon. Currently being rebuilt.",
  authors: [{ name: "Jon", url: "https://jonchalant.com/about" }],
  creator: "Jon",
  publisher: "Jonchalant",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Fallback OG block — individual pages override title/description/url
  openGraph: {
    type: "website",
    siteName: "Jonchalant",
    locale: "en_US",
    title: "Jonchalant",
    description: "The personal site of Jon. Currently being rebuilt.",
    url: "https://jonchalant.com",
  },

  // Fallback Twitter card — individual pages override title/description
  twitter: {
    card: "summary_large_image",
    site: "@jonchalant",
    creator: "@jonchalant",
    title: "Jonchalant",
    description: "The personal site of Jon. Currently being rebuilt.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="default" suppressHydrationWarning className={dmSans.variable}>
      <head>
        {/* Light-only site — tells browser not to apply forced dark-mode styles */}
        <meta name="color-scheme" content="light" />

        {/* Warm Google Fonts connection — Fraunces @import in globals.css */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Warm the connection before GA scripts load (no data sent) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          </>
        )}
      </head>
      <body suppressHydrationWarning>
        <MochaCursor />
        <MochaSweep />
        <Navbar />
        <main className="main-content" id="main-content">
          {children}
        </main>
        <SiteFooter />

        {/* JSON-LD Structured Data — placed at end of body (valid per Google) to avoid
            hydration mismatches from browser extensions that inject scripts into <head> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PersonSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema()) }}
        />

        {/* Google Analytics — afterInteractive defers load until the page is interactive.
            Consent Mode v2: defaults to denied; CookieConsent banner updates on user choice. */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              id="google-consent-default"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'analytics_storage': 'denied',
                    'wait_for_update': 500
                  });
                `,
              }}
            />
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { anonymize_ip: true });
                `,
              }}
            />
            <CookieConsent />
          </>
        )}
      </body>
    </html>
  );
}
