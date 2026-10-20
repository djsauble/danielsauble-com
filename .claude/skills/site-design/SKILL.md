---
name: site-design
description: The visual system and tech constraints of danielsauble.com as built. Load before changing CSS, layouts, components, images, or adding anything visual to the site.
---

# Design system for danielsauble.com

The `personal-brand` user skill is the source of truth. When the site and the brand disagree, the brand wins and the site gets refactored.

## Tokens

All colors live on `:root` in `src/styles/index.css`. Never hardcode a color elsewhere.

| Token | Value | Use |
|---|---|---|
| `--lime` | `#32CD32` | Accent fills, hover/focus backgrounds, the page-frame bar, selection |
| `--off-white` | `#FAF9F6` | Page and panel background |
| `--off-black` | `#343231` | Text, borders, outlines |
| `--paper-shade` | `#EFEDE7` | Code background, canvas hexes |
| `--paper-deep` | `#D8D5CD` | Team-map silhouettes and lines |
| `--serif` | Calisto MT → Iowan Old Style → Palatino → Georgia → serif | All text |
| `--mono` | ui-monospace → SF Mono → Menlo → Consolas → monospace | Code |

**Contrast rules:**
- Lime on off-white is about 2:1. Lime is never text, and never a thin line that has to carry meaning, on off-white.
- Off-black on lime is about 6:1, so lime works as a fill behind off-black text.
- Off-black on off-white is about 12:1.

## Components and patterns

- **Links** are off-black and underlined. Hover gives a lime background instantly, with no transition. Focus-visible gives a lime background plus a 3px off-black outline. `target="_blank"` links get a ↗ from CSS (screen readers skip it), so never add icon markup.
- **Buttons** (`Button.jsx`) are lime fill, 2px off-black border, and off-black text. Hover underlines.
- **Page frame** (`layout.css`): an off-white `main` with a 2px off-black border. The 8px lime bar is a `main::before` block, not `border-top`; a thick border next to thin side borders gets mitered, trapezoid corners.
- **ProjectHero:** the `h3` title is the link and keyboard target. The image link is `tabIndex=-1 aria-hidden` and gets a 4px lime outline on hover. No opacity fades.
- **Background canvas** (`BackgroundCanvas.astro`): a hex grid that ripples on click.
  - Color is `base + displacement`, signed and linear. Don't remap it: an `abs()` or a gain made the waves strobe once.
  - Lime is only the hover-cell highlight.
  - It stops when the waves converge, so idle CPU is zero.
  - It is the site's one playful element. Add no other motion.
- **TeamMap** (`src/components/TeamMap.astro`): an inline SVG team map in the style of the older `00_team.png` images. It draws my headshot at the bottom center with roles on an arc, and gets an `aria-label` listing the roles.
- **Code blocks:** `pre` uses the mono stack on `--paper-shade`, and long lines scroll inside the block so the page never scrolls sideways.
- **Drafts:** `<Flag>` (`src/components/Flag.astro`) marks open questions in drafts. It renders lime and dashed in dev and fails a production build. See the `case-study` skill.

## Rules

- Serif type everywhere, underlined links, minimal hover effects, and no gradients.
- No animation or transition that adds interaction latency. Instant state changes only.
- Accessibility beats beauty:
  - Every page has `<html lang="en">`.
  - Every image has specific alt text.
  - Focus is always visible.
  - No horizontal scroll at 390px.
- **Images:**
  - Put them in `public/images/<slug>/NN_name.png`, numbered in page order.
  - Export them about 1,700–2,000px wide, with consistent framing within a page.
  - They render full column width through `astro:assets` `<Image>`.
  - No captions or `<figure>`: the sentence before an image introduces it.
- **Terminal output and code** go in `<pre><code>`, flush-left, verbatim, and real. Escape `{`, `}`, and `<` inside Astro templates.

## Tech constraints

- Astro 5 static output.
  - React only for tiny server-rendered components (`Button`, `ProjectHero`); never use a `client:` directive.
  - The only client JS is the canvas script.
- Keep it that way: no new frameworks, no web fonts, and no dependencies without a strong reason. The best framework is no framework.
- The dev environment is Flox: Node 24 plus Corepack, which pins Yarn 4.9.1.
  - `flox activate` installs dependencies.
  - `flox activate --start-services` runs the dev server on :4321.
  - `flox activate -- yarn build` is the build check.
- **Deploy:** every push to `master` builds in GitHub Actions and syncs to S3 behind CloudFront.
  - Pages are cached for 1 hour.
  - `/_astro/*` hashed assets are cached for 1 year (immutable) and kept across deploys.
  - Daniel is fine with direct pushes to `master`, in commits that each hold one unit of work.
- **Commits:** imperative, sentence case, no trailing period, about 4–10 words. Add a short body when the why isn't obvious.
