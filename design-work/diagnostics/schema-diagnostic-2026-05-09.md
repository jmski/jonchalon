# Schema Diagnostic — 2026-05-09

## 1. Document Type Inventory

| Name | Purpose | Singleton or multi-instance | Field count | Number of consuming components | Number of consuming pages |
|---|---|---|---:|---:|---:|
| pageHome | Home page content model | Singleton | 17 | 9 | 1 |
| pageAbout | About page content model | Singleton | 4 | 3 | 1 |
| pageIkigai | Ikigai page content model | Singleton | 7 | 1 | 1 |
| pageFoundation | Foundation page content model | Singleton | 18 | 2 | 1 |
| pagePrograms | Programs page content model | Singleton | 9 | 4 | 1 |
| pageLessons | Lessons index page content model | Singleton | 4 | 0 | 0 |
| pageBlog | Blog index page content model | Singleton | 13 | 3 | 1 |
| pageContact | Contact page content model | Singleton | 8 | 1 | 1 |
| pageAudit | Audit page content model | Singleton | 5 | 2 | 1 |
| starterGuideCapture | Shared starter-guide capture block | Singleton | 6 | 1 | 5 |
| newsletterCapture | Shared newsletter capture block | Singleton | 7 | 3 | 2 |
| auditCta | Shared audit CTA block | Singleton | 5 | 1 | 2 |
| pillarSet | Shared pillar definitions | Singleton | 1 | 1 | 1 |
| fourCirclesSet | Shared four-circles definitions | Singleton | 1 | 0 | 0 |
| siteConfig | Global nav/footer/microcopy config | Singleton | 22 | 2 | 7 |
| testimonial | Testimonial collection | Multi-instance | 9 | 2 | 1 |
| caseStudy | Case study collection | Multi-instance | 11 | 1 | 1 |
| lesson | Module-based lesson collection | Multi-instance | 16 | 4 | 6 |
| course | Course collection | Multi-instance | 22 | 4 | 8 |
| courseLesson | Flat-course lesson collection (Four Circles) | Multi-instance | 11 | 0 | 2 |
| blogPost | Blog post collection | Multi-instance | 11 | 3 | 4 |
| module | Module collection | Multi-instance | 12 | 3 | 6 |
| curriculumWeek | Programs curriculum-week tiles | Multi-instance | 6 | 1 | 1 |

Notes:
- Singleton status is enforced by Sanity desk structure in sanity/structure.ts.
- curriculumWeek is defined in sanity/schemas/curriculumWeek.ts and queried in lib/sanity.ts, but is not included in active schema registration in sanity/schemas/index.ts.

## 2. Per-Document Field Inventory

### pageHome

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| hero | hero | no | no | 1 | consistent with page hero block |
| methodHeader | sectionHeader | no | no | 1 | header naming consistent |
| methodSteps | array&lt;object&gt; | yes | no | 1 | steps plural is clear |
| pillarsHeader | sectionHeader | no | no | 1 | consistent |
| pillarSet | reference&lt;pillarSet&gt; | no | yes | 1 | set suffix is clear |
| meetJonHeader | sectionHeader | no | no | 1 | page-specific semantic in name |
| meetJonImage | image | no | yes | 1 | clear |
| meetJonBodyParagraphs | array&lt;text&gt; | yes | yes | 1 | verbose but clear |
| meetJonPrimaryLink | cta | no | no | 1 | link vs cta mixed terminology |
| meetJonSecondaryLink | cta | no | no | 1 | link vs cta mixed terminology |
| testimonialsHeader | sectionHeader | no | yes | 1 | clear |
| blogPreviewHeader | sectionHeader | no | no | 1 | clear |
| blogPreviewPerCardCtaLabel | string | yes | no | 0 | long, specific, currently unused |
| blogPreviewSectionCta | cta | no | no | 0 | clear, currently unused |
| newsletter | reference&lt;newsletterCapture&gt; | no | yes | 1 | clear |
| auditCta | reference&lt;auditCta&gt; | no | yes | 1 | acronym style consistent |
| starterGuide | reference&lt;starterGuideCapture&gt; | no | yes | 1 | clear |

### pageAbout

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| hero | hero | no | yes | 0 | defined, currently not rendered on route |
| storyBeats | array&lt;object&gt; | yes | no | 1 | metaphorical name, meaning clear in context |
| whoFor | object | no | no | 1 | concise and clear |
| cta | ctaBlock | no | no | 1 | abbreviation style differs from “link” usage elsewhere |

