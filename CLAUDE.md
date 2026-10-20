# danielsauble.com

Daniel Sauble's portfolio. Astro 5, static, deployed to S3 and CloudFront on every push to `master`.

- Dev environment: `flox activate` (Node 24, and Yarn 4.9.1 via Corepack). Dev server: `flox activate --start-services`, at http://localhost:4321.
- Build check: `flox activate -- yarn build`. There are no tests; a clean build plus a visual check is the verification.
- Daniel is fine with direct pushes to `master`, in commits that each hold one unit of work. Pushing deploys to production.

Project skills in `.claude/skills/`:
- `site-voice`: how the copy reads. Load before writing any words for the site.
- `site-design`: brand tokens, components, and tech constraints. Load before visual changes.
- `case-study`: research, drafts, and publishing case studies.
- `site-qa`: inspect changes in Chrome, locally and after deploy.
