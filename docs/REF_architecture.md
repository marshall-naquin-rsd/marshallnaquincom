# REF: System Architecture

<!-- CUSTOMIZE: Replace with your project name and description -->

## Overview

This document covers the core architecture of Marshall Naquin, including the tech stack, SSR patterns, client/server boundaries, and key architectural decisions.

## Tech Stack

<!-- CUSTOMIZE: Update with your project's tech stack -->

- **Framework**: Next.js 16 (App Router)
- **React**: Version 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 (CSS-based configuration)
  [IF USING DATABASE]: - **Database**: Supabase (PostgreSQL with Row Level Security)
  [IF USING AUTH]: - **Authentication**: Supabase Auth with SSR
  [IF USING EMAIL]: - **Email**: Resend API or similar
  [IF USING TESTING]: - **Testing**: Playwright E2E
  [IF USING PDF]: - **PDF Generation**: React-PDF or similar

## Project Context

<!-- CUSTOMIZE: Describe your project's origin and requirements -->

**Purpose**: [DESCRIBE YOUR PROJECT PURPOSE]
**Key Requirements**: [LIST KEY REQUIREMENTS - e.g., SEO, real-time features, etc.]
**Architecture Choice**: Next.js App Router with Server-Side Rendering (SSR)
**Status**: [PROJECT STATUS]

## Critical Architecture Patterns

### 1. Supabase SSR Split Pattern

<!-- OPTIONAL: Remove this section if not using Supabase -->
<!-- CUSTOMIZE: Replace with your database client pattern if using different database -->

The application uses **different Supabase clients** based on component type:

```typescript
// Server Components (app/*/page.tsx without 'use client')
import { createClient } from "@/lib/supabase/server";
const supabase = await createClient(); // Note: await required

// Client Components (with 'use client' directive)
("use client");
import { createClient } from "@/lib/supabase/client";
const supabase = createClient(); // No await for browser client
```

**Why This Pattern?**

- Next.js SSR requires cookie-based authentication (server)
- Browser components use localStorage authentication (client)
- Middleware (`middleware.ts`) handles session refresh automatically
- Prevents "Cannot use cookies() in Client Component" errors

**Key Files:**

- `lib/supabase/server.ts` - Server-side client with cookies
- `lib/supabase/client.ts` - Browser client with localStorage
- `middleware.ts` - Session refresh and route protection
- `lib/supabase/middleware.ts` - Middleware helper functions

### 2. Component Architecture: Client/Server Boundary

Pages follow this split pattern:

```typescript
// app/some-page/page.tsx (Server Component - no 'use client')
import { createClient } from "@/lib/supabase/server";
import ClientComponent from "./ClientComponent";

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.from("table").select();

  return <ClientComponent initialData={data} />;
}

// app/some-page/ClientComponent.tsx
("use client");
import { createClient } from "@/lib/supabase/client";

export default function ClientComponent({ initialData }) {
  const supabase = createClient(); // Browser client for interactivity
  // Interactive features, hooks, useState, etc.
}
```

**Production Example**:

- Server: `app/authhome/page.tsx`
- Client: `components/Auth/AuthHomeClient.tsx`

**Benefits:**

- Server Components fetch initial data (SEO-friendly, fast first load)
- Client Components handle interactivity (forms, real-time updates)
- Clear separation of concerns

### 3. Custom Hooks Pattern

<!-- CUSTOMIZE: List your custom hooks here -->

All data operations use custom hooks located in `/hooks`:

**Available Hooks:**

- `use[YourFeature]` - [Feature description]
- `use[AnotherFeature]` - [Feature description]
- Add your custom hooks here

**Pattern:**

```typescript
// hooks/use[YourFeature].ts
'use client'
import { createClient } from '@/lib/supabase/client'

export default function use[YourFeature](id?: string) {
  const supabase = createClient()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Returns: { data, loading, error, fetch[Feature], update[Feature] }
}
```

**Benefits:**

- Centralizes data operations
- Maintains consistency across components
- Avoids duplicate Supabase logic
- Easy to test and maintain

## Environment Management

<!-- OPTIONAL: Remove this section if not using multiple environments -->

### Dual Database System

<!-- CUSTOMIZE: Configure for your environment setup -->

The application maintains **separate test and production databases**:

```bash
npm run env:test    # Switch to test DB (logged in console)
npm run env:prod    # Switch to production (shows warning)
npm run dev         # Restart dev server after switching
```

**Why Separate Databases?**

- Prevents test scripts from corrupting production data
- Safe environment for E2E testing
- Seeded test data with known users

**Environment Files:**

- `.env.production.local` - Production database (gitignored)
- `.env.test.local` - Test database (gitignored)
- Scripts copy appropriate file to `.env.local`

**Test Users** (see REF_testing.md for complete list):

<!-- CUSTOMIZE: Create test users with different permission levels -->

- Basic User: `[youremail]+user@gmail.com` / [TEST_PASSWORD]
- [Role]: `[youremail]+[role]@gmail.com` / [TEST_PASSWORD]
- Admin: `[youremail]+admin@gmail.com` / [TEST_PASSWORD]