### pageIkigai

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| hero | hero | no | no | 0 | queried, not used on current route |
| fourCirclesHeader | sectionHeader | no | no | 0 | clear |
| fourCirclesSet | reference&lt;fourCirclesSet&gt; | no | yes | 0 | set suffix clear |
| quizBridge | object | no | no | 0 | “bridge” semantic not obvious without context |
| quizNote | text (readOnly) | no | yes | 0 | note field is editorial-only |
| starterGuide | reference&lt;starterGuideCapture&gt; | no | yes | 1 | clear |
| cta | ctaBlock | no | no | 0 | queried, not used |

### pageFoundation

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| hero | hero | no | no | 1 | consistent |
| heroMicrocopyUnderCtas | string | no | no | 1 | “ctas” abbreviation style |
| whoForHeader | string | yes | no | 1 | clear |
| whoForLede | string | yes | no | 1 | “lede” editorial term; uncommon in codebase |
| whoForBullets | array&lt;string&gt; | yes | no | 1 | clear |
| whyDanceHeader | sectionHeader | no | no | 1 | dance-specific naming |
| whyDanceBodyParagraphs | array&lt;text&gt; | yes | yes | 1 | clear |
| curriculumHeader | sectionHeader | no | no | 1 | clear |
| curriculumModules | array&lt;object&gt; | yes | no | 1 | clear |
| howItWorksHeader | sectionHeader | no | no | 1 | consistent with other pages |
| howItWorksColumns | array&lt;object&gt; | yes | no | 1 | clear |
| enrollmentHeader | sectionHeader | no | no | 1 | clear |
| enrollmentCards | array&lt;programCard&gt; | yes | no | 1 | clear |
| enrollmentFootnote | text | no | no | 1 | clear |
| faqHeader | string | yes | no | 1 | acronym style |
| faqItems | array&lt;faqItem&gt; | yes | no | 1 | acronym style |
| softCta | ctaBlock | no | no | 1 | “soft” semantic depends on business context |
| starterGuide | reference&lt;starterGuideCapture&gt; | no | yes | 1 | clear |

### pagePrograms

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| hero | hero | no | no | 1 | consistent |
| heroWhoForColumn | object | no | no | 1 | clear but long |
| caseStudiesHeader | sectionHeader | no | no | 1 | plural naming consistent |
| programCardsHeader | sectionHeader | no | yes | 1 | clear |
| programCards | array&lt;programCard&gt; | yes | no | 1 | clear |
| faqHeader | string | yes | no | 1 | acronym style |
| faqItems | array&lt;faqItem&gt; | yes | no | 1 | acronym style |
| closingCta | ctaBlock | no | no | 1 | clear |
| starterGuide | reference&lt;starterGuideCapture&gt; | no | yes | 1 | clear |

### pageLessons

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| hero | hero | no | no | 0 | defined but no active consumer |
| courses | array&lt;reference&lt;course&gt;&gt; | yes | no | 0 | clear |
| closingCta | ctaBlock | no | no | 0 | clear |
| starterGuide | reference&lt;starterGuideCapture&gt; | no | yes | 0 | clear |

### pageBlog

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| hero | hero | no | no | 1 | consistent |
| seriesBannerEnabled | boolean | no | no | 1 | flag naming clear |
| seriesName | string | no | yes | 1 | clear |
| seriesSlug | string | no | yes | 1 | clear |
| seriesStatus | string | no | yes | 1 | semantic depends on content convention |
| seriesDescription | text | no | yes | 1 | clear |
| seriesCurrentPhase | string | no | yes | 1 | clear |
| seriesCtaLabel | string | no | yes | 1 | cta abbreviation style |
| filterPillsNote | text (readOnly) | no | yes | 0 | editorial note only |
| postsListNote | text (readOnly) | no | yes | 0 | editorial note only |
| newsletter | reference&lt;newsletterCapture&gt; | no | yes | 1 | clear |
| auditCta | reference&lt;auditCta&gt; | no | yes | 1 | acronym style |
| emptyState | object | no | no | 1 | clear |

