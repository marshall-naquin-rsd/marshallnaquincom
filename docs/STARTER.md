# STARTER FILE - Marshall Naquin

## IMPORTANT: READ FIRST

1. **This is a starter file.** Copy this file and rename it for your task (e.g., `UPGRADE_auth_upgrade.md`, `DEBUG_email_issue.md`, `TASK_add_feature.md`).

2. **Copy the ## INSTRUCTIONS section** to the beginning of your new task file.

3. **Copy relevant sections** from PROJECT OVERVIEW and beyond that apply to your task.

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

---

# PROJECT OVERVIEW

**Application**: Marshall Naquin  
**Domain**: [marshallnaquin.com](https://marshallnaquin.com)  
**Purpose**: Speaker home — book Marshall for talks on addiction and recovery. Staging/WIP routes stay reachable by URL but unlinked from public chrome.  
**Architecture**: Next.js 16 with App Router + TypeScript (static pages + `/api/booking` form post)

**Last Updated**: September 20, 2026  
**Version**: v1.1 - Speaker home  
**Status**: 🚧 In Development

**Auth**: None  
**Database**: None  
**SEO**: Not a priority — personal site, not optimized for search traffic

---

## SCOPE & PLANNED FEATURES

**In scope (keep it simple):**
- Speaker home at marshallnaquin.com (`/`, `/booking`, `/about`)
- Static pages as needed
- **File downloads** — host files in `public/downloads/` for others to grab (unlisted)
- **Maybe a blog** — undecided; could be markdown/MDX pages later if wanted

**Out of scope (unless requirements change):**
- User accounts / authentication
- Database (Supabase, etc.)
- SEO stack (sitemaps, JSON-LD, IndexNow, Search Console)
- Admin dashboards or CMS

**When adding features, prefer the simplest approach:**
- Downloads → drop files in `public/downloads/`, link from a page
- Blog → start with markdown/MDX files in the repo before reaching for a CMS or database

---

## TECH STACK & VERSIONS

### Core Technologies

- **Framework**: Next.js 16.x (App Router with SSR)
- **Frontend**: React 19.x with TypeScript 5.x
- **Styling**: Tailwind CSS 4.0 (CSS-based configuration)
- **Authentication**: None
- **Database**: None initially
- **Testing**: Playwright
- **Email**: Booking form posts to `/api/booking` and sends via Resend (`RESEND_API_KEY`, `BOOKING_FROM_EMAIL`)
- **Package Manager**: npm

### Key Dependencies

```json
{
  "next": "16.x",
  "react": "19.x",
  "react-dom": "19.x",
  "typescript": "5.x"
}
```

---

## PROJECT STRUCTURE

```
marshallnaquincom/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Tailwind CSS config + global styles
│   └── [routes]/                # Add pages as needed (about, blog, downloads, etc.)
├── components/
│   ├── Layout/                  # Header, Footer, Nav
│   └── common/                  # Reusable UI components
├── lib/utils/                   # Helper functions
├── public/
│   ├── downloads/               # Files for others to download (PDFs, zips, etc.)
│   └── images/                  # Static images
├── docs/                        # Project documentation
│   ├── STARTER.md              # This file
│   └── REF_*.md                # Reference docs (SEO/DB refs kept for template; not in use)
└── tests/                       # Playwright smoke tests
```

---

## ENVIRONMENT SETUP

### Required Variables (`.env.local`)

```env
NEXT_PUBLIC_SITE_URL=https://marshallnaquin.com
RESEND_API_KEY=
BOOKING_FROM_EMAIL=Marshall Naquin <booking@marshallnaquin.com>
```

### Commands

```bash
npm install              # Install dependencies
npm run dev              # Dev server (localhost:3000)
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint
npm test                 # Run Playwright tests
```

**Testing**: Playwright smoke tests in `tests/smoke/`

---

## DATABASE SCHEMA

[IF USING DATABASE: Document your database schema here]

**Recommended Documentation:**

- **Database Source of Truth**: Keep a `schema.sql` file in root directory with complete schema export
- **Migrations**: Store migration files in `database/migrations/` directory
- **Main Tables**: List your core tables and their purposes
- **Key Features**: Document RLS policies, triggers, functions
- **Common Patterns**: Examples of frequent query patterns
- **MCP Tools**: If using Supabase, document MCP tool usage

---

## AUTHENTICATION

[IF USING AUTHENTICATION: Document your authentication setup here]

### Architecture (Next.js SSR with Supabase Example)

- **Server Client**: `lib/[database]/server.ts` - For Server Components, Server Actions, Route Handlers
- **Browser Client**: `lib/[database]/client.ts` - For Client Components with 'use client'
- **Middleware**: `middleware.ts` + `lib/[database]/middleware.ts` - Session refresh and route protection
- **Protection**: Middleware redirects unauthenticated users to `/login`

### Protected Routes (Configured in middleware)

[LIST YOUR PROTECTED ROUTES - Examples:]

- `/dashboard`, `/profile`, `/admin/*`
- `/[feature]/*`

### Import Patterns (Supabase SSR Example)

```typescript
// Server Components
import { createClient } from "@/lib/[database]/server";
const supabase = await createClient();

// Client Components
("use client");
import { createClient } from "@/lib/[database]/client";
const supabase = createClient();
```

### Test Users (For Testing)

**Recommended Test User Pattern:**

- **Basic User**: `[youremail]+user@gmail.com` (password: Elizabeth01)
- **Admin User**: `[youremail]+admin@gmail.com` (password: Elizabeth01)
- **Super Admin**: `[youremail]+superadmin@gmail.com` (password: Elizabeth01)
- **Special Role**: `[youremail]+[role]@gmail.com` (password: Elizabeth01)

**Setup Test Users:**

- Create separate test database
- Seed test users with known credentials
- Document role/permission differences

---

## STYLING

- **Framework**: Tailwind CSS 4.0 (CSS-based configuration with @theme)
- **Config**: `app/globals.css` (not tailwind.config.js)
- **Fonts**: Source Serif 4 (headings), Source Sans 3 (UI/body)
- **Colors** (Define in globals.css with @theme using design system variables):
  - Background: `--background` → `bg-background` (page backgrounds)
  - Foreground: `--foreground` → `text-foreground` (primary text)
  - Card: `--card` → `bg-card` (card/container backgrounds)
  - Muted: `--muted` → `bg-muted` (subtle backgrounds)
  - Muted Foreground: `--muted-foreground` → `text-muted-foreground` (secondary text)
  - Border: `--border` → `border-border` (all borders)
  - Primary: `--primary` → `bg-primary` / `text-primary` (primary actions)
  - Secondary: `--secondary` → `bg-secondary` / `text-secondary` (secondary actions)
  - Success/Error/Warning/Info: Define as needed → `bg-success`, `text-error`, etc.
- **Approach**: Mobile-first, responsive design with CSS variables
- **⚠️ Critical Rule**: **NEVER use hardcoded color classes** like `bg-white`, `text-gray-900`, `border-gray-200`. Always use design system classes (`bg-card`, `text-foreground`, `border-border`) which adapt to dark mode and are easier to maintain. See `docs/REF_styling.md` for the complete color mapping reference.

**Example globals.css configuration:**

```css
@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-border: hsl(var(--border));
  --color-primary: hsl(var(--primary));
  --color-secondary: hsl(var(--secondary));
  
  --font-heading: "[YOUR_HEADING_FONT]", sans-serif;
  --font-body: "[YOUR_BODY_FONT]", sans-serif;
}
```

**Note**: Update the CSS variable values in `:root` with your chosen color palette during Phase 4.5 design system planning. See `docs/REF_styling.md` for complete design system documentation.

---

## DEBUGGING PHILOSOPHY

**When user reports an issue:**

1. ✅ Assume user followed instructions correctly
2. ✅ Investigate code/logic first - assume there's a bug
3. ❌ Don't ask user to retry without verifying implementation
4. 📝 Document findings to avoid repeat attempts

---

## TESTING WITH VS CODE PLAYWRIGHT EXTENSION

[IF USING TESTING: Document your testing setup here]

### Setup

1. **Install Extension**: Search "Playwright Test for VSCode" in VS Code Extensions
2. **Test Database**: Use `.env.test.local` with separate test database [IF APPLICABLE]
3. **Switch Environment**: Run `npm run env:test` before testing [IF USING ENV SWITCHING]
4. **Seed Data**: Run `node scripts/seed-test-data.js` to populate test data [IF NEEDED]

### Running Tests

1. **Start dev server**: `npm run dev` (in separate terminal)
2. **Open Testing Panel**: Click beaker icon in sidebar
3. **Run tests**: Click play button next to test/suite
4. **Debug tests**: Click debug icon, set breakpoints

### Test Organization

- `tests/smoke/` - Quick validation tests (tagged `@smoke`)
- `tests/features/` - Comprehensive tests (tagged `@full`)
  - `[feature]/` - Feature-specific test suites
- `tests/fixtures/` - Shared helpers (auth.ts, test-data.ts)

### Test Users (If Using Authentication)

**Use the test user pattern from AUTHENTICATION section:**

- **Basic User**: `[youremail]+user@gmail.com` (password: Elizabeth01)
- **Admin User**: `[youremail]+admin@gmail.com` (password: Elizabeth01)
- **Super Admin**: `[youremail]+superadmin@gmail.com` (password: Elizabeth01)
- **Special Role**: `[youremail]+[role]@gmail.com` (password: Elizabeth01)

---

## COMMON FILE LOCATIONS

**Quick Reference:**

- Root layout: `app/layout.tsx`
- Home page: `app/page.tsx`
- Global styles: `app/globals.css`
- Database server client: `lib/[database]/server.ts` [IF USING DATABASE]
- Database browser client: `lib/[database]/client.ts` [IF USING DATABASE]
- Auth middleware: `middleware.ts` + `lib/[database]/middleware.ts` [IF USING AUTH]
- Layout components: `components/Layout/Header.tsx`, `Footer.tsx`
- Environment: `.env.local`, `.env.example`, `.env.test.local` [IF USING TEST ENV]
- Test seed script: `scripts/seed-test-data.js` [IF USING TESTING]
- Database source of truth: `schema.sql` (root directory) [IF USING DATABASE]
- Documentation: `docs/STARTER.md`, `docs/REF_*.md`

---

## FAILED APPROACHES LOG

### Next.js Specific

❌ **Don't forget NEXT*PUBLIC* prefix for browser variables**

- Result: Environment variables undefined in client components
- Solution: Use `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

❌ **Don't use server-only code in Client Components**

- Result: Build errors or runtime crashes
- Solution: Use 'use client' directive and browser Supabase client

❌ **Don't install react-quill without --legacy-peer-deps**

- Result: npm install fails due to React 19 incompatibility
- Solution: `npm install react-quill --legacy-peer-deps`

### From Original React Project

❌ **Don't use PKCE flow for cross-device password resets**

- Result: Links only work on device that initiated reset
- Solution: Use `flowType: 'implicit'`

❌ **Don't UPDATE user_roles directly from frontend**

- Result: RLS blocks the update silently
- Solution: Use SECURITY DEFINER functions via `.rpc()`

❌ **Don't INSERT into tables with auto-triggers**

- Result: Conflicts with trigger-created rows
- Solution: Check for existing triggers first

---

## PROJECT PROGRESS

### ✅ Area 7 Mini-Conference Preview (Sep 13, 2026)

- Unlisted `/2027miniconf` preview of the 2027 Area 7 Mini-Conference page (noindexed)
- Volunteer form is client-side only for review; it does not persist signups
- Originally published at `/area7`; moved so `/area7` can host the Area 7 design-system proposal
- No redirect from `/area7` to `/2027miniconf`
- See `docs/archive/TASK_area7_conference_preview.md` for details

### ✅ Area 7 design-system proposal (Sep 21, 2026)

- Static proposal kit at `/area7`, `/area7/meetings`, and `/area7/map`
- Assets served from `/area7-ds/` (styles, photos, fonts, tokens)
- Banner on all three pages: proposal / not official / sample meeting data
- Not linked from the speaker home nav or footer

### ✅ Phase 1 Complete (June 21, 2026)

- Next.js 16 + React 19 + TypeScript scaffolded
- Template documentation copied (STARTER.md, REF files, mentor mode, copilot instructions)
- Directory structure created
- Playwright configured with smoke test
- GitHub repository created at https://github.com/marshall-naquin-rsd/marshallnaquincom

### ✅ PEP Guide Section Added (Aug 3, 2026)

- Unlisted `/PEPGuide` section scaffolded — noindexed via nested layout metadata
- Welcome/index page at `/PEPGuide` with placeholder copy and five section links
- Five stub subpages: `/PEPGuide/sunshine`, `/cars`, `/apts`, `/rxplan`, `/firstassign`
- "PEP Guide" link added to home page beside Downloads
- Section data in `lib/pepguide.ts` (single source of truth for slugs/titles/base path)
- See `docs/PEPGuide/` for that section's own STARTER and REF files

### ✅ PEP Guide Moved Out (Aug 13, 2026)

- The PEP Guide now lives in its own repo: https://github.com/marshall-naquin-rsd/pepguide
- Removed the `/PEPGuide` section, home-page link, and guide-specific CSS/fonts from this site

### ✅ Speaker home (Sep 20, 2026)

- Public speaker site at `/` with must-keep section order (masthead through colophon)
- Visual SoT: Marshall-approved Claude Design frames (layout, type, color, microcopy)
- MN.com-native `/booking` inquiry via Resend to marshall.naquin@professionalsupportconsulting.com
- `/about` speaker bio; speaking samples in `public/audio/`
- Staging/WIP (`/downloads`, `/2027miniconf`, `/GBC`, `/higgsfield-samples`) stay reachable, unlinked, noindex

### 🚧 Phase 2 In Progress

- Design system planning (optional — copy `docs/design_page_template.tsx` to `app/design/page.tsx` if desired)
- Home page and basic layout
- Decide on first real pages (downloads list, blog, about, etc.)

### 📋 Phase 3 Planned

- Deploy to Vercel and connect marshallnaquin.com
- Downloads page (if needed) — files in `public/downloads/`
- Blog (if wanted) — likely markdown/MDX, no database

---

## QUICK REFERENCE

### For New Tasks

1. Copy this file → rename for your task
2. Copy INSTRUCTIONS section to top
3. Copy relevant PROJECT sections
4. Document attempts as you work
5. Update STARTER.md when complete

### For Development

- **Dev server**: `npm run dev` (localhost:3000)
- **Build test**: `npm run build && npm run start`
- **Lint**: `npm run lint`
- **Environment Switching** [IF USING]:
  - Test: `npm run env:test` then `npm run dev`
  - Production: `npm run env:prod` then `npm run dev`

### For Testing [IF USING TESTING]

- Run Playwright tests via VS Code extension
- Switch to test environment before running tests
- Use seeded test users with known credentials

### Next.js Specific Tips

- Use `NEXT_PUBLIC_` prefix for browser-accessible env vars
- Server Components: Use `lib/[database]/server.ts` [IF USING DATABASE]
- Client Components: Use `lib/[database]/client.ts` with 'use client' [IF USING DATABASE]
- Protected routes: Configured in `middleware.ts` [IF USING AUTH]
- Styling: Edit `app/globals.css` for Tailwind CSS 4 config

---

**For detailed information, see your REF files:**

- **Architecture**: `docs/REF_architecture.md`
- **SEO**: `docs/REF_SEO.md` [IF APPLICABLE]
- **Styling**: `docs/REF_styling.md`
- **Additional references**: Create REF files as needed for your project
