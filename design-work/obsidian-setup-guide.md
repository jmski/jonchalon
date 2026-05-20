# Obsidian Setup Guide — Jonchalant

> Follow this end-to-end. About 45-60 minutes the first time. Once it's set up, you write in Obsidian forever — no further setup required.

---

## Step 1 — Install Obsidian (5 min)

1. Go to **obsidian.md** and download for your OS (Mac/Windows/Linux).
2. Install and open. You'll see a startup screen asking about creating or opening a vault.

A **vault** is just a folder on your computer. Obsidian indexes whatever folder you point it at. We're going to point it at a folder that contains your existing `design-work/` and `design-system/` so everything lives together.

---

## Step 2 — Create the vault folder (5 min)

Decide where this folder lives on your computer. Recommendation: `~/Documents/jonchalant-knowledge/` or wherever you keep work documents. Not in your code repo (the knowledge system is separate from the codebase, even though it references the same files structurally).

In Finder (or File Explorer), create the folder structure:

```
jonchalant-knowledge/
├── curriculum/
│   ├── climb/
│   ├── vantage/
│   └── leap/
├── book/
│   ├── chapters/
│   └── research/
├── podcast/
│   ├── prep/
│   └── published/
├── lab/
│   └── entries/
├── blog/
│   └── posts/
├── newsletter/
│   └── drafts/
├── daily-notes/
└── inbox/
```

Don't create files yet, just the folders.

**Then make `design-work/` and `design-system/` visible in the vault without duplicating files.**

Use links so there is one source of truth in the repo root and no copy drift.

### Recommended (Windows): directory junctions

1. Delete `jonchalant-knowledge/design-work/` and `jonchalant-knowledge/design-system/` if they are physical copies.
2. From the repo root in Command Prompt, run:

```bat
mklink /J jonchalant-knowledge\design-work design-work
mklink /J jonchalant-knowledge\design-system design-system
```

Now edits in either path update the same files.

**Alternative: symlink (`mklink /D`)** if you prefer symbolic links and your machine policy permits them.

**Fallback: manual copy** only if linking is not possible. If you use manual copy, pick one canonical location and sync on a fixed cadence.

### If you ever decide to move canonical folders into `jonchalant-knowledge/`

Do this only if you are intentionally changing repository conventions. Before deleting root `design-work/` or root `design-system/`, update all references in:

- `CLAUDE.md`
- `design-work/obsidian-setup-guide.md`
- any scripts and docs that reference root paths

Then run lint/build to confirm no breakage.

---

## Step 3 — Open the folder in Obsidian as a vault (2 min)

In Obsidian's startup screen, click *"Open folder as vault"* and select your `jonchalant-knowledge` folder.

Obsidian will index it. The left sidebar shows all your folders and files. If you used junctions/symlinks, `design-work/` and `design-system/` appear in the vault and still map to the repo root locations.

---

## Step 4 — Configure essential settings (10 min)

Click the gear icon (Settings) in the bottom left. Make these changes:

**Editor:**
- *Default editing mode:* Live preview (so you see formatting while writing)
- *Strict line breaks:* OFF (so single line breaks render naturally)

**Files & links:**
- *Default location for new notes:* In the folder specified below
- *Default location for new attachments:* In the folder specified below (create an `attachments/` folder)
- *New link format:* Shortest path when possible (cleaner links)
- *Use [[Wikilinks]]:* ON

**Appearance:**
- Choose a theme you like. *Minimal* and *Things* are popular. Doesn't matter — visual preference.
- Font: leave default unless you have strong feelings.

**Hotkeys:**
- Note these defaults that you'll use often:
  - `Cmd+O` (Mac) / `Ctrl+O` (Win): Quick switcher to find any note
  - `Cmd+P` / `Ctrl+P`: Command palette (do anything)
  - `Cmd+N` / `Ctrl+N`: New note
  - `Cmd+Click` / `Ctrl+Click` on a link: Open in new pane

**Daily notes (core plugin):**
- Settings → Core plugins → enable *Daily notes*
- Daily notes settings:
  - *New file location:* `daily-notes/`
  - *Date format:* `YYYY-MM-DD`
  - *Open daily note on startup:* OFF (we want HOME to open instead)

