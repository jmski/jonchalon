# Canonical Copy — Phase 6 Update (Three-Stage Pivot)

> **Implementation prompt for Claude Code.** This applies a structured diff to `design-system/canonical-copy.md` reflecting the strategic pivot from the four-pillar / eight-week structure to the three-stage / six-month engagement structure.
>
> **Source of decisions:** `design-work/program-structure-strategy.md` (locked May 2026). Reference only if any change feels ambiguous — this prompt has the full diff; no interpretation needed.

---

## Instructions for this session

You are applying a structured diff to a single working file: `design-system/canonical-copy.md`.

**Operating rules:**

1. **Apply changes exactly as specified.** Every change below has a *before* (exact text currently in the file) and an *after* (exact text it should become). Do not paraphrase, summarize, or "improve" the after-text. The voice and word choices are deliberate.
2. **Locate before-text by string match, not by section number.** Section numbers (§1, §2, etc.) are reading aids. The before-text is what to find and replace.
3. **If the before-text doesn't match what's actually in the file**, stop and report the mismatch. Do not guess. Do not partially apply.
4. **Do not modify any section not listed in this prompt.** If you notice something else that seems stale (e.g., a leftover "pillar" reference outside the listed sections), flag it in your final report — don't fix it silently.
5. **Preserve all markdown formatting** — emphasis, lists, tables, code spans, em-dashes (—), italic anchors in `{{double-braces}}`, link syntax.
6. **Run the post-application review at the end** (checklist below) and report results.

Total changes in this prompt: approximately 14 substantive edits across 7 page sections, plus 3 doc-level updates (brand markers list, schema implications, workstream summary).

---

## Change 1 — Home page §3 Step 3 (Embody)

**Section:** `## §3 — Three steps. Any medium.` → `### Step 3 — Embody`

**Locate this block:**

```
**Embody.** The Foundation is eight weeks of practice. Grounding, energy, flow, command — one pillar at a time, in the body first, on the page second. Taught through dance because dance can't be faked. Transferable to any room, because the fundamentals are the same.
```

**Replace with:**

```
**Embody.** The Foundation is a six-month coached engagement, taught through embodiment in the medium you choose. Three stages — The Climb, The Vantage, The Leap — that move you from honest inventory of what's already there, through the daily practice that grows the overlaps, into the change you've been avoiding. Sixteen sessions with me. As long as it takes.
```

**Rationale:** Step 3 sold the retired eight-week pillar product. New text introduces the three-stage program, the six-month engagement length, and the medium-agnostic claim. "As long as it takes" appears here as its first home-page placement.

---

## Change 2 — Home page §4 (full section rebuild)

**Section:** `## §4 — Four fundamentals. Any medium.`

**Locate the entire §4 section** — from the header `## §4 — Four fundamentals. Any medium.` down to (but not including) the next header `## §5 — Meet Jon`.

**Replace the entire section with:**

```markdown
## §4 — Three stages. The work of a lifetime.

**Eyebrow:** `THE STAGES`

**Headline:** *Three stages. The work of a {{lifetime}}.*

**Subhead:** Most coaching programs sell you a destination. This one sells you the structure of the work toward it — the climb that earns you a view, the practice that fills the time at altitude, the leap that turns insight into a different life. Each stage is real work. None of them is optional.

### The Climb

The honest inventory of what's actually in your life. Not a discovery exercise — there's nothing hidden. You'll sort what you already do across the four circles, identify the one you've been avoiding, choose a physical medium and start practicing in it, and mourn what isn't working. Most clients finish the inventory itself in a week. The honesty takes longer.

### The Vantage

The active integration work. From the Vantage you can see where two of your four circles already overlap, and where the daily practice that grows those overlaps could actually fit in your week. This is where most of the coaching happens — communication as a body skill, the conversations about your role, the rituals that compound. Not insight. Practice.

### The Leap

The structural change. The conversation you've been avoiding, the role you've been pretending didn't fit, the side practice that becomes primary. The Leap is the work that's too big or too individual for a curriculum to carry alone — by the time you reach it, you usually know what you should do. The Leap is doing it. That's where the Foundation's coaching is most essential.

**Section closing line below the three stage cards:** *Six months gets you through the first two and into the third. The third takes as long as it takes.*
```

**Rationale:** Complete rebuild. §4 was the four-pillar grid (Grounding/Energy/Flow/Command with dancer/leader/writer examples). Replaced with three-stage section that mirrors the Foundation page §4 at higher altitude. Note: the word "journey" appears nowhere — confirmed banned-word check. Headline italic anchor is on "lifetime."

---

## Change 3 — Home page §5 (Meet Jon)

**Section:** `## §5 — Meet Jon`

**Locate this block (body paragraph 2):**

```
**Body (paragraph 2):** The Foundation distills twenty years of performing, teaching, and choreographing into eight weeks of practice that transfer to whatever room you actually have to walk into.
```

**Replace with:**

```
**Body (paragraph 2):** The Foundation distills twenty years of performing, teaching, and choreographing into a six-month coached engagement built around a single argument: the body knows what the mind is still arguing about. The work transfers to whatever room you actually have to walk into.
```

**Also locate this block (body paragraph 1):**

