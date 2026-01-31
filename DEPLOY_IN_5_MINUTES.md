# 🚀 NETLIFY DEPLOYMENT - 5 MINUTE SETUP

Complete Netlify deployment in 5 simple steps.

---

## ✅ Pre-Requisites (Already Done)

- ✅ Code committed to GitHub
- ✅ All Sanity schemas created
- ✅ Build verified locally
- ✅ Environment variables documented
- ✅ netlify.toml configured

---

## 5-Step Deployment Process

### STEP 1: Get Sanity API Token (2 minutes)

1. Open https://sanity.io/manage
2. Click "jonchalon" project
3. Go to **API** tab
4. Click **+ Add API token**
5. Configure:
   - Name: `Netlify Production`
   - Permissions: Check "read" and "write"
6. **Copy the token** (you'll need it in Step 3)

**Status**: ✅

---

### STEP 2: Connect GitHub to Netlify (1 minute)

1. Go to https://netlify.com
2. Click **"Add new site"**
3. Select **"Import an existing project"**
4. Choose **GitHub**
5. Authorize Netlify to access your account
6. Search for and select **"jonchalon"**
7. Click **"Import"**

**Netlify detects Next.js automatically!**

---

### STEP 3: Add Environment Variables (1 minute)

After importing, Netlify shows build settings:

1. **Keep default build settings**
   - Build command: `npm run build` ✅
   - Publish directory: `.next` ✅

2. Scroll down to **"Environment"**

3. Add these 4 variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = f0611nfi
NEXT_PUBLIC_SANITY_DATASET = production
NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-01
SANITY_API_TOKEN = <PASTE_TOKEN_FROM_STEP_1>
```

4. Click **"Save"**

---

### STEP 4: Deploy (5 seconds)

1. Click **"Deploy site"**
2. Watch the build progress
3. First build: 4-8 minutes
4. Wait for green checkmark ✅

**Your site is now LIVE!**

---

### STEP 5: Verify Deployment (1 minute)

Visit your new site:

- URL shown in Netlify dashboard
- Format: `https://[random-name].netlify.app`

Check these work:

- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Content displays from Sanity
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] No console errors (F12)

---

## 🎉 DONE!

Your site is now live on Netlify!

---

## 📝 What Happens Next?

### Automatic Builds

- Every GitHub push triggers auto-build
- Build logs available in Netlify dashboard
- Takes 2-3 minutes per build
- Notified of build failures via email

### Content Updates

- Edit content in Sanity Studio
- Changes live in seconds
- No rebuild needed
- Works automatically!

### Custom Domain (Optional)

1. Go to Netlify dashboard
2. **Domain management** → **Add custom domain**
3. Follow DNS setup instructions
4. SSL certificate auto-provisioned

---

## ⚠️ Troubleshooting

### Build Fails?

- Check Netlify build logs (Deploys tab)
- Most common: Missing environment variables
- Verify all 4 environment variables are set
- Redeploy after fixing

### Content Not Showing?

- Verify Sanity API token is correct
- Check token permissions (read + write)
- Confirm project ID is `f0611nfi`
- Check Sanity Studio has content

### Still Having Issues?

- Check [NETLIFY_DEPLOYMENT.md](NETLIFY_DEPLOYMENT.md) for detailed guide
- Review [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
- See error details in Netlify build logs

---

## 📞 Support

- **Netlify**: https://support.netlify.com
- **Sanity**: https://www.sanity.io/support
- **Next.js**: https://nextjs.org/docs

---

## 🎯 Success Metrics

After deployment:

- ✅ Site accessible at netlify.app URL
- ✅ Pages load in < 2 seconds
- ✅ Sanity content displays correctly
- ✅ Forms functional
- ✅ Mobile responsive
- ✅ Build logs clean

---

**That's it! You're live! 🎉**

For more details, see:

- [Full Deployment Guide](NETLIFY_DEPLOYMENT.md)
- [Deployment Checklist](DEPLOYMENT_CHECKLIST.md)
- [Project README](README_NEW.md)
