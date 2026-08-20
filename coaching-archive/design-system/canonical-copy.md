# Jonchalant — Canonical Copy

**Source of truth for every piece of marketing copy on the site.**

This document is the input for Sanity schema design and content population. Every page section here corresponds to a Sanity field group. When this doc and Sanity Studio disagree, **Sanity is updated to match this doc** — never the reverse.

Last updated: Phase 7 — **/modules PAGE ADDED.** All ten content surfaces re-locked under Phase 6 (May 2026), plus /modules page added Phase 7. Ready for workstream 2 (schema redesign).

---

## How to use this document

- **Locked** sections have been drafted in voice and approved. They're ready to populate Sanity.
- **Drafted** sections have copy but need a final pass.
- **Stub** sections have section structure noted but no copy yet.
- Italic anchors are wrapped in `{{double-braces}}` — the codebase already supports this convention via `renderHeadline` in `GenericHero`.
- Em-dashes are em-dashes (`—`), not double hyphens.
- "Ikigai" capitalized as a product name (Ikigai Assessment); lowercase in body when conceptual.

---

## Voice rules

The voice operates in two registers that swap based on what each section is doing.

### Register A — Direct and honest

For: naming problems, calling out patterns, stating what the offer is or isn't, refusals, cutting through avoidance.

Texture: short sentences, fragments allowed, em-dashes for cut-ins, no softening words.

Example: *"Most people are in the right industry. Wrong role."*

### Register B — Warm and present

For: acknowledging hard things, welcoming the reader in, speaking *to* a specific person, closing with care.

Texture: full sentences, conversational rhythm, "you" used directly, occasional "I" for Jon.

Example: *"You're not broken. You're not behind. The room just hasn't met you yet."*

### The bullshit clause

When a reader has dressed up avoidance as principle, the page calls it. Used sparingly — once a page max — but the site is willing to use it.

Example: *"You don't need more information. You need to actually try."*

### Banned forever

unlock · transform · journey · empowered · authentic self · limiting beliefs · inner game · holistic · alignment (in the personal-development sense) · level up · breakthrough · mindset shift · self-mastery · soul work

### Stylistic conventions

- One italic anchor per headline, wrapped in `{{double-braces}}`.
- "ikigai" lowercase in body, "Ikigai" capitalized when product name.
- "The Foundation" always title-cased — product name.
- "Four Circles" title-cased when referring to the course.
- "the three stages" lowercase conceptually; "The Climb, The Vantage, The Leap" title-cased when listing.
- Numerals 10+; spell out under 10 in body. Headlines often spell out small numbers ("Six months", "Sixteen sessions") for human texture.
- Em-dashes for asides — like this — never two hyphens.

---

# Home page

**Status:** ✅ Locked (Phase 5, workstream 1)

**Sections in render order:** Hero → ~~Stats~~ → Method (Three steps) → Stages (Three stages) → Meet Jon → Testimonials → Blog preview → Newsletter → Audit CTA → Foundation Starter Guide

---

## §1 — Hero

**Eyebrow:** `Ikigai · The entry point`

**Headline:** *Find the work you were {{meant}} for.*

**Subhead:** Dance is my medium. Yours will be different. Eight honest questions to read what actually fits — then a practice to learn to inhabit it.

**Primary CTA:** *Discover Your Ikigai* → `/ikigai`

**Secondary CTA:** *Read the essay* → `/about`

---

## §2 — Stats strip *(intentionally removed)*

The stats slot exists structurally but is empty until real client/graduate/completion numbers exist. Do not populate with placeholder or aspirational figures. Schema field group can stay; render conditionally on whether real values are present.

---

## §3 — Three steps. Any medium.

**Eyebrow:** `THE METHOD`

**Headline:** *Three steps. {{Any}} medium.*

**Subhead:** Most coaching gives you frameworks and asks you to apply them later. This works the other way around. You find what fits, you learn what it means, then you live in it. Not in that order on a Tuesday — over months.

### Step 1 — Discover

**Discover.** Eight questions, three minutes. The Ikigai Assessment names which of the four circles — Passion, Mission, Vocation, Profession — you're already in, and which one is missing. Most people are missing one. They've been calling it something else for years.

### Step 2 — Understand

**Understand.** The Four Circles is a free 12-lesson course. Each lesson takes about fifteen minutes. By the end you know what your assessment results actually mean — not as a personality type, but as a diagnosis you can do something about.

### Step 3 — Embody

**Embody.** The Foundation is a six-month coached engagement, taught through embodiment in the medium you choose. Three stages — The Climb, The Vantage, The Leap — that move you from honest inventory of what's already there, through the daily practice that grows the overlaps, into the change you've been avoiding. Sixteen sessions with me. As long as it takes.

---

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

---

## §5 — Meet Jon

**Eyebrow:** `WHO YOU'RE WORKING WITH`

**Headline:** *Twenty years in dance. The {{lesson}} wasn't the choreography.*

**Body (paragraph 1):** Jon Young teaches embodied presence to professionals whose medium isn't dance. His clients lead engineering teams, run product orgs, write for a living, and stand in front of rooms — none of them are dancers, all of them learn to inhabit their work the same way a dancer learns to inhabit a phrase.

**Body (paragraph 2):** The Foundation distills twenty years of performing, teaching, and choreographing into a six-month coached engagement built around a single argument: the body knows what the mind is still arguing about. The work transfers to whatever room you actually have to walk into.

**Primary link:** *Read Jon's story →* `/about`

