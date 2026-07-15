# MathSprout team and product website

A bilingual, responsive React website for the MathSprout student team and its early-mathematics game prototype.

## Run locally

```bash
npm install
npm run dev
```

Build and type-check with:

```bash
npm run build
```

## Routes

- `/` — Home
- `/game` — Game structure
- `/mathematics` — Mathematics content
- `/starting-point` — Planned Starting-Point Activity
- `/research` — Research and design framework
- `/team` — Team
- `/progress` — Project progress
- `/play` — Prototype launch and feedback

The legacy `/placement` path redirects to `/starting-point`.

## Content maintenance

- Translation strings: `src/i18n/en.ts` and `src/i18n/zh-CN.ts`
- Team members: `src/data/team.ts`
- World and prototype evidence: `src/data/game.ts`
- Project timeline: `src/data/progress.ts`
- Research framework: `src/data/research.ts`

Unknown team biographies, roles, contact details and research results remain deliberately unclaimed. The public copy distinguishes content found in the deployed bundle, behavior awaiting live verification and planned work.

## Technology

React, TypeScript, Vite, React Router, Framer Motion and Lucide icons. The production output is a static single-page application; `vercel.json` provides history fallback routing.

The build also adds a small `dist/server/index.js` asset worker and copies the hosting manifest so the same application can run on the project hosting platform with route fallback.
