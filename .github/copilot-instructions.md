# Copilot Instructions - Marshall Naquin

<!-- CUSTOMIZE: Replace Marshall Naquin with your project name -->

## Project Context

<!-- CUSTOMIZE: Describe your project purpose, key features, and current status -->

This is a **personal website** at marshallnaquin.com. Simple static pages — no database, no auth, no SEO optimization. Possible future features: file downloads (`public/downloads/`) and maybe a markdown/MDX blog.

**Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 (CSS-based config)

**Project Status**: 🚧 In Development — scaffolded, features TBD

## Chat Mode Selection

**⚠️ IMPORTANT: Check if user has activated a specific chat mode before proceeding.**

### Available Modes

1. **Agent Mode (Default)** - Standard AI assistant that implements solutions directly
2. **Mentor Mode** - Educational guidance using Socratic questioning (see `.github/chatmodes/Mentor.md`)

### Mentor Mode Detection

<!-- CUSTOMIZE: Update mentor.md path to match your project structure -->

**If the user's first message contains:**

- "activate mentor mode" OR
- "use mentor mode" OR
- "@mentor.md" OR
- Any reference to "mentor.md"

**Then you MUST:**

1. ✅ Read and follow ALL instructions in `.github/chatmodes/mentor.md`
2. ✅ Apply Mentor Mode behavioral constraints (NO direct solutions, ask diagnostic questions)
3. ✅ Stay in Mentor Mode for the entire conversation unless user types "bailout" or "exit mentor mode"

**Critical Mentor Mode Rules (from mentor.md):**

- ❌ NEVER provide direct code solutions unless user types "bailout"
- ✅ ALWAYS start with diagnostic questions (minimum 3-5 questions)
- ✅ Use progressive hints only when user types "hint"
- ✅ Only use read-only tools (no file edits)
- ✅ Assume user followed instructions correctly - investigate code/system first

**To verify Mentor Mode is active, include this in your first response:**

```
🎓 Mentor Mode Activated

I'll guide you through diagnostic questions and progressive hints.
Type "hint" for clues, "bailout" for direct solution.
```

## Critical Architecture Patterns

### 1. Supabase SSR Split Pattern

We use **different Supabase clients** based on component type:

```typescript
// Server Components (app/*/page.tsx without 'use client')
import { createClient } from "@/lib/supabase/server";
const supabase = await createClient(); // Note: await required

// Client Components (with 'use client' directive)
("use client");
import { createClient } from "@/lib/supabase/client";
const supabase = createClient(); // No await for browser client
```

**Why**: Next.js SSR requires cookie-based auth (server) vs localStorage auth (client). Middleware (`middleware.ts`) handles session refresh automatically.

### 2. RLS and SECURITY DEFINER Functions

The database uses **Row Level Security (RLS)** which can silently fail with empty errors `{}`. Critical pattern:

**❌ Don't**: Direct UPDATE on protected tables from frontend

```typescript
// This SILENTLY FAILS - RLS blocks user updating their own role
await supabase.from("user_roles").update({ approval_status: "approved" });
```

**✅ Do**: Use SECURITY DEFINER functions via `.rpc()`

```typescript
// This works - function runs with elevated privileges
await supabase.rpc("approve_user", { target_user_id: userId });
```

**Where to check**: `schema.sql` (root directory) contains functions with `SECURITY DEFINER` - these bypass RLS. If updates fail mysteriously, check RLS policies first (see `docs/REF_troubleshooting.md`).

### 3. Environment Switching Workflow

<!-- CUSTOMIZE: If using multiple environments, configure env switching scripts -->
<!-- OPTIONAL: Remove this section if not using test/production database separation -->

**Always verify your database before changes:**

```bash
npm run env:test    # Switch to test DB (logged in console)
npm run env:prod    # Switch to production (shows warning)
npm run dev         # Restart dev server after switching
```

Active environment shown in console. [IF USING TEST DATA: Test DB has seeded users (see `scripts/seed-test-data.js`).]

### 4. Supabase MCP (PREFERRED METHOD)

