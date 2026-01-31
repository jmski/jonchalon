# Netlify Deployment Guide

Complete guide for deploying the Jonchalon portfolio to Netlify.

## Prerequisites

- GitHub account with repository access
- Netlify account (free tier available)
- Sanity project with API token

## Step-by-Step Deployment

### 1. GitHub Repository Setup

Ensure your code is pushed to GitHub:

```bash
cd c:\Users\JM\OneDrive\Documents\GitHub\jonchalon

# Check git status
git status

# Stage all changes
git add .

# Commit
git commit -m "feat: complete Sanity CMS integration and Netlify deployment setup"

# Push to GitHub
git push origin main
```

### 2. Netlify Project Creation

#### Option A: Using Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize
4. Select your repository (`jonchalon`)
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18
6. Click "Deploy site"

#### Option B: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Create and deploy
netlify init
# Follow prompts to connect GitHub repo
```

### 3. Environment Variables Configuration

In **Netlify Dashboard** → **Site settings** → **Build & deploy** → **Environment**:

Add these variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = f0611nfi
NEXT_PUBLIC_SANITY_DATASET = production
NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-01
SANITY_API_TOKEN = <your_sanity_api_token>
```

⚠️ **Important**: Only add `SANITY_API_TOKEN` as a secret (not in source control).

### 4. Sanity API Token Setup

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project (`jonchalon`)
3. Navigate to **API** → **Tokens**
4. Create new token:
   - Name: "Netlify Production"
   - Permissions: Read + Write
5. Copy token and paste in Netlify environment variables

### 5. Verify Deployment Configuration

Check these files exist in repository:

- ✅ `netlify.toml` - Build configuration
- ✅ `next.config.ts` - Next.js config
- ✅ `.env.local` - Local development (git ignored)
- ✅ `package.json` - All dependencies listed

### 6. Build Verification

Before pushing, test build locally:

```bash
# Clear previous build
rm -rf .next dist

# Run production build
npm run build

# Should complete with:
# - ✓ Compiled successfully
# - ✓ Linting and type checking passed
# - ✓ Routes generated
```

### 7. Deploy

Once GitHub is connected:

1. **Manual Deploy**:
   - Netlify Dashboard → "Deploy site"

2. **Automatic Deploy** (Recommended):
   - Push code to `main` branch
   - Netlify auto-triggers build
   - Check build logs: **Deploys** tab

### 8. Post-Deployment

After deployment completes:

✅ Visit your live site URL (shown in Netlify dashboard)
✅ Verify all pages load correctly
✅ Test contact form
✅ Check Sanity content displays
✅ Monitor build logs for errors

## Configuration Files Explained

### `netlify.toml`

```toml
[build]
  command = "npm run build"        # Build command
  publish = ".next"                # Output directory

[build.environment]
  NODE_VERSION = "18.17.0"        # Node version

# Cache headers for optimal performance
[[headers]]
  for = "/_next/static/*"
  Cache-Control = "public, max-age=31536000, immutable"
```

### Environment Variables

| Variable                         | Purpose                                  | Type   |
| -------------------------------- | ---------------------------------------- | ------ |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | Sanity project ID                        | Public |
| `NEXT_PUBLIC_SANITY_DATASET`     | Sanity dataset name                      | Public |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version                       | Public |
| `SANITY_API_TOKEN`               | Sanity authentication (server-side only) | Secret |

⚠️ **Security**: Prefix `NEXT_PUBLIC_` variables are exposed to browser. Never put sensitive data there.

## Troubleshooting

### Build Fails

**Error: "npm ERR!"**

- Ensure all dependencies in `package.json`
- Run `npm install` locally first
- Check Node version matches `netlify.toml`

**Error: "Cannot find module"**

```bash
# Rebuild dependencies
rm -rf node_modules package-lock.json
npm install
```

### Pages Not Loading

1. Check Netlify build logs for errors
2. Verify environment variables set correctly
3. Confirm Sanity API token valid and has read permissions
4. Test locally: `npm run build && npm run start`

### Sanity Connection Issues

**Error: "Sanity API request failed"**

- Verify `SANITY_API_TOKEN` in Netlify environment
- Check token has read permissions in Sanity dashboard
- Confirm project ID matches (`f0611nfi`)
- Check network tab in browser DevTools

### Build Takes Too Long

- First build may be slow (4-8 minutes)
- Subsequent builds should be 2-3 minutes
- Check Netlify build logs for bottlenecks
- Ensure no large files blocking build

## Monitoring & Logs

### View Build Logs

1. Netlify Dashboard → **Deploys** tab
2. Click latest deploy
3. Scroll to **Build log** section

### Common Log Messages

```
✓ compiled successfully        # Good
✓ linting and checking         # Good
✓ prerendering                 # Good

✗ ERR!                         # Build failed - check error
✗ Cannot find module           # Missing dependency
```

### Monitor Live Site

Use Netlify Analytics (free):

- Dashboard → **Analytics**
- View page views, bandwidth, errors

## Advanced Configuration

### Custom Domain

1. Dashboard → **Domain management**
2. Add custom domain
3. Configure DNS records per provider instructions
4. SSL certificate auto-provisioned via Let's Encrypt

### Branch Previews

Set up automatic preview deploys for branches:

1. Dashboard → **Build & deploy** → **Deploy contexts**
2. Enable "Deploy previews from pull requests"
3. Each PR gets automatic preview URL

### Rollback Previous Deploy

1. Dashboard → **Deploys**
2. Find previous successful deploy
3. Click **...** → **Publish deploy**
4. Site reverts to previous version

## Security Checklist

- ✅ `SANITY_API_TOKEN` stored as environment variable (not in code)
- ✅ API token has minimal permissions needed
- ✅ HTTPS enforced (automatic on Netlify)
- ✅ TypeScript strict mode enabled
- ✅ ESLint configured
- ✅ Build verification passed

## Performance Tips

1. **Caching**: Static assets cached with `netlify.toml` headers (1 year)
2. **Build Size**: React Compiler reduces JavaScript bundle
3. **Image Optimization**: Next.js Image component used throughout
4. **Lazy Loading**: Videos and galleries load on demand

## Support

- Netlify Support: [support.netlify.com](https://support.netlify.com)
- Sanity Support: [sanity.io/support](https://sanity.io/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

## Deployment Status

- ✅ Code ready for Netlify
- ✅ Environment variables configured in Netlify
- ✅ Build process verified locally
- ✅ All pages integrated with Sanity CMS
- ✅ Ready for production deployment

**Next Steps**: Connect GitHub to Netlify and trigger first deploy!