**Workspaces (core plugin):**
- Settings → Core plugins → enable *Workspaces*
- We'll use this to set HOME as the default landing.

---

## Step 5 — Create the HOME dashboard (10 min)

In the root of your vault, create a new file called `_HOME.md`.

The underscore prefix sorts it to the top of any file listing. Paste this content as a starting template:

```markdown
# Jonchalant — Today

## This week's focus
**Curriculum writing:** [fill in this Sunday]
**Podcast prep:** [fill in this Sunday]
**Lab idea:** [fill in this Sunday]

---

## Today
- [ ] [Sunday-night Jon fills in Monday's task here]
- [ ] [And so on for each day]

---

## Weekly rhythm
- **Mon / Wed / Fri 6:30-8:00am:** Curriculum writing (90 min)
- **Tue / Thu 6:30-7:15am:** Capture processing + podcast prep (45 min)
- **Sat:** Off. Family. Practice.
- **Sun evening:** Weekly review (30 min)

---

## In-progress
- [[curriculum/_outline]] — next: Climb Lesson 1
- [[book/_outline]] — populate as ideas surface
- [[podcast/_ideas]] — initial guest list

## Coming up next week
- [Fill in during Sunday review]

## Inbox count
[Update during Sunday review: count of unfiled daily notes]

---

## Quick links — outlines
- [[curriculum/_outline]]
- [[book/_outline]]
- [[podcast/_ideas]]
- [[lab/_ideas]]
- [[blog/_ideas]]

## Quick links — strategy & truth
- [[design-work/program-structure-strategy]]
- [[design-system/canonical-copy]]

## Quick links — capture
- [[inbox/_capture]]
- Today's daily note (Cmd+P → "Open today's daily note")
```

Save (`Cmd+S` / `Ctrl+S`).

---

## Step 6 — Create the outline files (15 min)

These are the master indexes for each content category. They sort to the top of their folders.

### curriculum/_outline.md

```markdown
# Curriculum — Outline

## The Climb (4-6 weeks, 7 lessons)
- [ ] [[curriculum/climb/01-cost-of-not-knowing]]
- [ ] [[curriculum/climb/02-honest-assessment]]
- [ ] [[curriculum/climb/03-body-as-data]]
- [ ] [[curriculum/climb/04-finding-your-medium]]
- [ ] [[curriculum/climb/05-cataloguing-what-you-do]]
- [ ] [[curriculum/climb/06-circles-you-avoid]]
- [ ] [[curriculum/climb/07-mourning-what-isnt-working]]

## The Vantage (12-16 weeks, 10 lessons)
- [ ] [[curriculum/vantage/01-reading-overlaps]]
- [ ] [[curriculum/vantage/02-daily-ritual-design]]
- [ ] [[curriculum/vantage/03-communication-presence]]
- [ ] [[curriculum/vantage/04-communication-clarity]]
- [ ] [[curriculum/vantage/05-communication-assertiveness]]
- [ ] [[curriculum/vantage/06-emotional-intelligence]]
- [ ] [[curriculum/vantage/07-building-relationships]]
- [ ] [[curriculum/vantage/08-saying-no]]
- [ ] [[curriculum/vantage/09-negotiating-your-role]]
- [ ] [[curriculum/vantage/10-self-management]]

## The Leap (6-18 months, 11 lessons)
- [ ] [[curriculum/leap/01-missing-circle-named]]
- [ ] [[curriculum/leap/02-cost-of-staying]]
- [ ] [[curriculum/leap/03-mission-gap]] *(conditional)*
- [ ] [[curriculum/leap/04-passion-gap]] *(conditional)*
- [ ] [[curriculum/leap/05-vocation-gap]] *(conditional)*
- [ ] [[curriculum/leap/06-profession-gap]] *(conditional)*
- [ ] [[curriculum/leap/07-the-conversation]]
- [ ] [[curriculum/leap/08-walking-away]]
- [ ] [[curriculum/leap/09-confidence-as-evidence]]
- [ ] [[curriculum/leap/10-trust-and-dependability]]
- [ ] [[curriculum/leap/11-re-reading-the-ikigai]]
```

The `[[wikilinks]]` will be empty links until you create those files. Click them to create the file when you're ready to write that lesson.

### book/_outline.md

