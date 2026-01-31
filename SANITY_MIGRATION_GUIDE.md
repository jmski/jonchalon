# Complete Sanity CMS Migration Guide

## Overview

Your website is now fully integrated with Sanity CMS. All content is dynamically fetched from Sanity instead of being hardcoded. This guide walks you through setting up your Sanity project and adding your content.

---

## PART 1: Sanity Project Setup (Do This First!)

### Step 1: Create/Access Your Sanity Project

If you don't have a Sanity project yet:

1. Go to [sanity.io](https://www.sanity.io)
2. Sign in or create an account
3. Create a new project named "jonchalon" (or similar)
4. Choose the "With Next.js" starter template (or blank if you prefer)
5. Once created, you'll get a **Project ID** - save this!

### Step 2: Update Your Environment Variables

In your Next.js project, create or update `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID_HERE
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Where to find your Project ID:**

- Log in to [manage.sanity.io](https://manage.sanity.io)
- Click your project
- Settings → Project Details → Project ID (copy the long string)

### Step 3: Configure Sanity Tokens for Mutations (Form Submissions)

Since your form will submit to Sanity, you need a token:

1. Go to **Settings → API → Tokens**
2. Create a new token named "form-submission-token"
3. Give it these permissions:
   - `datasets.read`
   - `documents.read`
   - `documents.write`
   - `documents.create`
4. Copy the token and add to `.env.local`:

```
SANITY_API_TOKEN=YOUR_TOKEN_HERE
```

Update `sanityClient.ts`:

```typescript
import { createClient } from "next-sanity";

const token = process.env.SANITY_API_TOKEN;

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "f0611nfi",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to false for mutations
  token: token, // Add this line
});
```

---

## PART 2: Launch Sanity Studio

Sanity Studio is the CMS interface where you'll add content.

### Option A: Use Sanity Hosted Studio (Easiest)

1. In your Sanity project, go to **Settings → Studio**
2. Click "Go to Studio" - opens at `https://projectid.sanity.studio`
3. Log in with your Sanity account
4. You're now in the CMS!

### Option B: Run Studio Locally

```bash
# In your project directory
npm install -g @sanity/cli
sanity manage  # Opens your project settings
sanity start   # Starts local studio at http://localhost:3333
```

---

## PART 3: Add Your Content

### A. Platform Stats (Metrics)

Navigate to **Stats** in your Sanity Studio sidebar.

**Click "Create"** and add entries for each platform:

#### Example 1: YouTube

```
Platform: YouTube
Followers: 0 (start with 0, update as you grow)
Total Views: 0
Avg Engagement Rate: 0
Monthly Growth: 0
Profile URL: https://youtube.com/@yourhandle
Last Updated: (auto-populated)
```

#### Example 2: TikTok

```
Platform: TikTok
Followers: 0
Total Views: 0
Avg Engagement Rate: 0
Monthly Growth: 0
Profile URL: https://tiktok.com/@yourhandle
Last Updated: (auto-populated)
```

#### Example 3: Instagram

```
Platform: Instagram
Followers: 0
Total Views: 0
Avg Engagement Rate: 0
Monthly Growth: 0
Profile URL: https://instagram.com/yourhandle
Last Updated: (auto-populated)
```

**💡 Tip:** Once your accounts are live and you have real metrics, come back and update these numbers. The homepage automatically displays whatever you add here!

---

### B. Dance Portfolio

Navigate to **Dance Portfolio** in the sidebar.

**Click "Create"** and add your dance videos:

#### Example Entry

```
Title: Choreography - [Song Name]
Category: Choreography (or Freestyle, Performance)
Description: Brief description of the piece (200 characters max)
Video URL: https://youtube.com/embed/VIDEO_ID or Vimeo link
Thumbnail: Upload an image (400x300px works well)
Published At: 2024-01-29 (today's date)
```

**Where to get Video URLs:**

- **YouTube**: Go to video → Share → Embed → Copy the `src` URL from the iframe
  - Example: `https://www.youtube.com/embed/dQw4w9WgXcQ`
- **Vimeo**: Similar process - Share → Embed → Copy src URL

**Repeat for each choreography/freestyle/performance video you want to feature.**

---

### C. Showcase (Gunpla & Pokémon)

Navigate to **Showcase**.

#### Gunpla Example

```
Title: High Grade Gundam RX-78-2
Category: Gunpla
Description: Detailed build with custom paint work and photography setup
Image: Upload your best Gunpla photos
Video URL: (optional - timelapse builds)
Published At: 2024-01-29
```

#### Pokémon Example