### pageContact

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| hero | hero | no | no | 1 | consistent |
| heroStats | array&lt;object&gt; | no | yes | 1 | clear |
| inquiryCards | array&lt;object&gt; | yes | no | 1 | clear |
| whatHappensNextHeader | string | yes | no | 1 | verbose but explicit |
| whatHappensNextSteps | array&lt;object&gt; | yes | no | 1 | clear |
| thingsWorthKnowingHeader | string | yes | no | 1 | verbose but explicit |
| thingsWorthKnowingItems | array&lt;object&gt; | yes | no | 1 | clear |
| emailFallback | object | no | no | 1 | clear |

### pageAudit

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| hero | hero | no | no | 1 | consistent |
| heroMicrocopy | string | yes | no | 1 | clear |
| midQuizEncouragement | object | no | no | 1 | semantic depends on page context |
| resultBands | object | no | no | 1 | clear |
| starterGuide | reference&lt;starterGuideCapture&gt; | no | yes | 1 | clear |

### starterGuideCapture

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| eyebrow | string | no | no | 1 | common pattern |
| headline | string | yes | yes | 1 | common pattern |
| body | text | yes | yes | 1 | common pattern |
| firstNamePlaceholder | string | yes | no | 1 | clear |
| emailPlaceholder | string | yes | no | 1 | clear |
| submitLabel | string | yes | no | 1 | clear |

### newsletterCapture

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| eyebrow | string | no | no | 2 | common pattern |
| headline | string | yes | yes | 2 | common pattern |
| subhead | text | yes | yes | 2 | differs from “body/description” naming elsewhere |
| emailLabel | string | yes | no | 2 | clear |
| emailPlaceholder | string | yes | no | 2 | clear |
| submitLabel | string | yes | no | 2 | clear |
| microcopy | string | yes | yes | 2 | clear |

### auditCta

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| eyebrow | string | yes | no | 0 | present but generally not rendered |
| headline | string | yes | yes | 1 | clear |
| body | text | yes | yes | 1 | clear |
| primaryCta | cta | yes | no | 1 | cta abbreviation style |
| microcopy | string | yes | yes | 1 | clear |

### pillarSet

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| pillars | array&lt;pillarCard&gt; | yes | yes | 1 | clear |

### fourCirclesSet

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| circles | array&lt;object&gt; | yes | yes | 0 | clear |

### siteConfig

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| contactEmail | string | yes | yes | 1 | clear |
| wordmark | string | yes | no | 0 | clear |
| desktopLinks | array&lt;link&gt; | yes | no | 0 | clear |
| rightSideLinks | array&lt;link&gt; | no | no | 0 | clear |
| mobileLinks | array&lt;link&gt; | yes | no | 0 | clear |
| mobilePersistentCta | cta | yes | yes | 0 | cta abbreviation style |
| brandLine | string | yes | no | 1 | clear |
| columns | array&lt;object&gt; | yes | no | 0 | generic name |
| accountSection | object | no | no | 0 | clear |
| copyright | string | yes | no | 1 | clear |
| privacyLink | cta | yes | no | 1 | link vs cta naming mix |
| socialLinks | array&lt;object&gt; | no | yes | 1 | clear |
| successStates | array&lt;object&gt; | yes | yes | 2 | clear |
| submitError | string | yes | no | 0 | clear |
| validation | object | yes | no | 0 | generic name |
| loadingLabel | string | yes | no | 0 | clear |
| notFoundHeadline | string | yes | yes | 0 | clear |
| notFoundBody | text | yes | yes | 0 | clear |
| notFoundLinks | array&lt;link&gt; | yes | no | 0 | clear |
| notFoundMicrocopy | string | yes | no | 0 | clear |
| signIn | object | no | no | 0 | auth naming style |
| signUp | object | no | no | 0 | auth naming style |

### testimonial

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| clientName | string | yes | no | 2 | clear |
| role | string | no | yes | 2 | broad semantic |
| company | string | no | no | 2 | clear |
| quote | text | yes | no | 2 | clear |
| result | string | no | yes | 2 | semantic can vary by testimonial |
| image | image | no | no | 2 | clear |
| featured | boolean | no | yes | 0 | operational flag |
| serviceType | string | no | no | 0 | semantic unclear without taxonomy docs |
| order | number | no | no | 0 | operational ordering field |

### caseStudy

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| title | string | yes | no | 1 | common |
| slug | slug | no | no | 1 | clear |
| clientName | string | yes | no | 1 | clear |
| industry | string | no | no | 1 | clear |
| challenge | text | no | no | 1 | clear |
| solution | text | no | no | 1 | clear |
| results | array&lt;string&gt; | no | no | 1 | clear |
| testimonial | text | no | no | 0 | overlaps concept with testimonial documents |
| image | image | no | no | 1 | clear |
| featured | boolean | no | no | 0 | operational flag |
| order | number | no | no | 0 | operational ordering field |