**Secondary link:** *(removed — was "Watch Jon dance" pointing to /dance, deleted in phase 4)*

---

## §6 — Testimonials

**Eyebrow:** `WHAT CLIENTS ACTUALLY SAY`

**Headline:** *(none — eyebrow alone, testimonials carry themselves)*

**Subhead:** *(none)*

Testimonials themselves are real client quotes, not rewritten here. Source: `testimonial` schema in Sanity.

---

## §7 — From the Lab

**Eyebrow:** `READ`

**Headline:** *From the {{Lab}}.*

**Subhead:** Practical writing on presence, movement, and what it actually takes to stop disappearing in rooms. New essays as I figure things out. Some of them will probably be wrong.

**Per-card CTA:** *Read the essay →*

**Section CTA below grid:** *See all essays* → `/blog`

---

## §8 — Newsletter capture

**Eyebrow:** *(none)*

**Headline:** *One idea every Tuesday. {{No}} noise.*

**Subhead:** Practice, presence, and the work you were meant for — one short essay every Tuesday.

**Form field — email**
- Label: *Email*
- Placeholder: *you@yourwork.com*

**Submit button:** *Send me Tuesdays*

**Microcopy below form:** *Unsubscribe in one click. No tricks.*

---

## §9 — Audit CTA

**Eyebrow:** `NOT READY YET?`

**Headline:** *You don't have to {{commit}} to anything.*

**Body:** Start with the assessment. It's free. It takes five minutes. If it tells you something useful, keep going. If it doesn't, you keep your Tuesday.

**Primary CTA:** *Take the Ikigai Assessment* → `/ikigai`

**Microcopy below CTA:** *No account needed. No email required.*

---

## §10 — Foundation Starter Guide capture

**Eyebrow:** `FREE GUIDE`

**Headline:** *The {{Foundation}} Starter Guide.*

**Body:** Five body-aware habits you can practice this week. Not posture tips. Not breath tricks. The actual fundamentals — distilled from the Foundation curriculum, rewritten for people who aren't ready for the six-month engagement right now.

**Form fields:** First name · Email
- First name placeholder: *First name*
- Email placeholder: *you@email.com*

**Submit button:** *Send me the guide*

---

# About page

**Status:** ✅ Locked (Phase 5, workstream 1)

**Sections in render order:** AboutHero → StoryScroll (4 beats: Origin → Turning Point → Transfer → Brand claim) → WhoFor → CTA

The StoryScroll structure was built in phase 4 with placeholder Sanity field mappings. The copy below populates those fields once schemas are reorganized.

---

## §1 — About hero

**Eyebrow:** `THE STORY`

**Headline:** *I learned this in a {{room}} that wasn't a boardroom.*

**Subhead:** Twenty years of dance taught me what presence is actually made of. None of my students dance. All of them learn the same fundamentals — because the room doesn't care what your medium is. It only knows whether you're actually there.

*(No CTA — the about page is a story, not a conversion.)*

---

## §2 — StoryScroll · Beat 1 (Origin)

**Image:** classroom (the high school setting)

**Headline:** *We weren't just a group of {{kids}}.*

**Body:** The first dance club at our high school. Nobody knew what they were doing. Neither did I. But on stage, the room did something the classroom never had — and I've been trying to understand it ever since.

---

## §3 — StoryScroll · Beat 2 (Turning Point)

**Image:** microphone / performance moment

**Headline:** *I hadn't just learned to dance. I had learned to {{lead}}.*

**Body:** A school performance. The fear. The planning. It was wrong all the way through. Then it wasn't. I stopped managing and started listening. That was the first thing I'd ever done that felt like leading.

---

## §4 — StoryScroll · Beat 3 (Transfer + Brand claim — combined)

**Image:** teaching

**Headline:** *Not moves. Not routines.*
*The {{fundamentals}}.*

(Two-line treatment, italic anchor on second line per phase 4 build.)

**Body (paragraph 1):** I spent the next decade reverse-engineering what happened. Not the choreography. Not the performance. The fundamentals.

**Body (paragraph 2):** Then I started seeing them in the leaders, writers, and speakers who actually held a room. None of them danced. All of them had it.

**Payoff line (slightly larger body text):** *How to read your own life honestly. How to find what's already there. How to do the work most people only talk about. How to live in the answer.*

---

## §5 — WhoFor (exit beat)

**Status:** ✅ Locked (preserved from phase 4)

**Image:** the warm/personal one

**Headline:** *None of these people are {{broken}}.*

**Body:** They just never had anyone show them that the way you naturally are — quiet, observant, internal — is already enough to build something powerful on.

---

## §6 — About page CTA

**Eyebrow:** *(none)*

**Headline:** *That's the {{story}}. Here's the offer.*

**Body:** If any of this landed — if any of this sounded like you — the next step is the assessment. Eight questions. Three minutes. It tells you which of the four circles you're already in, and which one is missing. Free. No account.

**CTA:** *Discover Your Ikigai* → `/ikigai`

*(CTA wording matches home page primary CTA exactly — button consistency reduces decision friction.)*

---

# Ikigai page

**Status:** ✅ Locked (Phase 5, workstream 1)

**Sections in render order:** Hero → Four Circles preview → Quiz bridge → Quiz → Foundation Starter Guide capture → CTA

Phase 4 set up the visual structure (hero gap fixed, four-circle cards strengthened, quiz bridge added). Copy below populates those fields.

---

## §1 — Ikigai hero

