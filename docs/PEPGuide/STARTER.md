# STARTER FILE - PEP Guide

## IMPORTANT: READ FIRST

1. **This is the starter file for the PEP Guide section only.** For the wider marshallnaquin.com site, see `docs/STARTER.md`. Anything under `/PEPGuide` is governed by this file.

2. **This is a starter file.** Copy it and rename it for your task (e.g. `TASK_add_meds_page.md`, `DEBUG_search_ranking.md`), and place the copy in `docs/PEPGuide/`.

3. **Copy the ## INSTRUCTIONS section** to the beginning of your new task file.

4. **Copy relevant sections** from PROJECT OVERVIEW and beyond that apply to your task.

## INSTRUCTIONS

1. **Reference this file before starting work** and update it after major changes.

2. **For upgrades:** List phases and steps for each phase.

3. **For debugging:** Log each attempt immediately to avoid repetition.

4. **Keep TASK, UPGRADE and DEBUG files under 750 lines** - condense or transfer information to a REF file if needed.

5. **Update STARTER.md** when completing upgrades or successful debugging.

6. **DO NOT add, remove, or modify ANY content without explicit instructions from the user.** This includes:
   - Adding missing content from reference files
   - "Completing" incomplete sections
   - Adding helpful text or explanations
   - Expanding abbreviated content
   - **ALWAYS ask first before adding content**, even if it appears to be missing

7. **Guide copy is subject-matter content, not boilerplate.** Never invent, embellish, or "fill in" facts about the program — phone numbers, gate codes, rules, timelines, policies. If a detail is missing, ask.

---

# PROJECT OVERVIEW