```markdown
# Book — Outline

> Working title: TBD. Year 2 release. Outline developed alongside Year 1 curriculum work.

## Status
Outline phase. No chapters drafted yet.

## Tentative chapter structure

(Develop in parallel with curriculum. Each chapter maps to a cluster of lessons.)

- Chapter 1 — [The argument: body knows what mind is arguing about]
- Chapter 2 — [The four circles, properly understood]
- Chapter 3 — [The cost of not knowing]
- Chapter 4 — [The climb — inventory as practice]
- Chapter 5 — [The vantage — daily ritual, embodied practice]
- Chapter 6 — [The leap — when change is the work]
- Chapter 7 — [Cases — what this looks like in real lives]
- Chapter 8 — [The practice ongoing — there is no graduation]

## Ideas worth elevating to book material
*(Tag curriculum notes with #book-material; harvest them here)*

- [Empty for now]

## Publishing path decision
- Self-publish vs traditional
- Decide late Year 1 based on Year 1 performance
- Strong Scenario C → traditional (have leverage)
- Scenarios A/B → self-publish (control, speed)
```

### podcast/_ideas.md

```markdown
# Podcast — Ideas

## The show
**Name:** *Jonchalant and the Iki-Guys*
**Cadence:** every 4-6 weeks
**Format:** audio-first, 45-75 min, lightly produced, two mics

## Interview architecture
**Anchor (every episode):** *"What were you doing the year before you knew this was your work?"*
**Deeper cut 1:** *"What did you almost do instead, and what stopped you?"*
**Deeper cut 2:** *"What do you do for a living that doesn't quite match what you're actually for?"*

## Guest pipeline

### Confirmed candidates (need full profile review)
- [[podcast/prep/kam-bassier]] — personal trainer, 20 years
- [[podcast/prep/jober-guevarra]] — Toronto photographer
- [[podcast/prep/patrick-mossman]] — Telus PM (need to clarify medium)

### Outside current network (need to source)
- A writer (decade-plus body of work)
- A chef (the body-worker-who-doesn't-know-it)
- A craftsperson or trades practitioner
- A musician (the brand's deepest natural fit)
- A therapist or counselor

### Launch goal
3 episodes recorded pre-launch. By month 6: 3+ Iki-Guys from outside current network.
```

### lab/_ideas.md

```markdown
# Lab — Ideas

## Format
Short video (60-180 sec) + companion blog post (300-600 words).
Cadence: one entry every 2-3 weeks.

## Premise
Jon documents his own run through the Foundation curriculum in real time. The brand's evidence layer.

## Entry ideas
*(Capture as they surface)*

- [Empty for now]
```

### blog/_ideas.md

```markdown
# Blog — Ideas

## Three tracks
1. **Iki-Guys feature posts** — one per podcast episode (primary)
2. **The Lab** — Jon's self-documentation (see lab/)
3. **Essays** — standalone (tertiary)

## Filter pills
The Body · Presence · The Work · The Lab · Iki-Guys

## Essay ideas
*(Standalone essay ideas — not Iki-Guy posts, not Lab entries)*

- [Empty for now]
```

### newsletter/_ideas.md

```markdown
# Newsletter — Ideas

## Tuesday Newsletter
**Promise:** *"One idea every Tuesday. No noise."*

## Sequencing
Launches AFTER there's enough content to promote (~6-8 weeks post-launch).

## Structure (when active)
- Highlight this week's blog posts, Lab entries, podcast episodes
- Preview next week
- Occasionally Jon's original thinking

## Topic ideas
*(For future essays / newsletter content)*

- [Empty for now]
```

### inbox/_capture.md

```markdown
# Inbox — Quick Capture

> Dump ideas here that don't yet have a home. Process during Sunday review.

---

[Add ideas with date stamps. Example:]

## 2026-05-14
- Random idea about [something]
- Quote I want to remember: [...]
```

Save all these files.

---

## Step 7 — Configure HOME to open on startup (3 min)

This is what makes Obsidian *pull* you to the work each morning.

1. Open `_HOME.md` (single tab open, nothing else)
2. Settings → Core plugins → Workspaces — make sure it's enabled
3. Open the Command Palette (`Cmd+P` / `Ctrl+P`)
4. Type "workspace" and find *"Workspaces: Save layout"*
5. Save as `"HOME"`
6. Settings → Core plugins → Workspaces → set HOME as default workspace