**ALWAYS use Supabase MCP tools when available** for database operations:

- `mcp_supabase_execute_sql` - Run SELECT queries and DML operations
- `mcp_supabase_apply_migration` - Apply DDL changes (CREATE, ALTER, DROP)
- `mcp_supabase_list_tables` - View table structure and schemas
- `mcp_supabase_list_migrations` - Check migration history
- `mcp_supabase_list_extensions` - View enabled extensions
- `mcp_supabase_get_advisors` - Check for RLS issues, security vulnerabilities, performance problems
- `mcp_supabase_generate_typescript_types` - Generate TypeScript types from schema
- `mcp_supabase_search_docs` - Query Supabase documentation

**Why MCP**: Direct connection to Supabase, no environment setup, works immediately, integrated with VS Code.

**Examples**:

```typescript
// Query data
mcp_supabase_execute_sql({ query: "SELECT * FROM [your_table] LIMIT 10" });

// Check RLS policies
mcp_supabase_get_advisors({ type: "security" });

// View tables
mcp_supabase_list_tables({ schemas: ["public"] });

// Apply migration
mcp_supabase_apply_migration({
  name: "add_column",
  query: "ALTER TABLE [your_table] ADD COLUMN test TEXT",
});
```

### 5. Database Query Pattern (Fallback)

<!-- OPTIONAL: If using Supabase and MCP is unavailable, use this pattern -->

**If MCP is unavailable**, use this copy-paste template:

```javascript
// File: scripts/check-something.mjs
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read .env.local manually (ALWAYS works, no dotenv dependency)
const envPath = join(__dirname, "..", ".env.local");
const envContent = readFileSync(envPath, "utf-8");
envContent.split("\n").forEach((line) => {
  const match = line.match(/^([^=]+)=(.+)$/);
  if (match) {
    process.env[match[1]] = match[2];
  }
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// YOUR QUERY
const { data, error } = await supabase.from("[table_name]").select("*");
if (error) {
  console.error(error);
  process.exit(1);
}
console.table(data);
```

**Run**: `node scripts/check-something.mjs`

<!-- CUSTOMIZE: List your project-specific query utilities here -->

**DO NOT**: Try psql commands, import dotenv, or use Supabase CLI for queries. Just copy the template.

## Component Architecture

### Client/Server Boundary Pattern

Pages follow this split:

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

**Why**: Server Components fetch initial data (SEO-friendly), Client Components handle interactivity.

<!-- CUSTOMIZE: Reference your project's example components here -->

### Custom Hooks Pattern

All data operations have custom hooks (in `/hooks`):

```typescript
// hooks/use[YourFeature].ts
'use client'
import { createClient } from '@/lib/supabase/client'

export default function use[YourFeature](id?: string) {
    const supabase = createClient()
    // Returns: { data, loading, error, fetch[Feature], update[Feature] }
}
```

<!-- CUSTOMIZE: List your custom hooks here -->

**Custom hooks**: Check `/hooks` before writing new data logic.

## Styling System

### Tailwind CSS 4 Configuration

**⚠️ Non-standard**: Config lives in `app/globals.css` (not `tailwind.config.js`):

<!-- CUSTOMIZE: Replace with your project's color scheme and fonts -->

```css
/* app/globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --border: 214.3 31.8% 91.4%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
}

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
}
```

**⚠️ CRITICAL - Preventing Hardcoded Colors**: **NEVER use hardcoded color classes** like `bg-white`, `text-gray-900`, `border-gray-200`. Always use design system classes (`bg-card`, `text-foreground`, `border-border`) which adapt to dark mode and are easier to maintain. See `docs/REF_styling.md` for the complete color mapping reference.

**Usage**: `bg-card`, `text-foreground`, `bg-muted`, `text-muted-foreground`, `border-border`, `bg-primary`, `text-secondary`, `font-heading`

### Typography Classes

<!-- CUSTOMIZE: Define your typography patterns -->

