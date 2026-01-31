# 🚀 Quick Start Guide - Ready for Netlify

## One-Line Deployment

Connect your GitHub repository to Netlify and set environment variables. That's it!

---

## Essential Information

### Sanity Project Details

- **Project ID**: `f0611nfi`
- **Dataset**: `production`
- **API Version**: `2024-01-01`
- **Studio URL**: `http://localhost:3333/studio` (local)

### Repository

- **GitHub Repo**: jonchalon
- **Branch**: main
- **Deployment Ready**: ✅ Yes

### Build Configuration

- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Node Version**: 18+

---

## Netlify Environment Variables (Copy & Paste)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=f0611nfi
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=<PASTE_YOUR_TOKEN_HERE>
```

**Where to get `SANITY_API_TOKEN`:**

1. Go to sanity.io/manage
2. Select jonchalon project
3. API → Tokens → Create new token
4. Copy token value to Netlify

---

## Local Development

```bash
# Start dev server
npm run dev              # http://localhost:3000

# Start Sanity Studio (another terminal)
npm run sanity          # http://localhost:3333/studio

# Build for production
npm run build

# Run production build
npm run start
```

---

## Key Commands

| Command           | Purpose               |
| ----------------- | --------------------- |
| `npm run dev`     | Development server    |
| `npm run build`   | Production build      |
| `npm run lint`    | Check for errors      |
| `npm run sanity`  | Sanity Studio         |
| `npm run migrate` | Setup initial content |

---

## Pages (All Content Managed in Sanity)

| Page           | URL               | Sanity Doc Type            |
| -------------- | ----------------- | -------------------------- |
| Home           | `/`               | `homePage`                 |
| About          | `/about`          | `about`                    |
| Dance          | `/dance`          | `dancePageContent`         |
| Showcase       | `/showcase`       | `showcasePage`             |
| Collaborations | `/collaborations` | `collaborationPageContent` |
| Media Kit      | `/media-kit`      | `mediaKitPage`             |
| Contact        | `/contact`        | `contactPage`              |

---

## Important Files

- **README_NEW.md** - Full documentation
- **NETLIFY_DEPLOYMENT.md** - Step-by-step deployment guide
- **DEPLOYMENT_CHECKLIST.md** - Pre-deployment verification
- **netlify.toml** - Netlify configuration
- **next.config.ts** - Next.js configuration
- **lib/sanityQueries.ts** - All Sanity queries

---

## Troubleshooting

### Build Fails Locally?

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Sanity Connection Error?

- Verify environment variables in `.env.local`
- Check API token in Sanity dashboard
- Ensure project ID is `f0611nfi`

### Content Not Showing?

- Check Sanity Studio has data
- Run `npm run migrate` to populate initial content
- Verify API token has read permissions

---

## Security Checklist

- ✅ API token in environment variables (not code)
- ✅ HTTPS enabled (Netlify automatic)
- ✅ Security headers configured
- ✅ TypeScript strict mode
- ✅ No hardcoded secrets

---

## Next Steps

1. **Connect to Netlify**
   - Go to netlify.com
   - Connect GitHub repository
   - Add environment variables

2. **Deploy**
   - Netlify auto-builds on push
   - First build: 4-8 minutes
   - Subsequent builds: 2-3 minutes

3. **Verify**
   - Check all pages load
   - Test content displays from Sanity
   - Verify contact form works

4. **Monitor**
   - Check Netlify dashboard for builds
   - Monitor error logs
   - Track site performance

---

## Resources

- **Next.js**: https://nextjs.org/docs
- **Sanity**: https://www.sanity.io/docs
- **Netlify**: https://docs.netlify.com
- **Tailwind**: https://tailwindcss.com/docs

---

**Status**: Ready for production deployment ✅
