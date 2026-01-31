# Jonchalon - Professional Brand Hub & Digital Media Kit

A modern Next.js 16 portfolio and content management platform for Jon, a professional dancer and multi-niche content creator. Features a sleek, professional design with full Sanity CMS integration for dynamic content management.

---

## 🎯 Project Overview

**Tech Stack**: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Sanity CMS + Netlify

This is a comprehensive digital presence hub combining:

- 💃 Dance portfolio with video embeddings and filtering
- 🎮 Hobby showcases (Gunpla builds & Pokémon collection)
- 🤝 Collaboration opportunities platform
- 📊 Professional media kit with analytics
- 🛠️ Full CMS backend (Sanity) for content management - no code changes needed

---

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev

# Open browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

### Sanity CMS (Local)

```bash
npm run dev:sanity
# Open http://localhost:3333/studio
```

---

## 📋 Environment Setup

### Required Environment Variables

Create `.env.local` with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Sanity Project Details

- **Project ID**: Available in your Sanity project dashboard
- **Dataset**: `production`
- **Studio URL**: `http://localhost:3333/studio` (local development)

---

## 📁 Project Structure

```
jonchalon/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page
│   ├── dance/page.tsx            # Dance portfolio
│   ├── showcase/page.tsx         # Gunpla & Pokémon showcase
│   ├── collaborations/page.tsx   # Collaboration opportunities
│   ├── about/page.tsx            # About page
│   ├── media-kit/page.tsx        # Media kit & analytics
│   ├── contact/page.tsx          # Contact form
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles & design system
│   └── api/inquiries/route.ts    # Form submission API
│
├── components/                   # Reusable React components
│   ├── Navbar.tsx                # Navigation
│   ├── Hero.tsx                  # Hero section
│   ├── CTASection.tsx            # Call-to-action sections
│   ├── PortfolioCard.tsx         # Portfolio item cards
│   ├── StatsSection.tsx          # Analytics/stats display
│   ├── ScrollFade.tsx            # Scroll animation wrapper
│   ├── DanceFilter.tsx           # Portfolio filtering
│   ├── VideoEmbed.tsx            # Video embed component
│   └── CollaborationForm.tsx     # Collaboration inquiry form
│
├── lib/
│   ├── sanityClient.ts           # Sanity CMS client configuration
│   ├── sanityQueries.ts          # Sanity GROQ queries
│   └── pageContent.ts            # Centralized page content
│
├── sanity/                       # CMS schema definitions
│   ├── schema.js                 # Active schemas only
│   └── schemas/                  # Individual schema files
│
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.ts                # Next.js config (Turbopack enabled)
├── postcss.config.mjs            # PostCSS/Tailwind config
├── eslint.config.mjs             # ESLint configuration
└── sanity.config.ts              # Sanity Studio config
```

---

## 🎨 Design System

### Color Palette (CSS Variables in globals.css)

- **Primary Accent**: `#92400e` (dark brown)
- **Secondary Accent**: `#ea580c` (rich orange)
- **CTA Gradient**: Orange gradient (`rgb(249, 115, 22)` → `rgb(234, 88, 12)`)
- **Text**: Slate grays (`#0f172a` → `#64748b`)
- **Backgrounds**: White/slate-50 (light) with dark mode support

### Typography

- **Display Font**: Georgia/Garamond serif (headings)
- **Body Font**: System sans-serif (professional, clean)
- **No decorative fonts** - maintains professional credibility

### Components

- `.card` - Clean card with subtle shadow
- `.btn-primary` - Primary orange button with hover effects
- `.badge` - Small accent color labels
- `.video-container` - Responsive 16:9 video wrapper

---

## 📊 Sanity CMS Integration

### Active Schemas (5 total)

1. **dancePortfolio** - Dance videos/performances
2. **showcase** - Gunpla builds & Pokémon items
3. **collaboration** - Collaboration service offerings
4. **about** - About page content (bio, philosophy, expertise)
5. **stats** - Social media metrics & analytics

### Content Management

All content is managed through Sanity Studio:

```bash
npm run dev:sanity
# Access at http://localhost:3333/studio
```

Dynamic content is automatically fetched and displayed on pages. No code changes required to update content.

---

## 🔧 Key Features Implemented

✅ **Responsive Design** - Mobile-first, tested on all breakpoints
✅ **Dark Mode** - Full dark mode support with CSS variables
✅ **Video Integration** - Lazy-loaded YouTube/Vimeo embeds
✅ **CMS-Driven Content** - All text managed in Sanity
✅ **Type Safety** - Full TypeScript strict mode
✅ **React Compiler** - Automatic memoization enabled
✅ **Performance** - Turbopack enabled for fast builds
✅ **Accessibility** - Semantic HTML, WCAG 2.1 considerations
✅ **SEO** - Metadata on all pages, sitemap ready

---

## 📱 Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, featured work, services overview |
| Dance | `/dance` | Dance portfolio with filtering & CMS content |
| Showcase | `/showcase` | Gunpla & Pokémon collections |
| Collaborations | `/collaborations` | Services & inquiry form |
| About | `/about` | Bio, philosophy, expertise (CMS-driven) |
| Media Kit | `/media-kit` | Audience stats & metrics |
| Contact | `/contact` | Contact form & inquiries |

---

## 🚀 Deployment

### Netlify (Recommended)

1. Connect GitHub repository to Netlify
2. Set environment variables in Netlify dashboard:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```
3. Build command: `npm run build`
4. Publish directory: `.next`

**Status**: ✅ Ready for deployment - zero build errors

---

## 📚 Commands

```bash
# Development
npm run dev              # Start dev server (hot reload)
npm run dev:sanity      # Start Sanity Studio
npm run dev:all         # Start both dev server & Sanity

# Production
npm run build           # Build for production
npm start              # Run production build locally

# Quality
npm run lint           # Run ESLint checks
npm run type-check    # Run TypeScript type checking

# Scripts
npm run export        # Export Sanity schema
```

---

## 🔍 Code Quality

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js + TypeScript rules enforced
- **React Compiler**: Automatic memoization (no manual useMemo/useCallback needed)
- **Turbopack**: Fast incremental builds

---

## 📝 Recent Improvements

✅ **Color System Refactored** - All colors now centralized in CSS variables
✅ **Redundancies Removed** - Deleted unused components and consolidated page content
✅ **Documentation Consolidated** - Single source of truth for setup/deployment
✅ **CTA Styling Unified** - Consistent orange gradient across all pages
✅ **Page Content Centralized** - `lib/pageContent.ts` eliminates duplication

---

## 🤝 Contributing

This is a personal portfolio project. For feature requests or improvements:

1. Create a branch from `main`
2. Make changes following the architecture patterns
3. Test locally: `npm run dev`
4. Build test: `npm run build`
5. Submit pull request

---

## 📄 License

This project is personal and not open source. All rights reserved.

---

## 🆘 Troubleshooting

### Build Issues
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Sanity Connection Issues
- Verify `.env.local` contains correct Project ID and dataset
- Check Sanity project is active at [sanity.io](https://sanity.io)
- Restart dev server: `npm run dev`

### Dark Mode Not Working
- Ensure OS/browser has dark mode preference enabled
- CSS variables respect `prefers-color-scheme` media query
- Clear browser cache

---

## 📞 Support

For questions or issues, refer to:
- Next.js Docs: https://nextjs.org/docs
- Sanity Docs: https://www.sanity.io/docs
- Tailwind CSS: https://tailwindcss.com/docs
