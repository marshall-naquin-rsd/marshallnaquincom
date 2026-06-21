# New Project Template Package

> **📦 Template Repository**: This is a template package for creating new projects. Copy this entire directory to start a new project, then follow `NEW_project_start.md` for the complete setup workflow. See `TEMPLATE.md` for usage instructions.

**Version**: 2.0 - December 2025  
**Purpose**: Start new Next.js 16 projects with proven SEO-optimized architecture and design system workflow

---

## 📦 What's Included

### Core Template Files

1. **NEW_project_start.md** - Complete project setup guide with 11 phases
2. **design_page_template.tsx** - Interactive design system showcase (792 lines)
3. **STARTER_template.md** - Project documentation template
4. **REF_architecture.md** - Architecture patterns reference
5. **REF_SEO.md** - SEO implementation reference
6. **REF_styling.md** - Styling guide and component patterns
7. **copilot-instructions.template.md** - GitHub Copilot configuration
8. **mentor.md** - Mentor Mode chat configuration

### Supporting Files

- **outsidefiles/** - Original reference files (for archival purposes)

---

## 🚀 Quick Start

### Option 1: Starting a Brand New Project

1. **Copy this entire directory**:

   ```bash
   cp -r newprojecttemplate /path/to/your-new-project
   cd /path/to/your-new-project
   ```

2. **Open NEW_project_start.md** and follow the phases:

   - Phase 1-3: Project Assessment & Setup
   - Phase 4: Create STARTER.md
   - **Phase 4.5: Design System Planning** ⭐ (NEW - Most Important)
   - Phase 5-11: Complete setup

3. **Key Phase 4.5 Workflow** (Design System Planning):

   ```bash
   # Install icon libraries (temporary)
   npm install lucide-react @heroicons/react @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

   # Create design showcase page
   mkdir -p app/design
   cp design_page_template.tsx app/design/page.tsx

   # Update [PROJECT_NAME] and [Your Tagline] in the file

   # Start dev server and visit http://localhost:3000/design
   npm run dev

   # Make design decisions with AI
   # AI will update REF_styling.md and app/globals.css

   # Clean up
   rm -rf app/design
   npm uninstall [unused-icon-libraries]
   ```

---

## 🎯 Tech Stack

**This template produces projects with**:

- **Framework**: Next.js 16 (App Router + SSR for SEO)
- **Frontend**: React 19 + TypeScript 5
- **Styling**: Tailwind CSS 4 (CSS-based configuration)
- **Database**: Supabase (PostgreSQL) - optional, when needed
- **Authentication**: Supabase SSR - optional, when needed
- **Testing**: Playwright
- **Icons**: Choose one (Lucide, Heroicons, or Font Awesome)

---

## 🎨 Design System Planning (Phase 4.5)

**Why this is critical**: Making design decisions upfront prevents inconsistent styling and constant redesigns.

### The Process

1. **Install all 3 icon libraries** (you'll remove 2 later)
2. **Create design showcase page** from `design_page_template.tsx`
3. **View options** at `http://localhost:3000/design`:
   - 4 color palette options
   - 5 typography options
   - 6 button styles
   - 3 icon library comparisons
   - 4 spacing options
   - 6 card styles
4. **Make decisions** (work with AI to choose best options for your brand)
5. **AI updates** `REF_styling.md` and `app/globals.css` with your choices
6. **Delete design page** and remove unused icon libraries

### Default Recommendations (if unsure)

- **Color Palette**: Trust & Reliability (Navy/Blue/Red/Slate)
- **Typography**: Inter (excellent readability)
- **Button Style**: Rounded with shadow
- **Icon Library**: Lucide (lightweight, 1400+ icons)
- **Spacing**: Comfortable (16px sections, 8px components)
- **Card Style**: Shadow (subtle and professional)

---

## 📖 Documentation System

### STARTER.md Workflow

1. **Create from template**: Copy `STARTER_template.md` to `docs/STARTER.md`
2. **Customize**: Replace placeholders with project details
3. **Use for tasks**: Copy and rename for specific tasks
   - `UPGRADE_auth_upgrade.md`
   - `DEBUG_email_issue.md`
   - `TASK_add_feature.md`

### REF Files

**Purpose**: Permanent reference documentation

- `REF_architecture.md` - System patterns
- `REF_SEO.md` - SEO implementation (if applicable)
- `REF_styling.md` - Design system (populated in Phase 4.5)
- `REF_authentication.md` - Auth flows (optional)
- `REF_database.md` - Schema (optional)

---

## 🤖 AI Assistance

### Mentor Mode

**Purpose**: Socratic guidance instead of direct solutions

**Setup**:

```bash
mkdir -p .github/chatmodes
cp mentor.md .github/chatmodes/mentor.md
```

**Usage**:

- Activate: "activate mentor mode"
- Get hints: "hint"
- Get solution: "bailout"
- Exit: "exit mentor mode"

### Copilot Instructions

**Purpose**: Configure GitHub Copilot for your project

**Setup**:

```bash
mkdir -p .github
cp copilot-instructions.template.md .github/copilot-instructions.md
```

**Customize**:

- Replace `[PROJECT_NAME]` with your project name
- Update tech stack versions
- Add project-specific patterns
- Document common gotchas

---

## 🌟 SEO Optimization

**This template preserves SEO best practices from successful projects**:

- Server-Side Rendering (SSR) for crawler-visible content
- Automatic sitemap generation
- OpenGraph and Twitter Card meta tags
- Structured data (JSON-LD)
- Semantic HTML structure
- Performance optimization (Core Web Vitals)

**When to use**:

- Public websites needing organic search traffic
- Content that should appear in search results
- Marketing sites without advertising budget

**When to skip**:

- Internal tools (admin dashboards)
- Behind authentication (no public pages)
- Development utilities

---

## 📁 Project Structure (After Setup)

```
your-new-project/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Tailwind config + styles
│   └── api/                     # API routes
├── components/                   # React components
│   ├── Layout/                  # Header, Footer, Nav
│   ├── common/                  # Reusable UI
│   └── [Feature]/               # Feature-specific
├── hooks/                       # Custom React hooks
├── lib/
│   ├── supabase/                # Supabase clients (if using)
│   ├── utils/                   # Helper functions
│   └── email/                   # Email templates (if using)
├── types/                       # TypeScript definitions
├── docs/
│   ├── STARTER.md               # Project starter (from template)
│   └── REF_*.md                 # Reference documentation
├── .github/
│   ├── chatmodes/
│   │   └── mentor.md            # Mentor Mode config
│   └── copilot-instructions.md  # Copilot config
├── public/                      # Static assets
├── tests/                       # Playwright tests
└── database/                    # SQL files (if using DB)
```

---

## ⏱️ Time Investment

**Total setup time**: ~3-4 hours for a complete project

**Phase breakdown**:

- Phases 1-3: Basic setup (30 min)
- Phase 4: Documentation (15 min)
- **Phase 4.5: Design decisions** (30-45 min) ⭐
- Phases 5-8: Configuration (45 min)
- Phases 9-11: First features (1-2 hours)

**Time saved later**: Countless hours from:

- Consistent design system (no redesigns)
- Clear documentation (no confusion)
- Proven patterns (no trial and error)
- SEO built-in (no retrofitting)

---

## 🔄 Updates & Versioning

**When to update this template**:

- After completing a successful project
- When discovering better patterns
- When dependencies have major updates
- When adding new proven features

**How to update**:

1. Copy improvements from completed project
2. Update version number in this README
3. Document changes in template files
4. Test with a new sample project

---

## 📝 Notes

### For AI Agents

This template is designed to work with AI assistants:

- Follow NEW_project_start.md sequentially
- Phase 4.5 requires human input for design decisions
- Use Mentor Mode for learning/debugging
- Update REF files as project evolves

### For Human Developers

- Don't skip Phase 4.5 (design planning)
- Use default recommendations if unsure
- Work with AI to make informed design choices
- Keep REF files updated as single source of truth

---

## 🎯 Success Metrics

**Projects using this template should achieve**:

- ✅ Consistent design system
- ✅ Strong SEO performance (if applicable)
- ✅ Clear documentation
- ✅ Rapid feature development
- ✅ Easy onboarding for new developers

---

**Questions or Issues?** Review NEW_project_start.md for detailed guidance.

**Version History**:

- v2.0 (Dec 2025): Added Phase 4.5 Design System Planning
- v1.0 (Dec 2025): Initial template package
