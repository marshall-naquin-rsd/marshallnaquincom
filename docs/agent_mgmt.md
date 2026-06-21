# Agent Management Instructions - Client Project System

## Purpose

This document provides instructions for AI assistants working in **client website projects** (projects created from this template) on how to interact with the **Red Stick Digital Client Management System**. 

The client management system is located in the main Red Stick Digital repository at `/Users/marshallnaquin/projects/redstickdigital` and provides centralized tracking, deployment, and domain management for all client websites.

---

## Context: Two-System Architecture

### System 1: Red Stick Digital Main Site (`redstickdigital` repo)
- **Location**: `/Users/marshallnaquin/projects/redstickdigital`
- **Purpose**: Agency website, admin dashboard, client project management
- **Contains**: Client database, project tracking, deployment management
- **Access**: Admin dashboard at `/dashboard/admin/projects`

### System 2: Individual Client Projects (this template)
- **Location**: Separate repositories (e.g., `clientname-website` repo)
- **Purpose**: Individual client website codebase
- **Created From**: This template via Template MCP
- **Managed By**: Red Stick Digital admin dashboard

**Your Role**: You're working in System 2 (client project), but may need to reference System 1 (management system) for project context, deployment information, or to report project status.

---

## How Projects Are Created

When a new client project is created via the Red Stick Digital admin dashboard:

1. **Template MCP** creates a new GitHub repository
2. **Template files** from `/Users/marshallnaquin/projects/redstick-templates/templates/nextjs-starter` are copied
3. **Placeholders are replaced** with client-specific information:
   - Client name
   - Project name
   - Package tier (starter/professional/enterprise)
   - Selected services
4. **Vercel project** is automatically created and linked to the GitHub repo
5. **Preview URL** is generated (e.g., `clientname-website.vercel.app`)
6. **Project record** is stored in Red Stick Digital database

---

## Project Information Available in This Template

When you start working on a client project, you should have access to:

### 1. Project Metadata (from template variables)
- Client name
- Project name
- Package tier
- Services included
- Project description (if provided)

### 2. Deployment Information
- **Preview URL**: Check Vercel dashboard or Red Stick Digital admin dashboard
- **Production Domain**: Set when client approves and domain is configured
- **Vercel Project**: Auto-created and linked to this GitHub repo

### 3. Repository Information
- **GitHub Repository**: This repository (created from template)
- **Branch Structure**: Main branch (usually `main`) is production, feature branches for development

---

## Accessing Project Management System

### For Deployment Status

To check deployment status, preview URLs, or production domain:

1. **Ask the user** to check Red Stick Digital admin dashboard: `/dashboard/admin/projects`
2. **Or reference** the project's database record in the Red Stick Digital system
3. **Check Vercel** directly if you have access to the Vercel project

**Typical Information Needed**:
- What is the preview URL for this project?
- What is the production domain (if configured)?
- What is the current deployment status?
- What is the GitHub repository URL?

### For Project Context

When you need context about the client or project requirements:

1. **Check this template's documentation** (this file, README.md, STARTER.md)
2. **Check client-specific documentation** in this repo (if created)
3. **Ask the user** to provide context from Red Stick Digital admin dashboard
4. **Reference** the project record in the Red Stick Digital database if you have access

---

## Working with the Management System

### When You Need to Report Project Status

If you need to update project status in the management system:

**DO NOT**: Try to directly modify the Red Stick Digital database from this client project

**DO**: 
- Ask the admin/user to update status via Red Stick Digital admin dashboard
- Or wait for automated status updates (if implemented)
- Or provide status information to the user for manual update

### When You Need Deployment Information

**Preview URL**:
- Usually follows pattern: `[project-name].vercel.app`
- Can be found in Vercel dashboard
- Can be found in Red Stick Digital admin dashboard

**Production Domain**:
- Set by admin in Red Stick Digital dashboard
- Configured in Vercel when client approves site
- May not be set until project is ready for production

### When You Need Client Context

**Package Tier** determines scope:
- **Starter ($499)**: Single-page site, basic SEO, 1 round revisions
- **Professional ($1,499)**: Up to 5 pages, full SEO, 2 rounds revisions
- **Enterprise (Custom)**: Unlimited pages, custom functionality

**Services Included** determine features:
- Website build/redesign
- SEO optimization
- Social media integration
- Analytics setup
- CMS setup (if Sanity was selected)

---

## Template-Specific Instructions

### This Template Contains:

1. **Copilot Instructions**: `.github/copilot-instructions.md` (customize for this project)
2. **Project Starter**: `STARTER_template.md` (copy to `STARTER.md` and customize)
3. **Reference Docs**: Architecture, SEO, styling references
4. **Design System**: Tailwind CSS 4 setup
5. **Standard Next.js 16** structure with App Router

### When Starting Development:

1. **Read** `STARTER.md` (created from `STARTER_template.md`) for project-specific context
2. **Review** package tier to understand scope constraints
3. **Check** services included to know which features to implement
4. **Confirm** preview URL with user/admin before sharing with client

