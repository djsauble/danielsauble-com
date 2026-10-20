---
name: case-study
description: Research, write, and publish a portfolio case study on danielsauble.com, from source evidence to a reviewed draft to a live page. Load when adding or updating a case study or anything on the projects page.
---

# Case studies for danielsauble.com

A case study has to work twice:
- **As a staff-level story:** an ambiguous problem Daniel framed, decisions with tradeoffs, an honest failure, a shipped outcome, and influence beyond his team.
- **As a conference talk abstract:** reviewers select for real decisions, tradeoffs, failures, and outcomes.

Load `site-voice` for the words, `site-design` for the visuals, and `site-qa` before calling a page done.

## Narrative pillars

Every case study should carry at least one of these:
1. **AI-native design workflow.** Live code prototypes built with AI coding agents (Claude Code, Amp) instead of Figma mockups, sometimes shipped straight to production. Be concrete: which tool, what it produced, what it replaced, and what changed as a result. Name the tool accurately.
2. **Product ownership.** Framing problems, defining success metrics, roadmap input, discovery, and aligning stakeholders.
3. **Devtools and AI/ML craft.** Technical constraints navigated, tradeoffs made, and credibility with engineering.

## Evidence rules

- **Sources:** Slack, GitHub (including local clones in `~/Code`), and Linear. Notion is context only; mark Notion-only facts for Daniel to confirm.
- **Never fabricate** metrics, quotes, dates, or outcomes. If a claim can't be traced to a source, write `TBD — Daniel to confirm`.
- **Mark anything borderline** with `⚠️ CONFIDENTIALITY CHECK — Daniel to review`. Borderline means internal metrics or absolute counts, customer or partner names, unreleased roadmap, internal URLs or channel names, incidents, board context, or pricing. Daniel reviews anything confidential before it goes live.
- **Not primary evidence:**
  - Daniel's self-DM has bot-written `:gear:` summaries. Follow their links to the primary source.
  - Linear text under his account may be AI-drafted. Quote his voice only from PRs and Slack messages he wrote.
- **Credit honestly.** Check PR authors and commit authors before claiming "I built it". "I designed" and "I merged" are different claims.
- **Use adversarial review.** For each draft, run independent fact-check, confidentiality, and hiring/CFP-reviewer passes before Daniel sees it.

## Two artifacts per case study

### 1. The review draft (markdown, outside this repo)

This repo is public, so review drafts live outside it (e.g. `~/Downloads/portfolio-case-studies/<slug>.md`). Use these sections, in order:
1. Title and a one-line, outcome-first summary
2. Context (2–4 sentences)
3. My role
4. The problem
5. Process
6. Key decisions and tradeoffs (2–4)
7. What didn't work
8. Outcome (metrics only from sources)
9. What this shows (one line, for Daniel only; never published)

Sections 1–8 run 600–1,000 words. Then add a `Sources` list that maps each claim to its source.

### 2. The page (a draft first)

Pages start in `src/drafts/<slug>.astro`. Under `yarn dev`, drafts render at `/drafts/<slug>`, and production builds skip them.

```astro
---
import { Image } from 'astro:assets';
import Layout, { type BreadcrumbLink } from "../layouts/Layout.astro";
import Flag from "../components/Flag.astro";

import heroShot from '../../public/images/<slug>/01_hero_shot.png';

const title = "<Sentence-case title>";
const description = "<One sentence for search and link previews>";
const breadcrumbs: BreadcrumbLink[] = [
  { text: 'Projects', href: '/projects' },
];
---

<Layout title={title} description={description} breadcrumbs={breadcrumbs}>
  <h1><Sentence-case title></h1>

  <h2>Intro</h2>

  <p>I was the … at Flox, a ….
  Activation went up by <Flag>the number</Flag>.</p>
</Layout>
```

The import paths are the same as for `src/pages`, so publishing is just a file move.

### Mapping review sections to page headings

| Review section | Page |
|---|---|
| Title + summary | `h1` (same as `title`). The first sentences of Intro state the outcome. |
| Context + My role | `<h2>Intro</h2>`: "I was the … at …", then scope and dates |
| Stakeholders | `<h2>Team and collaboration</h2>`: roles only, and how work flowed (including the prototype-to-production loop) |
| The problem | `<h2><Specific> problem</h2>` |
| Process | One concretely named `h2` per phase |
| Decisions and tradeoffs | Inline ("We decided to…, even though…") or their own `h2` |
| What didn't work | Inline where it happened, or its own `h2` |
| Outcome | `<h2>Outcome</h2>` |
| What this shows | Never on the page |

**Flags on the page:**
- Wrap each open question in `<Flag>`. Use `<Flag kind="confidential">` for confidentiality checks.
- On the page, colleagues are credited by role. Keep names in the review draft only.

## Publishing

Publish only after Daniel has reviewed the draft and every flag is resolved.

1. Replace or remove every `<Flag>`. The production build fails if one remains on a published page.
2. Run `git mv src/drafts/<slug>.astro src/pages/<slug>.astro`.
3. Add a `ProjectHero` at the top of `src/pages/projects.astro`, in reverse-chronological order:
   - `title` is the company name.
   - `description` is an imperative user outcome, sentence case, with no period.
   - The hero image is the best shipped screen.
4. Run `site-qa`, then commit and push to `master`. It deploys to production.

## Visuals

- **Prefer real, public product surfaces:** docs pages, public FloxHub pages, and terminal output you can reproduce in a Flox environment.
- Terminal snippets must be real and reproducible. Never invent output.
- Internal screens, Slack, Linear, prototypes, and videos need Daniel's OK and redaction (customer org names, internal URLs).
- A team map (`00_team.png`) shows roles only.