```tsx
// Page title
<h1 className="font-[heading] text-[XXpx] leading-[XXpx] font-bold text-foreground text-center mb-6">

// Hero title
<h1 className="hero-h1 text-foreground mb-8">

// Body text
<p className="font-[body] text-[XXpx] leading-X text-foreground">
```

**Forms**: Use utility classes `form-input`, `form-label`, `form-textarea`, `form-select` (defined in `globals.css`). See `docs/REF_styling.md` for complete patterns.

## Development Workflows

### Common Commands

<!-- CUSTOMIZE: List your project-specific npm scripts -->

```bash
npm run dev                # Dev server (port 3000)
npm run build             # Production build
[IF MULTI-ENV]: npm run env:test          # Switch to test database
[IF MULTI-ENV]: npm run env:prod          # Switch to production database
[IF USING TESTING]: npm run test:e2e          # All E2E tests
[IF USING SEO]: npm run indexnow          # Submit URLs to search engines
```

### Testing with Playwright + VS Code Extension

1. **Switch to test DB**: `npm run env:test` (prevents production corruption)
2. **Start dev server**: `npm run dev` (separate terminal)
3. **Run via VS Code**: Click beaker icon → select tests
4. **Test users**:

<!-- CUSTOMIZE: Create test users with different permission levels -->
<!-- Example pattern: [youremail]+role@gmail.com with consistent password -->

- Basic User: `[youremail]+user@gmail.com` / [TEST_PASSWORD]
- [ROLE_NAME]: `[youremail]+[role]@gmail.com` / [TEST_PASSWORD]
- Admin: `[youremail]+admin@gmail.com` / [TEST_PASSWORD]

**Key pattern**: Tests organized in `tests/smoke/` (quick) and `tests/features/` (comprehensive). Use `fixtures/auth.ts` helpers for authentication flows.

## Database Patterns

### Database Source of Truth

**⚠️ CRITICAL**: For any questions about table names, field names, schema structure, or current data, refer to the database schema file:

- **`schema.sql`** (root directory) - Complete database schema export from Supabase (tables, functions, triggers, RLS policies, indexes, extensions)

This file reflects the actual Supabase database state. Additional migration files are in:

- **`database/migrations/`** - Individual migration SQL files for incremental changes
- **`database/Archive/`** - Archived migration files that have been applied

### Key Tables & Relationships

<!-- CUSTOMIZE: Document your database schema's key tables and relationships -->
<!-- OPTIONAL: Remove this section if not using a database -->

- `[primary_table]` ← [description], linked to `[related_table]`
  - **CRITICAL**: [Document any critical field relationships or constraints]
- `[user_table]` ← [user data and permissions]
- `[feature_table]` ← [feature-specific data]

### Common Queries

<!-- CUSTOMIZE: Document your frequently-used database queries -->
<!-- OPTIONAL: Remove if not using Supabase/database -->

```typescript
// Join with related table
const { data } = await supabase
  .from("[table_name]")
  .select("*, [relation]:[related_table](*)")
  .eq("[field]", value)
  .single();

// RPC function call (bypasses RLS)
const { data } = await supabase.rpc("[function_name]", {
  param1: value1,
  param2: value2,
});
```

### [Your Feature] Pattern

<!-- CUSTOMIZE: Document project-specific patterns here -->

```typescript
import { [yourFunction] } from '@/lib/utils/[yourUtil]'
const result = [yourFunction](data)
```

## Documentation Structure

<!-- CUSTOMIZE: Organize your documentation files as needed -->

### Reference Documentation (REF Files)

All comprehensive documentation is in topic-based REF files in `/docs/`:

**Core System:**

- `docs/REF_project_overview.md` - Complete system overview and architecture
- `docs/REF_architecture.md` - Tech stack, SSR patterns, file organization
  [IF USING AUTH]: - `docs/REF_authentication.md` - Auth flow, user roles, protected routes
  [IF USING DATABASE]: - `docs/REF_database.md` - Schema, RLS, functions, common queries

**Features:**

<!-- CUSTOMIZE: Add your feature-specific documentation files -->

- `docs/REF_[feature].md` - [Feature description]

**Development:**