---

## Integration Points

### Vercel Deployment

- **Auto-deploy**: Pushes to `main` branch automatically deploy to Vercel
- **Preview URLs**: Each push creates/updates preview deployment
- **Production**: Production domain configured separately in Vercel

### Red Stick Digital Dashboard

- **Project Tracking**: Admin can see all projects and their status
- **Client Communication**: Admin shares preview URLs with clients
- **Domain Management**: Admin configures production domains when ready

### Template MCP

- **Used During Creation**: Template MCP created this project from template
- **Not Used During Development**: Template MCP is only for initial project creation
- **If Issues**: Contact admin to check Template MCP configuration

---

## Common Workflows

### Workflow 1: Initial Development Setup

1. Project created via Red Stick Digital dashboard (Template MCP)
2. GitHub repo exists, Vercel project linked
3. Preview URL available
4. Developer clones repo and starts work
5. **Your role**: Help implement features according to package tier and services

### Workflow 2: Client Review

1. Developer completes initial implementation
2. Preview URL shared with client via Red Stick Digital dashboard
3. Client reviews and provides feedback
4. Developer makes revisions
5. New preview deployment created automatically
6. **Your role**: Help implement revisions, maintain scope within package tier

### Workflow 3: Production Publishing

1. Client approves final version
2. Admin configures production domain in Red Stick Digital dashboard
3. Domain added to Vercel project
4. Admin provides DNS instructions to client
5. Client updates DNS records
6. Site goes live on client domain
7. **Your role**: Ensure site is production-ready, SEO optimized, all features working

---

## Important Constraints

### Scope Management

**Package Tier Limits**:
- **Starter**: 1 round of revisions, single-page site
- **Professional**: 2 rounds of revisions, up to 5 pages
- **Enterprise**: Custom scope, typically defined in contract

**DO NOT**:
- Implement features beyond package tier scope without approval
- Add pages beyond package tier limits
- Exceed revision rounds without discussing with admin

**DO**:
- Stay within defined package tier scope
- Ask admin if scope questions arise
- Document any scope considerations in project documentation

### Deployment

**Preview Deployments**:
- Automatic on push to main branch
- Use preview URLs for client review
- Don't manually trigger deployments (handled by Vercel)

**Production Deployment**:
- Only after client approval
- Only after admin configures domain
- Only after DNS is updated by client

---

## Questions to Ask Admin/User

When working in a client project, you may need to ask:

1. **Project Context**: 
   - "What package tier is this project?"
   - "What services are included?"
   - "What is the project timeline?"

2. **Deployment**:
   - "What is the preview URL for this project?"
   - "Has the production domain been configured?"
   - "What is the deployment status?"

3. **Scope**:
   - "Is [feature] included in the package tier?"
   - "Can we add [feature] or is it out of scope?"
   - "How many revision rounds remain?"

4. **Client Communication**:
   - "Should I implement [client request] or check with admin first?"
   - "Is this within the project scope?"

---

## File Structure Reference

### This Template Includes:

```
[project-root]/
├── .github/
│   └── copilot-instructions.template.md  # AI instructions (customize)
├── app/                                   # Next.js app structure
├── components/                            # React components
├── lib/                                   # Utilities and helpers
├── public/                                # Static assets
├── STARTER_template.md                    # Project starter (copy to STARTER.md)
├── REF_architecture.md                    # Architecture reference
├── REF_SEO.md                             # SEO reference
├── REF_styling.md                         # Styling reference
├── template.json                          # Template metadata
└── TEMPLATE.md                            # Template overview
```

### Red Stick Digital System Structure:

```
redstickdigital/
├── app/
│   └── dashboard/
│       └── admin/
│           └── projects/                  # Project management UI
├── app/api/
│   └── projects/                          # Project API routes
├── components/
│   └── Dashboard/                         # Project management components
├── docs/
│   └── UPGRADE_client_mgmt.md            # System upgrade documentation
└── types/
    └── client.ts                          # Project type definitions
```

---

## Summary

**Your Primary Focus**: Work within this client project repository, implementing features according to package tier and services.

**When You Need Management System Info**: Ask the admin/user or reference the Red Stick Digital dashboard.

**Key Constraint**: Stay within package tier scope and revision limits.

**Deployment**: Automatic via Vercel, but production domain configured by admin.

**Questions**: When in doubt about scope, deployment, or project context, ask the admin/user rather than trying to access the management system directly.

---

## Additional Resources

- **Red Stick Digital Admin Dashboard**: `/dashboard/admin/projects` (in redstickdigital repo)
- **Template Documentation**: See `TEMPLATE.md` and `README.md` in this template
- **Project Documentation**: See `STARTER.md` (created from template) for project-specific info
- **Management System Docs**: See `/Users/marshallnaquin/projects/redstickdigital/docs/UPGRADE_client_mgmt.md`