```
**Body (paragraph 1):** Jon Young teaches embodied presence to professionals whose medium isn't dance. His students lead engineering teams, run product orgs, write for a living, and stand in front of rooms — none of them are dancers, all of them learn to inhabit their work the same way a dancer learns to inhabit a phrase.
```

**Replace with:**

```
**Body (paragraph 1):** Jon Young teaches embodied presence to professionals whose medium isn't dance. His clients lead engineering teams, run product orgs, write for a living, and stand in front of rooms — none of them are dancers, all of them learn to inhabit their work the same way a dancer learns to inhabit a phrase.
```

**Rationale:** Paragraph 1 changes one word: "students" → "clients" (Foundation buyers are clients in new structure; "students" now refers to standalone module buyers). Paragraph 2 removes "eight weeks" framing, replaces with six-month coached engagement and introduces the "body knows what the mind is still arguing about" line as a new brand marker.

---

## Change 4 — Foundation page (entire page rebuild — §1 through §9)

**Section:** `# Foundation page`

**Locate the entire Foundation page section** — from the header `# Foundation page` down to (but not including) the next page header `# Programs page`.

**Replace the entire Foundation page section with:**

```markdown
# Foundation page

**Status:** ✅ Re-locked (Phase 6, post-strategy-pivot)

**Sections in render order:** Hero → Who this is for → Why a medium → Curriculum → How it works → Enrollment → FAQ → Soft CTA (audit fallback) → Foundation Starter Guide

Phase 6 rebuilds the Foundation page top-to-bottom around the three-stage / six-month engagement structure. The four-pillar curriculum, the eight-week framing, and the $197/$497 two-tier pricing are all retired. New pricing: $4,500 founding cohort / $5,000 standard.

---

## §1 — Hero

**Eyebrow:** `THE FOUNDATION · 6-MONTH ENGAGEMENT`

**Headline:** *Learn to inhabit the {{work}}.*

**Subhead:** A six-month coached engagement built around finding the work you were meant for and learning to live in it. Three stages — The Climb, The Vantage, The Leap. Sixteen sessions with Jon. As long as it takes.

**Primary CTA:** *Apply for the Founding Cohort — $4,500*

**Secondary CTA:** *See What's Inside*

**Microcopy under CTAs:** *Founding cohort pricing while spots remain. After: $5,000.*

---

## §2 — Who this is for (hero right column)

**Header:** *Who this is for*

**Lede:** You already have the substance. The work is what you do with it.

**Bullet list:**
- You're well-paid, competent, in-demand — and quietly unsure whether you're in the right work.
- You've checked the boxes that were supposed to mean you'd arrived. The feeling hasn't followed.
- You can articulate what's wrong abstractly. You can't seem to do anything about it.
- You've been told you have it all together. The room hasn't met what's underneath.
- You want to find work you're not pretending to want.

---

## §3 — Why a medium

**Eyebrow:** `WHY EMBODIMENT`

**Headline:** *The body can't be {{faked}}.*

**Body (paragraph 1):** Every Foundation client picks a physical medium and stays with it for the duration of the engagement. Mine is dance. Yours will be different — hiking, climbing, weight training, partner dance, swimming, martial arts, yoga. The criteria are simple: it requires presence, it offers feedback, it's sustainable for years, and you're not doing it for status.

**Body (paragraph 2):** The reason a medium matters is that the body knows things your mind doesn't want to admit. You'll figure out which of the four circles you've been avoiding — Passion, Mission, Vocation, Profession — but the *honest* version of that figuring-out happens through movement, not journaling. The body opens to what fits. It contracts away from what doesn't. You can argue with your own thoughts. You can't argue with what your body does without being asked.

**Body (paragraph 3 — the lock):** Dance is my medium because it's the most precise one I know for training what every medium needs. You can't bluff a phrase. You can't talk faster to cover the gap. But the Foundation isn't a dance program. It's an embodiment program, taught by someone whose body has been the lab for twenty years. Whatever you pick, the practice is the same: show up, pay attention, notice what changes.

**Render note:** Prose, single-column, full text width. No image accompaniment in v1. This section is an argument, not a feature list — the layout should make the reader read it.

---

## §4 — Curriculum

**Eyebrow:** `THE CURRICULUM`

**Header:** *Three stages. As long as it takes.*

**Lede:** Most programs sell you a timeline. This one sells you a structure. The Climb is weeks. The Vantage is months. The Leap is open-ended. You'll move through them at the pace your life can hold.

### Stage 1 — The Climb

**Duration:** 4-6 weeks · 7 lessons

**Blurb:** Honest inventory of what's actually in your life. The Climb isn't about discovering hidden truths — it's about being honest about what's there and what isn't. You'll sort what you do across the four circles. You'll identify the one you've been avoiding. You'll pick a physical medium and start practicing. You'll mourn what isn't working before you try to fix it.

**The Climb is hard because:** It asks you to stop telling yourself stories about what you love and what you're good at, and look at what your life actually contains. Most clients find the inventory itself takes a week. The honesty takes longer.

### Stage 2 — The Vantage

**Duration:** 12-16 weeks · 10 lessons

**Blurb:** From the Vantage you can finally see what was invisible on the ground — where two of your four circles already overlap, and where the daily practice that grows those overlaps could fit in your week. You'll learn communication as a body skill, not a script. You'll have hard conversations about your current role. You'll drop obligations that aren't growing any circle. You'll build rituals that compound.

**The Vantage is hard because:** It's where most coaching programs stop — at insight. You won't. You'll spend months *practicing* what most programs only describe. The body work is the work, not an exercise appended to it.

### Stage 3 — The Leap

**Duration:** 6-18 months · 11 lessons (8 effective per person)

**Blurb:** Growing the circle you've been structurally missing. This is the work that's too big or too individual for a structured module — the load-bearing conversation, the role change, the side practice that becomes primary, the thing you walk away from. The Leap is taught through frameworks; it's *worked* through coaching. You leap when you're ready, not when the program tells you to.

**The Leap is hard because:** You commit before you can see the landing. By the time you reach the Leap, you usually already know what you should do. The work is doing it. That's why this stage has the most coaching support and the longest horizon.

**Closing note under the curriculum:** *The Foundation is a 6-month coached engagement that gets you through the Climb and the Vantage and into the Leap. Leap work continues after the engagement ends — supported by the Ongoing subscription if you want it, on your own if you don't. There is no graduation date.*

---

## §5 — How it works

**Eyebrow:** `HOW IT WORKS`

**Header:** *Not a lecture series. Not a cohort calendar. A practice with someone in it.*

**Lede:** The Foundation is a six-month coached engagement built around five pieces of contact — one with the material, four with me. Each one is designed to do work the others can't.

### Column 1 — The work itself

You'll move through The Climb, The Vantage, and The Leap on your own schedule. Every lesson has a body practice — taught through movement in your chosen medium, not in front of a whiteboard. Lifetime access. No release cadence. No "drip." You move when you're ready.

### Column 2 — Sixteen sessions with Jon

Booked from a pool, used when the work calls for them. Some clients use most of their sessions in The Climb because the honest inventory is hardest for them. Others save them for The Leap because that's when the load-bearing conversations land. No fixed cadence. You'll get a sense of your own rhythm by month two.

### Column 3 — Monthly group calls

One ninety-minute call a month with the current cohort. Six in total. You'll hear how other people's work is different from yours — the writer's missing circle versus the engineer's missing circle versus yours. Most clients say the group calls were where they realized they weren't alone in the gap they were sitting with.

### Column 4 — Weekly written check-ins

A short prompt every week. You write back. I read it and respond personally — usually a paragraph, sometimes a video, always within forty-eight hours. The check-ins are how the practice stays alive between sessions. They're also what keeps you honest about whether you're actually doing the work or just thinking about doing it.

### Column 5 — The body-data tools

You'll have unlimited access to three tools I built for this work: Presence Score (reads your posture across five body-based dimensions), Tonality Analysis (reads your voice the way a room does), Movement Plan (gives you a personalized somatic practice). Use them between sessions to get a measurement of what your body is doing when nobody is watching. The numbers aren't the work — the practice is. But the numbers tell you whether the practice is landing.

---

## §6 — Enrollment

**Eyebrow:** `ENROLLMENT`

**Header:** *Two ways in. One is the work itself.*

**Lede:** The Foundation is the full engagement. The standalone modules are the entry point for people who want to see whether the work lands before committing to the cohort. Either path credits forward.

### Card A — The Foundation

**Badge:** `FOUNDING COHORT`

**Title:** *The Foundation*

**Price line:** *$4,500 · six-month engagement · founding cohort pricing*

**Description:** The full program. The Climb, The Vantage, The Leap. Sixteen sessions with me, six monthly group calls, weekly written check-ins, unlimited AI tools, lifetime access to the material. Cohort kept small on purpose — so I can actually show up to each person in it.

**Inclusions:**
- All three stages — full curriculum, lifetime access
- 16 1:1 sessions with Jon (60 min, book from pool)
- 6 monthly group calls (90 min)
- Weekly written check-ins with personal response from Jon
- Body-data tools — unlimited Presence Score, Tonality, Movement Plan during engagement
- Optional rollover into the Ongoing subscription at graduation

**CTA:** *Apply for the Founding Cohort*

**Footnote under card:** *Founding cohort pricing while spots remain. Standard pricing $5,000.*

### Card B — Start with a stage

**Eyebrow:** `STANDALONE MODULES`

**Title:** *Start with The Climb. Or both stages.*

**Description:** For people who want to test the work before the cohort, or who already know they only want a piece of it. Standalone modules are self-paced, no coaching, no group calls. If you upgrade to the Foundation later, the full purchase price credits forward.

**Price grid:**

| Module | Price |
|---|---|
| The Climb (standalone) | $500 |
| The Vantage (standalone) | $750 |
| Both modules (bundle) | $1,100 |

**Inclusions across all standalone purchases:**
- Lifetime access to module lessons
- Limited use of AI tools (3 runs per month)
- No 1:1 coaching, no group calls

**CTA:** *See the Modules* → `/modules`

**Footer note under both cards:** *The Leap is not sold separately. It requires the work of The Climb and The Vantage as prerequisite, and coaching support that's structurally part of the Foundation engagement.*

---

## §7 — FAQ

**Header:** *Common questions.*

### Is this right for me if I'm not a dancer?

Yes. Most clients aren't. Dance is my medium because it's the most precise one I know for training what every medium teaches. Yours can be different — you'll choose it in The Climb. The body work is the work; the body part doesn't change.

### How long does this actually take?

The Foundation is a six-month coached engagement. That gets most clients through The Climb (4-6 weeks of real work) and The Vantage (12-16 weeks of practice) and *into* The Leap. The Leap itself usually takes another 6-18 months depending on what circle you're growing and what your life looks like. Most clients continue with the Ongoing subscription after the formal engagement ends. Some don't. Both are real outcomes.

### What does "as long as it takes" mean in practice?

It means the program doesn't gate-keep your pace. The material is yours for life. Sessions are bookable when the work calls for them. The cohort and group calls have a six-month window because they need fellow travellers in the same period, but the practice continues past that. Nobody graduates from ikigai. You graduate from the program, into the practice.

### Why is this priced where it's priced?

The Foundation is sixteen sessions of 1:1 coaching, six group calls, weekly written responses for six months, plus three full stage curricula and the body-data tools. The 1:1 sessions alone, at a fair market rate, are about $3,200 of the price. Group calls, written check-ins, and curriculum carry the rest. The pricing isn't aspirational — it's what the work actually costs to do well, given that I keep the cohort small enough to show up to each client.

### What if I can only afford the standalone modules?

That's a real path. The Climb plus The Vantage covers the work most people can do without a coach in the room. You'll get the inventory, the diagnosis of the missing circle, the daily practice work. What you won't get is help with The Leap — and The Leap is where the change actually happens. If you do both modules and later decide you want the coached engagement, the full purchase price credits forward against the Foundation.

### What happens after the six months?

You have lifetime access to all three stages of curriculum. Most clients roll into the Ongoing subscription — $300/month, one session, monthly group call, continued tool access. It's optional. Some clients do six months, leave clean, and live the practice on their own. Both are legitimate outcomes. The Foundation builds something you own, not something you rent.

### What's the refund policy?

Full refund within the first thirty days if you decide the program isn't for you. After that, no refunds — but I'll honour any unused sessions as credit toward a future Foundation cohort if you need to step away for life reasons. I don't argue with people about whether they should be in the room.

### Can I work with you 1:1 outside the Foundation?

Not really. The Foundation *is* working with me 1:1 — sixteen sessions over six months, plus group calls and written check-ins. If you want something different from that, you probably don't want this program. We can talk on a free call to figure out what would actually serve you.

---

## §8 — Soft CTA (audit fallback)

**Header:** *Not sure if the Foundation is right yet?*

**Body:** Start with the Presence Audit. Seven questions, three minutes. I'll review your answers and tell you exactly where your presence stands — and whether the Foundation is the right next step for you. Sometimes it isn't.

**CTA:** *Take the Presence Audit* → `/audit`

**Microcopy:** *Free. No email required.*

---

## §9 — Foundation Starter Guide footer

**Reuses Home §10 — referenced singleton.** See Home for canonical content. Schema decision: this section is one Sanity document referenced by Home, Ikigai, and Foundation pages — not three duplicated copies.
```