### Environment Variables

**Required in `.env.local`:**

<!-- CUSTOMIZE: List your required environment variables -->

```env
# Browser-accessible (NEXT_PUBLIC_ prefix required)
[IF USING SUPABASE]: NEXT_PUBLIC_SUPABASE_URL=your_project_url
[IF USING SUPABASE]: NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_[YOUR_VAR]=your_value

# Server-only (never exposed to browser)
[IF USING SUPABASE]: SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
[IF USING EMAIL]: [EMAIL_API_KEY]=your_api_key
[YOUR_SECRET]=your_secret_value
```

**Critical Rule**: Variables without `NEXT_PUBLIC_` prefix are server-only and will be `undefined` in browser code.

## File Organization

<!-- CUSTOMIZE: Update to match your project structure -->

```
app/               # Next.js routes (Server Components by default)
  layout.tsx       # Root layout
  page.tsx         # Home page
  globals.css      # Tailwind config + custom classes
  api/             # API routes

components/        # React components (add 'use client' for interactivity)
  Layout/          # Header, Footer, Navigation
  [Feature]/       # Feature-specific components
  common/          # Reusable UI components

hooks/             # Custom hooks (always 'use client')

lib/
[IF USING SUPABASE]:  supabase/        # server.ts vs client.ts split (CRITICAL)
  utils/           # Helper functions
[IF USING EMAIL]:  email/           # Email templates

[IF USING DATABASE]: database/          # SQL migrations and schemas
[IF USING DATABASE]:   schema.sql       # Complete database schema

scripts/           # Utility scripts
[IF USING TESTING]: tests/             # E2E tests
```

## Route Structure

<!-- CUSTOMIZE: List your application routes -->

### Public Routes

- `/` - Home page
- `/about` - About page
- `/contact` - Contact form
- `/[your-routes]` - Add your public routes

### Protected Routes

[IF USING AUTH]:

- `/dashboard` - User dashboard
- `/[protected-route]` - Add your protected routes

### Admin Routes

[IF USING ADMIN]:

- `/admin` - Admin panel
- `/admin/[feature]` - Admin features

## Middleware & Route Protection

**File**: `middleware.ts`

```typescript
export async function middleware(request: NextRequest) {
  const { supabase, response } = await updateSession(request);

  // Check authentication for protected routes
  if (request.nextUrl.pathname.startsWith("/authhome")) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
}
```

**Protected Paths:**

- `/authhome/*` - Member portal
- `/admin-dashboard/*` - Admin panel (role check in component)

## Key Architectural Decisions

<!-- CUSTOMIZE: Document your architectural decisions and rationale -->

### Why Next.js App Router?

- **SEO**: Server-side rendering provides full HTML to crawlers
- **Performance**: Automatic code splitting, optimized bundles
- **Developer Experience**: File-based routing, React Server Components
- **Future-proof**: Latest React patterns and features

[IF MULTI-ENV]: ### Why Separate Databases?

- **Safety**: Test scripts can't corrupt production
- **Confidence**: Safe environment for E2E testing
- **Consistency**: Seeded data for repeatable tests

[IF USING SUPABASE]: ### Why SSR Split Pattern?

- **Security**: Cookie-based auth for server, localStorage for client
- **Performance**: Server fetches minimize client-side data loading
- **SEO**: Initial page load contains full content

### Why Custom Hooks?

- **DRY Principle**: Single source of truth for data operations
- **Consistency**: Same patterns across all components
- **Maintainability**: Easy to update data logic in one place
- **Testing**: Centralized logic easier to test

### Why [Your Decision]?

- [Your reasoning]

## Common Gotchas

### 1. "Cannot use cookies() in Client Component"

**Cause**: Imported server Supabase client in 'use client' component
**Fix**: Use `@/lib/supabase/client` for Client Components

### 2. Environment Variables Undefined in Browser

**Cause**: Missing `NEXT_PUBLIC_` prefix
**Fix**: Browser-accessible vars need `NEXT_PUBLIC_SUPABASE_URL` format

### 3. React Quill Installation Issues

**Cause**: React 19 incompatibility with `react-quill`
**Fix**: Use `react-quill-new` package instead

### 4. Server Component Using useState/useEffect

**Cause**: Server Components can't use React hooks
**Fix**: Add 'use client' directive or move to Client Component

## Quick File Reference

<!-- CUSTOMIZE: List your frequently accessed files -->

**Immediate access to key files:**

- Root layout: `app/layout.tsx`
- Home page: `app/page.tsx`
- Global styles: `app/globals.css`
  [IF USING SUPABASE]: - Supabase server: `lib/supabase/server.ts`
  [IF USING SUPABASE]: - Supabase client: `lib/supabase/client.ts`
  [IF USING AUTH]: - Auth middleware: `middleware.ts`
  [IF MULTI-ENV]: - Environment switch: `scripts/switch-env.js`