### lesson

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| title | string | yes | no | 4 | common |
| slug | slug | yes | no | 4 | common |
| access | string | yes | no | 4 | clear |
| lessonNumber | string | no | yes | 0 | number stored as string; differs from courseLesson |
| description | text | yes | yes | 4 | common |
| format | string | no | yes | 0 | semantic unclear without controlled-vocabulary docs |
| emphasis | string | no | yes | 0 | semantic unclear without taxonomy docs |
| videoId | string | no | yes | 2 | clear |
| body | array&lt;portableText+image&gt; | no | yes | 3 | clear |
| socialLogic | text | no | yes | 1 | domain-specific term |
| technicalNotes | array&lt;object&gt; | no | yes | 1 | clear |
| duration | number | no | yes | 3 | naming differs from estimatedMinutes/estimatedDuration |
| order | number | yes | yes | 3 | operational ordering |
| module | reference&lt;module&gt; | yes | yes | 3 | clear |
| publishedAt | datetime | no | no | 0 | common publishing field |

### course

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| title | string | yes | no | 4 | common |
| slug | slug | yes | no | 4 | common |
| description | text | yes | no | 4 | common |
| philosophy | text | no | yes | 0 | concept-specific; currently unused |
| targetAudience | text | no | yes | 0 | clear |
| totalEstimatedHours | number | no | yes | 0 | duration naming differs across models |
| contentPillars | array&lt;object&gt; | no | yes | 0 | overlaps concept with pillarSet |
| lessonStructure | array&lt;object&gt; | no | yes | 0 | clear |
| thumbnail | image | no | no | 2 | clear |
| difficulty | string | yes | no | 4 | clear |
| estimatedDuration | string | yes | yes | 2 | duration naming differs from lesson.duration |
| isFeatured | boolean | no | yes | 0 | operational flag |
| modules | array&lt;reference&lt;module&gt;&gt; | no | yes | 4 | clear |
| order | number | no | yes | 4 | operational ordering |
| courseType | string | no | yes | 2 | clear |
| subtitle | string | no | yes | 2 | overlaps subhead/description naming |
| heroImage | image | no | no | 1 | clear |
| ctaText | string | no | yes | 1 | abbreviation style |
| whoThisIsFor | array&lt;string&gt; | no | yes | 1 | clear |
| whatThisIsNot | array&lt;string&gt; | no | yes | 1 | clear |
| pricing | object | no | no | 1 | generic name |
| lessons | array&lt;reference&lt;courseLesson&gt;&gt; | no | yes | 2 | clear |

### courseLesson

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| title | string | yes | no | 2 | common |
| slug | slug | yes | no | 2 | common |
| lessonNumber | number | yes | yes | 2 | differs from lesson.lessonNumber type |
| difficultyTier | string | yes | no | 2 | clear |
| ikigaiQuadrants | array&lt;string&gt; | no | yes | 1 | domain-specific |
| subtitle | string | no | yes | 2 | overlaps with subhead/description naming |
| summary | text | yes | yes | 2 | overlaps with excerpt/description naming |
| content | array&lt;portableText+image&gt; | no | yes | 1 | clear |
| reflectionPrompt | text | no | yes | 1 | clear |
| tryThisWeek | text | no | yes | 1 | phrase-style field name |
| estimatedMinutes | number | no | yes | 2 | duration naming differs from lesson.duration |

### blogPost

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| title | string | yes | no | 3 | common |
| slug | slug | yes | no | 3 | common |
| pillar | string | no | yes | 3 | domain term; also used as filter key |
| metaDescription | string | no | yes | 2 | SEO naming clear |
| excerpt | text | no | yes | 3 | overlaps summary/description naming |
| coverImage | image | no | no | 3 | clear |
| content | array&lt;portableText&gt; | no | no | 2 | clear |
| readingTime | number | no | no | 3 | clear |
| publishedAt | datetime | yes | no | 3 | common |
| featured | boolean | no | yes | 2 | operational flag |
| cta | object | no | no | 1 | abbreviation style |

