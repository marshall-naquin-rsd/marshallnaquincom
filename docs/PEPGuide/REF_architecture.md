# REF: PEP Guide Architecture

## Overview

This document covers the architecture of the **PEP Guide** section only — the routing model, the client/server boundary, the cookie and navigation state, and the decisions behind them. For the parent site, see `docs/REF_architecture.md`.

The guide is a self-contained section living at `/PEPGuide` inside marshallnaquin.com. It has no backend, no database, and no authentication. Every page is a static Server Component; the handful of Client Components exist only for browser-local state (read progress, search input, history-aware back).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: Version 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4, scoped theme via `.pep-theme` in `app/globals.css`
- **Persistence**: browser cookies (read progress) and `sessionStorage` (nav entry point) — nothing server-side
- **Testing**: Playwright E2E (`tests/smoke/pepguide.spec.ts`)

The guide adds **zero dependencies** beyond what the parent site already has.

## Project Context

**Purpose**: An unlisted companion guide for incoming peers at Pine Grove's Professional Enhancement Program, written by a former peer. It supplements the official programming binder.

**Key Requirements**:

- Private — `noindex, nofollow` on every route, no search engine presence
- Mobile-first — the primary reader is on a phone, possibly on their first day
- Portable — the whole section must be liftable onto its own domain with minimal change
- No data collection — no analytics, no forms, no accounts; the only stored state is the reader's own progress, and only with consent
- Works degraded — content must be readable with JS disabled or consent declined

**Environment variables** (one currently):

| Variable | Scope | Purpose |
|---|---|---|
| `NEXT_PUBLIC_PEP_GROUPME_URL` | Browser-public | GroupMe join link for `/PEPGuide/groupme`. When absent, the page shows a text fallback instead of the Join button. Set in Vercel for production/preview; add to `.env.local` for local dev. Kept out of the public repo via `.env.example` placeholder. |

**Architecture Choice**: Static Server Components with narrow client islands.

**Status**: In development — infrastructure complete, content build-out ongoing.

## Critical Architecture Patterns

### 1. Single Source of Truth for Routing

`lib/pepguide.ts` is the spine of the section. It exports the base paths, the ordered section lists, and a derived `routeMap` keyed by full pathname:

```typescript
export const guideBasePath = "/PEPGuide";
export const aptsBasePath = `${guideBasePath}/apts`;
export const rxplanBasePath = `${guideBasePath}/rxplan`;

export type RouteInfo = {
  title: string;
  parentHref: string | null;
  parentTitle: string | null;
  prevHref: string | null;
  prevTitle: string | null;
  nextHref: string | null;
  nextTitle: string | null;
};

export const routeMap: Record<string, RouteInfo> = { /* ... */ };
```

`routeMap` is **built at module load**, not hand-written. The ordered arrays (`guideSections`, `aptSections`) are iterated to compute each entry's prev/next automatically, then bespoke entries are patched in: the `rxplanmore` continuation page, and the standalone `quickref` / `faq` / `groupme` pages that sit outside the linear sequence.

**Why this pattern?**

- Reordering a section is a one-line array change; all prev/next links follow
- Breadcrumbs, the sticky header's Back button, and the footer nav all read from the same map, so they can never disagree
- Moving the section to its own domain means changing `guideBasePath` and nothing else

**Consumers**: `GuidePage.tsx`, `GuideHeader.tsx`, `lib/pepguide-search.ts`, and every page's `href`.