Now when you open Obsidian, `_HOME.md` will be the file already open. Coffee → laptop → Obsidian → today's task already visible.

---

## Step 8 — Install one essential community plugin (5 min)

There's one community plugin that's genuinely worth having:

**Templater** — lets you create templates with dynamic content (e.g., today's date auto-filled in a daily note).

1. Settings → Community plugins → Turn off "Restricted mode" (this allows community plugins)
2. Browse → search "Templater"
3. Install → Enable

Configure later if you want to template your daily notes. For now, just having it installed means you're not locked out of templates when you want them.

**Optional but useful:** Calendar — adds a small calendar widget to the sidebar so you can click any date to open/create that daily note. Same install process.

---

## Step 9 — Capture habit (the actual work)

The system only works if you use it. The discipline is small:

**On your phone:**
1. Install Obsidian mobile (free)
2. Sign in / connect to your vault — easiest way is **Obsidian Sync** ($4/mo) which auto-syncs the same vault to all devices

If $4/mo bothers you, alternatives exist (iCloud Drive, Dropbox), but Obsidian Sync is purpose-built and reliable. Worth it.

1. Open Obsidian on phone → it shows today's daily note (or HOME)
2. When an idea hits during the day: open Obsidian → today's daily note → type → done

**Weekly Sunday review (30 min):**
1. Open Obsidian on laptop
2. Open daily notes from the past week
3. For each idea, decide: does this go in curriculum, book, podcast, lab, blog, or newsletter?
4. Cut and paste the idea into the relevant outline or ideas file (with a wikilink back to the daily note for context if needed)
5. Empty the inbox
6. Update `_HOME.md` for the coming week:
   - This week's focus
   - Today's tasks (Monday's first)
   - In-progress
   - Coming up

That's the rhythm. Capture, process, write.

---

## Step 10 — Your first writing session

Tomorrow morning (Monday, ideally) at 6:30am:

1. Coffee
2. Open laptop
3. Open Obsidian — `_HOME.md` is already there
4. Look at "Today" — it says: *Write Climb Lesson 1 first draft (90 min)*
5. Click the wikilink to `[[curriculum/climb/01-cost-of-not-knowing]]` — file doesn't exist yet, Obsidian creates it
6. Start typing

You're in the system. You're writing.

---

## Backup discipline

A few things to set up so your knowledge isn't fragile:

**Cloud backup:** if your vault is in `Documents/`, your normal cloud backup (iCloud Drive, Dropbox, OneDrive) covers it automatically.

**Git backup (optional, recommended long-term):** initialize a git repo in your vault folder. Commit changes weekly during the Sunday review. Push to a private GitHub repo. Now you have version history — you can see what you wrote when and undo accidents.

If you do git, add a `.gitignore` to exclude Obsidian's internal cache:

```gitignore
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.trash/
```

---

## Troubleshooting common issues

**"Obsidian feels overwhelming when I open it."**
That means HOME isn't your default. Reset workspace to make HOME open every time.

**"I keep losing files / can't find things."**
`Cmd+O` / `Ctrl+O` opens the quick switcher. Type any word from the filename — fuzzy search finds it.

**"Wikilinks are confusing."**
Type `[[` and Obsidian auto-completes from existing notes. If you type something that doesn't exist yet, hitting `]]` creates an empty link. Click the link to create the note when you're ready.

**"I have an idea but I don't know which folder it goes in."**
Don't decide. Put it in `inbox/_capture.md` or today's daily note. Decide during Sunday review. That's what the inbox is for.

**"Sync feels broken."**
Obsidian Sync is the most reliable option. If you're using a free alternative (iCloud, Dropbox), be aware that conflicts can happen if you edit on two devices simultaneously. Avoid editing the same file in two places at once.

---

## What this gets you

In one week of using this system:
- You'll have written a few thousand words across daily notes, ideas files, and at least one lesson draft
- The HOME dashboard will have evolved to reflect your actual rhythm
- The capture habit will start feeling automatic
- You'll know which sessions of writing produce flow and which feel like grinding

The system doesn't make you a better writer. It makes the *infrastructure of writing* invisible so the writing itself can happen.

---

*Setup complete. Open Obsidian. Today's date in the daily note. Start.*