### module

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| title | string | yes | yes | 3 | common |
| slug | slug | yes | no | 2 | common |
| moduleNumber | number | yes | yes | 0 | duplicates role of order in many consumers |
| description | text | no | yes | 3 | common |
| theme | text | no | yes | 0 | semantic unclear without curriculum docs |
| danceIntegration | text | no | yes | 0 | domain-specific, currently unused |
| estimatedHours | string | no | yes | 0 | duration naming differs from other models |
| order | number | yes | yes | 3 | operational ordering |
| icon | string | no | yes | 0 | content semantics unclear (emoji/text) |
| lessons | array&lt;reference&lt;lesson&gt;&gt; | no | yes | 3 | clear |
| course | reference&lt;course&gt; | yes | yes | 2 | clear |
| createdAt | datetime | no | no | 0 | audit metadata-style field |

### curriculumWeek

| Field name | Field type | Required | Documented | Referenced by components | Naming notes |
|---|---|---|---|---:|---|
| weekNumber | number | yes | no | 1 | clear |
| title | string | yes | yes | 1 | common |
| oneLineDescription | text | no | yes | 1 | verbose but explicit |
| illustrationSlug | string | no | yes | 1 | clear |
| bentoSize | string | no | no | 1 | domain-specific style token |
| order | number | yes | no | 1 | operational ordering |

## 3. Page-to-Document Consumption Mapping

| Route | Document type(s) queried | Fields actually used in rendering | Fields queried but not used |
|---|---|---|---|
| / | pageHome, siteConfig, testimonial, blogPost | pageHome hero/method/pillars/meetJon/testimonialsHeader/blogPreviewHeader/newsletter/auditCta/starterGuide; siteConfig.successStates; testimonial display fields; recent post card fields | yes: pageHome.blogPreviewPerCardCtaLabel, pageHome.blogPreviewSectionCta, several sectionHeader.body values, cta.ariaLabel, siteConfig nav/auth/404/validation blocks |
| /about | pageAbout | storyBeats, whoFor, cta (headline/body/microcopy/primaryCta) | yes: pageAbout.hero, cta.secondaryCta |
| /foundation | pageFoundation, siteConfig | hero, whoFor, whyDance, curriculum, howItWorks, enrollment, faq, softCta, starterGuide; siteConfig.successStates | yes: multiple sectionHeader.body fields; softCta.secondaryCta |
| /programs | pagePrograms, caseStudy, curriculumWeek, siteConfig | hero/heroWhoForColumn, caseStudiesHeader, programCardsHeader/cards, faq, closingCta, starterGuide; caseStudy card fields; curriculumWeek fields; siteConfig.successStates | yes: hero.primaryCta/secondaryCta/microcopy, header.body fields |
| /ikigai | pageIkigai, siteConfig | starterGuide, siteConfig.successStates | yes: pageIkigai.hero, fourCirclesHeader, fourCirclesSet, quizBridge, cta |
| /dance | none found | route missing in app/(marketing) | n/a |
| /lessons | course | title/slug/description/thumbnail/difficulty/modules/lessons/access (for course cards/progress) | yes: many course fields outside card/progress use |
| /lessons/[courseSlug] | course (and list of courses for static params) | course overview fields, module/lesson counts, first free lesson slug | yes: additional course fields outside overview/TOC needs |
| /lessons/[courseSlug]/[lessonSlug] | lesson, course (and list of courses for static params) | lesson title/description/body/access/slug + TOC/nav fields from course | yes: query/consumer naming mismatch in this route (videoUrl expected by component vs videoId queried; estimatedDuration expected vs duration queried) |
| /blog | pageBlog, blogPost, siteConfig | pageBlog hero/featuredSeries/newsletter/emptyState/auditCta; post list fields; siteConfig.successStates | yes: auditCta.eyebrow not rendered |
| /blog/[slug] | blogPost | post detail fields, related fields, metadata fields | no major drift observed in query projection |
| /contact | pageContact | hero, heroStats, inquiryCards, whatHappensNext, thingsWorthKnowing, emailFallback | yes: hero.secondaryCta |
| /privacy | none from lib/sanity on route | none | n/a |
| /audit | pageAudit, siteConfig | hero text/primary label, heroMicrocopy, midQuizEncouragement, resultBands, starterGuide; siteConfig.successStates | yes: hero.primaryCta.href, hero.secondaryCta, hero.microcopy |
| /login | no Sanity query in route file | none | n/a |
| /mfa | no Sanity query in route file | none | n/a |

