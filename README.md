English | [Português](README.pt.md)

# How Not To Build A Website

A working fake SaaS ("Flowly") built to showcase bad-but-common UX practices — dark
patterns and the cognitive biases they exploit — in context, on real pages, instead of
as a bullet list.

Every page has a **?** button in the bottom-right corner explaining exactly which
patterns are live on that page and why they work. A `/patterns` page lists the full
catalog of 30, grouped by mechanism.

## Pages

| Route | What's being demonstrated |
|---|---|
| `/` | fake countdown, fake activity counter, disguised ad, exit-intent confirmshaming, competing CTAs |
| `/signup` | information-overload form, pre-ticked opt-in, buried validation, fake scarcity, hidden password rules |
| `/login` | oversized social login, vague errors, buried password reset |
| `/pricing` | decoy pricing tier, fake price anchor, drip pricing, fake "most popular" badge |
| `/checkout` | sneaked-in add-on, forced account creation, last-step fees, stacked urgency, confirmshaming |
| `/dashboard` | fake progress bar, evasive upgrade banner, fake notification badge |
| `/account` | cancellation buried in menus, guilt-trip retention screen, forced phone call, infinite discount-offer loop |
| `/patterns` | the full catalog, browsable independent of the demo pages |

Global (every page): asymmetric cookie consent banner, unsolicited chat nag.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS. No backend, no database — every
"account" and "payment" on the site is inert UI.

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Why

Educational/portfolio project. None of this is meant to actually manipulate a real
visitor — the point is that clicking the **?** immediately tells you what's wrong and
why it works, which is the opposite of how these patterns behave in the wild.
