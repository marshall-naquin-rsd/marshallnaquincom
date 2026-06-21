# REF: Styling Guide

<!-- CUSTOMIZE: Update color palette and fonts throughout this file -->

## 🎨 Design Decision Process

**This file should be populated during Phase 4.5 of project setup.**

If you haven't completed the design system planning phase yet:

1. Follow **Phase 4.5** in `NEW_project_start.md`
2. Install icon libraries temporarily
3. Create design showcase page from `design_page_template.tsx`
4. Make design decisions (colors, typography, buttons, icons, spacing, cards)
5. AI will populate this file with your choices
6. Delete design page and remove unused icon libraries

**If this file already has content below**, the design decisions have been made.

---

## ⚠️ Configuration Source of Truth

**ALWAYS check `app/globals.css` for complete styling definitions.** This file contains:

- CSS variables and color palette
- Tailwind theme extensions
- All utility classes (`.form-input`, `.btn-primary`, `.badge-success`, etc.)
- Custom component styles
- Responsive breakpoints

This REF file provides essential patterns and common usage - see `archive/REF_styling_DETAILED.md` for comprehensive examples.

---

## 🚫 Preventing Hardcoded Colors

**CRITICAL**: Always use design system classes instead of hardcoded color classes. Hardcoded colors don't adapt to dark mode and create maintenance problems.

### ❌ Never Use Hardcoded Classes

```tsx
// ❌ DON'T - Hardcoded colors
<div className="bg-white text-gray-900 border-gray-200">
  <p className="text-gray-600">Content</p>
</div>
```

### ✅ Always Use Design System Classes

```tsx
// ✅ DO - Design system classes
<div className="bg-card text-foreground border-border">
  <p className="text-muted-foreground">Content</p>
</div>
```

### Color Mapping Reference

| ❌ Hardcoded Class | ✅ Design System Class | Context |
|-------------------|----------------------|---------|
| `bg-white` | `bg-card` | Container/card backgrounds |
| `bg-white` | `bg-background` | Page backgrounds |
| `text-gray-900` | `text-foreground` | Primary text |
| `text-gray-800` | `text-foreground` | Primary text |
| `text-gray-700` | `text-foreground` | Primary text |
| `text-gray-600` | `text-muted-foreground` | Secondary text |
| `text-gray-500` | `text-muted-foreground` | Tertiary/muted text |
| `text-gray-400` | `text-muted-foreground` | Icons, placeholders |
| `bg-gray-50` | `bg-muted` or `bg-background` | Subtle backgrounds |
| `bg-gray-100` | `bg-muted` | Muted backgrounds |
| `bg-gray-200` | `bg-muted` | Muted backgrounds |
| `border-gray-200` | `border-border` | Borders |
| `border-gray-300` | `border-border` | Borders |
| `text-blue-600` | `text-primary` or `text-secondary` | Links, accents |

### Context-Aware Choices

- **Backgrounds**: Use `bg-card` for cards/containers, `bg-background` for page backgrounds, `bg-muted` for subtle/muted backgrounds
- **Text**: Use `text-foreground` for primary text, `text-muted-foreground` for secondary/muted text
- **Borders**: Always use `border-border`
- **Buttons**: Use existing button utility classes (`.btn-primary`, `.btn-secondary`) where possible

---

## Tailwind CSS 4 Configuration

### Non-Standard Setup

⚠️ **Unlike standard Tailwind**: Configuration lives in `app/globals.css`, NOT `tailwind.config.js`.

```css
/* app/globals.css */
@import "tailwindcss";

/* CSS Variables - Design System */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --border: 214.3 31.8% 91.4%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
}

/* Tailwind Theme Extension */
@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-border: hsl(var(--border));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --font-heading: "[YOUR_HEADING_FONT]", sans-serif;
  --font-body: "[YOUR_BODY_FONT]", Helvetica, Arial, sans-serif;
}
```