## 4. Field Reference Patterns

Field-name access patterns below are direct property-name references in pages/components.

| Field name | Document type | Files referencing it |
|---|---|---|
| hero.headline | pageHome, pageFoundation, pagePrograms, pageBlog, pageContact, pageAudit | app/(marketing)/page.tsx; app/(marketing)/foundation/page.tsx; app/(marketing)/programs/page.tsx; app/(marketing)/blog/BlogClient.tsx; app/(marketing)/contact/ContactClient.tsx; app/(marketing)/audit/AuditClient.tsx |
| hero.subhead | pageHome, pageFoundation, pagePrograms, pageBlog, pageContact, pageAudit | app/(marketing)/page.tsx; app/(marketing)/foundation/page.tsx; app/(marketing)/programs/page.tsx; app/(marketing)/blog/BlogClient.tsx; app/(marketing)/contact/ContactClient.tsx; app/(marketing)/audit/AuditClient.tsx |
| hero.primaryCta.label | pageHome, pageFoundation, pageContact, pageAudit | app/(marketing)/page.tsx; app/(marketing)/foundation/page.tsx; app/(marketing)/contact/ContactClient.tsx; app/(marketing)/audit/AuditClient.tsx |
| starterGuide | pageHome, pageIkigai, pageFoundation, pagePrograms, pageAudit | app/(marketing)/page.tsx; app/(marketing)/ikigai/page.tsx; app/(marketing)/foundation/page.tsx; app/(marketing)/programs/page.tsx; app/(marketing)/audit/AuditClient.tsx |
| successStates[].key | siteConfig | app/(marketing)/page.tsx; app/(marketing)/ikigai/page.tsx; app/(marketing)/foundation/page.tsx; app/(marketing)/programs/page.tsx; app/(marketing)/blog/page.tsx; app/(marketing)/audit/page.tsx; components/navigation/SiteFooter.tsx |
| successStates[].message | siteConfig | same files as above |
| socialLinks[].platform/url/label | siteConfig | components/navigation/SiteFooter.tsx |
| privacyLink.href/label | siteConfig | components/navigation/SiteFooter.tsx |
| pillars | pillarSet | app/(marketing)/page.tsx; components/sections/home/four-pillars/FourPillars.tsx |
| seriesBannerEnabled, seriesName, seriesSlug, seriesStatus, seriesDescription, seriesCurrentPhase, seriesCtaLabel | pageBlog | app/(marketing)/blog/page.tsx; components/shared/series-banner/SeriesBanner.tsx |
| inquiryCards[].inquiryType | pageContact | app/(marketing)/contact/ContactClient.tsx |
| resultBands[low/mid/high] | pageAudit | app/(marketing)/audit/AuditClient.tsx |
| lesson.access | lesson | app/(marketing)/lessons/page.tsx; app/(marketing)/lessons/[courseSlug]/page.tsx; app/(marketing)/lessons/[courseSlug]/[lessonSlug]/page.tsx |
| lesson.videoId | lesson | app/(portal)/portal/[courseSlug]/[lessonSlug]/page.tsx |
| lesson.duration | lesson | app/(portal)/portal/[courseSlug]/page.tsx; app/(portal)/portal/[courseSlug]/[lessonSlug]/page.tsx |
| lesson.socialLogic | lesson | app/(portal)/portal/[courseSlug]/[lessonSlug]/page.tsx |
| lesson.technicalNotes | lesson | app/(portal)/portal/[courseSlug]/[lessonSlug]/page.tsx |
| course.modules | course | app/(marketing)/lessons/page.tsx; app/(marketing)/lessons/[courseSlug]/page.tsx; app/(marketing)/lessons/[courseSlug]/[lessonSlug]/page.tsx; app/(portal)/layout.tsx; app/(portal)/portal/[courseSlug]/page.tsx; app/(portal)/portal/[courseSlug]/[lessonSlug]/page.tsx |
| course.lesson refs (flat) and course.subtitle/courseType/heroImage/pricing/ctaText/whoThisIsFor/whatThisIsNot | course | app/(portal)/portal/four-circles/page.tsx; app/(portal)/portal/four-circles/[lessonSlug]/page.tsx |
| lessonNumber/difficultyTier/ikigaiQuadrants/estimatedMinutes/reflectionPrompt/tryThisWeek | courseLesson | app/(portal)/portal/four-circles/page.tsx; app/(portal)/portal/four-circles/[lessonSlug]/page.tsx |

