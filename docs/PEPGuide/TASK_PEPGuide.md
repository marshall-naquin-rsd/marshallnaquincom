## INSTRUCTIONS

1. **Reference this file before starting work** and update it after major changes.
2. **For upgrades:** List phases and steps for each phase.
3. **For debugging:** Log each attempt immediately to avoid repetition.
4. **Keep TASK, UPGRADE and DEBUG files under 750 lines** - condense or transfer information to a REF file if needed.
5. **Update STARTER.md** when completing upgrades or successful debugging.
6. **DO NOT add, remove, or modify ANY content without explicit instructions from the user.**

---

# TASK: PEP Guide Subpage Scaffold

**Started**: Aug 3, 2026  
**Status**: ✅ Complete  
**Scope**: Add an unlisted `/PEPGuide` section — welcome/index page + five stub subpages — noindexed and linked from the home page, structured so the whole section can be lifted to its own domain later.

---

## RELEVANT PROJECT SECTIONS

**Architecture**: Next.js 16 App Router, TypeScript, Tailwind CSS 4  
**Routing**: file-system based; folder name `PEPGuide` must match URL case exactly (Linux case-sensitive on Vercel)  
**Styling**: `app/globals.css` design system — use `text-foreground`, `text-muted-foreground`, `border-border`; no hardcoded colors, no `dark:` variants  
**SEO**: noindex/nofollow on all pages under `/PEPGuide` via nested layout metadata

---

## PLAN SUMMARY

| Step | File(s) | Notes |
|------|---------|-------|
| 1 | `lib/pepguide.ts` | Single source of truth for base path + section slugs/titles |
| 2 | `app/PEPGuide/layout.tsx` | `robots: { index: false, follow: false }`, title template, breadcrumb nav header |
| 3 | `app/PEPGuide/page.tsx` | Welcome page with placeholder copy + section link list |
| 4 | `app/PEPGuide/{sunshine,cars,apts,rxplan,firstassign}/page.tsx` | Stub pages: title + "Content coming soon." |
| 5 | `app/page.tsx` | Added "PEP Guide" link beside Downloads on home page |
| 6 | `tests/smoke/pepguide.spec.ts` | Smoke tests: routes load, titles correct, noindex meta present |

---

## WORK LOG

### Aug 3, 2026 — Initial implementation

**Files created:**
- `lib/pepguide.ts` — `guideBasePath`, `GuideSection` type, `guideSections` array
- `app/PEPGuide/layout.tsx` — noindex metadata, title template `"%s · PEP Guide"`, nav header with links to `/PEPGuide` and `/`
- `app/PEPGuide/page.tsx` — heading, placeholder welcome paragraph (marked with TODO comment), five section links mapped from `guideSections`
- `app/PEPGuide/sunshine/page.tsx` — stub
- `app/PEPGuide/cars/page.tsx` — stub
- `app/PEPGuide/apts/page.tsx` — stub
- `app/PEPGuide/rxplan/page.tsx` — stub
- `app/PEPGuide/firstassign/page.tsx` — stub
- `tests/smoke/pepguide.spec.ts` — 8 smoke tests covering index title, noindex meta, subpage titles, home page link

**Files modified:**
- `app/page.tsx` — replaced single Downloads `<Link>` with a `flex gap-6` row containing both Downloads and PEP Guide links

**Result**: lint ✅ · build ✅ · tests ✅ (see verify step)

---

## NOTES

- The five subpage routes live under `/PEPGuide/` so the entire section can be moved to its own domain or sub-path with a single change to `guideBasePath` in `lib/pepguide.ts`.
- `robots: { index: false, follow: false }` in the nested layout propagates to all child segments automatically. No separate `robots.txt` exclusion needed since this repo has none.
- Placeholder welcome copy is in `app/PEPGuide/page.tsx`; search for the TODO comment when ready to add real content.
- Optional: add a `redirects()` entry in `next.config.ts` sending `/pepguide` → `/PEPGuide` for lowercase-URL tolerance in production.