**Eyebrow:** `THE ASSESSMENT`

**Headline:** *Most people are missing {{one}} circle. They've been calling it something else for years.*

**Subhead:** Passion, Mission, Vocation, Profession — most people are already in three. The work you were meant for sits where all four overlap. Eight honest questions, three minutes, and you'll know which one isn't there yet.

**Primary CTA:** *Start the Assessment* → (anchor to quiz section)

*(The phrase "eight honest questions" appears here and again in the §3 quiz bridge. Deliberate brand-marker repetition; preserved across both instances.)*

---

## §1.5 — Kinetic moment

**Line:** *The view from the top is just the {{start}}.*

**Render note:** This is a kinetic typography moment per the design system convention — Fraunces at large opsz, single italic anchor on "start," centered with generous whitespace, no surrounding eyebrow or subhead. The line stands alone.

**Placement rationale:** Sits between the assessment hero and the four-circle definitions. After reading "most people are missing one circle" the reader gets a beat of contemplation, then this line — which previews the actual brand argument (*finding the gap is the easy part; doing the work is the work*) — before they encounter the circle definitions.

**Schema note:** New singleton field group on the Ikigai page schema. Workstream 2 should add this as a discrete section: `ikigai.kineticMoment.line` (string) plus a description field telling editors how to use the `{{double-braces}}` italic-anchor convention.

---

## §2 — Four Circles preview cards

Each card has two lines: a plain-text **definition** and an italicised **missing-line**. Italics only on the missing-line — the definition reads as quieter scaffolding underneath. Card titles use the canonical ikigai labels.

### Passion
**Definition:** What you love doing.
**Missing:** *You're competent and quietly bored. The work is fine. You are not.*

### Mission
**Definition:** What the world actually needs from you.
**Missing:** *You're useful and you can't feel why it matters. The output ships. The meaning doesn't.*

### Vocation
**Definition:** What you can be paid to do.
**Missing:** *You love the work and the world hasn't figured out how to pay you for it yet.*

### Profession
**Definition:** What you're trained for and good at.
**Missing:** *You're passionate and you keep getting outmatched by people who actually know how.*

*(Definitions stay close to canonical ikigai labels — Jon doesn't redefine ikigai. The missing-lines do the recognition work. Profession's missing-line runs hotter than the others by design — Profession-missing is the gap people most resist admitting, and a uniformly-tempered set of cards would feel managed.)*