```
Title: First Edition Base Set Booster Box Unboxing
Category: Pokémon
Description: Rare unboxing of original 1999 Pokémon cards
Image: Upload collection photos
Video URL: (optional - unboxing video)
Published At: 2024-01-29
```

**Add 3-6 showcase items to start. Users will see these on `/showcase`**

---

### D. About Page

Navigate to **About Page** (singular).

**Click "Create"** or edit the existing one:

```
Headline: Choreographer, Content Creator & Creative Builder
Tagline: Blending 10+ years of dance expertise with content creation

Bio Sections (Array - add multiple):
  Section 1:
    Heading: "The Journey"
    Content: [Your bio text - already pre-filled, but you can edit]

  Section 2:
    Heading: "Building for the Future"
    Content: "I'm creating a dance program for young people..."

Profile Image: Upload a professional headshot

Philosophy Points (Array):
  Principle: "Authenticity First"
  Description: "I only create partnerships that align with my values..."

  Principle: "Quality Over Quantity"
  Description: "Every piece of content gets full attention and care..."

Expertise (Array):
  Category: "Dance & Movement"
  Skills: ["Choreography", "Hip-hop", "Freestyle", "Lyrical", "Breaking"]

  Category: "Content Creation"
  Skills: ["Video Production", "Photography", "Multi-platform strategy"]
```

---

### E. Collaboration Inquiries

Navigate to **Collaboration Inquiry**.

**This section is auto-populated** when someone fills out the form on your `/collaborations` page. You'll see submissions here with:

- Name, email, company
- Collaboration type they requested
- Their message
- Status (New → Read → Replied → Archived)

**You don't need to add anything—users do via the form.**

---

## PART 4: Update Homepage Stats

The homepage displays platform stats from Sanity **automatically**.

To see stats appear:

1. Add entries in the **Stats** section (see Part 3.A above)
2. Deploy your site (or test locally with `npm run dev`)
3. Homepage shows the stats you added

**As you grow:**

- Update follower counts periodically
- Add engagement rates
- Add total view counts
- The homepage updates automatically!

---

## PART 5: Redeploy Your Website

Once you've added content to Sanity:

### If Deployed on Vercel:

```bash
git add .
git commit -m "Integrate Sanity CMS"
git push origin main
# Vercel auto-deploys
```

### If Running Locally:

```bash
npm run dev
# Open http://localhost:3000
```

---

## PART 6: Real-Time Metrics (Advanced)

To pull **live** metrics from platforms automatically, you'd need API keys from each platform. This is advanced and optional:

- **YouTube API**: Get subscriber/view counts automatically
- **TikTok API**: Fetch follower counts (limited for personal use)
- **Instagram Graph API**: Pull follower data

For now, manually updating stats in Sanity is fine. Once you're ready, we can add automation.

---

## Troubleshooting

### "Sanity Studio won't load"

- Check your Project ID in `.env.local`
- Verify your token has correct permissions
- Clear browser cache and reload

### "Form submissions aren't appearing in Sanity"

- Check your `SANITY_API_TOKEN` is set in `.env.local`
- Verify token has `documents.write` and `documents.create` permissions
- Check browser console for error messages

### "Stats don't appear on homepage"

- Verify you've created at least one "Stats" document in Sanity
- Publish the document (click "Publish" button)
- Hard-refresh homepage (Ctrl+Shift+R or Cmd+Shift+R)

### "Portfolio items not showing on dance/showcase pages"

- Verify `Published At` date is set
- Make sure category matches the page (Choreography, Freestyle, etc.)
- Click "Publish" on each document

---

## Quick Checklist

✓ Create Sanity project  
✓ Add `NEXT_PUBLIC_SANITY_PROJECT_ID` to `.env.local`  
✓ Create API token and add `SANITY_API_TOKEN` to `.env.local`  
✓ Add platform stats (YouTube, TikTok, Instagram, etc.)  
✓ Add 3-5 dance portfolio videos  
✓ Add 3-5 showcase items (Gunpla/Pokémon)  
✓ Update About page content  
✓ Deploy website  
✓ Test form submission

---

## Next Steps

Once basic content is live:

1. **Create real portfolio content** - Dance videos, build photos
2. **Update stats as you grow** - Follower counts, view counts
3. **Post regularly** - Keep content fresh on Instagram/TikTok
4. **Respond to inquiries** - People will submit collaboration requests via the form
5. **Optimize for SEO** - Add metadata to Sanity documents (advanced)

---

## Support & Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://www.sanity.io/community)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/build-a-website-using-next-js)

---

**You're all set!** Your website is now a full CMS-powered application. Add content to Sanity, and it automatically appears on your site. No more code changes needed to update portfolio items, stats, or about information.
