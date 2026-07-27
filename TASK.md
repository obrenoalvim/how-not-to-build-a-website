# TASK: How Not To Build A Website
> Created: 2026-07-27 | Updated: 2026-07-27

## Goal
Fake SaaS ("Flowly") demoing common-but-bad UX/dark patterns. Every page has a
bottom-right "?" bubble explaining which patterns are live on that page and why
they work (cognitive bias exploited). `/patterns` lists the full catalog.

## Plan
- [x] Scaffold Next.js (TS + Tailwind + App Router) via create-next-app
- [x] Build pattern catalog (`lib/patterns.ts`, 30 entries, tagged by page)
- [x] Build HelpBubble (reads pathname, shows patterns for current page)
- [x] Build pages: home, signup, login, pricing, checkout, dashboard, account, patterns
- [x] Global dark patterns: cookie banner, chat nag
- [x] `next build` clean, all 8 routes smoke-tested (curl 200)
- [x] Git repo created, pushed to github.com/obrenoalvim/how-not-to-build-a-website
- [ ] Nothing pending — open to content/pattern additions on request

## Current State
Fully working. `npm run dev` serves all 8 routes with no build/type errors.
30 dark patterns implemented across pages, each described in the ? bubble.
No backend/DB — everything is static UI. Repo is public on GitHub, pushed to
master.