**The one sharp edge**: `routeMap` lookups are by exact string. `GuidePage` receives its own `path` as a prop rather than reading it from the router (it's a Server Component). If that prop doesn't match a `routeMap` key character-for-character, `info` is `undefined` and the breadcrumb, Back button, and Next link silently vanish — no error, no warning.

### 2. Page Composition: the `GuidePage` Shell

Every content page is a thin Server Component that declares its metadata and delegates all chrome to `GuidePage`:

```typescript
// app/PEPGuide/welcome/page.tsx
import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = { title: "Welcome" };

export default function WelcomePage() {
  return (
    <GuidePage
      path="/PEPGuide/welcome"
      title="Welcome"
      subtitle="From former peer M"
    >
      <div className="pep-prose">
        <p>...</p>
      </div>
    </GuidePage>
  );
}
```

`GuidePage` renders, in order: the `ReadTracker` (non-home pages only), breadcrumbs derived from `routeMap`, the `h1` and optional subtitle, the page's children, and the footer block containing Back / "PEP Guide home" / Next plus the standing disclaimer.

**Breadcrumb depth is capped at two ancestors.** For a depth-2 page like `/PEPGuide/apts/aptpool`, it walks up through the parent's own `parentHref` to render `Apartments → Pool` beneath the guide root. Deeper nesting would need a change here.

**The guide home reuses the same component** with `path="/PEPGuide"`; `isHome` suppresses the footer nav, disclaimer, and read tracking.

### 3. Client/Server Boundary

Content is server-rendered. Client Components are deliberately small and exist only where browser-local state is unavoidable:

| Component | Client? | Why |
|-----------|---------|-----|
| `GuidePage` | Server | Pure composition from `routeMap` |
| `FaqAccordion` | Server | Native `<details>`/`<summary>` — no JS needed |
| `GuideHeader` | Client | `usePathname()` to resolve the current route |
| `SectionList` | Client | Reads read-progress cookies after mount |
| `GuideSearch` | Client | Controlled input, filters in the browser |
| `BackButton` | Client | `useRouter()` + `sessionStorage` |
| `NavTracker` | Client | Writes `sessionStorage` on mount |
| `ReadTracker` | Client | Writes a cookie on mount |
| `CookieConsent` | Client | Reads/writes the consent cookie |

**Rule of thumb**: if it doesn't touch `document`, `sessionStorage`, or a router hook, it stays a Server Component.

**Hydration safety**: `SectionList` initializes `readSlugs` to `[]` and populates it in an effect. Reading cookies during render would produce a server/client mismatch, since the server has no access to them. The visible consequence is that checkmarks appear a beat after paint — an accepted trade.

### 4. Search: Static Index, Client Scoring

`lib/pepguide-search.ts` holds a hand-maintained array of `SearchEntry` objects — title, href, one-line summary, and a keyword list of terms a peer would plausibly type ("pool code", "4772", "who can ride", "three person rule").

Scoring is deliberately crude and predictable:

```
title match    → 3
keyword match  → 2
summary match  → 1
no match       → entry is disqualified entirely
```

The query is split on whitespace and **every token must match somewhere** or the entry drops out (logical AND). An entry's final score is the best single-token score it achieved; results sort by that score descending.

**Why not a search library?** The corpus is ~15 pages. A dependency, an index build step, and a bundle-size hit would buy nothing. The keyword lists do the real work — they encode the vocabulary a stressed newcomer actually uses, which no automatic index would capture.

**Maintenance burden**: the index is manual. A new page that isn't added here is unreachable by search even though it renders fine.

### 5. Navigation State: History-Aware Back

Two components cooperate to make the Back button behave sensibly for both in-guide browsing and deep links:

- **`NavTracker`** mounts once in the layout and writes the entry pathname to `sessionStorage` under `pep_entry_path`. A `useRef` guard makes it idempotent under React Strict Mode's double-invocation.
- **`BackButton`** compares the current pathname to that entry path. Different means the user has navigated within the guide, so `router.back()` is correct. Same (or no entry recorded) means this is where they landed, so it renders a `Link` to the hierarchical parent instead.

`sessionStorage.getItem` is synchronous, so `BackButton` reads it **during render** rather than in an effect. Deferring to an effect would flash the wrong variant on first paint.

### 6. Consent-Gated Read Progress

`lib/cookies.ts` owns all cookie access. Two cookies, both first-party, `SameSite=Lax`, `path=/`, one-year max-age:

| Cookie | Values | Purpose |
|--------|--------|---------|
| `pep_consent` | `granted` \| `declined` | Records the banner choice |
| `pep_read` | comma-separated slugs | Which sections have been read |

The gate is a single early return inside `markAsRead`:

```typescript
export function markAsRead(slug: string): void {
  if (getConsent() !== "granted") return;
  // ...
}
```

Because `ReadTracker` is the only caller and `markAsRead` is the only writer of `pep_read`, consent cannot be bypassed by accident. Any new progress feature must go through this function.

**Declining is fully supported**: `SectionList` only reads slugs when consent is granted, so checkmarks and the "N of M read" counter simply never appear. Nothing else changes.

**Scope note**: `CookieConsent` is mounted by `app/PEPGuide/layout.tsx`, not the root layout, so the banner never appears on the parent site — which sets no cookies at all. The cookies themselves still use `path=/` for simplicity; scoping them to `/PEPGuide` would be the stricter choice if the parent site ever gains its own cookie policy.

## Layout & Theming

`app/PEPGuide/layout.tsx` does four things:

```tsx
export const metadata: Metadata = {
  title: { default: "PEP Guide", template: "%s · PEP Guide" },
  robots: { index: false, follow: false },
};

export default function PEPGuideLayout({ children }) {
  return (
    <div className="pep-theme flex flex-1 flex-col bg-background text-foreground">
      <GuideHeader />
      {children}
      <CookieConsent />
    </div>
  );
}
```

1. **Title template** — pages export a bare `title` and get `"Welcome · PEP Guide"` for free
2. **`noindex, nofollow`** — inherited by every child segment automatically; pages must not re-declare it
3. **`.pep-theme`** — redefines the design-system CSS variables for this subtree only (see `REF_styling.md`)
4. **Chrome** — the sticky header and the cookie banner, both scoped to the guide

Because `.pep-theme` overrides variables rather than introducing new class names, ordinary utility classes (`bg-card`, `text-foreground`, `border-border`) resolve to guide colors inside the wrapper and site colors outside it. No conditional styling is needed anywhere.

## File Organization

```
app/PEPGuide/          # Routes — one folder per page, all Server Components
  layout.tsx           # Theme wrapper, noindex, header, cookie banner
  page.tsx             # Guide home
  [section]/page.tsx   # Content pages
  apts/[sub]/page.tsx  # Depth-2 apartment pages
  rxplan/rxplanmore/   # Depth-2 continuation page
  groupme/page.tsx     # Standalone — GroupMe join page (env-var-driven Join button)

components/pepguide/   # Guide-only components
  GuidePage.tsx        # Server — page shell
  FaqAccordion.tsx     # Server — no-JS accordion
  GuideHeader.tsx      # Client — sticky nav
  SectionList.tsx      # Client — links + read state
  GuideSearch.tsx      # Client — search UI
  BackButton.tsx       # Client — history-aware back
  NavTracker.tsx       # Client — entry-path recorder
  ReadTracker.tsx      # Client — marks page read

components/
  CookieConsent.tsx    # Client — shared component, mounted only by the guide layout

lib/
  pepguide.ts          # Routing source of truth
  pepguide-search.ts   # Search index + scoring
  cookies.ts           # Cookie helpers + consent gate

app/globals.css        # .pep-theme tokens and guide utility classes

tests/smoke/
  pepguide.spec.ts     # Route, title, and noindex smoke tests
```

## Key Architectural Decisions

### Why a nested section instead of a separate app?

- Zero additional hosting, build, or deploy surface
- Reuses the parent site's toolchain, fonts, and CI
- The theme is scoped by a class, so the two designs never collide
- Portability is preserved through `guideBasePath` — the escape hatch stays open without paying for it now

### Why a derived `routeMap` instead of per-page nav props?

- Prev/next relationships live in one ordered list, not scattered across fifteen files
- Breadcrumb, header Back, and footer Next read the same data, so they can't drift
- Adding a section in the middle of the sequence requires no edits to its neighbors

### Why static content in TSX rather than MDX or a CMS?

- The content is prose with occasional structure, and it changes rarely
- No build pipeline, no content API, no runtime fetch
- Rich, precise markup where it matters (Quick Reference tables, FAQ groups) without fighting a renderer
- The cost — escaping apostrophes, no non-technical editing — is acceptable for a single author

### Why cookies rather than `localStorage` for read progress?

- Read progress is a stated privacy matter for this audience; routing it through a consent banner and a cookie makes the disclosure honest and the choice reversible
- `localStorage` would work technically but would sit outside the consent story users expect

### Why `noindex` rather than password protection?

- The guide is unlisted, not confidential — a peer should reach it from a link without friction
- It contains no personal information about anyone
- Auth would add a backend to a section that otherwise needs none

## Common Gotchas

### 1. Breadcrumbs and footer nav are missing on a new page

**Cause**: the `path` prop passed to `GuidePage` doesn't exactly match a `routeMap` key
**Fix**: register the route in `lib/pepguide.ts`, then copy the key verbatim

### 2. A new page can't be found by search

**Cause**: `lib/pepguide-search.ts` wasn't updated — the index is manual
**Fix**: add a `SearchEntry` with a summary and realistic keywords

### 3. `/pepguide` 404s in production but works locally

**Cause**: macOS is case-insensitive, Vercel's Linux filesystem is not
**Fix**: always link to `/PEPGuide`; optionally add a redirect in `next.config.ts`

### 4. Read checkmarks flash in after page load

**Cause**: expected — cookies are unavailable during server render, so `SectionList` populates state in an effect
**Fix**: none. Reading cookies during render would cause a hydration mismatch.

### 5. Colors look wrong on a new component

**Cause**: hardcoded Tailwind colors or `dark:` variants, which bypass or fight the `.pep-theme` variables
**Fix**: use `bg-card`, `text-foreground`, `border-border`, `text-muted-foreground` — see `REF_styling.md`

### 6. ESLint fails the build on apostrophes

**Cause**: `react/no-unescaped-entities` — raw `'` and `"` in JSX text
**Fix**: `&apos;`, `&ldquo;`, `&rdquo;`

### 7. Words run together after a `</strong>` or `</em>`

**Cause**: a JSX text node containing an HTML entity loses its **leading** whitespace when compiled, so `<strong>Lead.</strong> Then don&apos;t&hellip;` renders as `Lead.Then don't…`. Text nodes with no entity keep their space, which is why only some bullets break — and neither ESLint nor the type checker flags it.
**Fix**: emit the space explicitly with `{" "}` immediately after the closing tag, then begin the text on the next line. Trailing whitespace *before* an inline element is unaffected and needs no separator.

## Quick File Reference

- Guide layout: `app/PEPGuide/layout.tsx`
- Guide home: `app/PEPGuide/page.tsx`
- Routing source of truth: `lib/pepguide.ts`
- Search index: `lib/pepguide-search.ts`
- Cookie helpers: `lib/cookies.ts`
- Page shell: `components/pepguide/GuidePage.tsx`
- Theme + utilities: `app/globals.css`
- Smoke tests: `tests/smoke/pepguide.spec.ts`