**Application**: PEP Guide
**Location**: `/PEPGuide` section of [marshallnaquin.com](https://marshallnaquin.com)
**Purpose**: An unlisted, mobile-first companion guide for incoming peers at Pine Grove's Professional Enhancement Program — written by a former peer, meant to sit alongside (never replace) the official programming binder.
**Architecture**: Next.js 16 App Router route group inside the parent site; static content pages, no backend

**Last Updated**: Aug 4, 2026
**Version**: v1.1 — Content build-out
**Status**: 🚧 In Development

**Auth**: None — unlisted, not gated
**Database**: None — all content is hand-authored TSX
**SEO**: Deliberately **noindex/nofollow**. This is a private guide. There is no `REF_SEO.md` for this section and there should not be one.

**Audience**: Someone on their phone, on their first day, who is stressed and looking for one specific answer. Optimize for that person.

---

## SCOPE & PLANNED FEATURES

**In scope:**

- Hierarchical content pages under `/PEPGuide` (see ROUTE STRUCTURE below)
- Client-side search across all sections (`lib/pepguide-search.ts`)
- Quick Reference page for numbers, codes, and addresses
- FAQ page with grouped, collapsible answers
- Read-progress checkmarks, cookie-based and consent-gated
- Its own visual theme (`.pep-theme`), distinct from the parent site

**Out of scope (unless requirements change):**

- Accounts, login, or any per-user server state
- A database or CMS — content lives in the repo as TSX
- Search indexing, sitemaps, or any SEO work
- Analytics or tracking of any kind beyond the read-progress cookie
- Comments, forms, or anything that collects information from a peer

**Design constraint that drives most decisions**: the whole section is built so it can be lifted onto its own domain later. Every internal link is derived from `guideBasePath` in `lib/pepguide.ts` rather than hardcoded.

---

## TECH STACK & VERSIONS

Inherited from the parent site — the guide adds no dependencies of its own.

- **Framework**: Next.js 16.2.9 (App Router)
- **Frontend**: React 19.2.4 with TypeScript 5.x
- **Styling**: Tailwind CSS 4 (CSS-based config in `app/globals.css`)
- **Fonts**: Vollkorn (headings), Kumbh Sans (body) — loaded in the root layout, applied by `.pep-theme`
- **Testing**: Playwright (`tests/smoke/pepguide.spec.ts`)
- **Package Manager**: npm

**No new packages.** If a feature seems to need one, first check whether a native browser API or a plain CSS/`<details>` approach will do. The FAQ accordion, for example, is native `<details>`/`<summary>` with no JS.

---

## PROJECT STRUCTURE

```
marshallnaquincom/
├── app/PEPGuide/                    # All guide routes
│   ├── layout.tsx                   # .pep-theme wrapper, noindex metadata, GuideHeader, CookieConsent
│   ├── page.tsx                     # Guide home: search + Quick Ref/FAQ buttons + section list
│   ├── welcome/page.tsx
│   ├── sunshine/page.tsx
│   ├── firstassign/page.tsx
│   ├── cars/page.tsx
│   ├── rxplan/page.tsx
│   │   └── rxplanmore/page.tsx      # Continuation page
│   ├── apts/page.tsx                # Sub-index: lists the five apartment pages
│   │   ├── aptliv/page.tsx
│   │   ├── aptrules/page.tsx
│   │   ├── aptcleaning/page.tsx
│   │   ├── aptmaint/page.tsx
│   │   └── aptpool/page.tsx
│   ├── quickref/page.tsx            # Standalone: numbers, codes, addresses
│   └── faq/page.tsx                 # Standalone: grouped accordion
├── components/pepguide/
│   ├── GuidePage.tsx                # Page shell — breadcrumb, h1, footer nav, disclaimer
│   ├── GuideHeader.tsx              # Sticky header (client)
│   ├── SectionList.tsx              # Section links + read checkmarks (client)
│   ├── GuideSearch.tsx              # Search input + results (client)
│   ├── FaqAccordion.tsx             # Native <details> accordion (server)
│   ├── BackButton.tsx               # history-aware back (client)
│   ├── NavTracker.tsx               # records entry path in sessionStorage (client)
│   └── ReadTracker.tsx              # marks a page read on mount (client)
├── components/CookieConsent.tsx     # Consent banner — mounted by the PEPGuide layout only
├── lib/
│   ├── pepguide.ts                  # Base paths, section lists, routeMap (SOURCE OF TRUTH)
│   ├── pepguide-search.ts           # Search index + scoring
│   └── cookies.ts                   # Consent + read-progress cookie helpers
├── app/globals.css                  # .pep-theme tokens + all guide utility classes
├── docs/PEPGuide/                   # This folder
│   ├── STARTER.md                   # This file
│   ├── REF_architecture.md
│   ├── REF_styling.md
│   └── TASK_PEPGuide.md
└── tests/smoke/pepguide.spec.ts
```

---

## ROUTE STRUCTURE

Three levels deep at most. The main sections form a linear "next" sequence; Quick Reference and FAQ sit outside it.

| Route | Title | Parent | In linear sequence? |
|-------|-------|--------|---------------------|
| `/PEPGuide` | PEP Guide | — | home |
| `/PEPGuide/welcome` | Welcome | guide home | 1 |
| `/PEPGuide/sunshine` | Sunshine / Shadow Contract | guide home | 2 |
| `/PEPGuide/firstassign` | First Assignments | guide home | 3 |
| `/PEPGuide/cars` | Personal Vehicles | guide home | 4 |
| `/PEPGuide/apts` | Apartments | guide home | 5 (sub-index) |
| `/PEPGuide/apts/aptliv` | Apartment Living | apts | apts 1 |
| `/PEPGuide/apts/aptrules` | Apartment Complex Rules | apts | apts 2 |
| `/PEPGuide/apts/aptcleaning` | Apartment Cleaning | apts | apts 3 |
| `/PEPGuide/apts/aptmaint` | Apartment Maintenance Issues | apts | apts 4 |
| `/PEPGuide/apts/aptpool` | Pool | apts | apts 5 |
| `/PEPGuide/rxplan` | Treatment Planning | guide home | 6 |
| `/PEPGuide/rxplan/rxplanmore` | More About Treatment Planning | rxplan | continuation |
| `/PEPGuide/quickref` | Quick Reference | guide home | standalone |
| `/PEPGuide/faq` | FAQ | guide home | standalone |

**⚠️ Case sensitivity**: the folder is `PEPGuide`, capitalized exactly. Vercel's filesystem is case-sensitive, so `/pepguide` will 404 in production even though macOS tolerates it locally.

---

## ADDING A NEW PAGE

Four steps, in this order:

1. **Register the route** in `lib/pepguide.ts` — add it to `guideSections` / `aptSections` (which auto-generates prev/next in `routeMap`), or add a bespoke `routeMap` entry for a standalone page.
2. **Create the page** at `app/PEPGuide/<slug>/page.tsx`. Export `metadata` with a `title`, and render `<GuidePage path="..." title="..." >`. The `path` prop must exactly match the `routeMap` key or breadcrumbs and footer nav will be missing.
3. **Add a search entry** in `lib/pepguide-search.ts` — title, href, one-line summary, and keywords a peer would actually type.
4. **Add a smoke test** case in `tests/smoke/pepguide.spec.ts`.

Skipping step 3 is the common miss: the page will work but will be invisible to search.

---

## CONTENT CONVENTIONS

- **Voice**: first person, from "former peer M". Warm, direct, never clinical or preachy.
- **The binder is the authority.** The guide points to it and adds practical color; it never contradicts or replaces it. Every content page carries the disclaimer rendered by `GuidePage`.
- **Wrap body copy in `.pep-prose`** and lists in `.pep-list`. Do not hand-style paragraphs.
- **Use `<h2>` for in-page section breaks** — `.pep-prose h2` styles them in the accent color automatically.
- **Escape apostrophes and quotes in JSX** (`&apos;`, `&ldquo;`) or ESLint's `react/no-unescaped-entities` will fail the build.
- **No real names.** Staff and peers are referred to by role, not by name.

---

## ENVIRONMENT SETUP

No guide-specific environment variables. Same commands as the parent site:

```bash
npm install              # Install dependencies
npm run dev              # Dev server (localhost:3000/PEPGuide)
npm run build            # Production build
npm run lint             # Run ESLint
npm test                 # Run Playwright tests
```

---

## PRIVACY & COOKIES

The guide is the **only** part of marshallnaquin.com that sets cookies. As of Aug 4, 2026 the consent banner is mounted by `app/PEPGuide/layout.tsx`, not the root layout, so it never appears on the main site.

| Cookie | Purpose | Set when |
|--------|---------|----------|
| `pep_consent` | `"granted"` or `"declined"` | User clicks Accept or Decline on the banner |
| `pep_read` | Comma-separated slugs the user has read | Only when consent is `"granted"` |

**Rules:**

- `markAsRead()` in `lib/cookies.ts` is the single gate — it returns early unless consent is `"granted"`. Never write a cookie around it.
- Both cookies are `SameSite=Lax`, `path=/`, one-year max-age. No third parties, no analytics, nothing leaves the browser.
- Declining must leave the guide fully usable. Read checkmarks simply never appear.
- `sessionStorage` holds the entry path for the back button. That is not a cookie and needs no consent.

---

## STYLING

The guide has its own theme, scoped to the `.pep-theme` class on the wrapper `<div>` in `app/PEPGuide/layout.tsx`. It overrides the same CSS variables the parent site defines, so every design-system class (`bg-card`, `text-foreground`, `border-border`) automatically resolves to guide colors inside that subtree and site colors outside it.

**Palette** (light mode): warm off-white background `#fbfaf8`, deep pine primary `#3f7365`, terracotta accent `#b85c33`, mint highlight `#daefea`. Dark mode is defined in the same block and adapts automatically.

**⚠️ Critical Rule**: **NEVER use hardcoded color classes** (`bg-white`, `text-gray-900`) and **never use `dark:` variants** for color. The CSS variables already handle both modes; a `dark:` variant will fight the theme. See `docs/PEPGuide/REF_styling.md` for the full class inventory.

---

## TESTING

**File**: `tests/smoke/pepguide.spec.ts` (tagged `@smoke`)

Covers: guide home title, all section links present, `noindex` meta tag, home-page link into the guide, and each subpage's title.

```bash
npm run dev              # in one terminal
npm test                 # in another
```

**Known issue (Aug 4, 2026)**: the spec still expects `"Cars · PEP Guide"` but the page's metadata title is now `"Personal Vehicles"`. The test list also predates `quickref`, `faq`, `rxplanmore`, and the five apartment subpages. Needs a pass.

---

## DEBUGGING PHILOSOPHY

**When user reports an issue:**

1. ✅ Assume user followed instructions correctly
2. ✅ Investigate code/logic first - assume there's a bug
3. ❌ Don't ask user to retry without verifying implementation
4. 📝 Document findings to avoid repeat attempts

---

## COMMON FILE LOCATIONS

**Quick Reference:**

- Guide layout (theme + noindex): `app/PEPGuide/layout.tsx`
- Guide home: `app/PEPGuide/page.tsx`
- Route + section source of truth: `lib/pepguide.ts`
- Search index: `lib/pepguide-search.ts`
- Cookie helpers: `lib/cookies.ts`
- Page shell: `components/pepguide/GuidePage.tsx`
- Theme tokens + utility classes: `app/globals.css` (`.pep-theme` block onward)
- Smoke tests: `tests/smoke/pepguide.spec.ts`

---

## FAILED APPROACHES LOG

❌ **Don't hardcode `/PEPGuide` in links**

- Result: breaks the "lift to its own domain" goal; one path change no longer moves the section
- Solution: import `guideBasePath`, `aptsBasePath`, or `rxplanBasePath` from `lib/pepguide.ts`

❌ **Don't render `GuidePage` with a `path` that isn't a `routeMap` key**

- Result: `info` is `undefined`, so breadcrumbs, Back, and Next silently disappear — no error thrown
- Solution: register the route in `lib/pepguide.ts` first, then match the string exactly

❌ **Don't put the cookie banner in the root layout**

- Result: it appeared on marshallnaquin.com, which sets no cookies at all
- Solution: mount `<CookieConsent />` inside `app/PEPGuide/layout.tsx` (fixed Aug 4, 2026)

❌ **Don't use `dark:` variants inside `.pep-theme`**

- Result: double-handling — the variant overrides the theme's own dark-mode values and colors go wrong
- Solution: use the variable-backed classes and let the `@media (prefers-color-scheme: dark)` block do the work

❌ **Don't read `sessionStorage` in an effect to decide what to render**

- Result: flash of the wrong back-button state on first paint
- Solution: read it synchronously during render, as `BackButton.tsx` does

❌ **Don't lowercase the route folder**

- Result: 404 on Vercel (case-sensitive) while working fine on macOS
- Solution: keep `app/PEPGuide/` capitalized; optionally add a `/pepguide` → `/PEPGuide` redirect in `next.config.ts`

---

## PROJECT PROGRESS

### ✅ Scaffold (Aug 3, 2026)

- `/PEPGuide` section created, noindexed via nested layout metadata
- Welcome/index page and five stub subpages
- `lib/pepguide.ts` established as the routing source of truth
- Smoke tests added
- See `docs/PEPGuide/TASK_PEPGuide.md`

### ✅ Content & UX build-out (Aug 3–4, 2026)

- `.pep-theme` brand theme with Vollkorn/Kumbh Sans typography and Pine Grove palette
- `GuidePage` shell: breadcrumbs, footer nav, persistent disclaimer
- Sticky `GuideHeader` with history-aware `BackButton`
- Client-side search with keyword scoring (`lib/pepguide-search.ts`)
- Quick Reference and FAQ pages; FAQ uses a no-JS `<details>` accordion
- Read-progress checkmarks with consent gate and reset control
- Apartments split into five subpages; Treatment Planning extended with `rxplanmore`
- Cookie banner scoped to the guide only

### 🚧 In Progress

- Real content for remaining stub sections
- Refresh `tests/smoke/pepguide.spec.ts` for current titles and routes

### 📋 Planned

- Decide whether the guide moves to its own domain
- Optional `/pepguide` → `/PEPGuide` redirect for lowercase-URL tolerance

---

## QUICK REFERENCE

### For New Tasks

1. Copy this file → rename for your task → save in `docs/PEPGuide/`
2. Copy INSTRUCTIONS section to top
3. Copy relevant PROJECT sections
4. Document attempts as you work
5. Update this STARTER.md when complete

### For Development

- **Dev server**: `npm run dev` → http://localhost:3000/PEPGuide
- **Build test**: `npm run build && npm run start`
- **Lint**: `npm run lint`

### Guide-Specific Tips

- Route changes start in `lib/pepguide.ts`, always
- New page = route entry + page + search entry + test
- Content goes in `.pep-prose`; lists in `.pep-list`
- Check color choices against `app/globals.css`, not memory
- Everything under `/PEPGuide` inherits `noindex` from the layout — don't re-declare it per page

---

**For detailed information, see the REF files:**

- **Architecture**: `docs/PEPGuide/REF_architecture.md`
- **Styling**: `docs/PEPGuide/REF_styling.md`
- **Original scaffold task**: `docs/PEPGuide/TASK_PEPGuide.md`
- **Parent site**: `docs/STARTER.md`
- **SEO**: intentionally absent — this section is noindexed