## 5. Consistency Observations

### 5a. Same concept, different names

| Concept | Names used |
|---|---|
| Main section heading | headline, title |
| Supporting body text | subhead, body, description, summary, excerpt |
| Duration | duration, estimatedMinutes, estimatedDuration, totalEstimatedHours, estimatedHours |
| CTA text | label, submitLabel, ctaText, seriesCtaLabel |
| Ordered sequence | order, lessonNumber, moduleNumber, weekNumber |

### 5b. Same name, different concepts

| Field name | Document types | Observed semantic differences |
|---|---|---|
| title | blogPost, caseStudy, course, module, lesson, courseLesson, curriculumWeek, many nested objects | Sometimes content heading, sometimes card title, sometimes curriculum item name |
| description | course, module, lesson, page-level nested blocks | Sometimes marketing copy, sometimes curriculum summary, sometimes metadata-like detail |
| body | ctaBlock/sectionHeader/story beats/audit bands/etc. | Can mean long prose, short paragraph, or CTA supporting line depending on context |
| order | testimonial, caseStudy, course, module, curriculumWeek, lesson | Used for list ordering across unrelated content types |
| featured | blogPost, testimonial, caseStudy, course (isFeatured) | Similar flag concept but naming not uniform (featured vs isFeatured) |

### 5c. Unclear semantics

| Field | Document type | Reason marked unclear |
|---|---|---|
| quizBridge | pageIkigai | Name implies bridge copy but no active consumer on route |
| serviceType | testimonial | No active rendering and no explicit taxonomy document in code |
| format | lesson | Large enum exists; no current consumer visible in routes/components |
| emphasis | lesson | Taxonomy-like field; no active consumer visible |
| softCta | pageFoundation | “soft” is business-context specific; not self-describing without domain context |
| theme | module | No active consumer; semantic role not enforced in schema |
| icon | module | Type is string; whether emoji/text/icon id is not constrained |

## 6. Stale Candidates

### 6a. Fields defined in schema but referenced by zero components

| Document type | Fields |
|---|---|
| pageHome | blogPreviewPerCardCtaLabel, blogPreviewSectionCta |
| pageAbout | hero |
| pageIkigai | hero, fourCirclesHeader, fourCirclesSet, quizBridge, quizNote, cta |
| pageLessons | hero, courses, closingCta, starterGuide |
| pageBlog | filterPillsNote, postsListNote |
| siteConfig | wordmark, desktopLinks, rightSideLinks, mobileLinks, mobilePersistentCta, columns, accountSection, submitError, validation, loadingLabel, notFoundHeadline, notFoundBody, notFoundLinks, notFoundMicrocopy, signIn, signUp |
| auditCta | eyebrow |
| testimonial | serviceType, featured, order |
| caseStudy | testimonial, featured, order |
| lesson | lessonNumber, format, emphasis, publishedAt |
| course | philosophy, targetAudience, totalEstimatedHours, contentPillars, lessonStructure |
| module | moduleNumber, theme, danceIntegration, estimatedHours, icon, createdAt |

### 6b. Document types with zero consumers

| Document type | Evidence |
|---|---|
| pageLessons | getPageLessons exists in lib/sanity.ts but has no call sites in app routes/components |
| fourCirclesSet | Queried only through pageIkigai projection; current /ikigai route/client does not render fourCirclesSet |

Additional registration-consumption drift:
- curriculumWeek has consumers (programs route/components) but is absent from active schema registration export (sanity/schemas/index.ts).

## 7. Lint Baseline Check

| Metric | Value |
|---|---:|
| Baseline violations (expected) | 152 |
| Current violations (from lint-out.txt summary) | 152 |
| Delta | 0 |

Confirmed from lint-out.txt summary line:
- ✖ 152 problems (120 errors, 32 warnings)

## Other Observations

- Requested route /dance is not present under app/(marketing). It was included in mapping as missing route.
- app/(marketing)/layout.tsx queries newsletterCapture and siteConfig for shared footer/nav surfaces; this creates cross-route shared consumption not always visible in individual route files.
- There is dual schema index usage in repository:
  - Active Sanity Studio uses sanity/schemas/index.ts via sanity/sanity.config.ts.
  - Legacy schemaTypes file exists at sanity/schemaTypes/index.ts and includes curriculumWeek, which differs from the active export list.