**Rationale:** Complete rebuild of the Foundation page. Every section either fully rewritten (§1-§7) or lightly updated (§8). Pricing changes from $197/$497 to $4,500/$5,000 with founding cohort framing. Eight-week structure retired. Four pillars retired. Dance positioned as Jon's medium specifically, not the universal medium.

---

## Change 5 — Programs page §1 (subhead adjustment + audience bullet update)

**Section:** `## §1 — Programs hero`

**Locate this block:**

```
**Subhead:** Knowing what to do isn't the problem. Doing it when it counts is. These programs train the body to hold what the head already understands — through dance, because dance can't be faked, and into whatever room you actually have to walk into.
```

**Replace with:**

```
**Subhead:** Knowing what to do isn't the problem. Doing it when it counts is. These programs train the body to hold what the head already understands — through embodied practice, because the body can't be faked, and into whatever room you actually have to walk into.
```

**Also locate this block (first bullet in "Who this is built for"):**

```
- You're good at your job. The room just doesn't feel it yet.
```

**Replace with:**

```
- You're well-paid, competent, in-demand — and you suspect you're in the wrong work.
```

**Rationale:** Subhead change adapts the "dance can't be faked" brand marker to "body can't be faked" — preserves the load-bearing argument, broadens the medium claim. First audience bullet shifts from presence-frame (room doesn't feel it) to purpose-frame (wrong work), matching the new brand positioning.

---

## Change 6 — Programs page §2 (Case studies — remove entire section)

**Section:** `## §2 — Case studies header (locked phase 4)`

**Locate the entire §2 section** — from the header `## §2 — Case studies header (locked phase 4)` down to (but not including) the next header `## §3 — Three program cards`.

**Replace the entire section with:**

```markdown
## §2 — *(Case studies retired pending new Foundation graduate stories)*

The existing case studies (Marcus / Michael / Diana) are presence-frame, written for the prior brand positioning. Removed from the Programs page until new purpose-frame stories from Foundation graduates exist. The `caseStudy` schema in Sanity is preserved; the data isn't deleted. Case study documents may still render on individual detail pages if those exist, or be revived on Programs when new stories are written.

**Schema note (preserved):** Case study card copy lives on the `caseStudy` schema in Sanity. Schema is preserved across this rewrite even though rendering is paused.
```

**Rationale:** Section removed from Programs page rendering. Schema preserved. Doc captures the reasoning so a future reader (or Claude Code session) doesn't reintroduce stale case studies thinking they're missing.

---

## Change 7 — Programs page §3 (three program cards — full rebuild)

**Section:** `## §3 — Three program cards`

**Locate the entire §3 section** — from the header `## §3 — Three program cards` down to (but not including) the next header `## §4 — Common questions (FAQ)`.

**Replace the entire section with:**

```markdown
## §3 — Three program cards

### Card 1 — Start with a stage

**Eyebrow:** `STANDALONE MODULES`

**Title:** *Start with a stage.*

**Price line:** *Modules from $500 · lifetime access*

**Description:** For people who want to test the work before the Foundation cohort, or who already know they only want a piece of it. The Climb and The Vantage are available as standalone modules — self-paced, lifetime access, limited use of the body-data tools, no coaching. If you upgrade to the Foundation later, the full purchase price credits forward.

**Inclusions:**
- The Climb (standalone) — $500
- The Vantage (standalone) — $750
- Both modules bundled — $1,100
- Limited Presence Score / Tonality / Movement Plan use
- Upgrade credit applied if you join a Foundation cohort

**CTA:** *See the Modules* → `/modules`

---

### Card 2 — The Foundation

**Eyebrow:** `FOUNDING COHORT`

**Title:** *The Foundation*

**Price line:** *$4,500 · six-month engagement · founding cohort pricing*

**Description:** The full program. Three stages, sixteen 1:1 sessions, monthly group calls, weekly written check-ins, unlimited body-data tools. Cohort kept small on purpose — so I can actually show up to each person in it.

**Inclusions:**
- All three stages — full curriculum, lifetime access
- 16 1:1 sessions with Jon (booked from session pool)
- 6 monthly group calls (90 min, with current cohort)
- Weekly written check-ins, personal response within 48h
- Unlimited Presence Score / Tonality / Movement Plan
- Optional rollover into Ongoing subscription at graduation

**CTA:** *Apply for the Founding Cohort* → `/foundation`

**Footnote under card:** *Founding cohort pricing while spots remain. Standard pricing $5,000.*

---

### Card 3 — Coach Training

**Eyebrow:** `COMING 2027`

**Title:** *Coach Training.*

**Price line:** *For Foundation graduates · launching 2027*

**Description:** A twelve-to-eighteen-month program for Foundation graduates who want to do this work themselves — coaching other people through their own Climb, Vantage, and Leap. Built specifically for graduates whose missing circle turned out to be Mission, and who recognised somewhere in the work that helping others find theirs *is* the work. Limited to a few trainees per cohort.

**Inclusions (preview):**
- The coaching skill — taught the same way the Foundation teaches everything else
- Supervised practice with real clients
- Ongoing mentorship and revenue share once graduated
- Not a certification you buy. A pathway you earn.

**CTA:** *Join the waitlist* → (form / email capture)

**Footnote:** *Open to Foundation graduates only. Not a sales funnel — most graduates won't want this, and that's the point.*
```

**Rationale:** Three cards rebuilt. Card 1 (Standalone) and Card 2 (Foundation) are the new product structure. Card 3 (Coach Training) replaces the old "Work With Jon Directly" 1:1 card — Jon's 1:1 work IS the Foundation now, and Coach Training is the Year 2 pathway for Mission-gap graduates.

---

## Change 8 — Programs page §4 FAQ (full rebuild)

**Section:** `## §4 — Common questions (FAQ)`

**Locate the entire §4 section** — from the header `## §4 — Common questions (FAQ)` down to (but not including) the next header `## §5 — Closing CTA`.

**Replace the entire section with:**

```markdown
## §4 — Common questions (FAQ)

**Header:** *Common questions.*

### How is this different from a typical leadership or career-coaching program?

Most career coaching is a series of conversations about what you should do. This is a body-based practice for becoming the person who can actually do it. The Foundation doesn't tell you which work you should be in — it teaches you to read your own life honestly enough to know, and then to live with what you find.

### Is this coaching for me if I'm not a dancer?

Yes. Most clients aren't. Dance is my medium because it's the most precise one I know for training what every medium teaches. Yours can be hiking, climbing, weight training, partner dance, swimming, martial arts. The body work is the work — the body part doesn't change.

### What's the actual time commitment?

The Foundation is a six-month coached engagement. Inside the engagement, expect three to five hours a week of structured work — lessons, the physical practice in your medium, written check-ins. Sessions with me are on top of that, booked from a pool when the work calls for them. The Climb and The Vantage continue past the formal six months; The Leap usually continues longer.

### Can I do this remotely?

Yes. Sessions are video calls. The group calls are video. The body practice happens wherever you do your medium — your dance studio, your gym, your trail, your mat. Nothing on the program requires in-person attendance.

### What if I need to pause or step away?

For standalone modules, lifetime access means you pause and return whenever. For the Foundation cohort, the six-month window is a soft container — life happens. Unused sessions credit toward a future cohort if you need to step out and come back. I don't argue with people about whether they should be in the room.

### Is there a refund policy?

Standalone modules: full refund within 14 days. The Foundation: full refund within the first 30 days. After that, unused sessions credit toward a future cohort. No exit interviews.
```

**Rationale:** All six FAQ questions rebuilt around new product structure. References to eight weeks, 90 minutes per week, and $197/$497 tiers retired.

---

## Change 9 — Programs page §5 (closing CTA microcopy adjustment)

**Section:** `## §5 — Closing CTA`

**Locate this block:**

```
**Microcopy:** *No pressure, no pitch, no commitment.*
```

**Replace with:**

```
**Microcopy:** *No pressure. No pitch. Honest read.*
```

**Rationale:** Adjusts microcopy from negation pattern ("no commitment") to positive frame ("honest read") — appropriate given new product is higher-stakes ($4,500 vs previous $197 entry point). Preserves three-statement rhythm.

---

## Change 10 — Lessons page §1 (subhead adjustment)

**Section:** `## §1 — Lessons hero`

**Locate this block:**

```
**Subhead:** Two courses, in order. The free one tells you what's missing. The paid one builds it back. Both are self-paced, both are honest about what they can and can't do.
```

**Replace with:**

```
**Subhead:** Two courses, in order. The free one tells you what's missing. The paid ones build the practice that closes the gap. Both are self-paced. Both are honest about what they can and can't do.
```

**Rationale:** "The paid one" (singular) → "The paid ones" (plural) — the new pricing has more than one paid product (standalone modules + Foundation). Honest reflection of the new structure.

---

## Change 11 — Lessons page §2 Card 2 (The Foundation — full rebuild)

**Section:** `## §2 — Course cards` → `### Card 2 — The Foundation`

**Locate the entire Card 2 block** — from `### Card 2 — The Foundation` down to (but not including) the next horizontal rule (`---`) that ends the card.

**Replace the entire Card 2 block with:**

```markdown
### Card 2 — The Foundation curriculum

**Eyebrow:** `INTERMEDIATE → ADVANCED`

**Title:** *The Foundation curriculum*

**Tagline:** *Three stages. The body work that makes the other work stick.*

**Description:** The Foundation is a six-month coached engagement (sold separately on the Foundation page), and the curriculum behind it is taught across three stages: The Climb, The Vantage, The Leap. The first two stages are also available as standalone modules — self-paced, lifetime access, no coaching. The third stage isn't sold separately; it requires the work of the first two and the coaching that comes with the Foundation.

**Metadata:**
- 3 stages · 28 lessons total
- Standalone modules: The Climb ($500) · The Vantage ($750) · bundle ($1,100)
- Foundation cohort: $4,500 (founding cohort) — full curriculum + 16 sessions + group calls + check-ins

**CTA:** *See the Foundation* → `/foundation`

**Secondary CTA:** *See standalone modules* → `/modules`
```

**Rationale:** Card 2 rebuilt around new structure. Stale "8 modules · 134 lessons · $197" replaced with three-stage / 28-lesson / two-purchase-path framing. Two CTAs reflect the two purchase paths.

---

## Change 12 — Lessons page §3 (closing CTA — headline and body update)

**Section:** `## §3 — Closing CTA`

**Locate this block:**

```
**Eyebrow:** `WANT MORE?`

**Headline:** *Courses teach the {{frameworks}}. Coaching applies them.*

**Body:** These courses are the curriculum. They give you the language and the practice. If you want someone in the room with you while you do the work — feedback in real time, accountability, a shape to your week — that's what coaching is for.

**Primary CTA:** *Explore Coaching Programs* → `/programs`
```

**Replace with:**

```
**Eyebrow:** `WANT MORE?`

**Headline:** *Courses teach the {{shape}}. Coaching does the work.*

**Body:** The curriculum gives you the language and the practice. The Foundation gives you someone in the room with you while you do the work — real feedback, real accountability, a shape to the six months. If you want the work to land, that's what coaching is for.

**Primary CTA:** *See the Foundation* → `/foundation`
```

**Rationale:** "Frameworks" (borderline coaching-genre) replaced with "shape" (more honest about what curriculum does). Body updated to reference six-month engagement. Primary CTA routes directly to Foundation page rather than the more diffuse `/programs`.

---

## Change 13 — About page §4 (StoryScroll Beat 3 payoff line)

**Section:** `## §4 — StoryScroll · Beat 3 (Transfer + Brand claim — combined)`

**Locate this block:**

```
**Payoff line (slightly larger body text):** *How to find your centre. How to read a room. How to move with what's happening. How to hold authority without force.*
```

**Replace with:**

```
**Payoff line (slightly larger body text):** *How to read your own life honestly. How to find what's already there. How to do the work most people only talk about. How to live in the answer.*
```

**Rationale:** Original payoff line was the four pillars in plain English (Grounding/Energy/Flow/Command). New line is the three stages in plain English (The Climb/The Vantage/The Leap) with a fourth phrase that closes the arc. Same parallel structure (four "How to..." phrases), same rhythm, new methodology. This is the single most important sentence-level change in the canonical-copy rewrite outside the Foundation page.

---

## Change 14 — Ikigai page (insert new §1.5 kinetic moment)

**Section:** Between `## §1 — Ikigai hero` and `## §2 — Four Circles preview cards`

**Locate the horizontal rule (`---`) that ends §1** and the start of `## §2 — Four Circles preview cards`.

**Insert this entire new section between them:**

```markdown
## §1.5 — Kinetic moment

**Line:** *The view from the top is just the {{start}}.*

**Render note:** This is a kinetic typography moment per the design system convention — Fraunces at large opsz, single italic anchor on "start," centered with generous whitespace, no surrounding eyebrow or subhead. The line stands alone.

**Placement rationale:** Sits between the assessment hero and the four-circle definitions. After reading "most people are missing one circle" the reader gets a beat of contemplation, then this line — which previews the actual brand argument (*finding the gap is the easy part; doing the work is the work*) — before they encounter the circle definitions.

**Schema note:** New singleton field group on the Ikigai page schema. Workstream 2 should add this as a discrete section: `ikigai.kineticMoment.line` (string) plus a description field telling editors how to use the `{{double-braces}}` italic-anchor convention.

---
```

**Rationale:** Inserts the new kinetic moment that replaces the retired *"The medium changes — the fundamentals don't"* (which lived on the home page §4, now removed). Per the strategy doc, this is the new load-bearing kinetic line for the brand.

---

## Doc-level update 1 — Globals Footer (add Modules link)

**Section:** `## Footer` → `**Column 2 — COACHING:**`

**Locate this block:**

```
**Column 2 — COACHING:**
- Programs → `/programs`
- The Foundation → `/foundation`
- Ikigai → `/ikigai`
```

**Replace with:**

```
**Column 2 — COACHING:**
- Programs → `/programs`
- The Foundation → `/foundation`
- Modules → `/modules`
- Ikigai → `/ikigai`
```

**Rationale:** New `/modules` page (referenced from Foundation page §6 Card B and Lessons §2 Card 2) needs a footer entry. Column now has four items — within visual balance budget.

---

## Doc-level update 2 — Blog index §2 schema implication note

**Section:** `## §2 — Filter pills`

**Locate this block:**

```
**Schema implication:** Pillar labels likely live on the `pillar` schema or as a string enum on `blogPost`. Renaming display labels is safe; renaming slugs is not. Workstream 2 will resolve the schema-level path. For now: display label rename only.
```

**Replace with:**

```
**Schema implication:** Filter labels are content categories, not pillar mappings. They live as a string enum on `blogPost` schema. The `pillar` schema itself is being retired in the workstream 2 schema redesign. Display labels are safe to rename; slugs stay stable for existing post URLs.
```

**Rationale:** Updates the schema-level note to reflect the pillar retirement. The four filter labels themselves (The Body, Presence, The Work, The Lab) survive as content categories, but they're no longer mapped to a pillar schema.

---

## Doc-level update 3 — Schema implications callout (Sanity preview)

**Section:** `# Schema implications (preview for workstream 2)`

**Locate this block:**

```
4. **Pillar definitions.** Grounding/Energy/Flow/Command appear on home and Foundation. One source.
```

**Replace with:**

```
4. **Stage definitions.** The Climb, The Vantage, The Leap appear on home and Foundation. One source. Where pillar definitions previously lived, stage definitions now live. The four-pillar framework is fully retired.
```

**Rationale:** Updates the schema preview to reflect the structural pivot. Same singleton-pattern recommendation, different content.

---

## Doc-level update 4 — Workstream 1 final summary table

**Section:** `## Workstream 1 — final summary`

**Locate this entire section** — from `## Workstream 1 — final summary` down to (but not including) the next horizontal rule that separates it from `## Next session: workstream 2 — schema redesign`.

**Replace the entire section with:**

```markdown
## Workstream 1 — final summary

All content surfaces are now drafted in voice and **re-locked** following the Phase 6 strategic pivot (May 2026) from four-pillar / eight-week structure to three-stage / six-month engagement structure. See `design-work/program-structure-strategy.md` for the underlying decisions.

| Page | Sections | Status |
|---|---|---|
| Home | 10 | ✅ Re-locked (Phase 6) — §3, §4, §5 rebuilt |
| About | 6 | ✅ Re-locked (Phase 6) — §4 payoff line replaced |
| Ikigai | 7 | ✅ Re-locked (Phase 6) — §1.5 kinetic moment added |
| Foundation | 9 | ✅ Re-locked (Phase 6) — entire page rebuilt |
| Programs | 6 | ✅ Re-locked (Phase 6) — §1, §2, §3, §4, §5 rebuilt; §2 case studies retired |
| Lessons | 4 | ✅ Re-locked (Phase 6) — §1, §2, §3 rebuilt |
| Blog index | 8 | ✅ Re-locked (Phase 6) — §2 schema note updated |
| Contact | 5 | ✅ Locked (no Phase 6 changes — purpose-frame, survived intact) |
| Audit | 4 | ✅ Locked (no Phase 6 changes — purpose-frame, survived intact) |
| Globals | nav + footer + microcopy + 404 + auth | ✅ Re-locked (Phase 6) — footer Column 2 adds Modules link |

**Voice rules:** Unchanged from Phase 5. Two-register system (Direct/Honest + Warm/Present) with the bullshit clause for sparingly-used callouts. Banned words list locked. Italic-anchor convention via `{{double-braces}}`.

**Brand markers established and reused across pages** (post-Phase 6):

- *"Find the work you were meant for"* — home hero, footer brand line **(survives)**
- *"The body can't be faked"* — Foundation §3, Programs hero, Foundation FAQ **(adapted from "Dance can't be faked")**
- *"As long as it takes"* — Foundation hero, Foundation §4, Home §3, Home §4 **(new — timing-truth message replacing "Eight weeks. One week at a time.")**
- *"The view from the top is just the start"* — Ikigai §1.5 kinetic moment **(new — replaces "The medium changes. The fundamentals don't.")**
- *"The body knows what the mind is still arguing about"* — Home §5 Meet Jon **(new)**
- *"I don't argue with people about whether they should be in the room"* — Foundation FAQ, Programs FAQ **(new — refund/pause policy line)**
- *"Not a certification you buy. A pathway you earn."* — Programs §3 Coach Training card **(new)**
- *"Some of them will probably be wrong"* — Home §7, Blog hero **(survives)**
- *"I don't do pressure"* — Contact §4 **(survives)**

**Retired brand markers (Phase 6):**

- *"Dance can't be faked"* — adapted to *"The body can't be faked"*
- *"How to find your centre. How to read a room."* — was pillar-derived
- *"Eight weeks. One week at a time."* — was eight-week-product framing

**Schema decisions surfaced during workstream 1** (resolved in workstream 2):

1. Foundation Starter Guide is one document referenced from Home §10, Ikigai §5, Foundation §9 — not three duplicated copies
2. Tuesday newsletter capture is one document referenced from Home §8, Blog §6, possibly Audit
3. Audit CTA is one document referenced from Home §9, Blog §7, Foundation §8
4. **Stage definitions** (The Climb, The Vantage, The Leap) are one document referenced from Home §4 and Foundation §4. Where pillar definitions previously lived, stage definitions now live.
5. Four Circles definitions (Passion/Mission/Vocation/Profession) are one document referenced from Home §3 and Ikigai §2
6. Course descriptions are one source — Lessons cards, Foundation page hero, Programs page cards all derive from the same fields
7. Audit quiz logic stays in `lib/auditData.ts` (not migrated to Sanity)
8. Audit result band copy moves *to* Sanity (it's marketing copy, not quiz logic)
9. Blog filter labels are content categories on `blogPost` schema; the `pillar` schema is retired
10. The italic-anchor convention `{{word}}` needs a description on every headline field in Studio
11. **New:** Ikigai page schema needs a `kineticMoment` singleton field group for §1.5
12. **New:** Session pool tracking schema needed for Foundation client portal — sessions used, sessions remaining, top-up history
13. **New:** Standalone modules need their own purchasable product schema — `module` type with `stage` enum (`climb` or `vantage`), price, and lifetime-access flag

---
```

**Rationale:** Updates the summary table to reflect Phase 6 changes, lists all post-Phase 6 brand markers (including the new ones added in this rewrite), explicitly names retired brand markers, and updates the schema decisions list to include the new schemas needed (modules product, session pool tracking, Ikigai kinetic moment singleton).

---

## Post-application review checklist

After applying all 14 changes plus 4 doc-level updates, run this verification:

1. **No orphan "pillar" references in body copy.** Search the file for `pillar` (case-insensitive). Acceptable: references in retired-marker discussions, schema decisions, the workstream summary's *retired brand markers* section. **Not acceptable:** references in user-facing copy describing the current product.

2. **No orphan "eight weeks" or "8 weeks" references in user-facing copy.** Search the file for both spellings. Acceptable: historical references in workstream summary. Not acceptable: anywhere in marketing copy.

3. **No orphan "$197" or "$497" references.** Search for both. Should appear nowhere except possibly in retired-marker discussions.

4. **All new brand markers are present in the workstream summary.** Verify by string-matching each of the new brand markers listed in Doc-level update 4.

5. **The italic anchor convention is preserved everywhere.** Spot-check that every headline still uses `{{double-braces}}` rather than asterisks or HTML tags.

6. **Em-dashes are em-dashes (—) throughout.** Spot-check that no `--` double-hyphens were introduced.

7. **The file still parses as valid markdown.** Check that all headings, code blocks, tables, and horizontal rules are intact.

8. **Status header at top of file mentions Phase 6.** Locate the line near the top reading `Last updated: Phase 5, workstream 1 — **COMPLETE.**` and update it to `Last updated: Phase 6, post-strategy-pivot — **RE-LOCKED.** All ten content surfaces re-locked following the three-stage / six-month engagement restructure (May 2026). Ready for workstream 2 (schema redesign).`

Report:
- Number of changes successfully applied
- Any mismatches between before-text in this prompt and actual file contents
- Any orphan stale references found during the post-application review
- Any other observations (e.g., section that seems to need an update but wasn't covered by this prompt)

---

*End of implementation prompt. Apply all 14 changes plus 4 doc-level updates plus the status-header update. Total: 19 edits. After application, run the review checklist and report.*
