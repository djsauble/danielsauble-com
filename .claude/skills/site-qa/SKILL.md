---
name: site-qa
description: Visually inspect danielsauble.com changes with Claude in Chrome, locally and after deploy. Load after any change to pages, styles, components, or images, and before calling a site change done.
---

# Visual QA for danielsauble.com

Run this routine after every visible change. Before claiming a change works, look at it.

## 1. Build and serve

```sh
flox activate -- yarn build            # must end with "Complete!"
flox activate -- yarn dev --port 4321  # run in the background
```

A `<Flag>` left on a published page fails the build with `Unresolved tbd flag on /<page>/`. Resolve it or move the page back to `src/drafts`.

## 2. Inspect in Chrome

Load the `claude-in-chrome` tools in one ToolSearch call, plus `browser_batch`, `javascript_tool`, and `find`. Open a new tab in the MCP group and batch the steps.

**Desktop (1280 wide):**
- Screenshot each changed page.
- Compare it against a neighbor page (e.g. `/prefect`) for consistent rhythm, type, and image framing.

**Phone width:** `resize_window` may be ignored (the window stays 1280). Use an iframe harness instead:

```js
document.open(); document.write('<body style="margin:0;background:#888;display:flex;gap:16px;padding:8px">' +
  ['/', '/projects', '/<page>'].map(p => `<iframe src="${p}" style="width:390px;height:740px;border:0"></iframe>`).join('') +
  '</body>'); document.close();
```

Then check that `scrollWidth === clientWidth` in each frame's document.

**Computed checks** with `javascript_tool`:
- `getComputedStyle(document.body).fontFamily` starts with the serif stack.
- `document.documentElement.lang === 'en'`.
- Every `img` has a non-empty `alt`.
- No element uses lime (`rgb(50, 205, 50)`) as text `color` on an off-white background.

**Interaction checks:**
- Hover a link: an instant lime background, with no transition.
- Tab to a link: a visible outline.
- Click the background: the canvas ripple is a smooth light/dark wave with no strobing.

**Zoom in** on details at `scale: 1`: frame corners, the lime bar, image edges, and code blocks.

**Console:** run `read_console_messages` with `onlyErrors: true`. It should be empty.

## 3. Drafts

Open `/drafts/<slug>` under the dev server.
- Flags render as lime or dark dashed marks.
- Check that every flag is still a real open question.
- Drafts never appear in `dist/`. Confirm with `ls dist/drafts` (it should not exist).

## 4. After deploy

```sh
gh run list --limit 1 --json databaseId --jq '.[0].databaseId' | xargs -I{} gh run watch {} --exit-status
curl -sI https://danielsauble.com/<page>/ | grep -iE 'cache-control|x-cache|last-modified'
```

- Load the live page with a cache-busting query (`?v=<anything>`). Browsers keep old HTML for up to an hour, so a stale look is usually the local cache, not a failed deploy.
- Hashed assets should return `public, max-age=31536000, immutable`, and pages `public, max-age=3600`.

## 5. Clean up

Close the tabs you opened, and stop the dev server if you started it.