*(Schema implication: per workstream-2 note #5, these definitions should live in a single Sanity document referenced from both this page and home page §3, not duplicated.)*

---

## §3 — Quiz bridge

**Status:** ✅ Locked (preserved from phase 4)

Single line: *Eight honest questions. No right or wrong answers — only clarity.*

---

## §4 — Quiz

Question text lives in `lib/auditData.ts`. Out of scope for canonical copy doc unless we choose to migrate questions to Sanity (recommended in phase 5 schema redesign).

---

## §5 — Foundation Starter Guide

Same as home page §10. Reuse Sanity content via shared field reference, not duplicated.

---

## §6 — Ikigai CTA

**Eyebrow:** `ENOUGH READING`

**Headline:** *You don't need more {{information}}. You need to actually try.*

**Body:** You've read the page. You know what the assessment does. The only thing left is to take it. Eight questions. Three minutes. No account.

**CTA:** *Take the Assessment* → (anchor to quiz section)

*(Uses the voice rules' bullshit-clause example as the headline — fired here at the closing CTA where the brand has earned the right to call the question. This is the page's one bullshit-clause use; voice rules permit one per page.)*

---

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

---

# Programs page

**Status:** ✅ Locked (Phase 5, workstream 1)

**Sections in render order:** Hero (with "Who this is built for" right column) → Case studies → Three program cards → FAQ → Closing CTA → Foundation Starter Guide

Phase 4 locked the "Who this is built for" bullets and the case studies header, and moved case studies above the program cards. Phase 5 drafted hero subhead, three program cards, FAQ, and closing CTA in voice.

---

## §1 — Programs hero

**Eyebrow:** `THE WORK`

**Headline:** *This is where it gets {{physical}}.*

**Subhead:** Knowing what to do isn't the problem. Doing it when it counts is. These programs train the body to hold what the head already understands — through embodied practice, because the body can't be faked, and into whatever room you actually have to walk into.

**"Who this is built for" — right column bullet list (locked phase 4):**

**Header:** *Who this is built for*

- You're well-paid, competent, in-demand — and you suspect you're in the wrong work.
- You've been told you're "too quiet" — or too much. Neither felt accurate.
- You want to stop managing how you come across and start actually showing up.
- You're already good enough. You just never learned to inhabit it.

---

## §2 — *(Case studies retired pending new Foundation graduate stories)*

The existing case studies (Marcus / Michael / Diana) are presence-frame, written for the prior brand positioning. Removed from the Programs page until new purpose-frame stories from Foundation graduates exist. The `caseStudy` schema in Sanity is preserved; the data isn't deleted. Case study documents may still render on individual detail pages if those exist, or be revived on Programs when new stories are written.

**Schema note (preserved):** Case study card copy lives on the `caseStudy` schema in Sanity. Schema is preserved across this rewrite even though rendering is paused.

---

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

---

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

---

## §5 — Closing CTA

**Eyebrow:** `STILL DECIDING`

**Headline:** *Not sure which one is {{right}}?*

**Body:** We'll talk through where you are, what you're working toward, and which format actually makes sense for you. If none of them do, I'll tell you that too.

**Primary CTA:** *Book a Free Call*

**Microcopy:** *No pressure. No pitch. Honest read.*

---

## §6 — Foundation Starter Guide footer

**Reuses Home §10 — referenced singleton.** See Home for canonical content.

---

# /modules page

**Status:** ✅ Locked (Phase 7 — new page)

**Sections in render order:** Hero → Two module cards + bundle → Upgrade path → Self-paced path → FAQ → Closing CTA

The /modules page is the destination for two CTAs already shipped: Foundation page §6 Card B *"See the Modules"* and Lessons page §2 Card 2 secondary CTA *"See standalone modules"*. The page serves two distinct visitors honestly: the cautious shopper considering the Foundation, and the self-paced learner who doesn't want coaching. Both audiences are legitimate; neither is positioned as the "right" answer.

---

## §1 — Hero

**Eyebrow:** `STANDALONE MODULES`

**Headline:** *Start with a {{stage}}.*

**Subhead:** The Climb and The Vantage are the first two stages of the Foundation curriculum, available as standalone modules. Self-paced. Lifetime access. No coaching. For people who want to do this work without the cohort, or who want to test the work before joining one.

**Primary CTA:** *See the modules below* (smooth scroll to §2)

**Secondary link:** *Looking for the Foundation? →* `/foundation`

---

## §2 — The two modules + bundle

**Eyebrow:** `WHAT'S AVAILABLE`

**Header:** *Two stages. One purchasable on its own, both for $150 less.*

### Card 1 — The Climb

**Eyebrow:** `STAGE 1 · INVENTORY`

**Title:** *The Climb*

**Price:** $500 USD

**Tagline:** *Seven lessons. Honest inventory of what's actually in your life.*

**Description:** The first stage of the Foundation. You'll sort what you already do across the four ikigai circles, identify the one you've been avoiding, choose a physical medium and start practicing in it, and mourn what isn't working. Most people finish the inventory itself in a week. The honesty takes longer.

**What's included:**
- 7 lessons, lifetime access
- Body practice scripts adaptable to your chosen medium
- Limited use of the AI tools (3 runs/month of Presence Score, Tonality, Movement Plan)

**What's not:**
- 1:1 coaching
- Monthly group calls
- Weekly written check-ins
- The Vantage or The Leap

**CTA:** *Get The Climb — $500*

---

### Card 2 — The Vantage

**Eyebrow:** `STAGE 2 · DAILY PRACTICE`

**Title:** *The Vantage*

**Price:** $750 USD

**Tagline:** *Ten lessons. The active integration work.*

**Description:** The second stage of the Foundation. Ten lessons on finding where two of your four circles already overlap, designing daily practice around those overlaps, and the embodied skills that hold the practice together — communication, hard conversations, saying no, building rituals that compound.

**What's included:**
- 10 lessons, lifetime access
- Body practice scripts adaptable to your chosen medium
- Limited use of the AI tools (3 runs/month)

**What's not:**
- 1:1 coaching
- Monthly group calls
- Weekly written check-ins
- The Leap

**Prerequisite:** *The Climb, or equivalent inventory work done elsewhere. The Vantage assumes you know which of your four circles is missing and have started a physical practice. Without that foundation, the lessons won't have anything to work with.*

**CTA:** *Get The Vantage — $750*

---

### Card 3 — The bundle

**Eyebrow:** `BOTH MODULES`

**Title:** *The Climb + The Vantage*

**Price:** $1,100 USD *($150 saving)*

**Description:** Both standalone modules, purchased together. Same lifetime access. Same AI tools. Same self-paced format. No coaching, no group calls — for the path through Stages 1 and 2 done on your own.

**CTA:** *Get both — $1,100*

**Footer line under §2 grid:** *Prices in USD. CAD pricing shown at checkout.*

---

## §3 — The upgrade path

**Eyebrow:** `IF YOU WANT MORE LATER`

**Header:** *The Foundation credits forward.*

**Body:** Whatever you spend on standalone modules — $500 for The Climb, $750 for The Vantage, $1,100 USD for the bundle — credits forward in full toward the Foundation if you ever decide you want the coaching version. No expiration. No fine print. Buy a module, do the work, upgrade later if you want, and your purchase counts as if you'd applied to the Foundation directly.

**Detail line:** *Example: you buy The Climb + The Vantage bundle for $1,100 USD, do the work over six months, then decide you want the Foundation. The Foundation is $5,000 USD (or $4,500 USD founding cohort) — your bundle credits toward that, so your remaining cost is $3,900 USD ($3,400 founding cohort).*

**CTA:** *See the Foundation* → `/foundation`

---

## §4 — The self-paced path

**Eyebrow:** `IF YOU JUST WANT THE WORK`

**Header:** *Some people don't want a coach. That's a real path.*

**Body (paragraph 1):** Standalone modules aren't a downsell. They're a complete product for people who want to do this work on their own — without the cohort, without sessions, without group calls. You'll get the same lessons that Foundation clients get. The same body practices. The same diagnostic of which circle you've been avoiding.

**Body (paragraph 2):** What you won't get is someone in the room with you when you do the hard parts. The Climb's mourning lesson, The Vantage's hard conversations — those land differently when you're working through them alone than when you have a coach to bring them to. That's not better or worse. It's different work, and some people prefer it that way.

**Body (paragraph 3):** If you're the kind of person who's done deep work on yourself before — through therapy, through years of a meditation practice, through your own consistent journaling discipline — the standalone modules might be exactly what you want. You bring your own accountability. We give you the structure and the practice. For what it's worth: the people who get the most from these modules tend to take their time with them. Pace is yours to set, but the work doesn't reward speedrunning.

---

## §5 — FAQ

**Header:** *Common questions.*

### Can I buy The Vantage without The Climb?

Technically yes — but we'd push back unless you've done equivalent inventory work elsewhere. The Vantage assumes you know which circle you're missing and have started a body practice. If you haven't done that diagnostic, The Vantage's first lesson won't have anything to work with. Most people are best served by The Climb first, then The Vantage. The bundle exists because it's the most common path.

### What if I get partway through and realize I want the Foundation?

The credit-forward policy applies whenever you decide. You can buy The Climb today, work through three lessons, decide you want the full coached experience, and upgrade to the Foundation with The Climb's $500 USD counted toward the price. No partial-credit calculations, no time limits.

### Do I get access to the AI tools?

Limited use — three runs per month of Presence Score, Tonality, and Movement Plan. Foundation clients get unlimited use during their engagement. The tools are designed to support the practice, not be the practice — three runs a month is more than enough for someone working through a module on their own pace.

### How long does it take to finish a module?

The Climb's defined work takes 4-6 weeks at a pace of one lesson per week, plus the body practice between lessons. The Vantage takes 12-16 weeks. These are estimates — you have lifetime access, so the actual pace is yours. Some people finish The Climb in two intense weeks. Some take three months. Both are fine.

### Can I do this if I'm not a dancer?

Yes. Most people doing this work aren't dancers. You'll pick your own physical medium during The Climb's fourth lesson — hiking, climbing, weight training, swimming, partner dance, martial arts, yoga, or other practices that meet the criteria. Dance is just Jon's medium. The body practice in the modules adapts to whatever you pick.

### Refund policy?

Full refund within 14 days of purchase for either module or the bundle. After 14 days, no refunds — but the upgrade path remains available indefinitely if your needs change.

---

## §6 — Closing CTA

**Eyebrow:** `READY?`

**Headline:** *Pick a {{path}}.*

**Three CTAs side by side:**

| Path | Price | CTA destination |
|---|---|---|
| The Climb | $500 USD | Stripe checkout — Climb |
| Both modules | $1,100 USD | Stripe checkout — bundle |
| The Foundation | $4,500 USD founding cohort | `/foundation` |

**Microcopy below:** *Or take the [Presence Audit](/audit) first to see where you actually are. Free. No email required.*

---

# Lessons page

**Status:** ✅ Locked (Phase 5, workstream 1)

**Sections in render order:** Hero → Two course cards → Closing CTA → Foundation Starter Guide

The Lessons page is the lightest copy load on the site, but the two course cards do the most conversion work — they're the only place on the site where someone can scan both courses side-by-side and decide where to start.

---

## §1 — Lessons hero

**Eyebrow:** `STRUCTURED LEARNING`

**Headline:** *The {{Blueprint}}.*

**Subhead:** Two courses, in order. The free one tells you what's missing. The paid ones build the practice that closes the gap. Both are self-paced. Both are honest about what they can and can't do.

---

## §2 — Course cards

Course descriptions live on the `course` schema in Sanity, not on a `lessonsPage` schema. Same content reused on the individual course detail pages.

### Card 1 — The Four Circles

**Eyebrow:** `BEGINNER`

**Title:** *The Four Circles*

**Tagline:** *Free. Twelve lessons. Whatever you scored on the assessment, here's what it means.*

**Description:** A free 12-lesson course that walks you through what your ikigai assessment results actually mean. Each lesson takes about fifteen minutes. Passion, Mission, Vocation, Profession — one circle at a time, what each one looks like when it's working, what it looks like when it isn't, and how to tell the difference in your own work. By the end you'll know which one is missing from your current situation, and you'll have language for what to do about it.

**Metadata:**
- 1 module · 12 lessons
- ~3 hours total
- Free · gated by free account

**CTA:** *Start the Course*

---

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

---

## §3 — Closing CTA

**Eyebrow:** `WANT MORE?`

**Headline:** *Courses teach the {{shape}}. Coaching does the work.*

**Body:** The curriculum gives you the language and the practice. The Foundation gives you someone in the room with you while you do the work — real feedback, real accountability, a shape to the six months. If you want the work to land, that's what coaching is for.

**Primary CTA:** *See the Foundation* → `/foundation`

---

## §4 — Foundation Starter Guide footer

**Reuses Home §10 — referenced singleton.**

---

## Schema notes

If the course detail page (e.g. `/lessons/four-circles`) needs a longer description than the card on the Lessons index page, the schema should have both `cardDescription` and `fullDescription` as separate fields rather than truncating one for the other.

The course descriptions on this page should match the descriptions used wherever else the courses appear (Foundation page hero, Programs page card 1) — this is a candidate for a single Sanity reference, not duplicated copy.

---

# Blog index page

**Status:** ✅ Locked (Phase 5, workstream 1)

**Sections in render order:** Hero → Filter pills → The Lab featured strip → Featured grid → All articles list → Newsletter capture → Audit CTA → Foundation Starter Guide

Most of the work on this page is chrome — individual blog post content lives on each post. The phase 4 deferred filter pill renames are locked here.

---

## §1 — Blog hero

**Eyebrow:** `THE ARCHIVES`

**Headline:** *Practical writing on what it actually takes to {{stop}} disappearing in rooms.*

**Subhead:** Essays on presence, movement, and the gap between what you know and what you can do when it counts. New ones as I figure things out. Some of them will probably be wrong.

---

## §2 — Filter pills

Locked rename list (deferred from phase 4):

| Current label | New label |
|---|---|
| MOVEMENT & BODY | The Body |
| PRESENCE & CONFIDENCE | Presence |
| LEADERSHIP & CAREER | The Work |
| THE LAB | The Lab *(unchanged)* |

**Schema implication:** Filter labels are content categories, not pillar mappings. They live as a string enum on `blogPost` schema. The `pillar` schema itself is being retired in the workstream 2 schema redesign. Display labels are safe to rename; slugs stay stable for existing post URLs.

---

## §3 — The Lab featured strip

**Series eyebrow:** `THE LAB · ONGOING`

**Series title:** *The Lab*

**Series description:** I'm running myself through the Foundation curriculum, week by week, and writing what's actually happening. What's working. What isn't. What I keep getting wrong. Updated as I go — no schedule, no script, no neat conclusions.

**CTA:** *Follow The Lab*

---

## §4 — Featured grid

No section subhead. Card content is per-post.

**Section header (if rendered):** `FEATURED`

---

## §5 — All articles list

**Section header (if rendered):** `ALL ARTICLES`

**Search placeholder:** *Search essays...*

**No-results state:** *No essays match. Try a different filter, or browse The Lab.*

---

## §6 — Newsletter capture

**Reuses Home §8 — referenced singleton.**

The Tuesday newsletter capture appears on Home, Blog index, and likely Audit results. Same Sanity document, multiple render contexts.

---

## §7 — Audit CTA

**Reuses Home §9 — referenced singleton.**

---

## §8 — Foundation Starter Guide

**Reuses Home §10 — referenced singleton.**

---

# Contact page

**Status:** ✅ Locked (Phase 5, workstream 1)

**Sections in render order:** Audit-first hero card → Direct contact split → What happens next → A few things worth knowing → Email fallback

The Contact page barely needed voice work — most existing copy was already on-voice. Phase 5 captured what was already shipping into the canonical doc and tightened a few lines.

---

## §1 — Audit-first hero card

**Eyebrow:** `START HERE`

**Headline:** *Not sure where to start?*

**Body:** Take the Presence Audit first. Seven questions, three minutes. I'll review your answers and follow up personally with something actually useful — not a generic drip sequence.

**Stats grid (right of card):**
- **7** questions
- **3** minutes
- **1** honest reply from Jon

**Primary CTA:** *Take the Presence Audit*

**Microcopy:** *No account needed. Free.*

---

## §2 — Direct contact split

**Divider line:** *or reach out directly*

**Section header:** *What's on your mind?*

### Card A — 1-on-1 Coaching

**Eyebrow:** `1-ON-1 COACHING`

**Body:** *I want to work with Jon directly.*

**Behavior:** Opens contact form with this preselected as inquiry type.

### Card B — General Question

**Eyebrow:** `GENERAL QUESTION`

**Body:** *I have something else on my mind.*

**Behavior:** Opens contact form with this preselected as inquiry type.

---

## §3 — What happens next

**Eyebrow:** `WHAT HAPPENS NEXT`

### Step 1

**Title:** *Submit your inquiry*

**Body:** Takes 2 minutes. No prep needed.

### Step 2

**Title:** *We schedule a 15-min call*

**Body:** I'll reach out within 2–3 business days to find a time.

### Step 3

**Title:** *We build your custom plan*

**Body:** Together we map out the right path forward for you.

---

## §4 — A few things worth knowing

**Eyebrow:** `A FEW THINGS WORTH KNOWING`

### Item 1

**Title:** *I don't do pressure.*

**Body:** If you reach out, I'm not going to chase you down. Take your time.

### Item 2

**Title:** *I work with individuals, not committees.*

**Body:** If you're the one who wants to change, this is for you — not your boss who thinks you need coaching.

### Item 3

**Title:** *Spots are limited.*

**Body:** I keep my 1-on-1 client load intentionally small. If you're on the fence, sooner is better.

---

## §5 — Email fallback

**Body line:** Prefer email? hello@jonchalant.com — I check it daily, minus weekends when I'm wrangling three kids and pretending to relax.

---

# Audit page

**Status:** ✅ Locked (Phase 5, workstream 1)

**Sections in render order:** Hero / pre-quiz intro → Quiz (7 questions, in code) → Result band copy (one of three) → Foundation Starter Guide

The Audit page wraps the Presence Audit — distinct from the Ikigai Assessment. Quiz logic and question text remain in `lib/auditData.ts` per workstream-2 decision. Result band copy lives in Sanity since it's marketing copy, not quiz logic.

---

## §1 — Audit hero / pre-quiz intro

**Eyebrow:** `THE PRESENCE AUDIT`

**Headline:** *Seven questions. {{Three}} minutes. One honest read.*

**Subhead:** This is the quick one. Where the Ikigai Assessment tells you which circle is missing, the Presence Audit tells you where you are with what you already have. Built for people who already know their work but want to know where the gap actually is.

**Microcopy:** *Free. No account. No email required to see your result.*

**Primary CTA:** *Start the Audit*

---

## §2 — Mid-quiz progress chrome

**Question counter format:** *Question 3 of 7 — 43%*

**Mid-quiz encouragement (single instance, at midpoint only):** *Halfway. Keep going.*

---

## §3 — Result bands

The audit produces a numerical score mapping to one of three bands. Each band has its own headline, body, and CTAs. Bands are honest, not flattering — the warmth move is meeting the person where they actually are, not telling everyone they did great.

### Band A — Low (score in lower third)

**Result headline:** *You've got the substance. The {{signal}} isn't there yet.*

**Body:** Most of your answers point to a real gap between what you know and how the room reads you. That's not bad news — it's the most fixable kind of presence problem there is, because the work isn't to become someone else. It's to learn what you already know how to do, in your body. Most people who score in this band see a noticeable shift in week two of the Foundation.

**Primary CTA:** *See the Foundation*

**Secondary CTA:** *Tuesday newsletter — one idea a week to start*

---

### Band B — Mid (score in middle third)

**Result headline:** *You show up well. Sometimes. The pattern isn't reliable yet.*

**Body:** Your answers say the skills are there — at least sometimes — but they aren't dependable across contexts. You probably already know which rooms feel right and which ones don't. The Foundation is built for exactly this gap: the skills exist, the practice that locks them in does not.

**Primary CTA:** *See the Foundation*

**Secondary CTA:** *Book a free 15-minute call*

---

### Band C — High (score in upper third)

**Result headline:** *You already have it. Most of the time. {{Most}} isn't all of it.*

**Body:** Your answers say presence isn't your bottleneck — but you wouldn't have taken this audit if nothing was missing. The gap is probably specific, not general: a room where it slips, a kind of conversation that loses you, a transition you haven't figured out yet. That's 1:1 territory, not curriculum territory.

**Primary CTA:** *Book a Discovery Call*

**Secondary CTA:** *Read the essays — The Lab*

---

## §4 — Foundation Starter Guide

**Reuses Home §10 — referenced singleton.**

---

## Schema notes

Quiz question text and scoring logic stay in `lib/auditData.ts` (decision locked in workstream 1). Migration to Sanity would couple two systems for marginal benefit; question phrasing is stable enough to live in code.

Result band copy *does* live in Sanity. The three bands need their own document or referenced sub-document so they're editable without engineering.

Schema fields needed on the audit page document:
- `audit.hero.eyebrow`, `audit.hero.headline`, `audit.hero.subhead`, `audit.hero.microcopy`, `audit.hero.cta`
- `audit.midQuizEncouragement`
- `audit.bands.low.headline`, `audit.bands.low.body`, `audit.bands.low.primaryCta`, `audit.bands.low.secondaryCta` — repeat for `mid` and `high`
- Foundation Starter Guide is a reference, not a duplicated field group

---

# Globals — copy that appears on every page

**Status:** ✅ Locked (Phase 5, workstream 1)

Universal copy that lives in shared components rather than page-specific Sanity documents. Schema decisions in workstream 2 will determine whether these live in a `siteConfig` singleton, in component defaults, or in environment variables.

---

## Navbar

**Wordmark:** `JONCHALANT`

**Desktop primary nav (in order):**
- Start Here → `/`
- Programs → `/programs`
- Lessons → `/lessons`
- About → `/about`

**Right-side links:**
- Sign In → `/sign-in`

**Mobile menu (in order):**
- Start Here · Programs · Lessons · About · Contact · Sign In

**Mobile persistent CTA (in nav bar, always visible):** *Discover Your Ikigai* → `/ikigai`

*Note: Contact appears on mobile menu but not desktop primary nav. Desktop relies on the Contact link in the footer.*

---

## Footer

**Brand line (left, near wordmark):** *Find the work you were meant for — then learn to inhabit it.*

**Column 1 — ESSENTIALS:**
- Home → `/`
- About → `/about`
- Contact → `/contact`

**Column 2 — COACHING:**
- Programs → `/programs`
- The Foundation → `/foundation`
- Modules → `/modules`
- Ikigai → `/ikigai`

**Column 3 — LEARN:**
- The Blueprint → `/lessons`
- The Archives → `/blog`
- Presence Audit → `/audit`

**Account section:**
- Sign In → `/sign-in`

**Bottom row:**
- Copyright: *© 2026 Jonchalant. All rights reserved.*
- Privacy link: *Privacy* → `/privacy`

**Removed in phase 5:** "The Breakdown" was previously listed in the Learn column as a placeholder for an unbuilt blog series. Removed since it has no destination. Restore if a Breakdown series ships later.

---

## Universal form microcopy

### Submit success states

- General form: *Got it. Check your inbox.*
- Newsletter signup: *You're in. First Tuesday lands soon.*
- Starter Guide: *Sent. Check your inbox in the next minute.*
- Contact form: *Got it. I'll be in touch within 2–3 business days.*

### Submit error

*Something went sideways. Try again, or email me directly: hello@jonchalant.com*

### Field validation

- Required field: *Required.*
- Invalid email: *That doesn't look like an email.*
- Field too short: *A bit more.*
- Field too long: *Less, please.*

### Loading state on submit button

*Sending...*

### Tone notes

- Error messages don't apologize. They name what happened and offer the next move.
- Success messages don't celebrate. They confirm and tell you what comes next.
- Validation messages are short. *Required* is enough.

**Email reconciliation:** `hello@jonchalant.com` is the canonical contact email everywhere on the site. Earlier draft used `jon@jonchalant.com` in form errors — corrected to match Contact page.

---

## Universal CTA labels (style guide for consistency)

### Primary CTAs in order of conversion weight

- *Discover Your Ikigai* — top of funnel, default primary CTA
- *Take the Presence Audit* — diagnostic alternative
- *Start the Course* — Four Circles entry
- *See the Foundation* — mid-funnel, paid offer awareness
- *Apply for the Founding Cohort* — direct purchase intent (Foundation, $4,500)
- *See the Modules* — standalone-module purchase intent ($500–$1,100)
- *Book a Discovery Call* — high-touch / 1:1
- *Book a Free Call* — same as above, less-warm framing

### Secondary CTAs

- *Read the essay* — blog/about reads
- *Read Jon's story* — about page
- *Send me Tuesdays* — newsletter
- *Send me the guide* — Foundation Starter Guide
- *Follow The Lab* — blog series subscription
- *Explore Coaching Programs* — cross-link from Lessons

### Microcopy under CTAs (consistent usage)

- *Free.* — when something is
- *No account needed.* — standard accountless offer (use this phrasing, not "No account required")
- *No email required.* — audit-specific (no signup needed to see result)
- *Free. No email required.* — combined for highest-trust offers

---

## 404 page

**Headline:** *That page doesn't exist.*

**Body:** Either the link's broken, or you typed something I haven't built yet. Either way — here are the places you probably wanted.

**Three links:**
- Home → `/`
- About → `/about`
- The Archives → `/blog`

**Microcopy:** *If you got here from a link on this site, let me know — hello@jonchalant.com.*

---

## Sign-in / sign-up (auth pages)

### Sign-in

**Headline:** *Welcome back.*

**Subhead:** *Pick up where you left off.*

**Form CTAs:**
- Primary: *Sign in*
- Magic link option: *Email me a sign-in link*
- Forgot password: *Forgot password?*

### Sign-up

**Headline:** *Make a free account.*

**Subhead:** *Saves your audit results, lesson progress, and starter guide. No marketing emails — you control what you get.*

**Form CTA:** *Create account*

---

# Schema implications (preview for workstream 2)

This document already exposes several schema-level decisions that need to be made:

1. **Repeating sections.** "Foundation Starter Guide" appears on home, ikigai, and foundation pages. It should be one Sanity document referenced by each page, not three duplicated copies.

2. **Audit CTA pattern.** Same — appears on multiple pages. One source.

3. **Newsletter capture.** Same — one source.

4. **Stage definitions.** The Climb, The Vantage, The Leap appear on home and Foundation. One source. Where pillar definitions previously lived, stage definitions now live. The four-pillar framework is fully retired.

5. **Four Circles definitions.** Passion/Mission/Vocation/Profession appear on home and ikigai. One source.

6. **Quiz questions.** Currently in `lib/auditData.ts`. Decision: migrate to Sanity or keep in code. Migration enables non-engineering edits but couples scoring logic to CMS.

7. **Italic anchor convention.** Every headline field needs a description telling editors how to use `{{double-braces}}`. Studio UI should make this discoverable.

8. **Field naming standardization.** All hero-shaped sections use the same field names: `eyebrow`, `headline`, `subhead`, `body`, `primaryCta`, `secondaryCta`. No drift.

These get resolved in workstream 2 (schema redesign).

---

# Workstream progress

| Workstream | Status |
|---|---|
| 1. Canonical copy doc | ✅ **COMPLETE** — all 10 content surfaces locked |
| 2. Schema redesign | ⚪ Ready to start |
| 3. Content population + code reconciliation | ⚪ Blocked on workstream 2 |

---

## Workstream 1 — final summary

All content surfaces are now drafted in voice and **re-locked** following the Phase 6 strategic pivot (May 2026) from four-pillar / eight-week structure to three-stage / six-month engagement structure. See `design-work/program-structure-strategy.md` for the underlying decisions.

| Page | Sections | Status |
|---|---|---|
| Home | 10 | ✅ Re-locked (Phase 6) — §3, §4, §5 rebuilt |
| About | 6 | ✅ Re-locked (Phase 6) — §4 payoff line replaced |
| Ikigai | 7 | ✅ Re-locked (Phase 6) — §1.5 kinetic moment added |
| Foundation | 9 | ✅ Re-locked (Phase 6) — entire page rebuilt |
| Programs | 6 | ✅ Re-locked (Phase 6) — §1, §2, §3, §4, §5 rebuilt; §2 case studies retired |
| /modules | 6 | ✅ Locked (Phase 7 — new page) — built around two-audience honesty |
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

## Next session: workstream 2 — schema redesign

Workstream 2 designs Sanity schemas to hold the canonical copy above. Key decisions to make first:

1. **Schema rename strategy** — rename existing fields (clean, breaks runtime data shape, requires coordinated deploy) vs. add new fields and dual-write (safer, more moving parts, slower migration)
2. **Singleton document type pattern** — establish a clear convention for page singletons (Home, About, Ikigai, Foundation, Programs, Lessons, Blog index, Contact, Audit) vs. listed types (blog posts, courses, case studies, testimonials)
3. **Reusable section pattern** — establish a "section" object type (eyebrow, headline, subhead, body, primaryCta, secondaryCta) used as a building block across schemas, so every hero-shaped section uses the same field set
4. **Reference pattern for shared content** — how Foundation Starter Guide / newsletter capture / stage definitions get referenced from multiple page documents
5. **Studio UI organization** — fieldsets, validation rules, field descriptions (especially around the `{{double-braces}}` italic-anchor convention)

Once workstream 2 is done, workstream 3 populates Sanity with the locked copy from workstream 1 and reconciles any hardcoded component defaults.