- `docs/REF_styling.md` - Tailwind CSS 4, typography, component patterns
  [IF USING TESTING]: - `docs/REF_testing.md` - Test setup, test users, testing strategies
- `docs/REF_deployment.md` - Build process, deployment
- `docs/REF_troubleshooting.md` - Common issues and solutions
  [IF USING SEO]: - `docs/REF_SEO.md` - SEO implementation, metadata
  [IF USING EMAIL]: - `docs/REF_email.md` - Email integration, templates

### Quick Start & Archive

- `docs/STARTER.md` - Project setup and quick start guide
- `docs/README.md` - Documentation index and navigation guide
- `docs/archive/` - Old task/debug files (historical reference only)

### When to Use Which File

**Need to understand a feature?** → Check the relevant REF file  
**Troubleshooting an issue?** → `REF_troubleshooting.md` first, then specific REF file  
**Setting up project?** → `STARTER.md`  
[IF USING DATABASE]: **Database questions?** → `schema.sql` (root) + `REF_database.md`  
**Historical context?** → `docs/archive/` folder

## Common Gotchas & Solutions

### 1. Empty Error Objects from Supabase

**Symptom**: `error = {}` with no message
**Cause**: RLS policy blocked operation silently
**Fix**: Check RLS policies in `schema.sql` (root directory), use `.rpc()` if needed
**Reference**: `docs/REF_troubleshooting.md` → Database Issues

### 2. "Cannot use cookies() in Client Component"

**Cause**: Imported server Supabase client in 'use client' component
**Fix**: Use `@/lib/supabase/client` for Client Components
**Reference**: `docs/REF_architecture.md` → Supabase SSR Split Pattern

### 3. Environment Variables Undefined in Browser

**Cause**: Missing `NEXT_PUBLIC_` prefix
**Fix**: Browser-accessible vars need `NEXT_PUBLIC_SUPABASE_URL` format
**Reference**: `docs/REF_deployment.md` → Environment Variables

### 4. React Quill Issues

**Fix**: Use `react-quill-new` (React 19 compatible) instead of `react-quill`

<!-- CUSTOMIZE: Add project-specific gotchas below -->

### 5. [Your Common Issue]

**Symptom**: [Description]
**Cause**: [Root cause]
**Fix**: [Solution]
**Reference**: `docs/REF_[relevant].md`

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
docs/              # Reference documentation (REF files)
  archive/         # Old task/debug files (historical reference)