**Note**: Update these HSL values with your chosen color palette during Phase 4.5 design system planning.

### Color Palette

<!-- CUSTOMIZE: Define your color palette (minimum 9 colors recommended) -->

**Primary Colors**:

- `primary`: #XXXXXX (your primary brand color)
- `secondary`: #XXXXXX (your secondary brand color)
- `accent`: #XXXXXX (accent/highlight color)
- `text-dark`: #333333 (dark text)
- `gray-light`: #F5F5F5 (light background)

**Utility Colors** (recommended):

- `success`: #10B981 (green for success states)
- `warning`: #F59E0B (orange for warnings)
- `error`: #EF4444 (red for errors)
- `info`: #3B82F6 (blue for info)

**Usage**: `bg-primary`, `text-secondary`, `border-accent`

### Typography

<!-- CUSTOMIZE: Replace with your chosen fonts -->

**Fonts**:

- `font-heading` / `font-[your-heading-font]` - Headings ([YOUR_HEADING_FONT])
- `font-body` / `font-[your-body-font]` - Body text ([YOUR_BODY_FONT])

**Loading** (in `app/layout.tsx` using `next/font/local`):

```tsx
const yourHeadingFont = localFont({
  src: "./fonts/[YourHeadingFont].ttf",
  variable: "--font-[your-heading-font]",
  display: "swap",
});
```

## Common Styling Patterns

<!-- CUSTOMIZE: Adjust typography sizes and colors for your design -->

### Page Titles

**Standard pages**:

```tsx
<h1 className="font-heading text-[56px] leading-[60px] font-bold text-secondary text-center mb-6">
  Page Title
</h1>
```

**Home page hero**:

```tsx
<h1 className="hero-h1 text-white mb-8">[Your Site Title]</h1>
```

### Section Headings

```tsx
// H2 - Sections
<h2 className="font-heading text-[40px] leading-[48px] font-bold text-secondary mb-4">

// H3 - Subsections
<h3 className="font-heading text-[32px] leading-[40px] font-semibold text-secondary mb-3">

// H4 - Components
<h4 className="font-heading text-[24px] leading-[32px] font-semibold text-text-dark mb-2">
```

### Body Text

```tsx
// Paragraph
<p className="font-body text-[18px] leading-7 text-foreground">

// Small text
<p className="text-[14px] leading-5 text-muted-foreground">

// Lead paragraph (larger)
<p className="text-[20px] leading-8 text-foreground mb-6">
```

## Utility Classes (Defined in globals.css)

### Forms

```tsx
// Input
<input className="form-input" />
// → w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary transition-colors

// Textarea
<textarea className="form-textarea" />

// Select
<select className="form-select" />

// Label
<label className="form-label" />
// → block text-foreground font-medium mb-2
```

**Complete definitions in `app/globals.css`**

### Buttons

```tsx
// Primary button
<button className="btn-primary">Submit</button>
// → bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90 transition-colors

// Secondary button
<button className="btn-secondary">Cancel</button>

// Danger button
<button className="btn-danger">Delete</button>

// Ghost button
<button className="btn-ghost">View More</button>
```

**Complete definitions in `app/globals.css`**

### Status Badges

```tsx
<span className="badge-success">Approved</span>
<span className="badge-warning">Pending</span>
<span className="badge-danger">Rejected</span>
<span className="badge-info">Info</span>
```

**Complete definitions in `app/globals.css`**

### Cards

```tsx
// Standard card
<div className="card">
  <h3 className="card-title">Title</h3>
  <p className="card-body">Content</p>
</div>

// Card with hover effect
<div className="card card-hover">
  ...
</div>
```

**Complete definitions in `app/globals.css`**

### Tables

```tsx
<table className="table-base">
  <thead className="table-header">
    <tr>
      <th className="table-th">Column</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-row">
      <td className="table-td">Data</td>
    </tr>
  </tbody>
</table>
```

