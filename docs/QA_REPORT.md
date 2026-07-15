# Website QA report

## Automated verification

- `npm run build` — passed
- `npm run typecheck` — passed
- Production output includes route-level JavaScript chunks and no public source map.
- Vite history routes are covered by `vercel.json` and the application includes a catch-all 404 page.

## Accessibility and interaction review

Implemented:

- skip link and semantic header, navigation, main and footer landmarks;
- one focusable H1 per route and route-change focus management;
- visible dual-color focus treatment;
- keyboard-operable language controls and navigation;
- mobile menu initial focus, Escape close, focus loop, background scroll lock and height overflow handling;
- external-link icon plus screen-reader “opens in a new tab” text;
- ordered-list world structure without false interactive behavior;
- text/icon status pairs rather than color-only states;
- reduced-motion handling for reveal animation and global CSS transitions;
- localized document language, title, description and accessible labels;
- 44–48 px primary touch targets;
- darker small-label colors for readable contrast.

## Responsive review targets

The CSS provides deliberate layouts for 320 px, 620 px, 900 px and 1180 px breakpoints and a 1240 px maximum content width. Cards use content-driven heights, Chinese text can wrap naturally, calls to action stack on small screens, the world path converts to a list/grid, and the project timeline retains a single readable rail.

## Performance decisions

- All eight content routes and the 404 page are lazy-loaded.
- Production source maps are disabled.
- The website reuses one official 448 KB logo asset instead of loading the larger PNG on the initial route.
- Web-font imports were removed; the design uses a resilient system/CJK font stack.
- Generated output at final QA: main application chunk approximately 265 KB (87 KB gzip), shared UI chunk approximately 125 KB (41 KB gzip), with route chunks approximately 0.8–4 KB each.

## Environment limitation

The environment allowed build/type checks and static source review but did not expose the local Vite listener to a second process, so an automated screenshot sweep was not available. The live prototype likewise could not be safely captured. No screenshot has been fabricated.

