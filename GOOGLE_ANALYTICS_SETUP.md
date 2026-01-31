# Google Analytics Setup Guide

## Why Analytics?

Analytics help you understand:

- Which pages users visit most
- Where visitors come from
- What keeps them engaged
- Which CTAs convert (form submissions, clicks to collaborations)
- Demographics and interests

For a creator/brand site, this data is crucial for pitching to collaborators: "My homepage gets 500 visits/month with a 40% click-through to collaborations."

---

## Step 1: Create a Google Analytics Account

1. Go to [google.com/analytics](https://google.com/analytics)
2. Sign in with your Google account (use the same one as your Google Search Console)
3. Click **Start measuring** (or **Create property**)
4. Fill in:
   - **Property name:** "Jonchalon Portfolio"
   - **Data stream name:** "Website"
   - **Website URL:** Your site URL (e.g., `https://jonchalon.com`)
   - **Industry category:** Choose "Creator/Influencer" or "Entertainment"
5. Accept terms and click **Create**

---

## Step 2: Get Your Measurement ID

After creating the property:

1. You'll see a **Measurement ID** (looks like `G-XXXXXXXXXX`)
2. Copy this ID
3. Add to `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual ID.

---

## Step 3: Deploy & Test

### Deploy your site:

```bash
git add .
git commit -m "Add Google Analytics"
git push
```

### Test locally:

1. Run `npm run dev`
2. Open your site in browser
3. Open DevTools (F12) → Console
4. You should see no errors
5. Visit different pages to trigger analytics

### Verify in Google Analytics:

1. Go back to [analytics.google.com](https://analytics.google.com)
2. Select your property
3. Click **Realtime** (left sidebar)
4. In a new tab, visit your website
5. You should see your traffic appear in Realtime within seconds

---

## Step 4: Understand Key Metrics

Once data starts flowing, you'll see:

### **Dashboard Overview**

- **Users:** Unique visitors to your site
- **Sessions:** Number of visits (one person = multiple sessions)
- **Engagement Rate:** % of sessions with interaction
- **Bounce Rate:** % of people who leave without interacting

### **Pages Report**

- Which pages get most traffic
- Which pages have highest engagement
- Which pages convert to form submissions

### **Events** (Advanced)

Track specific actions:

- Form submissions ✓ (already set up)
- Button clicks
- External link clicks
- Video plays

---

## Step 5: Add Custom Events (Optional)

To track when people click the "Let's Collaborate" CTA or submit forms, you can add event tracking:

### Track Button Clicks (in Hero.tsx):

```tsx
<a
  href={ctaLink}
  className="inline-block btn-primary"
  onClick={() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cta_click", {
        cta_text: ctaText,
        cta_page: window.location.pathname,
      });
    }
  }}
>
  {ctaText}
</a>
```

### Track Form Submissions (in CollaborationForm.tsx):

Already tracked! When form submits successfully, it fires an analytics event.

---

## Step 6: Set Up Goals/Conversions

**Goals** track important actions (like form submissions).

1. In Google Analytics, go to **Admin** (⚙️ icon)
2. Under "Property," click **Conversions**
3. Create a new conversion event for "form_submission"
4. Set a monetary value if desired (optional)

Now you can see:

- How many inquiries came from which pages
- Conversion rate: (inquiries / sessions) × 100%

---

## Step 7: Integrate with Search Console (Optional)

Link Google Analytics to Google Search Console for SEO insights:

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership (using Analytics property)
4. Now you'll see search queries that brought people to your site

---

## Understanding the Data

### Monthly Stats You Should Track:

| Metric               | What It Means                 | Good Target             |
| -------------------- | ----------------------------- | ----------------------- |
| **Users**            | Unique people visiting        | 100+ per month to start |
| **Sessions**         | Total visits                  | 150+ per month          |
| **Pages/Session**    | Avg pages per visit           | 2+ (people explore)     |
| **Engagement Rate**  | % with meaningful interaction | 40%+                    |
| **Form Submissions** | Collaboration inquiries       | 5-10 per month is solid |

---

## Reporting to Brands

Once you have data, you can tell prospective collaborators:

> "My brand hub receives **500+ monthly visitors** with an **8% conversion rate to collaboration inquiries**. Audience primarily **18-35, interested in dance, anime, and content creation**."

This makes you credible and hireable!

---

## Privacy Notice

Since you're tracking user data, you should:

1. **Update your privacy policy** to mention Google Analytics
2. **Add a cookie consent banner** (optional but recommended for EU users)
3. Let users know their data is being collected

Simple privacy notice example:

```
"We use Google Analytics to understand how visitors use this site.
No personal information is collected."
```

---

## Troubleshooting

### "Realtime shows nothing"

- Check your `NEXT_PUBLIC_GA_ID` in `.env.local`
- Hard refresh browser (Ctrl+Shift+R)
- Check DevTools Console for errors
- Wait 24-48 hours for data to appear in regular reports

### "I see a lot of (not set) in reports"

- This is normal for new sites
- Data improves as more people visit

### "Form submissions aren't tracked"

- Ensure form is successfully submitting to API
- Check DevTools Network tab for `/api/inquiries` call
- Check Analytics Events for "form_submission" event

---

## Next Steps

1. **Set up Analytics** (this guide)
2. **Monitor for 1-2 weeks** to see traffic patterns
3. **Optimize pages** with low engagement
4. **Use data for collaborations pitch:** "Join creators reaching 500+ monthly visitors"

---

## Resources

- [Google Analytics Help](https://support.google.com/analytics)
- [Next.js + Google Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-analytics)
- [GA Event Tracking](https://support.google.com/analytics/answer/9234069)

**Your Google Analytics ID:** `G-____________` (fill in after setup)

---

Done! Analytics are now tracking your site. Check back weekly to see who's visiting, what they're doing, and where you can improve.
