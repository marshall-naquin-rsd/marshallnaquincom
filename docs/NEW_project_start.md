# NEW PROJECT START GUIDE

**Version**: 1.0 - December 2025  
**Purpose**: Start a new project using the proven tech stack and patterns from a successful GA website implementation  
**Audience**: AI agents, human developers, or hybrid workflows

---

## ⚠️ CRITICAL: Read This First

This guide will help you start a completely new project using the same tech stack and patterns that produced excellent SEO results without paid advertising. The resulting project will work like the source project but be completely unrelated in content and purpose.

**What This Guide Provides:**

- Question-driven setup to determine your starting point
- Technology stack recommendations with SEO optimization
- STARTER.md template (customizable for your project)
- REF file templates for documentation
- Mentor Mode setup for AI assistance
- Copilot instructions template

**What You'll Create:**

- A Next.js 16 + React 19 + TypeScript project
- SEO-optimized architecture (if needed for your project)
- Database integration (Supabase suggested when needed)
- Testing framework (Playwright)
- Documentation system (REF files + STARTER.md)

---

## PHASE 1: PROJECT ASSESSMENT

Answer these questions to determine your starting point and requirements.

### Question 1: Starting Point

**Where are you starting from?**

A. **Blank Slate** - No code written, starting completely fresh  
B. **Partially Started** - Some code exists but not fully set up or working  
C. **Migration** - Existing working project that needs to migrate to this tech stack

**Your Answer**: \***\*\_\_\_\*\***

---

### Question 2: SEO Requirements

**Does this project need Search Engine Optimization (SEO)?**

Consider these scenarios:

**YES - SEO is critical if:**

- Public website that needs organic search traffic
- Content that should appear in Google/Bing search results
- Marketing/informational site without advertising budget
- Any chance of becoming public-facing in the future

**NO - SEO not needed if:**

- Internal tool only (employee dashboard, admin panel)
- Behind authentication with no public pages
- Development tool or utility
- 100% certain it will never need public search visibility

**Your Answer**: \***\*\_\_\_\*\***

**⚠️ Important**: If there's ANY possibility of needing SEO in the future, choose YES. Retrofitting SEO is much harder than building it in from the start.

---

### Question 3: Database Needs

**Will this project need a database?**

Consider these scenarios:

**YES - Database needed if:**

- User accounts and authentication
- Storing user-generated content
- Dynamic data that changes frequently
- Relationships between data entities
- Any CRUD operations (Create, Read, Update, Delete)

**NO - Database not needed if:**

- Static content only (landing page, brochure site)
- Content managed through code/markdown files
- No user accounts or dynamic data
- Simple informational pages

**Your Answer**: \***\*\_\_\_\*\***

**If YES**: We'll recommend Supabase (PostgreSQL + Auth + Row Level Security)  
**If NO**: We'll use a simpler stack (but keep Supabase as an option for future growth)

---

### Question 4: Existing Setup Assessment (if Partially Started or Migration)

**If you answered B or C to Question 1, answer these:**

Current tech stack:

- Framework: \***\*\_\_\_\*\***
- Database: \***\*\_\_\_\*\***
- Authentication: \***\*\_\_\_\*\***
- Styling: \***\*\_\_\_\*\***
- Testing: \***\*\_\_\_\*\***

What's already working:

- [ ] Basic routing
- [ ] Authentication
- [ ] Database connection
- [ ] UI components
- [ ] Testing framework
- [ ] Deployment pipeline

What needs to be built/fixed:

- ***
- ***
- ***

---

## PHASE 2: TECHNOLOGY STACK DECISIONS

Based on your answers above, here are the recommended technologies:

### Core Framework: Next.js 16 + React 19 + TypeScript

**This is REQUIRED unless you have a very strong reason otherwise.**

**Why Next.js is the default choice:**

- ✅ Server-Side Rendering (SSR) for SEO
- ✅ Automatic code splitting and optimization
- ✅ Built-in routing system
- ✅ API routes for backend logic
- ✅ Excellent developer experience
- ✅ Production-ready out of the box

**Alternatives to Consider (with extreme caution):**

⚠️ **Before choosing an alternative, discuss these pros and cons:**

**Vite + React SPA:**

- ✅ PRO: Simpler, faster dev server
- ✅ PRO: Good for internal tools with no SEO needs
- ❌ CON: No SSR - search engines see empty `<div id="root">`
- ❌ CON: Poor SEO performance
- ❌ CON: Harder to add SSR later if needed
- **Use only if**: 100% certain no SEO needed, internal tool only

**Astro:**

- ✅ PRO: Excellent for static content sites
- ✅ PRO: Very fast, minimal JavaScript
- ❌ CON: Less suitable for dynamic, interactive apps
- ❌ CON: Smaller ecosystem than React
- **Use only if**: Mostly static content, minimal interactivity

**Remix:**

- ✅ PRO: Great SSR patterns
- ✅ PRO: Modern React Router
- ❌ CON: Smaller community than Next.js
- ❌ CON: Less mature ecosystem
- **Use only if**: Team already familiar with Remix

**⚠️ Decision Point**: Will you use Next.js 16? (Strongly recommended: YES)

**Your Answer**: \***\*\_\_\_\*\***

**If NO**: Document your reasoning here and discuss with team:

- Why is Next.js not suitable?
- What specific requirements make alternative better?
- How will you handle SEO if needed in future?
- What are the long-term maintenance implications?

---

### Database: Supabase (PostgreSQL) - Recommended When Needed

**If you answered YES to Question 3 (Database Needs):**

**Recommended: Supabase**

- ✅ PostgreSQL database with excellent performance
- ✅ Built-in authentication (email, OAuth, magic links)
- ✅ Row Level Security (RLS) for data protection
- ✅ Real-time subscriptions
- ✅ Auto-generated REST and GraphQL APIs
- ✅ Free tier available for development
- ✅ Excellent Next.js integration

**Alternatives:**

- PostgreSQL (self-hosted) - More control, more maintenance
- MySQL - Different SQL flavor, widely supported
- MongoDB - NoSQL, good for flexible schemas
- Prisma + any DB - Great ORM, adds complexity layer

**⚠️ Decision Point**: Will you use Supabase?

**Your Answer**: \***\*\_\_\_\*\***

---

### Styling: Tailwind CSS 4

**Recommended: Tailwind CSS 4 (CSS-based configuration)**

- ✅ Utility-first CSS framework
- ✅ Version 4 uses CSS configuration (not JS config file)
- ✅ Excellent for responsive design
- ✅ Small production bundle sizes
- ✅ Great developer experience

**Configuration Note**: Tailwind CSS 4 config lives in `app/globals.css` using `@theme`, NOT in `tailwind.config.js`

**Alternatives:**

- CSS Modules - More traditional, scoped styles
- Styled Components - CSS-in-JS, runtime overhead
- Vanilla CSS - Full control, more verbose

**⚠️ Decision Point**: Will you use Tailwind CSS 4?

**Your Answer**: \***\*\_\_\_\*\***

---

### Testing: Playwright

**Recommended: Playwright for E2E Testing**

- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Excellent VS Code extension
- ✅ Fast and reliable
- ✅ Great debugging tools

**Your Answer**: \***\*\_\_\_\*\***

---

## PHASE 3: PROJECT SETUP

Based on your answers, follow the appropriate path:

### Path A: Blank Slate (Fresh Start)

**Steps:**

1. **Create Next.js Project**:

```bash
npx create-next-app@latest [project-name]
# Select: TypeScript, App Router, Tailwind CSS
```

2. **Install Additional Dependencies**:

```bash
# If using Supabase
npm install @supabase/supabase-js @supabase/ssr

# Testing
npm install -D @playwright/test

# UI Libraries (optional)
npm install @headlessui/react @heroicons/react
```

3. **Set Up Environment Variables** (see template below)

4. **Create STARTER.md** (see template in this file)

5. **Set Up Directory Structure** (see template below)

6. **Configure Mentor Mode** (see mentor.md in export folder)

---

### Path B: Partially Started (Fix and Complete)

**Steps:**

1. **Assessment Checklist**:

   - [ ] Review existing code structure
   - [ ] Identify what's working vs broken
   - [ ] Document current dependencies
   - [ ] Check for conflicting patterns

