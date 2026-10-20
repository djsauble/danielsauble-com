---
name: site-voice
description: How Daniel Sauble's portfolio copy reads. Load before writing or editing any words on danielsauble.com (case studies, project descriptions, résumé bullets, alt text, headings).
---

# Voice for danielsauble.com

Daniel writes like a senior IC explaining work to another senior IC. Plain words, honest tradeoffs, no pitch.

The `personal-brand` user skill sets the base rules. This skill applies them to the portfolio. `daniel-talk-style` covers talks; its learned rules on accuracy and phrasing apply here too.

## Rules

- **Short sentences of short phrases.** Aim for 12–15 words on average and stay under about 25. Split "and…which…so that" chains.
- **Grade-school words**, with the occasional ten-dollar word (at most one per section). His past picks: culled, peruse, despised, abreast, quirkiness, glanceability, redux.
- **Oxford commas, always.** "A, B, and C".
- **Sentence case** for every heading and title.
- **"I" for what he did, "we" for team decisions.** Open a case study with his role: "I was the lead designer for…".
- **Credit collaborators by role, never by name**: "our CTO", "an engineer on my pod", "the PM". No customer, partner, or competitor names.
- **State problems from user evidence, then pin them to a hard constraint.** "People said they missed it." Then "When there are more than 200 runs, the API truncates the response."
- **Admit failure where it happened**, with the reason and the pivot. No spin. "These didn't resonate, so I went back to the drawing board."
- **Name tradeoffs with "even though…"** and say what was given up.
- **Calibrated, low hedging.** No "I think" or "I believe". Qualify a claim to the exact missing property ("good enough for most users", not "great").
- **Wry parenthetical asides**, sparingly: "can (and does)". Humor is rare and dry. No puns.
- **Accuracy beats punch.** Never let compression create a false claim. Every number, quote, date, and attribution must trace to a source.
- **Name things concretely.** Give internal artifacts proper names when that helps ("The Ball Pit"). Use real commands in `<code>`, not paraphrase.

## Never

- Em dashes. Readers treat them as an AI tell; use parentheses, commas, or periods.
- Exclamation points.
- Staccato fragments ("Fast. Native. Yours.").
- "very", "thing", and marketing words: delight, seamless, empower, robust, leverage, utilize, innovative, impact, passionate, excited, journey (outside "user journey map").
- Slack-isms: lol, emoji, "waaaaay", ™.
- Headings that describe the screenshot instead of making the point.

## Voice samples

From his existing pages:

> My job was to figure out why they missed it and what to do about it.

> Show all metrics as a clustered bar chart, which is simpler and less clever.

> Given that, I went back to engineering to ask if this was a law of physics or something we could find a creative solution for.

> We ended up not shipping Patch Manager, due to a lack of paying customers, but the process of designing and shipping a prototype was a key part of coming to that conclusion.

> The biggest thing I learned from the design and development of this feature is that it's very, very hard to deliver a compelling experience that's not merely a toy.

(The last two predate the "no very, no thing" rule. Keep the plainness, drop those words.)

## Project descriptions and résumé bullets

- Projects page `description`: sentence case, no period, an imperative user outcome. "Visualize the state of your orchestrated flows". "Keep bad npm packages out of your applications".
- Résumé bullets: past tense for past roles, strong verb first, end with a period, 3–5 per role, public facts only.

## Learned rules

Append a dated rule each time Daniel edits copy, with **Why:** and **How to apply:** lines. A learned rule beats a rule above it.

- (2026-10-19) **Use official product casing**: SaaS, npm, watchOS, HubSpot, SageMaker, NumPy, scikit-learn.
  **Why:** Daniel approved these fixes across the site.
  **How to apply:** check a product's own site for its casing before writing its name.
- (2026-10-19) **Every past-role résumé bullet starts with a past-tense verb.** Noun-phrase bullets ("Acting product manager for…") get a minimal verb ("Served as acting product manager for…").
  **Why:** Daniel asked for all résumé bullets in past tense after seeing tenses mixed within roles.
  **How to apply:** only a current role may use present tense. Change the verb, not the rest of the bullet.
