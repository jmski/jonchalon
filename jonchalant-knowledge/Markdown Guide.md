# Markdown Guide

A practical reference for writing notes, drafts, and connections in this vault. Not exhaustive — just the tools you'll actually use.

---

## The Basics

### Headings

```
# H1 — chapter or major section title
## H2 — sub-section
### H3 — sub-sub-section
```

Use headings to create structure you can navigate. In Obsidian, headings become outline anchors you can link to directly (see [[#Linking and References]]).

---

### Text Formatting

```
**bold** — emphasis, key terms
*italic* — titles, soft emphasis
~~strikethrough~~ — crossed out / abandoned idea
`inline code` — technical terms, exact strings
```

---

### Lists

Unordered (use for non-sequential items):
```
- item
- item
  - nested item (two spaces or tab)
```

Ordered (use for steps or ranked items):
```
1. First
2. Second
3. Third
```

Task list (great for drafts and to-dos):
```
- [ ] not done
- [x] done
```

---

### Blockquotes

```
> This is a quote or pulled excerpt.
> It can span multiple lines.
```

Use for: quotes from sources, key insights you want to stand out, voice notes you're preserving verbatim.

---

### Horizontal Rule

```
---
```

Separates major sections. Use it like a scene break in writing.

---

### Links

External:
```
[link text](https://url.com)
```

Internal file link (Obsidian wikilink — preferred):
```
[[Note Title]]
[[Note Title|display text]]
```

Link to a heading within a note:
```
[[Note Title#Heading Name]]
[[#Heading Name]]  ← same file
```

Link to a specific block (Obsidian):
```
[[Note Title#^block-id]]
```

---

### Images

```
![alt text](./attachments/image.png)
![[image.png]]  ← Obsidian embed syntax (preferred in vault)
```

---

### Tables

```
| Column A | Column B | Column C |
|----------|----------|----------|
| value    | value    | value    |
```

Tables are painful to write by hand. Let AI generate them. They're fine for structured comparisons but don't try to build complex ones manually.

---

### Code Blocks

````
```
code here
```
````

Specify language for syntax highlighting:
````
```js
const x = 1;
```
````

---

## Obsidian-Specific Features

These go beyond standard markdown and are what make Obsidian useful for a knowledge vault.

### Wikilinks `[[double brackets]]`

The core of Obsidian's graph. Any `[[Note Title]]` becomes a clickable link and appears in the graph view. You don't need the file to exist yet — Obsidian creates an "unresolved link" you can fill in later.

```
[[ikigai]]
[[Four Circles]]
[[Grounding]]
```

**This is how you connect ideas.** The more you wikilink, the more useful the graph becomes.

---

### Tags `#tag`

Use tags for classification, not connection. Tags group notes by type or status; wikilinks connect specific ideas.

```
#draft
#concept
#chapter-1
#needs-research
```

In Obsidian you can search and filter by tag. Good for: draft status, topic categories, content type (blog, book, course).

---

### Frontmatter (YAML metadata)

At the very top of a note, between `---` markers:

```yaml
---
title: The Four Circles
tags: [concept, curriculum, draft]
status: draft
related: "[[ikigai]], [[Mission]]"
---
```

Obsidian reads frontmatter as structured data. Useful if you use Dataview plugin or want to query notes by property. Not required for basic use.

---

### Embeds `![[Note Title]]`

Embed the full content of another note inline:

```
![[Grounding — Definition]]
```

Useful for: pulling a concept note into a chapter draft without duplicating content.

---

### Block References `^block-id`

Add an ID to any paragraph:

```
This is a key idea I want to reference elsewhere. ^key-idea-1
```

Then link to it from another note:

```
[[Note Title#^key-idea-1]]
```

Use sparingly — mainly when you need to reference a specific paragraph, not just a section.

---

## Where Markdown Works Well

- **Long-form drafts** — clean, distraction-free, portable
- **Structured outlines** — headings + nested lists are fast to write and easy to rearrange
- **Connected notes** — wikilinks + tags build a map of ideas over time
- **Version control** — plain text plays well with git; every change is trackable
- **AI handoff** — easy to dump into a prompt and get back formatted output
- **Book drafts** — each chapter as a file, linked to concept notes, characters, or research

---

## Where Markdown Struggles

- **Complex tables** — painful to write and maintain by hand; use AI or a plugin
- **Rich media layout** — not a design tool; images are inline only, no float or wrap
- **Cross-references in exported books** — footnotes, chapter numbering, index, and TOC require a build tool (Pandoc, Quarto) or a conversion step
- **Commenting / tracked changes** — no native equivalent to Word's review mode; workarounds exist but are clunky
- **Real-time collaboration** — not built for simultaneous multi-person editing
- **Formatted citations** — citation management (footnotes, bibliography) is manual unless you use a plugin like Zotero or Citations

---

## Practical Patterns for This Vault

### Concept note
Short, atomic. One idea per file. Wikilinked heavily.
```
# Grounding

The first of the [[Four Pillars]]. The foundation of [[embodiment]].

Grounding is about...

#concept #pillar
```

### Chapter draft
Longer, structured. References concept notes instead of re-explaining them.
```
# Chapter 3 — The First Pillar

[[Grounding]] is where most people start — and where most people get stuck.

...

See also: [[Energy]], [[Flow]], [[Command]]
```

### Research note
Captures a source, quote, or observation. Tagged for later retrieval.
```
# [Author] on embodiment

> "Quote here."

Source: [Book Title](url)

Connects to: [[Grounding]], [[Movement as Metaphor]]

#research #external-source
```

---

## Quick Reference

| What you want | Syntax |
|---|---|
| Bold | `**text**` |
| Italic | `*text*` |
| Heading | `## Heading` |
| Bullet list | `- item` |
| Numbered list | `1. item` |
| Task | `- [ ] task` |
| Link to note | `[[Note Name]]` |
| Link with label | `[[Note Name\|label]]` |
| Link to heading | `[[Note#Heading]]` |
| Tag | `#tag` |
| Blockquote | `> text` |
| Divider | `---` |
| Embed note | `![[Note Name]]` |
| Bold italic | `***text***` |
