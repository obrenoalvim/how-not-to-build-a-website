# TODO Improvements

### Fix react-hooks/set-state-in-effect lint error in LocaleProvider
- **Category:** Bug
- **What:** `npm run lint` fails with a `react-hooks/set-state-in-effect` error — calling `setLocaleState` synchronously inside the mount `useEffect` that reads `localStorage`.
- **Where:** `components/LocaleProvider.tsx:15-18`
- **Why:** It's a legitimate lint failure blocking a clean `npm run lint`. Fixing it isn't a pure copy/formatting change though: this effect deliberately defers reading `localStorage` until after mount to keep server-rendered HTML (`locale: "en"`) matching the client's first render, avoiding a hydration mismatch. A naive fix (e.g. lazy `useState` initializer reading `localStorage` directly) would read the value during client hydration and could mismatch the server-rendered markup.
- **Risk:** Low functionally, but needs someone to verify no hydration warning appears after the fix (e.g. via `suppressHydrationWarning` scoped narrowly, or restructuring to a read-only-on-client pattern) rather than just silencing the rule.
- **Effort:** Low
