# Jonchalon - Professional Brand Hub & Digital Media Kit

A modern Next.js 16 portfolio and content management platform for Jon, a professional dancer and multi-niche content creator. Features a sleek, professional design with full Sanity CMS integration for dynamic content management.

## 🎯 Project Overview

**Tech Stack**: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Sanity CMS

This is a comprehensive digital presence hub combining:
- Dance portfolio with video embeddings
- Hobby showcases (Gunpla/Pokémon)
- Collaboration opportunities platform
- Professional media kit with analytics
- Full CMS backend for content management

**All content is managed through Sanity Studio** - no code changes needed to update text, images, or page content.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Sanity account (free tier available)

### Development Setup

```bash
# Install dependencies
npm install

# Create .env.local with:
NEXT_PUBLIC_SANITY_PROJECT_ID=f0611nfi
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here

# Start development server
npm run dev

# In another terminal, start Sanity Studio
npm run sanity
```

Open [http://localhost:3000](http://localhost:3000) and [http://localhost:3333/studio](http://localhost:3333/studio) (Sanity Studio).

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Production build (optimized with React Compiler + Turbopack)
- `npm run start` - Run production build locally
- `npm run lint` - Run ESLint with TypeScript checks
- `npm run sanity` - Launch Sanity Studio
- `npm run migrate` - Run content migration script (one-time setup)

## 📁 Project Structure

```
app/                        # Next.js App Router pages
  api/                      # API routes for Sanity queries
  page.tsx                  # Home page
  about/page.tsx
  dance/page.tsx
  showcase/page.tsx
  collaborations/page.tsx
  media-kit/page.tsx
  contact/page.tsx
  
components/                 # Reusable React components
  Navbar.tsx               # Dynamic navigation from Sanity
  Hero.tsx                 # Homepage hero section
  Gallery.tsx              # Image gallery with lightbox
  VideoEmbed.tsx           # Lazy-loaded video embeds
  PortfolioCard.tsx        # Portfolio item cards
  CollaborationForm.tsx    # Contact/inquiry form
  
lib/
  sanityClient.ts          # Sanity configuration & client
  sanityQueries.ts         # All Sanity GROQ queries
  
sanity/
  schemas/                 # 15 Sanity document types
    homePage.js
    dancePageContent.js
    showcasePage.js
    collaborationPageContent.js
    contactPage.js
    mediaKitPage.js
    siteSettings.js
    [+ portfolio types]
```

## 🎨 Pages & Content

All pages fetch dynamic content from Sanity CMS:

| Page | URL | Content Managed In Sanity |
|------|-----|--------------------------|
| Home | `/` | Headline, services, featured work, CTA |
| Dance Portfolio | `/dance` | Page title, video portfolio, filters |
| Showcase | `/showcase` | Gunpla/Pokémon sections, descriptions |
| Collaborations | `/collaborations` | Services, past projects, inquiry form |
| Media Kit | `/media-kit` | Stats, platform data, audience demographics |
| About | `/about` | Bio, philosophy, expertise sections |
| Contact | `/contact` | Contact options, form settings |

## 💾 CMS Integration (Sanity)

### Sanity Studio Access
- Local: `http://localhost:3333/studio`
- Project ID: `f0611nfi`
- Dataset: `production`

### Document Types (Schemas)
15 document types configured for managing:
- Page content (headlines, descriptions, CTAs)
- Portfolio items (videos, images, metadata)
- Collaboration services
- Media kit statistics
- Site settings (navigation, contact info)

### Content Management Workflow
1. Edit content in Sanity Studio
2. Changes deploy live instantly (no rebuild needed)
3. API queries in `lib/sanityQueries.ts` fetch and render content
4. Pages render content dynamically using React components

### Setup Content (One-time)
```bash
npm run migrate
```
This populates Sanity with all initial content.

## 🔧 Configuration Files

- **`next.config.ts`** - React Compiler + Turbopack enabled
- **`tsconfig.json`** - TypeScript strict mode, ES2017 target
- **`sanity.config.ts`** - Sanity Studio configuration
- **`postcss.config.mjs`** - Tailwind CSS v4
- **`app/globals.css`** - CSS variables, custom classes, Tailwind imports
- **`netlify.toml`** - Netlify deployment configuration

## 🎨 Design System

### Color Palette
- **Primary**: Slate gray (`--slate-900`, `--slate-700`)
- **Accent**: Amber brown + Orange (`#b45309`, `#f97316`)
- **Background**: Clean white/slate with dark mode support

### Typography
- **Font**: System sans-serif (no decorative fonts)
- **Hierarchy**: H1-H6 with Tailwind scale
- **Classes**: `.card`, `.btn-primary`, `.badge`, `.video-container`

## 🚢 Deployment

### Netlify Integration (Ready to Deploy)

1. **Connect Repository**
   - Push code to GitHub
   - Link repository in Netlify dashboard

2. **Environment Variables**
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=f0611nfi
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   SANITY_API_TOKEN=your_token_here
   ```

3. **Build Settings** (auto-detected)
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18+

4. **Deploy**
   - Connect GitHub repo in Netlify
   - Set environment variables
   - Netlify auto-triggers builds on push

### Pre-Deployment Checklist
- [ ] All environment variables configured in Netlify
- [ ] Run `npm run build` locally - should complete without errors
- [ ] Test contact form submissions
- [ ] Verify Sanity API token has read/write permissions
- [ ] Check that all pages load and display content

## 📊 Performance Optimizations

- **React Compiler**: Automatic memoization, no manual `useMemo`/`useCallback`
- **Turbopack**: 4-5x faster builds than webpack
- **Server Components**: Pages render on server by default (smaller JS bundles)
- **Image Optimization**: Next.js Image component for thumbnails
- **Lazy Loading**: Video embeds and galleries load on demand
- **Tailwind CSS v4**: Reduced CSS bundle with CSS variables

## 🔐 Security

- API token stored securely in `.env.local` (git ignored)
- SANITY_API_TOKEN only used server-side (not exposed to browser)
- Next.js built-in CSRF protection
- TypeScript strict mode catches type errors at build time
- ESLint enforces best practices

## 📝 Development Guidelines

### Adding a New Page
1. Create `app/newpage/page.tsx`
2. Define TypeScript interface for page data
3. Fetch from Sanity: `const data = await sanityClient.fetch(query)`
4. Render using components from `components/`
5. Follow page structure template (see existing pages)

### Creating New Content Type
1. Create schema in `sanity/schemas/newType.js`
2. Add to schema registry in `sanity/schema.js`
3. Add GROQ query to `lib/sanityQueries.ts`
4. Use query in page component
5. Rebuild Sanity: `npm run sanity`

### Updating Existing Content
- All text content: Sanity Studio interface
- Styling/layout: React components + Tailwind
- Site structure/pages: Add route in `app/`

## 🐛 Troubleshooting

### Sanity Connection Issues
```bash
# Verify credentials
cat .env.local

# Rebuild Sanity config
npm run sanity build

# Check API token permissions in Sanity dashboard
```

### Build Errors
```bash
# Clear build cache
rm -rf .next dist
npm run build
```

### TypeScript Errors
```bash
npm run lint  # Show all type errors
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Netlify Next.js Guide](https://docs.netlify.com/frameworks/next-js/overview/)

## 📄 License

Private project. All rights reserved.