**Complete definitions in `app/globals.css`**

### Alerts

```tsx
<div className="alert-success">Success message</div>
<div className="alert-warning">Warning message</div>
<div className="alert-danger">Error message</div>
<div className="alert-info">Info message</div>
```

**Complete definitions in `app/globals.css`**

## Responsive Breakpoints

**Tailwind defaults**:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Common patterns**:

```tsx
// Mobile-first: Stack vertically, then horizontal on md+
<div className="flex flex-col md:flex-row">

// Show on desktop only
<div className="hidden lg:block">

// Different text sizes
<h1 className="text-[32px] md:text-[48px] lg:text-[56px]">
```

## Layout Patterns

### Container

```tsx
// Standard container (max-width with centered content)
<div className="container mx-auto px-4">
  {/* Content */}
</div>

// Full-width section with max-width content
<section className="w-full">
  <div className="container mx-auto px-4 py-12">
    {/* Content */}
  </div>
</section>
```

### Grid Layouts

```tsx
// 2-column grid (responsive)
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// 3-column grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Auto-fit grid (responsive card grid)
<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
```

### Flexbox Patterns

```tsx
// Center content
<div className="flex items-center justify-center min-h-screen">

// Space between items
<div className="flex justify-between items-center">

// Vertical stack with spacing
<div className="flex flex-col gap-4">
```

## Icons

**Package**: Lucide React (`lucide-react`)

```tsx
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react'

// Standard size
<CheckCircle className="w-5 h-5 text-green-500" />

// Inline with text
<span className="flex items-center gap-2">
  <CheckCircle className="w-4 h-4" />
  Success
</span>
```

## Common Component Patterns

### Center Content (Full Screen)

```tsx
<div className="flex items-center justify-center min-h-screen">
  <div className="text-center">{/* Centered content */}</div>
</div>
```

### Sticky Footer

```tsx
// In app/layout.tsx
<body className="flex flex-col min-h-screen">
  <Header />
  <main className="flex-1">{children}</main>
  <Footer />
</body>
```

### Truncate Long Text

```tsx
// Single line
<p className="truncate">Long text that gets truncated...</p>

// Multiple lines (3 lines)
<p className="line-clamp-3">
  Long text that gets truncated after 3 lines...
</p>
```

### Loading Spinner

```tsx
// Use components/common/LoadingSpinner.tsx
import LoadingSpinner from "@/components/common/LoadingSpinner";

<LoadingSpinner size="medium" />;
```

### Skeleton Loading

```tsx
<div className="animate-pulse space-y-4">
  <div className="h-4 bg-muted rounded w-3/4"></div>
  <div className="h-4 bg-muted rounded w-1/2"></div>
</div>
```

## Transitions & Animations

**Standard transitions** (defined in globals.css):

```tsx
// Smooth transitions
<button className="transition-all duration-200 hover:scale-105">

// Background color change
<div className="transition-colors duration-300 bg-card hover:bg-muted">

// Opacity fade
<div className="transition-opacity duration-200 hover:opacity-80">
```

**Animations**:

```tsx
// Pulse (loading states)
<div className="animate-pulse">

// Spin (loading icon)
<div className="animate-spin">

// Bounce
<div className="animate-bounce">
```

## Quick Reference

**Configuration**: `app/globals.css` (source of truth)

**Color Palette**: primary-blue, secondary-blue, accent-gold, text-dark, gray-light

**Fonts**: font-league-spartan (headings), font-helvetica (body)

**Utility Classes**: form-input, btn-primary, badge-success, card, alert-danger (all defined in globals.css)

**Icons**: Lucide React (`lucide-react`)

**Responsive**: Mobile-first design with Tailwind breakpoints (sm/md/lg/xl/2xl)

**Complete Examples**: `archive/REF_styling_DETAILED.md`

**Component Styles**: Check `app/globals.css` for all custom utility class definitions