scripts/           # Utility scripts
[IF USING TESTING]: tests/             # E2E tests
```

## Quick File Reference

<!-- CUSTOMIZE: List your most frequently accessed files -->

**Immediate access to key files:**

- Root layout: `app/layout.tsx`
- Home page: `app/page.tsx`
- Global styles: `app/globals.css` (includes Tailwind config)
  [IF USING SUPABASE]: - Supabase server: `lib/supabase/server.ts`
  [IF USING SUPABASE]: - Supabase client: `lib/supabase/client.ts`
  [IF USING AUTH]: - Auth middleware: `middleware.ts`
- Layout components: `components/Layout/[Component].tsx`
- Environment files: `.env.local`
  [IF USING DATABASE]: - **Database source of truth**: `schema.sql` (root directory)

## Decision Rationale

<!-- CUSTOMIZE: Document your architectural decisions -->

**Why Next.js?** [YOUR REASON - e.g., SEO requirements, SSR benefits, etc.]

[IF MULTI-ENV]: **Why separate databases?** Prevent test scripts from corrupting production data. Environment switching enforces this boundary.

[IF USING RLS]: **Why RLS + SECURITY DEFINER?** RLS provides row-level security, but some operations need elevated privileges via functions.

[IF USING SUPABASE]: **Why SSR split pattern?** Next.js cookies API requires server-side for auth, but client-side needed for interactivity. Middleware bridges the gap.

**Why custom hooks?** Centralizes data operations, maintains consistency, avoids duplicate logic across components.

**Why [your decision]?** [Your reasoning]

## Documentation Workflow

### When Creating Task Documentation

**Always create documentation files** for TASK, DEBUG, or UPGRADE work. Follow this pattern:

1. **Copy STARTER.md** → Rename: `TASK_feature_name.md`, `DEBUG_issue_name.md`, or `UPGRADE_feature_name.md`
2. **Copy INSTRUCTIONS section** to top of new file
3. **Copy relevant sections** from STARTER.md that apply to your task
4. **Document as you work** - log each attempt immediately to avoid repetition
5. **Keep files under 750 lines** - condense or transfer to REF files if needed
6. **Update relevant REF files** when completing successful work

### File Naming Convention

- `TASK_*.md` - New features or migration work
- `DEBUG_*.md` - Bug investigation and fixes
- `UPGRADE_*.md` - Enhancements to existing features
- `REF_*.md` - Reference documentation (no line limit)

### Documentation Philosophy

When user reports an issue:

1. ✅ **Assume user followed instructions correctly**
2. ✅ **Investigate code/logic first** - assume there's a bug
3. ✅ **Check RLS policies and triggers** before blaming frontend
4. ❌ **Don't ask user to retry** without verifying implementation
5. 📝 **Document findings in relevant REF file** to avoid repeat attempts

<!-- CUSTOMIZE: Add your project-specific diagnostic patterns -->

**Common diagnostic patterns:**

- "[Issue description]" → Usually [root cause] (see `REF_[relevant].md`)
- "[Another issue]" → Check [what to check] (see `REF_[relevant].md`)

## Environment Variables

<!-- CUSTOMIZE: List your required environment variables -->

**Required in `.env.local`:**

```env
# Browser-accessible (NEXT_PUBLIC_ prefix required)
[IF USING SUPABASE]: NEXT_PUBLIC_SUPABASE_URL=your_project_url
[IF USING SUPABASE]: NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_[YOUR_VAR]=your_value

# Server-only (never exposed to browser)
[IF USING SUPABASE]: SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
[IF USING EMAIL]: [EMAIL_API_KEY]=your_api_key
[YOUR_SECRET_VAR]=your_secret_value
```

**Critical**: Variables without `NEXT_PUBLIC_` prefix are server-only and will be `undefined` in browser code.

## Critical Database Schema Facts

<!-- CUSTOMIZE: Document critical database relationships and common mistakes -->
<!-- OPTIONAL: Remove this section if not using a database -->

**⚠️ [CRITICAL CONCEPT] - READ THIS CAREFULLY:**

[IF USING PERMISSIONS]: The system has [NUMBER] permission systems:

1. **`[table_name].[field]`** - [Description of permission system]
   - Values: `[value1]`, `[value2]`, `[value3]`
   - [Role description]: `[field]='[value]'`

**Common mistake**: [Describe common misconception]

**Access control pattern**: [Describe how permissions are checked]

## Failed Approaches Log

Learn from past mistakes - these patterns have been tried and failed:

### Next.js Specific

❌ **Forgot `NEXT_PUBLIC_` prefix for browser variables**

- Result: Environment variables undefined in client components
- Solution: Use `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

❌ **Used server-only code in Client Components**

- Result: Build errors or runtime crashes
- Solution: Use 'use client' directive and browser Supabase client

❌ **Installed react-quill without --legacy-peer-deps**

- Result: npm install fails due to React 19 incompatibility
- Solution: Use `react-quill-new` package instead

### Database & Auth

<!-- CUSTOMIZE: Add your project-specific failed approaches -->

[IF USING SUPABASE AUTH]: ❌ **Used PKCE flow for cross-device password resets**

- Result: Links only work on device that initiated reset
- Solution: Use `flowType: 'implicit'`

[IF USING RLS]: ❌ **Updated protected tables directly from frontend**

- Result: RLS blocks the update silently (empty error `{}`)
- Solution: Use SECURITY DEFINER functions via `.rpc()`

[IF USING TRIGGERS]: ❌ **Inserted into tables with auto-triggers**

- Result: Conflicts with trigger-created rows
- Solution: Check for existing triggers first; let triggers handle creation