2. **Migration Strategy**:

   - Keep what works
   - Refactor what's broken
   - Add missing pieces
   - Update to latest versions

3. **Create STARTER.md** documenting current state

4. **Set up testing for existing features**

5. **Implement missing components incrementally**

---

### Path C: Migration (Existing Project)

**Steps:**

1. **Create parallel Next.js project** (don't modify original yet)

2. **Migration Priority**:

   - Phase 1: Set up Next.js with routing
   - Phase 2: Migrate authentication
   - Phase 3: Migrate public pages (SEO critical)
   - Phase 4: Migrate protected features
   - Phase 5: Testing and deployment

3. **Database Migration**:

   - If keeping same database: Update connection strings
   - If moving database: Export schema and data
   - Test with separate test database first

4. **Component Migration**:

   - Identify Server vs Client Components
   - Update import paths
   - Handle SSR differences (no window, no localStorage in Server Components)

5. **Create detailed STARTER.md** tracking migration progress

---

## PHASE 4: STARTER.MD TEMPLATE

**IMPORTANT**: Copy the STARTER.md template from this guide and customize it for your project.

**Lines 1-30 should remain mostly intact** except:

- Line 1: Change project name to your project name
- All other lines should use the same structure and format

**After line 30**: Customize for your specific project needs while maintaining the same section structure.

### STARTER.md Template

(See embedded template below - this will be your project's STARTER.md file)

````markdown
<!-- filepath: /[YOUR_PROJECT_PATH]/docs/STARTER.md -->

# STARTER FILE - [YOUR PROJECT NAME]

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

**Application**: [YOUR PROJECT NAME]  
**Purpose**: [DESCRIBE YOUR PROJECT PURPOSE]  
**Architecture**: Next.js 16 with App Router + TypeScript, [DATABASE IF APPLICABLE]

**Last Updated**: [DATE]  
**Version**: v1.0 - Initial Setup  
**Status**: 🚧 In Development

---

## TECH STACK & VERSIONS

### Core Technologies

- **Framework**: Next.js 16.x (App Router with SSR)
- **Frontend**: React 19.x with TypeScript 5.x
- **Styling**: Tailwind CSS 4.0 (CSS-based configuration)
- **Authentication**: [IF APPLICABLE - e.g., Supabase SSR, NextAuth, etc.]
- **Database**: [IF APPLICABLE - e.g., Supabase PostgreSQL, MySQL, etc.]
- **Testing**: Playwright [VERSION]
- **Package Manager**: npm

### Key Dependencies

```json
{
  "next": "16.x",
  "react": "19.x",
  "react-dom": "19.x"
  // Add your specific dependencies here
}
```
````

---

<!-- Continue with remaining sections customized for your project -->

## PHASE 4.5: DESIGN SYSTEM PLANNING

**⚠️ CRITICAL PHASE - Complete this before building UI components**

### Why This Phase Matters

Making design decisions early prevents:

- Inconsistent styling across pages
- Constant back-and-forth redesigns
- Wasted time building components you'll rebuild
- Analysis paralysis when building each new component

**Time Investment**: 30-45 minutes upfront saves hours later

---

### Step 1: Install Icon Libraries (Temporary)

Install all three libraries for comparison - you'll remove two later:

```bash
npm install lucide-react
npm install @heroicons/react
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

**Note**: This installs ~15-20MB temporarily. After making your decision, you'll uninstall the two libraries you don't use.

---

### Step 2: Create Design Showcase Page

**Copy the template**:

```bash
mkdir -p app/design
cp design_page_template.tsx app/design/page.tsx
```

**Customize the template**:

1. Open `app/design/page.tsx`
2. Find and replace: `[PROJECT_NAME]` → Your actual project name
3. Find and replace: `[Your Tagline]` → Your actual tagline/description
4. Save the file

---

### Step 3: View Design Options

**Start dev server** (if not already running):

```bash
npm run dev
```

**Open design page**:

```
http://localhost:3000/design
```

You'll see:

- **4 Color Palette Options**: Trust & Reliability, Modern & Energetic, Warm & Approachable, Clean & Minimal
- **5 Typography Options**: Inter, Roboto, Montserrat+OpenSans, Playfair+Inter, Nunito, Poppins
- **6 Button Styles**: Rounded, Pill, Sharp, Gradient, Ghost, Subtle
- **3 Icon Libraries**: Lucide, Heroicons, Font Awesome (side-by-side comparison)
- **4 Spacing Options**: Compact, Comfortable, Generous, Extra Generous
- **6 Card Styles**: Shadow, Border, Elevated, Gradient Border, Filled, Minimal

---

### Step 4: Make Design Decisions

<!-- IMPORTANT: Work with AI to make these decisions -->

**Use this workflow with your AI assistant**:

```
Prompt: "I'm viewing the design page at /design. Let's make design decisions for this project.

1. Color Palette: [DESCRIBE YOUR BRAND/INDUSTRY]
2. Typography: [DESCRIBE DESIRED FEEL - professional, friendly, modern, classic]
3. Button Style: [PREFERENCE IF ANY]
4. Icon Library: I'm leaning toward [Lucide/Heroicons/FontAwesome] because [REASON]
5. Spacing: [Compact for dense dashboards / Comfortable for most sites / Generous for content-heavy]
6. Card Style: [PREFERENCE IF ANY]

Help me finalize these choices and update REF_styling.md with the decisions."
```

**Default Recommendations** (if unsure):

- **Color Palette**: Option 1 (Trust & Reliability) - works for most professional sites
- **Typography**: Inter (current) - excellent readability, modern
- **Button Style**: Rounded with shadow (current) - good balance
- **Icon Library**: Lucide - lightweight, modern, 1400+ icons
- **Spacing**: Comfortable (16px sections, 8px components)
- **Card Style**: Shadow - subtle and professional

---

### Step 5: AI Updates REF_styling.md

**After making decisions**, your AI assistant will:

1. Update `REF_styling.md` with:

   - Your chosen color palette (exact hex codes)
   - Your chosen typography (font names and usage)
   - Button styles and utility classes
   - Icon library setup instructions
   - Spacing system
   - Card styles
   - Common component patterns

2. Update `app/globals.css` with:
   - CSS variables for your color palette
   - Tailwind theme extensions
   - Custom utility classes for buttons, cards, forms, etc.

---

### Step 6: Clean Up

**Delete the design page** (no longer needed):

```bash
rm -rf app/design
```

**Uninstall unused icon libraries**:

```bash
# If you chose Lucide, remove the other two:
npm uninstall @heroicons/react @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

# If you chose Heroicons, remove the other two:
npm uninstall lucide-react @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

# If you chose Font Awesome, remove the other two:
npm uninstall lucide-react @heroicons/react
```

---

### Step 7: Verify Setup

**Check that these files are updated**:

- ✅ `REF_styling.md` - Contains your design decisions
- ✅ `app/globals.css` - Contains color variables and utility classes
- ✅ Only ONE icon library installed
- ✅ Design page deleted (`app/design/` folder removed)

**Now you're ready to build UI components** with a consistent design system!

---

## PHASE 5: REF FILE TEMPLATES

Create these REF files in your docs folder to document your project:

**Required REF Files**:

1. **REF_architecture.md** - System architecture and patterns
2. **REF_SEO.md** - SEO implementation (if applicable)
3. **REF_styling.md** - Styling guide and component patterns (populated in Phase 4.5)
   Optional REF Files: 4. REF_authentication.md - Auth flows and patterns (if using auth) 5. REF_database.md - Schema and query patterns (if using database) 6. REF_testing.md - Testing strategies

Templates for these files are included in this export package:

REF_architecture_template.md
REF_SEO_template.md
REF_styling_template.md
How to Use:

Copy templates from export folder to your docs folder
Rename by removing \_template suffix
Replace [PROJECT_NAME] and [CUSTOMIZE] placeholders
Fill in project-specific sections
Remove sections that don't apply to your project

## PHASE 6: MENTOR MODE SETUP

What is Mentor Mode?
Mentor Mode is an AI assistance mode that guides you through problems using Socratic questioning instead of providing direct solutions. This helps you learn and understand the codebase better.

Setup Instructions:

Copy mentor.md from this export folder to your project's chatmodes folder

Create the directory structure:

```bash
mkdir -p .github/chatmodes
cp mentor.md .github/chatmodes/mentor.md
```

Activate Mentor Mode in your AI chat by typing:

"activate mentor mode"
"use mentor mode"
"@mentor.md"
Exit Mentor Mode by typing:

"bailout" (gets direct solution)
"exit mentor mode" (returns to normal mode)
How Mentor Mode Works:

When activated, the AI will:

Ask diagnostic questions (minimum 3-5) instead of providing solutions
Guide you to discover the problem yourself
Provide progressive hints only when you type "hint"
Assume you followed instructions correctly (investigate code/system first)
Use read-only tools (no file edits unless you bailout)
Example Interaction:

You: "activate mentor mode - my login isn't working"

AI: 🎓 Mentor Mode Activated

Let's diagnose this together. I have some questions:

1. What specific error message or behavior are you seeing?
2. Are you able to reach the login page, or does it fail before that?
3. Have you checked the browser console for any errors?
4. What authentication method are you using (email/password, OAuth, etc.)?
5. Have you verified your environment variables are set correctly?

Type "hint" for clues, "bailout" for direct solution.

See mentor.md in this export folder for complete instructions.

## PHASE 7: COPILOT INSTRUCTIONS SETUP

What are Copilot Instructions?
A copilot-instructions.md file that configures GitHub Copilot's behavior for your specific project.

Setup Instructions:

Copy the template copilot-instructions_template.md from this export folder

Rename and place in your project:

```bash
mkdir -p .github
cp copilot-instructions_template.md .github/copilot-instructions.md
```

Customize the template:

Replace [PROJECT_NAME] with your project name
Update tech stack section with your dependencies
Customize patterns and examples for your project
Remove sections that don't apply
Add project-specific patterns
Key Sections to Customize:

Project Context: Describe your project and purpose
Tech Stack: List your specific versions and dependencies
Architecture Patterns: Document your component patterns
Common Gotchas: Add issues you've encountered
Database Schema: Document your tables (if applicable)
Failed Approaches: Log what didn't work
Keep it updated as your project evolves

See copilot-instructions_template.md in this export folder for the full template.

## PHASE 8: DIRECTORY STRUCTURE SETUP

```bash
# Create core directories
mkdir -p app/api
mkdir -p components/{Layout,common,Auth}
mkdir -p lib/{supabase,utils,email}
mkdir -p hooks
mkdir -p types
mkdir -p docs
mkdir -p .github/chatmodes
mkdir -p public/{images,documents}
mkdir -p tests/{smoke,features,fixtures}

# If using database
mkdir -p database/migrations
```

Directory Purpose:

your-project/
├── app/ # Next.js App Router
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Home page
│ ├── globals.css # Tailwind config + styles
│ └── api/ # API routes
├── components/ # React components
│ ├── Layout/ # Header, Footer, Nav
│ ├── common/ # Reusable UI
│ └── [Feature]/ # Feature-specific components
├── hooks/ # Custom React hooks
├── lib/
│ ├── supabase/ # Supabase clients (if using)
│ ├── utils/ # Helper functions
│ └── email/ # Email templates (if using)
├── types/ # TypeScript definitions
├── docs/ # Documentation
│ ├── STARTER.md # Project starter
│ └── REF\_\*.md # Reference docs
├── .github/
│ ├── chatmodes/ # mentor.md
│ └── copilot-instructions.md
├── public/ # Static assets
├── tests/ # Playwright tests
└── database/ # SQL files (if using)

## PHASE 9: ENVIRONMENT VARIABLES SETUP

Create Environment Files

Create .env.local (gitignored - your actual secrets):

# Next.js requires NEXT*PUBLIC* prefix for browser-accessible variables

# Supabase (if using database)

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email service (if sending emails)

RESEND_API_KEY=your_resend_api_key

# Other services

# Add your API keys here

Create .env.example (committed to git - template for team):

# Supabase Configuration

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Email Service

RESEND_API_KEY=your-resend-api-key-here

Update .gitignore:

# Environment variables

.env\*.local
.env.production.local
.env.test.local

# Keep .env.example (template)

!.env.example

Critical Environment Variable Rules
Browser vs Server:

✅ NEXT*PUBLIC*\* - Accessible in browser (public data only)
❌ No prefix - Server-side only (secrets, API keys)
Example:
// Browser (Client Component)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL // ✅ Works

// Server (Server Component)
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY // ✅ Works

// Browser (Client Component)
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY // ❌ undefined!

marsh11272: Open a new NEW_project_start.md file

The purpose of this file is to start a new project that results in the same tech stack that we are using here. This file is for an AI or human developer to use to start a new, TOTALLY UNRELATED project but still works just like this one does. We also want the use of the STARTER.md file to persisist, it should be created first after trying to start a new project using this NEW.md file.

The SEO results we are getting in this project are looking very positive considering we don't pay for advertising. It is important we preserve these aspects of this project.

We may not use all of the existing technology in a potential new project, for instance the one I have in mind is probably not going to need Supabase at first, but if we wind up using a database, we want the AI to suggest Supabase when needed.

What questions do you have?

GitHub Copilot: I have several questions to help create an effective **NEW_project_start.md** file:

## Project Scope & Structure Questions

1. **Target Audience**: Should this guide assume the developer is:

   - An AI agent (like me) being prompted to start a new project?
   - A human developer using AI assistance?
   - Both (with separate sections)?

2. **Technology Selection**: Should the guide:

   - Require Next.js 16 + React 19 + TypeScript always?
   - Suggest alternatives based on project needs (e.g., "If no SSR needed, consider Vite")?
   - Include a decision tree (e.g., "Need SEO? → Next.js, Just dashboard? → Vite")?

3. **Database Strategy**: For the "suggest Supabase when needed" requirement:
   - Should the guide include questions to determine IF a database is needed?
   - When suggesting Supabase, should it also mention alternatives (PostgreSQL, MySQL)?
   - Should RLS (Row Level Security) be emphasized as a key Supabase feature?

## SEO Preservation Questions

4. **SEO Mandatory vs Optional**: Should the guide:

   - Always assume SEO is critical (like this GA project)?
   - Include a section to determine if SEO matters for the new project?
   - Provide "SEO Mode" vs "Internal Tool Mode" starting points?

5. **SEO Components to Preserve**: Which aspects are **most critical**:
   - SSR/SSG for crawler-visible content?
   - Metadata system (per-page + root layout)?
   - JSON-LD structured data?
   - Sitemap/robots.txt generation?
   - IndexNow integration?
   - All of the above?

## Workflow & Documentation Questions

6. **STARTER.md Creation**: Should NEW_project_start.md:

   - Include a template STARTER.md that gets customized for each project?
   - Reference this project's STARTER.md as an example with instructions to adapt it?
   - Generate STARTER.md dynamically based on answers to setup questions?

7. **Chat Mode Integration**: Should the guide:
   - Reference the Mentor Mode system from Mentor.md?
   - Include instructions for setting up Copilot instructions for the new project?
   - Suggest creating project-specific chat modes?

## File Organization Questions

8. **Where should NEW_project_start.md live**:

   - `/docs/NEW_project_start.md` (with other REF files)?
   - Root directory (like README.md)?
   - `/docs/templates/` (if we create a templates folder)?

9. **REF Files for New Projects**: Should the guide:
   - Include templates for REF files (REF_architecture.md, REF_styling.md, etc.)?
   - Reference this project's REF files as examples to copy/adapt?
   - Suggest creating REF files only as needed?

## Specific Feature Questions

10. **Authentication**: Should the guide:

    - Always assume auth is needed?
    - Suggest Supabase Auth if auth is needed, or mention alternatives (NextAuth, Clerk)?
    - Include the SSR split pattern (server vs client Supabase) as best practice?

11. **Styling**: Should the guide:
    - Mandate Tailwind CSS 4?
    - Mention the CSS-based config approach (not tailwind.config.js)?
    - Allow for other styling solutions if appropriate?

**My Recommendation** (but please confirm):

- Create a **questionnaire-driven** guide that asks about project needs first
- Emphasize Next.js + SSR **if SEO matters**, but allow alternatives for internal tools
- Always suggest Supabase when database + auth are needed (but mention it's optional)
- Include STARTER.md template that gets customized based on answers
- Preserve the SEO stack (metadata, JSON-LD, sitemap) as **optional modules** to include

Would you like me to proceed with this approach, or do you have different preferences?

marsh11272: 1. Assume an AI agent. Make it geared toward AI (very detailed, guardrails) Possibly human or hybrid. 2. Require Next.js + React + TypeScript Any alternatives should be carefully discussed to make sure no SEO is needed and nothing is lost by moving to a simpiler tech stack. 3. No, the user will determine the need for a database. Utilizing the file should generate a list of questions to the user to determine what has already been set up, if this is a move from an existing setup or fresh setup needing everything built. 4. Part of the initial questions to get answered, basically if there is any chance of it becoming a web project that has SEO needs vs no chance. 5. All of the above, again. If SEO is needed, it seems we have struck a chord with the combination of SEO features we are using. 6. Include a template STARTER.md that gets customized. The first 30 lines should be exact except for the name of the project on line 1 should be unique to the project. After that, most of the STARTER.md file should be used. We can either include the required aspects of the STARTER.md file in this NEW.md file or package both files to be used for a new project. 7. Yes, mentor mode should be available in a new project. 8. Make an /export/ folder so I don't get anything mixed up. The first thing I'm going to do is take them out of this project anyway. 9. Include some templates/instructions for using the REF file system. Especially REF_architecure; REF_SEO; REF_styling. (Make sure colors and fonts are not hard coded so that a new project doesn't look exactly like this one) 10. No, not always needed. The next project in mind is more of a brochure, business information page. Will not have users or logins. But the goal is to have the result of this work for any new project. Basically I'm trying to create a repository of knowledge so as new projects come along, we don't have to search for a whole new way of doing things unless we need it. 11. Try to use Tailwind CSS. There may be other solutions but Tailwind CSS 4 is my preference.

Agree with question driven setup. What other questions do you have?

GitHub Copilot: I have a few more clarifying questions before creating the NEW_project_start.md file:

## Additional Questions

### 1. **Starter File Customization**

You mentioned the first 30 lines should be exact except project name. Should I:

- Create a single `NEW_project_start.md` that includes both instructions AND the STARTER.md template inline?
- Or create two separate files (`NEW_project_start.md` + `STARTER_template.md`) that get exported together?

### 2. **REF File Templates**

For the REF file templates, should they:

- Be completely blank templates with just section headers?
- Include generic examples (like "primary-color: #XXXXXX" instead of actual blue values)?
- Include detailed instructions on HOW to fill them out?

### 3. **Database Decision Tree**

When asking about database needs, should the guide:

- Suggest Supabase ONLY if they answer "yes" to needing a database?
- Mention PostgreSQL/MySQL as alternatives but still recommend Supabase?
- Include a "When NOT to use a database" section (static content, small sites, etc.)?

### 4. **Chat Mode Setup**

For Mentor Mode in new projects, should I:

- Include the full Mentor.md file in the export?
- Just reference it with instructions to copy from this project?
- Create a simplified version for new projects?

### 5. **Copilot Instructions**

Should the export include:

- A template copilot-instructions.md with placeholders?
- Instructions on how to customize it for their project?
- The full current version with notes on what to change?

### 6. **Technology Alternatives Section**

When discussing alternatives to Next.js stack, should I include:

- Specific criteria/checklist to determine if simpler stack is OK?
- Example scenarios (e.g., "Static marketing site → consider Astro")?
- Red flags that mean "must use Next.js" (SEO, dynamic content, auth, etc.)?

### 7. **SEO Feature Set**

You mentioned preserving the SEO combination. Should the guide:

- List all SEO features as "required if SEO matters" (metadata, sitemap, IndexNow, JSON-LD, etc.)?
- Make some optional (like IndexNow) vs required (like metadata)?
- Include the actual code snippets from this project as templates?

### 8. **Export Folder Contents**

Should the `/export/` folder contain:

- `NEW_project_start.md` (main questionnaire/guide)
- `STARTER_template.md` (customizable starter)
- `REF_architecture_template.md`
- `REF_SEO_template.md`
- `REF_styling_template.md`
- Mentor.md (copy of current)
- `.github/copilot-instructions_template.md`
- Anything else?

**My Recommendation** (please confirm or adjust):

- Single `NEW_project_start.md` with embedded STARTER template
- REF templates with generic placeholders + detailed fill-out instructions
- Full Mentor.md included in export
- Template copilot-instructions.md with extensive comments on customization
- Clear decision tree that defaults to "use Next.js if ANY SEO might be needed"

Should I proceed with this approach?

marsh11272: 1. Whichever method ensures we get a STARTER.md file that works like our current one does. 2. Section headers and the generic examples are fine. 3. Yes, the user should know if they need a database or not. 4. Why don't we include as much instruction from Mentor.md as possible. Would like it to work the same if I call it up from another project. 5. Not sure on this one? I think a template copilot-instructions.md because we have this one working well with our documentation setup. 6. There should be a really, really good reason to use something other than Next.js It should be discussed including the pros and cons of using something else. 7. I would include the code snippets of what we are using now. A different project may have more or less SEO requirements but like I said what we are doing in this project is working great. 8. I think that is basically it. In the NEW_project_start.md one of the very first questions should be where we are starting from. Blank project, started by not really set up and working. Lastly, fully functional that needs to migrate to our desired tech stack / setup.

What other questions do you have?

GitHub Copilot: I have a few final clarifying questions before creating the export package:

## Final Questions

### 1. **Copilot Instructions Template**

For the template copilot-instructions.md, should I:

- Keep the structure exactly the same but with `[PROJECT_NAME]` placeholders?
- Include comments like `<!-- CUSTOMIZE: Change this section for your project -->`?
- Preserve all the sections (Chat Mode, Architecture Patterns, etc.) or mark some as optional?

### 2. **Mentor Mode Integration**

Should the Mentor.md file:

- Be a direct copy of Mentor.md from this project?
- Include instructions in NEW_project_start.md on how to activate it?
- Be placed in the export folder as a standalone file that gets copied to new project's chatmodes?

### 3. **STARTER.md Customization Instructions**

For the "first 30 lines should be exact except project name" requirement:

- Should I mark line 1 in the template with a comment like `<!-- LINE 1: Change project name only -->`?
- Should lines 2-30 be marked as "DO NOT MODIFY" with a comment?
- After line 30, should there be a section break with "CUSTOMIZE BELOW THIS LINE"?

### 4. **Starting Point Assessment**

You mentioned three starting scenarios. Should the NEW_project_start.md questionnaire have distinct paths like:

**Path A: Blank Slate** → Full setup wizard (install Next.js, Supabase, etc.)
**Path B: Partially Started** → Assessment checklist (what's done, what's missing)
**Path C: Migration** → Migration guide (from React/Vue/etc. to Next.js)

Or should it be a single unified questionnaire that adapts based on answers?

### 5. **REF File Examples**

For REF_architecture.md, REF_SEO.md, REF_styling.md templates:

- Should they include actual code from THIS project as examples with `<!-- EXAMPLE FROM BATON ROUGE GA -->` comments?
- Or should they be blank templates with instructions on what to document?
- Or a hybrid (examples + blank sections to fill)?

### 6. **Export Folder Contents - Final Confirmation**

Should the `/export/` folder contain:

- `NEW_project_start.md` (main questionnaire/guide with embedded STARTER template)
- `Mentor.md` (copy from Mentor.md)
- `copilot-instructions_template.md` (customizable version)
- `REF_architecture_template.md`
- `REF_SEO_template.md`
- `REF_styling_template.md`
- Anything else?

### 7. **Version Tracking**

Should NEW_project_start.md include:

- A version number/date (e.g., "v1.0 - Generated from Baton Rouge GA project Nov 2025")?
- A changelog section for when we update it?
- Reference to this source project?

**My Recommendation** (confirm or adjust):

- Single NEW_project_start.md with embedded STARTER template and clear customization markers
- Path-based questionnaire (Blank/Partial/Migration) with conditional instructions
- REF templates as hybrid (this project's examples + blank sections for new content)
- Include version tracking with reference to source project

Should I proceed with this approach?

marsh11272: 1. As part of this process, let's go though STARTER.md and copilot-instructions.md section by section and I'll decide which parts to remove, which parts to sterilize (remove project specific references), which parts to leave mostly intact. 2. Why don't we put it in the export folder to include in new projects. 3. That plan is fine. 4. Single questionnaire that adapts. 5. Hybrid, let's go through each file section by section and decide what to do with each section. 6. Include in the NEW.md the process for setting up Mentor Mode and what to do with Mentor.md (should be mentor.md) 7. Sure, versioning the file is fine, do not reference Baton Rouge GA. Embedding STARTER.md is fine.

What other questions do you have?

GitHub Copilot: I have just a few final questions before I start creating the export package:

## Final Clarification Questions

### 1. **File Naming for Mentor Mode**

You mentioned it should be `mentor.md` (lowercase). Should I:

- Name it `mentor.md` in the export folder?
- Keep instructions referencing it as `mentor.md` (not `Mentor.md`)?
- Update the activation instructions to say "activate mentor mode" or "@mentor.md"?

### 2. **Sterilization Strategy**

When you say "sterilize" project-specific references, should I:

- Replace "Baton Rouge GA" with `[PROJECT_NAME]` placeholders?
- Replace "Gamblers Anonymous" with generic `[PROJECT_DESCRIPTION]`?
- Keep actual technical examples (Supabase, Next.js) but remove business context?

### 3. **Section-by-Section Review Process**

For going through STARTER.md and copilot-instructions.md section by section:

- Should I present each section with options (Keep/Remove/Sterilize) and wait for your decision?
- Or should I create a first draft with my recommendations and you review?
- How many sections per interaction would you prefer?

### 4. **Export Folder Final Contents**

Confirming the export will contain:

- `NEW_project_start.md` (main questionnaire + embedded STARTER template + setup instructions)
- `mentor.md` (copy of Mentor Mode instructions)
- `copilot-instructions_template.md` (sterilized version with placeholders)
- `REF_architecture_template.md` (hybrid: examples + blank sections)
- `REF_SEO_template.md` (hybrid: examples + blank sections)
- `REF_styling_template.md` (hybrid: examples + blank sections)
- Anything else?

### 5. **Version Format**

For the version tracking, should it be:

- `Version 1.0 - December 2025`
- `v1.0 (Generated December 2025)`
- Something else?

**My Recommendation:**
Let me create a first draft of the complete export package with my best judgment on Keep/Sterilize/Remove for each section, then we can review it together and you can tell me what to adjust. This will be faster than going section-by-section interactively.

Should I proceed with creating the first draft?

marsh11272: 1. Name it mentor.md in the export folder. Yes, reference it as lower case. The activation instructions could be either of those. The most likely phrase will be, "activate mentor mode" 2. Yes, clear blanks that need to be filled with new information. 3. Present each section and wait. If I just have to review your work, I'm likely not to pay as close attention that I would like. 4. Version 1.0 - December 2025

What other questions do you have?

GitHub Copilot: Perfect! I have all the information I need. Let me start creating the export package step-by-step.

First, let me create the export folder structure and then we'll go through STARTER.md section by section.

## Step 1: Create Export Folder Structure

I'll create the `/export/` folder with the initial file structure.

### [NEW_project_start.md](untitled:/export/NEW_project_start.md)

Create the main questionnaire and guide file.

`````markdown
# NEW PROJECT START GUIDE

**Version**: 1.0 - December 2025  
**Purpose**: Start a new project using the proven tech stack and patterns from a successful GA website implementation  
**Audience**: AI agents, human developers, or hybrid workflows

---

## ⚠️ CRITICAL: Read This First

This guide will help you start a completely new project using the same tech stack and patterns that produced excellent SEO results without paid advertising. The resulting project will work like the source project but be completely unrelated in content and purpose.

**What This Guide Provides:**

- Question-driven setup to determine your starting point
- Technology stack recommendations with SEO optimization
- STARTER.md template (customizable for your project)
- REF file templates for documentation
- Mentor Mode setup for AI assistance
- Copilot instructions template

**What You'll Create:**

- A Next.js 16 + React 19 + TypeScript project
- SEO-optimized architecture (if needed for your project)
- Database integration (Supabase suggested when needed)
- Testing framework (Playwright)
- Documentation system (REF files + STARTER.md)

---

## PHASE 1: PROJECT ASSESSMENT

Answer these questions to determine your starting point and requirements.

### Question 1: Starting Point

**Where are you starting from?**

A. **Blank Slate** - No code written, starting completely fresh  
B. **Partially Started** - Some code exists but not fully set up or working  
C. **Migration** - Existing working project that needs to migrate to this tech stack

**Your Answer**: \***\*\_\_\_\*\***

---

### Question 2: SEO Requirements

**Does this project need Search Engine Optimization (SEO)?**

Consider these scenarios:

**YES - SEO is critical if:**

- Public website that needs organic search traffic
- Content that should appear in Google/Bing search results
- Marketing/informational site without advertising budget
- Any chance of becoming public-facing in the future

**NO - SEO not needed if:**

- Internal tool only (employee dashboard, admin panel)
- Behind authentication with no public pages
- Development tool or utility
- 100% certain it will never need public search visibility

**Your Answer**: \***\*\_\_\_\*\***

**⚠️ Important**: If there's ANY possibility of needing SEO in the future, choose YES. Retrofitting SEO is much harder than building it in from the start.

---

### Question 3: Database Needs

**Will this project need a database?**

Consider these scenarios:

**YES - Database needed if:**

- User accounts and authentication
- Storing user-generated content
- Dynamic data that changes frequently
- Relationships between data entities
- Any CRUD operations (Create, Read, Update, Delete)

**NO - Database not needed if:**

- Static content only (landing page, brochure site)
- Content managed through code/markdown files
- No user accounts or dynamic data
- Simple informational pages

**Your Answer**: \***\*\_\_\_\*\***

**If YES**: We'll recommend Supabase (PostgreSQL + Auth + Row Level Security)  
**If NO**: We'll use a simpler stack (but keep Supabase as an option for future growth)

---

### Question 4: Existing Setup Assessment (if Partially Started or Migration)

**If you answered B or C to Question 1, answer these:**

Current tech stack:

- Framework: \***\*\_\_\_\*\***
- Database: \***\*\_\_\_\*\***
- Authentication: \***\*\_\_\_\*\***
- Styling: \***\*\_\_\_\*\***
- Testing: \***\*\_\_\_\*\***

What's already working:

- [ ] Basic routing
- [ ] Authentication
- [ ] Database connection
- [ ] UI components
- [ ] Testing framework
- [ ] Deployment pipeline

What needs to be built/fixed:

- ***
- ***
- ***

---

## PHASE 2: TECHNOLOGY STACK DECISIONS

Based on your answers above, here are the recommended technologies:

### Core Framework: Next.js 16 + React 19 + TypeScript

**This is REQUIRED unless you have a very strong reason otherwise.**

**Why Next.js is the default choice:**

- ✅ Server-Side Rendering (SSR) for SEO
- ✅ Automatic code splitting and optimization
- ✅ Built-in routing system
- ✅ API routes for backend logic
- ✅ Excellent developer experience
- ✅ Production-ready out of the box

**Alternatives to Consider (with extreme caution):**

⚠️ **Before choosing an alternative, discuss these pros and cons:**

**Vite + React SPA:**

- ✅ PRO: Simpler, faster dev server
- ✅ PRO: Good for internal tools with no SEO needs
- ❌ CON: No SSR - search engines see empty `<div id="root">`
- ❌ CON: Poor SEO performance
- ❌ CON: Harder to add SSR later if needed
- **Use only if**: 100% certain no SEO needed, internal tool only

**Astro:**

- ✅ PRO: Excellent for static content sites
- ✅ PRO: Very fast, minimal JavaScript
- ❌ CON: Less suitable for dynamic, interactive apps
- ❌ CON: Smaller ecosystem than React
- **Use only if**: Mostly static content, minimal interactivity

**Remix:**

- ✅ PRO: Great SSR patterns
- ✅ PRO: Modern React Router
- ❌ CON: Smaller community than Next.js
- ❌ CON: Less mature ecosystem
- **Use only if**: Team already familiar with Remix

**⚠️ Decision Point**: Will you use Next.js 16? (Strongly recommended: YES)

**Your Answer**: \***\*\_\_\_\*\***

**If NO**: Document your reasoning here and discuss with team:

- Why is Next.js not suitable?
- What specific requirements make alternative better?
- How will you handle SEO if needed in future?
- What are the long-term maintenance implications?

---

### Database: Supabase (PostgreSQL) - Recommended When Needed

**If you answered YES to Question 3 (Database Needs):**

**Recommended: Supabase**

- ✅ PostgreSQL database with excellent performance
- ✅ Built-in authentication (email, OAuth, magic links)
- ✅ Row Level Security (RLS) for data protection
- ✅ Real-time subscriptions
- ✅ Auto-generated REST and GraphQL APIs
- ✅ Free tier available for development
- ✅ Excellent Next.js integration

**Alternatives:**

- PostgreSQL (self-hosted) - More control, more maintenance
- MySQL - Different SQL flavor, widely supported
- MongoDB - NoSQL, good for flexible schemas
- Prisma + any DB - Great ORM, adds complexity layer

**⚠️ Decision Point**: Will you use Supabase?

**Your Answer**: \***\*\_\_\_\*\***

---

### Styling: Tailwind CSS 4

**Recommended: Tailwind CSS 4 (CSS-based configuration)**

- ✅ Utility-first CSS framework
- ✅ Version 4 uses CSS configuration (not JS config file)
- ✅ Excellent for responsive design
- ✅ Small production bundle sizes
- ✅ Great developer experience

**Configuration Note**: Tailwind CSS 4 config lives in `app/globals.css` using `@theme`, NOT in `tailwind.config.js`

**Alternatives:**

- CSS Modules - More traditional, scoped styles
- Styled Components - CSS-in-JS, runtime overhead
- Vanilla CSS - Full control, more verbose

**⚠️ Decision Point**: Will you use Tailwind CSS 4?

**Your Answer**: \***\*\_\_\_\*\***

---

### Testing: Playwright

**Recommended: Playwright for E2E Testing**

- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Excellent VS Code extension
- ✅ Fast and reliable
- ✅ Great debugging tools

**Your Answer**: \***\*\_\_\_\*\***

---

## PHASE 3: PROJECT SETUP

Based on your answers, follow the appropriate path:

### Path A: Blank Slate (Fresh Start)

**Steps:**

1. **Create Next.js Project**:

```bash
npx create-next-app@latest [project-name]
# Select: TypeScript, App Router, Tailwind CSS
```

2. **Install Additional Dependencies**:

```bash
# If using Supabase
npm install @supabase/supabase-js @supabase/ssr

# Testing
npm install -D @playwright/test

# UI Libraries (optional)
npm install @headlessui/react @heroicons/react
```

3. **Set Up Environment Variables** (see template below)

4. **Create STARTER.md** (see template in this file)

5. **Set Up Directory Structure** (see template below)

6. **Configure Mentor Mode** (see mentor.md in export folder)

---

### Path B: Partially Started (Fix and Complete)

**Steps:**

1. **Assessment Checklist**:

   - [ ] Review existing code structure
   - [ ] Identify what's working vs broken
   - [ ] Document current dependencies
   - [ ] Check for conflicting patterns

2. **Migration Strategy**:

   - Keep what works
   - Refactor what's broken
   - Add missing pieces
   - Update to latest versions

3. **Create STARTER.md** documenting current state

4. **Set up testing for existing features**

5. **Implement missing components incrementally**

---

### Path C: Migration (Existing Project)

**Steps:**

1. **Create parallel Next.js project** (don't modify original yet)

2. **Migration Priority**:

   - Phase 1: Set up Next.js with routing
   - Phase 2: Migrate authentication
   - Phase 3: Migrate public pages (SEO critical)
   - Phase 4: Migrate protected features
   - Phase 5: Testing and deployment

3. **Database Migration**:

   - If keeping same database: Update connection strings
   - If moving database: Export schema and data
   - Test with separate test database first

4. **Component Migration**:

   - Identify Server vs Client Components
   - Update import paths
   - Handle SSR differences (no window, no localStorage in Server Components)

5. **Create detailed STARTER.md** tracking migration progress

---

## PHASE 4: STARTER.MD TEMPLATE

**IMPORTANT**: Copy the STARTER.md template from this guide and customize it for your project.

**Lines 1-30 should remain mostly intact** except:

- Line 1: Change project name to your project name
- All other lines should use the same structure and format

**After line 30**: Customize for your specific project needs while maintaining the same section structure.

### STARTER.md Template

(See embedded template below - this will be your project's STARTER.md file)

````markdown
<!-- filepath: /[YOUR_PROJECT_PATH]/docs/STARTER.md -->

# STARTER FILE - [YOUR PROJECT NAME]

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

**Application**: [YOUR PROJECT NAME]  
**Purpose**: [DESCRIBE YOUR PROJECT PURPOSE]  
**Architecture**: Next.js 16 with App Router + TypeScript, [DATABASE IF APPLICABLE]

**Last Updated**: [DATE]  
**Version**: v1.0 - Initial Setup  
**Status**: 🚧 In Development

---

## TECH STACK & VERSIONS

### Core Technologies

- **Framework**: Next.js 16.x (App Router with SSR)
- **Frontend**: React 19.x with TypeScript 5.x
- **Styling**: Tailwind CSS 4.0 (CSS-based configuration)
- **Authentication**: [IF APPLICABLE - e.g., Supabase SSR, NextAuth, etc.]
- **Database**: [IF APPLICABLE - e.g., Supabase PostgreSQL, MySQL, etc.]
- **Testing**: Playwright [VERSION]
- **Package Manager**: npm

### Key Dependencies

```json
{
  "next": "16.x",
  "react": "19.x",
  "react-dom": "19.x"
  // Add your specific dependencies here
}
```
````
`````

---

<!-- Continue with remaining sections customized for your project -->

````

---

## PHASE 5: REF FILE TEMPLATES

Create these REF files in your `/docs` folder to document your project:

**Required REF Files:**
1. `REF_architecture.md` - System architecture and patterns
2. `REF_SEO.md` - SEO implementation (if applicable)
3. `REF_styling.md` - Styling guide and component patterns

**Optional REF Files:**
4. `REF_authentication.md` - Auth flows and patterns
5. `REF_database.md` - Schema and query patterns
6. `REF_testing.md` - Testing strategies

Templates for these files are included in this export package.

---

## PHASE 6: MENTOR MODE SETUP

**What is Mentor Mode?**
Mentor Mode is an AI assistance mode that guides you through problems using Socratic questioning instead of providing direct solutions. This helps you learn and understand the codebase better.

**Setup Instructions:**

1. **Copy mentor.md** from this export folder to your project's `.github/chatmodes/` folder

2. **Create the directory structure**:
```bash
mkdir -p .github/chatmodes
cp mentor.md .github/chatmodes/mentor.md
````

3. **Activate Mentor Mode** in your AI chat by typing:

- "activate mentor mode"
- "use mentor mode"
- "@mentor.md"

4. **Exit Mentor Mode** by typing:

- "bailout" (gets direct solution)
- "exit mentor mode" (returns to normal mode)

**See `mentor.md` in this export folder for complete instructions.**

---

## PHASE 7: COPILOT INSTRUCTIONS SETUP

**What are Copilot Instructions?**
A copilot-instructions.md file that configures GitHub Copilot's behavior for your specific project.

**Setup Instructions:**

1. **Copy the template** `copilot-instructions_template.md` from this export folder

2. **Rename and place** in your project:

```bash
mkdir -p .github
cp copilot-instructions_template.md .github/copilot-instructions.md
```

3. **Customize the template**:

   - Replace `[PROJECT_NAME]` with your project name
   - Update tech stack section with your dependencies
   - Customize patterns and examples for your project
   - Remove sections that don't apply
   - Add project-specific patterns

4. **Keep it updated** as your project evolves

**See `copilot-instructions_template.md` in this export folder for the full template.**

---

## QUICK START CHECKLIST

After completing all phases, verify you have:

**Project Setup:**

- [ ] Next.js 16 project created with TypeScript
- [ ] Tailwind CSS 4 configured in globals.css
- [ ] Environment variables set up (.env.local, `.env.example`)
- [ ] Dependencies installed and working

**Documentation:**

- [ ] STARTER.md created and customized
- [ ] REF_architecture.md started
- [ ] REF_SEO.md started (if applicable)
- [ ] REF_styling.md started

**Development Tools:**

- [ ] mentor.md set up
- [ ] copilot-instructions.md customized
- [ ] Playwright installed and configured
- [ ] Git repository initialized

**Testing:**

- [ ] Dev server runs (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] Home page renders correctly
- [ ] Environment switching works (if using multiple environments)

---

## NEXT STEPS

1. **Start with STARTER.md**: Use it as your working document
2. **Activate Mentor Mode**: Learn as you build
3. **Create REF files**: Document as you implement features
4. **Test continuously**: Write tests as you build features
5. **Update documentation**: Keep STARTER.md current

---

## SUPPORT & REFERENCE

**This export package includes:**

- `NEW_project_start.md` (this file)
- `STARTER_template.md` - Template for your STARTER.md
- `mentor.md` - Mentor Mode configuration
- `copilot-instructions_template.md` - Copilot configuration template
- `REF_architecture_template.md` - Architecture documentation template
- `REF_SEO_template.md` - SEO documentation template
- `REF_styling_template.md` - Styling guide template

**Key Principles:**

- SEO-first if public-facing (Next.js SSR)
- Database when needed (Supabase recommended)
- Test as you build (Playwright)
- Document everything (REF files + STARTER.md)
- Learn through Mentor Mode

**Questions or Issues?**
Refer back to the original project documentation or activate Mentor Mode for guided problem-solving.

---

**Version**: 1.0 - December 2025  
**Remember**: This guide is designed to help you build a completely new project with the same successful patterns, not to recreate the source project.

````

---

Now, let's go through the **STARTER.md** file section by section. I'll present each major section and you can tell me:
- **KEEP** - Use as-is
- **REMOVE** - Delete this section
- **STERILIZE** - Remove project-specific references, keep structure

## STARTER.md Section 1: Header and Instructions (Lines 1-30)

```markdown
# STARTER FILE - Baton Rouge GA NextJS Project

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

**Application**: Baton Rouge GA (Gamblers Anonymous) web application
**Purpose**: Meeting info, gambling addiction resources, and members-only portal
**Architecture**: Next.js 16 with App Router + TypeScript, Supabase backend (PostgreSQL + Auth)
````

**Your decision for this section?** (KEEP / REMOVE / STERILIZE)

Made changes.

marsh11272: You stopped the file at Phase 4. You need to add the rest of the phases you went over into the document as well.

GitHub Copilot: I'll continue the NEW_project_start.md file from where it left off, adding the remaining phases.

### [NEW_project_start.md](untitled:/export/NEW_project_start.md)

Continue the file with remaining phases after the STARTER.md template section.

```markdown
<!-- ...existing code up to STARTER.md template... -->
```

---

## PHASE 5: REF FILE TEMPLATES

Create these REF files in your docs folder to document your project:

**Required REF Files:**

1. `REF_architecture.md` - System architecture and patterns
2. `REF_SEO.md` - SEO implementation (if applicable)
3. `REF_styling.md` - Styling guide and component patterns

**Optional REF Files:** 4. `REF_authentication.md` - Auth flows and patterns (if using auth) 5. `REF_database.md` - Schema and query patterns (if using database) 6. `REF_testing.md` - Testing strategies

Templates for these files are included in this export package:

- `REF_architecture_template.md`
- `REF_SEO_template.md`
- `REF_styling_template.md`

**How to Use:**

1. Copy templates from export folder to your docs folder
2. Rename by removing `_template` suffix
3. Replace `[PROJECT_NAME]` and `[CUSTOMIZE]` placeholders
4. Fill in project-specific sections
5. Remove sections that don't apply to your project

---

## PHASE 6: MENTOR MODE SETUP

**What is Mentor Mode?**
Mentor Mode is an AI assistance mode that guides you through problems using Socratic questioning instead of providing direct solutions. This helps you learn and understand the codebase better.

**Setup Instructions:**

1. **Copy mentor.md** from this export folder to your project's chatmodes folder

2. **Create the directory structure**:

```bash
mkdir -p .github/chatmodes
cp mentor.md .github/chatmodes/mentor.md
```

3. **Activate Mentor Mode** in your AI chat by typing:

   - "activate mentor mode"
   - "use mentor mode"
   - "@mentor.md"

4. **Exit Mentor Mode** by typing:
   - "bailout" (gets direct solution)
   - "exit mentor mode" (returns to normal mode)

**How Mentor Mode Works:**

When activated, the AI will:

- Ask diagnostic questions (minimum 3-5) instead of providing solutions
- Guide you to discover the problem yourself
- Provide progressive hints only when you type "hint"
- Assume you followed instructions correctly (investigate code/system first)
- Use read-only tools (no file edits unless you bailout)

**Example Interaction:**

```
You: "activate mentor mode - my login isn't working"

AI: 🎓 Mentor Mode Activated

Let's diagnose this together. I have some questions:

1. What specific error message or behavior are you seeing?
2. Are you able to reach the login page, or does it fail before that?
3. Have you checked the browser console for any errors?
4. What authentication method are you using (email/password, OAuth, etc.)?
5. Have you verified your environment variables are set correctly?

Type "hint" for clues, "bailout" for direct solution.
```

**See `mentor.md` in this export folder for complete instructions.**

---

## PHASE 7: COPILOT INSTRUCTIONS SETUP

**What are Copilot Instructions?**
A copilot-instructions.md file that configures GitHub Copilot's behavior for your specific project.

**Setup Instructions:**

1. **Copy the template** `copilot-instructions_template.md` from this export folder

2. **Rename and place** in your project:

```bash
mkdir -p .github
cp copilot-instructions_template.md .github/copilot-instructions.md
```

3. **Customize the template**:

   - Replace `[PROJECT_NAME]` with your project name
   - Update tech stack section with your dependencies
   - Customize patterns and examples for your project
   - Remove sections that don't apply
   - Add project-specific patterns

4. **Key Sections to Customize**:

   - **Project Context**: Describe your project and purpose
   - **Tech Stack**: List your specific versions and dependencies
   - **Architecture Patterns**: Document your component patterns
   - **Common Gotchas**: Add issues you've encountered
   - **Database Schema**: Document your tables (if applicable)
   - **Failed Approaches**: Log what didn't work

5. **Keep it updated** as your project evolves

**See `copilot-instructions_template.md` in this export folder for the full template.**

---

## PHASE 8: DIRECTORY STRUCTURE SETUP

Create this recommended folder structure for your project:

```bash
# Create core directories
mkdir -p app/api
mkdir -p components/{Layout,common,Auth}
mkdir -p lib/{supabase,utils,email}
mkdir -p hooks
mkdir -p types
mkdir -p docs
mkdir -p .github/chatmodes
mkdir -p public/{images,documents}
mkdir -p tests/{smoke,features,fixtures}

# If using database
mkdir -p database/migrations
```

**Directory Purpose:**

```
your-project/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Tailwind config + styles
│   └── api/               # API routes
├── components/            # React components
│   ├── Layout/           # Header, Footer, Nav
│   ├── common/           # Reusable UI
│   └── [Feature]/        # Feature-specific components
├── hooks/                # Custom React hooks
├── lib/
│   ├── supabase/         # Supabase clients (if using)
│   ├── utils/            # Helper functions
│   └── email/            # Email templates (if using)
├── types/                # TypeScript definitions
├── docs/                 # Documentation
│   ├── STARTER.md       # Project starter
│   └── REF_*.md         # Reference docs
├── .github/
│   ├── chatmodes/       # mentor.md
│   └── copilot-instructions.md
├── public/              # Static assets
├── tests/               # Playwright tests
└── database/            # SQL files (if using)
```

---

## PHASE 9: ENVIRONMENT VARIABLES SETUP

### Create Environment Files

1. **Create .env.local** (gitignored - your actual secrets):

```env
# Next.js requires NEXT_PUBLIC_ prefix for browser-accessible variables

# Supabase (if using database)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email service (if sending emails)
RESEND_API_KEY=your_resend_api_key

# Other services
# Add your API keys here
```

2. **Create `.env.example`** (committed to git - template for team):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Email Service
RESEND_API_KEY=your-resend-api-key-here
```

3. **Update .gitignore**:

```gitignore
# Environment variables
.env*.local
.env.production.local
.env.test.local

# Keep .env.example (template)
!.env.example
```

### Critical Environment Variable Rules

**Browser vs Server:**

- ✅ `NEXT_PUBLIC_*` - Accessible in browser (public data only)
- ❌ No prefix - Server-side only (secrets, API keys)

**Example:**

```typescript
// Browser (Client Component)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // ✅ Works

// Server (Server Component)
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // ✅ Works

// Browser (Client Component)
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // ❌ undefined!
```

---

## QUICK START CHECKLIST

After completing all phases, verify you have:

**Project Setup:**

- [ ] Next.js 16 project created with TypeScript
- [ ] Tailwind CSS 4 configured in globals.css
- [ ] Environment variables set up (.env.local, `.env.example`)
- [ ] Dependencies installed and working
- [ ] Directory structure created

**Documentation:**

- [ ] STARTER.md created and customized
- [ ] REF_architecture.md started
- [ ] REF_SEO.md started (if applicable)
- [ ] REF_styling.md started
- [ ] Project-specific sections added

**Development Tools:**

- [ ] mentor.md set up
- [ ] copilot-instructions.md customized
- [ ] Playwright installed and configured (if testing)
- [ ] Git repository initialized

**Testing:**

- [ ] Dev server runs (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] Home page renders correctly
- [ ] Environment variables accessible
- [ ] Environment switching works (if using multiple environments)

**Database (if applicable):**

- [ ] Supabase project created
- [ ] Database schema planned
- [ ] RLS policies considered
- [ ] Test database set up (separate from production)

---

## NEXT STEPS

### Week 1: Foundation

1. **Complete project setup** - All checkboxes above
2. **Create basic routes** - Home page, about page
3. **Set up authentication** (if needed)
4. **Configure styling** - Colors, fonts, base components

### Week 2: Core Features

1. **Build main pages** - Public or protected routes
2. **Implement data fetching** - Database queries or API calls
3. **Create custom hooks** - Centralize data operations
4. **Add basic tests** - Smoke tests for critical paths

### Week 3: Polish

1. **SEO optimization** (if applicable) - Metadata, sitemaps, structured data
2. **Performance** - Image optimization, code splitting
3. **Testing** - Comprehensive E2E tests
4. **Documentation** - Update REF files with learnings

### Week 4: Launch Prep

1. **Production testing** - Test on staging environment
2. **Analytics setup** - Google Analytics, Search Console
3. **Monitoring** - Error tracking, performance monitoring
4. **Deployment** - Deploy to production

---

## SUPPORT & REFERENCE

**This export package includes:**

Files in export folder:

- `NEW_project_start.md` (this file)
- `mentor.md` - Mentor Mode configuration
- `copilot-instructions_template.md` - Copilot configuration template
- `REF_architecture_template.md` - Architecture documentation template
- `REF_SEO_template.md` - SEO documentation template
- `REF_styling_template.md` - Styling guide template

**Key Principles from Source Project:**

✅ **SEO-First** (if public-facing):

- Next.js SSR for full HTML on first load
- Metadata on every page
- Structured data (JSON-LD)
- Sitemap and robots.txt
- IndexNow integration for instant indexing

✅ **Database When Needed**:

- Supabase recommended (PostgreSQL + Auth + RLS)
- Row Level Security for data protection
- Server/client split pattern for Next.js
- SECURITY DEFINER functions for elevated operations

✅ **Test As You Build**:

- Playwright for E2E testing
- Separate test database
- Test users with known credentials
- Smoke tests for quick validation

✅ **Document Everything**:

- STARTER.md for quick reference
- REF files for deep dives
- TASK files for active work
- Archive completed work

✅ **Learn Through Mentor Mode**:

- Activate for guided problem-solving
- Ask "hint" for progressive clues
- "Bailout" when you need direct help
- Builds understanding, not just solutions

**Questions or Issues?**

1. Check relevant REF file first
2. Activate Mentor Mode for guided diagnosis
3. Search documentation for similar issues
4. Ask specific questions with context

---

## COMMON PITFALLS TO AVOID

### Next.js Specific

❌ **Forgetting `NEXT_PUBLIC_` prefix**

- Variables without prefix are undefined in browser
- Use `NEXT_PUBLIC_` for any browser-accessible data

❌ **Using server-only code in Client Components**

- `cookies()`, `headers()` only work in Server Components
- Add 'use client' and use browser Supabase client

❌ **Not handling SSR differences**

- No `window`, `localStorage`, `document` in Server Components
- Use `useEffect` for browser-only code in Client Components

### Database

❌ **Updating protected rows directly**

- RLS can silently block updates (returns empty error `{}`)
- Use SECURITY DEFINER functions via `.rpc()`

❌ **Not testing RLS policies**

- Test with actual user sessions, not service role key
- Verify users can only access their own data

### SEO

❌ **Forgetting metadata**

- Every page needs unique title and description
- Add Open Graph tags for social sharing

❌ **Not testing with crawlers**

- View page source (not DevTools) to see crawler view
- Use Google Rich Results Test

### Testing

❌ **Testing against production**

- Always use separate test database
- Seed test data, don't rely on production

❌ **Not cleaning up test data**

- Tests should be idempotent
- Clean up or use unique test data

---

## FINAL NOTES

### Success Metrics

**After 1 Month:**

- [ ] Project deployed and accessible
- [ ] Core features working
- [ ] Documentation up to date
- [ ] Basic tests passing

**After 3 Months (if SEO applicable):**

- [ ] Pages indexed in Google
- [ ] Organic search traffic starting
- [ ] Core Web Vitals in green
- [ ] No critical errors in Search Console

**After 6 Months:**

- [ ] Growing organic traffic (if SEO applicable)
- [ ] Stable production environment
- [ ] Comprehensive test coverage
- [ ] Well-documented codebase

### Remember

- **This guide creates a NEW project**, not a clone of the source
- **Customize everything** - colors, fonts, content, features
- **Document as you build** - Future you will thank you
- **Test continuously** - Catch issues early
- **SEO is easier to build in** than retrofit later

### Version History

**v1.0 - December 2025**

- Initial release
- Based on successful GA website implementation
- Proven patterns for Next.js + Supabase + SEO

---

**Good luck with your new project!** 🚀

**Version**: 1.0 - December 2025  
**Remember**: This guide helps you build a completely new project with the same successful patterns, not to recreate the source project.

````

Now let me create the first section of STARTER.md for you to review:

## STARTER.md Section 1: Header and Instructions (Lines 1-30)

**Section**: Header, Important Read First, Instructions

```markdown
# STARTER FILE - [YOUR PROJECT NAME]

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

**Application**: [YOUR PROJECT NAME]
**Purpose**: [DESCRIBE YOUR PROJECT PURPOSE]
**Architecture**: Next.js 16 with App Router + TypeScript, [DATABASE IF APPLICABLE]
```

**Your decision for this section?** (KEEP / REMOVE / STERILIZE)
Now let me create the first section of STARTER.md for you to review:

## STARTER.md Section 1: Header and Instructions (Lines 1-30)

**Section**: Header, Important Read First, Instructions

```markdown
# STARTER FILE - [YOUR PROJECT NAME]

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

**Application**: [YOUR PROJECT NAME]
**Purpose**: [DESCRIBE YOUR PROJECT PURPOSE]
**Architecture**: Next.js 16 with App Router + TypeScript, [DATABASE IF APPLICABLE]
```

**Your decision for this section?** (KEEP / REMOVE / STERILIZE)

Made changes.
````
