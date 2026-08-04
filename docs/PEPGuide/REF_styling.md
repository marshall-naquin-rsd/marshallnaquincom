# REF: PEP Guide Styling Guide

## ⚠️ Configuration Source of Truth

**ALWAYS check `app/globals.css` for complete styling definitions.** Everything below is a summary of what lives there. If the two disagree, `globals.css` is right and this file needs updating.

The PEP Guide's styles begin at the `.pep-theme` block in `globals.css` and continue through the typography, prose, FAQ, card, button, and chip sections. Those utility classes are defined globally but were written for the guide and are used almost exclusively by it.

**This is not the parent site's design system.** The root `docs/REF_styling.md` describes a generic template with classes like `form-input`, `badge-success`, and `alert-danger` that **do not exist in this codebase**. Do not reach for them. The inventory below is the real one.

---

## How the Theme Works

The guide overrides the site's design tokens rather than introducing a parallel set of class names. `app/PEPGuide/layout.tsx` wraps the whole section in `.pep-theme`, and that class redefines the same CSS variables the parent site sets on `:root`:

```css
.pep-theme {
  --background: #fbfaf8;
  --foreground: #2e3430;
  --muted-foreground: #5f6a65;
  --border: #dde6e2;
  --primary: #3f7365;
  --accent: #b85c33;
  --accent-soft: #f5e4dc;
  --mint: #daefea;
  --card: #ffffff;
  font-family: var(--font-kumbh), var(--font-geist-sans), sans-serif;
}
```

**The consequence that matters**: ordinary utility classes resolve differently depending on where they are. `bg-card` inside the guide is warm white on a warm off-white page; the same class on the main site is plain white. You write the same class either way — no conditionals, no prop drilling, no theme context.

This is why the cookie banner needed no special handling once it moved inside the layout: it simply inherits.

---

## 🚫 Preventing Hardcoded Colors

**CRITICAL**: Always use design system classes. Hardcoded colors don't adapt to dark mode and won't pick up the guide theme.

### ❌ Never Use Hardcoded Classes

```tsx
// ❌ DON'T
<div className="bg-white text-gray-900 border-gray-200">
  <p className="text-gray-600">Content</p>
</div>
```

### ✅ Always Use Design System Classes

```tsx
// ✅ DO
<div className="bg-card text-foreground border-border">
  <p className="text-muted-foreground">Content</p>
</div>
```

### ⚠️ And Never Use `dark:` Variants for Color

This is the guide-specific rule that trips people up. `.pep-theme` already defines a full dark-mode palette inside its own `@media (prefers-color-scheme: dark)` block. A `dark:` variant sits *on top* of that and fights it:

```tsx
// ❌ DON'T — double-handling; the variant overrides the theme's own dark value
<p className="text-foreground/80 dark:text-foreground">

// ✅ DO — one class, correct in both modes
<p className="text-muted-foreground">
```

`dark:` is acceptable only for non-color properties (a spacing or layout tweak), which so far the guide has never needed.

### Color Mapping Reference

| ❌ Hardcoded Class | ✅ Design System Class | Context |
|-------------------|----------------------|---------|
| `bg-white` | `bg-card` | Cards, list containers, panels |
| `bg-white` | `bg-background` | Page background |
| `text-gray-900` / `-800` / `-700` | `text-foreground` | Primary text |
| `text-gray-600` / `-500` / `-400` | `text-muted-foreground` | Secondary text, icons, markers |
| `bg-gray-50` / `-100` / `-200` | `bg-mint/20` or `bg-card` | Subtle emphasis (there is no `--muted` token) |
| `border-gray-200` / `-300` | `border-border` | All borders |
| `text-blue-600` | `text-primary` | Links and accents |
| `text-green-*` | `text-primary` or `chip-mint` | "Read" state |
| `bg-orange-*` | `text-accent` / `bg-accent-soft` | Section headings, warm emphasis |

**Note**: the parent site's template mentions a `--muted` background token. This codebase does not define one — `bg-muted` will not work. Use `bg-mint/20` for a soft tinted background, or `bg-card` on `bg-background` for quiet contrast.

---

## Color Palette

Defined twice in `globals.css`: once for light mode in `.pep-theme`, once for dark inside that block's `@media (prefers-color-scheme: dark)`.

| Token | Class | Light | Dark | Use |
|-------|-------|-------|------|-----|
| `--background` | `bg-background` | `#fbfaf8` warm off-white | `#1b201d` deep pine-black | Page background |
| `--foreground` | `text-foreground` | `#2e3430` dark pine | `#e8ede9` soft white | Body text, headings |
| `--muted-foreground` | `text-muted-foreground` | `#5f6a65` sage gray | `#9ba9a0` | Secondary text, breadcrumbs, markers |
| `--border` | `border-border` | `#dde6e2` pale sage | `#2e3c37` | All borders and dividers |
| `--primary` | `bg-primary` / `text-primary` | `#3f7365` pine green | `#7fb6a3` lighter pine | Buttons, links on hover, focus rings |
| `--accent` | `text-accent` | `#b85c33` terracotta | `#f0b294` soft apricot | In-page `h2`, FAQ group headings |
| `--accent-soft` | `bg-accent-soft` | `#f5e4dc` blush | `#3a2825` | Warm background wash |
| `--card` | `bg-card` | `#ffffff` | `#222b26` | Cards, list containers, panels |
| `--mint` | `bg-mint` / `border-mint` | `#daefea` | `#1e3530` | Read state, FAQ answers, hover tint |

The palette reads as Pine Grove: greens and warm neutrals, one terracotta accent, no pure black or pure gray anywhere.

---

## Typography

**Fonts** are loaded in the root layout via `next/font/google` and applied by `.pep-theme`:

- **Body**: Kumbh Sans (`--font-kumbh`) — set as the theme's `font-family`
- **Headings**: Vollkorn (`--font-vollkorn`) — applied to `h1` and `h2` inside `.pep-theme` via a descendant rule, so headings are serif automatically with no class needed

```css
.pep-theme h1,
.pep-theme h2 {
  font-family: var(--font-vollkorn), Georgia, serif;
}
```

### Heading Utilities

```tsx
// Page title — rendered by GuidePage, rarely written by hand
<h1 className="heading-xl">Welcome</h1>   // 1.875rem / 600 / tight tracking

// Section heading within a page
<h2 className="heading-lg">Getting settled</h2>   // 1.25rem / 600
```

`.pep-prose h2` is styled separately (accent color, 1.125rem) and needs no class — see below.

---

## Prose Content

**Wrap every block of body copy in `.pep-prose`.** It is a flex column with `1rem` gaps and `1.75` line height that styles its own descendants, so paragraphs and headings inside need no classes at all.

```tsx
<div className="pep-prose">
  <p>
    Greetings. You can refer to me as former peer M&hellip;
  </p>

  <h2>What to hold onto going in</h2>
  <p>
    Entering treatment is hard&hellip;
  </p>

  <ul className="pep-list">
    <li>Review the binder first.</li>
    <li>Speak to your needs.</li>
  </ul>
</div>
```

What `.pep-prose` handles for you:

| Element | Treatment |
|---------|-----------|
| `p` | `text-wrap: pretty`, foreground color |
| `h2` | Accent color, 1.125rem, 600 weight, top padding — the in-page section break |
| `strong` | 600 weight, foreground color |
| `em` | Italic |
| `a` | Underlined with 2px offset, turns `--primary` on hover |

`.pep-list` is the companion for bulleted lists: disc markers in `--muted-foreground`, `0.5rem` gaps, `text-wrap: pretty` on each item. Use it instead of `list-disc pl-5`.

---

## Component Classes

All defined in `app/globals.css`.

### Buttons

```tsx
<Link href={next} className="btn-primary">Next section →</Link>
<Link href="/PEPGuide/faq" className="btn-secondary">FAQ</Link>
<button onClick={back} className="btn-quiet">← Back</button>
```

| Class | Appearance | Used for |
|-------|-----------|----------|
| `.btn-primary` | Solid `--primary`, white text | Forward navigation, the single most likely next action |
| `.btn-secondary` | 1.5px `--primary` outline, mint fill on hover | Side routes (Quick Reference, FAQ) |
| `.btn-quiet` | Bare text in `--muted-foreground` | Back links, low-emphasis actions |

All three enforce **`min-height: 2.75rem`** (44px) — the iOS minimum touch target. Do not override it. Every interactive element in the guide should clear 44px, which is why bare `<button>`s in `SectionList` and `CookieConsent` carry an explicit `min-h-11`.

In dark mode, `.pep-theme .btn-primary` flips to a `--foreground` background with `--background` text, because pine green on near-black lacks contrast.

### Cards & Lists

```tsx
// Standalone card
<div className="card">…</div>

// Bordered list with hairline dividers, first item un-topped
<ul className="card-list">
  <li>…</li>
  <li>…</li>
</ul>

// Aside with a mint left rule
<div className="info-panel">Pool code: …</div>
```

| Class | Notes |
|-------|-------|
| `.card` | `--card` background, 1px border, `0.5rem` radius |
| `.card-list` | Same, plus `overflow: hidden` and automatic `border-top` between `li`s |
| `.info-panel` | Card with a 3px `--mint` left border, 0.875rem text — for callouts and quick facts |

### Chips

```tsx
<span className="chip chip-mint">✓ read</span>
```

`.chip` is the shape (pill, 0.7rem, 600 weight); `.chip-mint` adds the mint background with primary text. `chip` alone is unstyled color-wise — always pair it.

### FAQ Accordion

Rendered by `components/pepguide/FaqAccordion.tsx` from native `<details>`/`<summary>`, so it works with JS disabled and stays keyboard- and screen-reader-friendly. The styling is entirely CSS:

| Class | Role |
|-------|------|
| `.faq-group-heading` | Accent-colored `h2` with a 3px accent left rule |
| `.faq-item` | The `<details>` element; its `summary` gets a 3.25rem min-height, a `+` marker via `::after` that becomes `−` when open, and a primary-colored hover and focus state |
| `.faq-answer` | The open panel — 35% mint wash via `color-mix`, generous padding |

The default disclosure triangle is suppressed (`list-style: none` plus `::-webkit-details-marker`), so the `+`/`−` is the only affordance.

---

## Global Behaviors

### Focus Ring

```css
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  border-radius: 2px;
}
```

Applied globally, keyboard-only. Don't add per-component focus styles unless the default genuinely doesn't work against that background — `GuideSearch` is the one exception, using `focus:ring-2 focus:ring-primary/40` on the input.

### Reduced Motion

Every transition and animation collapses to `0.01ms` under `prefers-reduced-motion: reduce`. New animated components inherit this automatically; do not add `!important` durations that would defeat it.

---

## Layout Patterns

### Page Container

`GuidePage` establishes the standard measure, so content pages don't set their own width:

```tsx
<main className="flex flex-1 flex-col items-center px-4 pt-8 pb-32 sm:px-6 sm:pt-12 sm:pb-16">
  <div className="w-full max-w-2xl space-y-6">{/* … */}</div>
</main>
```

`max-w-2xl` (672px) is the measure everywhere — header, content, and cookie banner all use it so the section stays optically aligned.

**Note the asymmetric bottom padding**: `pb-32` on mobile drops to `pb-16` at `sm`. The extra space keeps the fixed cookie banner from covering the footer navigation on a phone.

### Sticky Header

```tsx
<header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-sm">
```

Semi-transparent with a backdrop blur; `z-10` sits below the cookie banner's `z-50`.

### Responsive Approach

Mobile-first, standard Tailwind breakpoints. In practice the guide only uses `sm:` (640px) — the design is a single column at every width, with `sm:` adjusting padding and switching a few stacked button rows to horizontal:

```tsx
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
```

Full-width tap targets on mobile (`flex-1`) become natural-width on desktop (`sm:flex-none`). That pattern appears in both `CookieConsent` and the `SectionList` reset control.

---

## Icons

**No icon library is installed** — not Lucide, not anything. The guide uses text characters instead: `→`, `←`, `›`, `✓`, `+`, `−`.

This is intentional. Six glyphs don't justify a dependency, and they inherit text color and size for free. If a real icon set ever becomes necessary, that's a decision to raise before installing.

---

## Class Inventory

Everything the guide actually has. If it's not here, it's not defined.

**Typography**: `heading-xl`, `heading-lg`
**Prose**: `pep-prose` (styles `p`, `h2`, `strong`, `em`, `a`), `pep-list`
**Buttons**: `btn-primary`, `btn-secondary`, `btn-quiet`
**Containers**: `card`, `card-list`, `info-panel`
**Chips**: `chip`, `chip-mint`
**FAQ**: `faq-group-heading`, `faq-item`, `faq-answer`
**Theme**: `pep-theme` (applied once, in the layout)

**Does not exist here**: `form-input`, `form-label`, `form-textarea`, `form-select`, `btn-danger`, `btn-ghost`, `badge-*`, `alert-*`, `table-*`, `card-hover`, `card-title`, `card-body`, `bg-muted`. The guide has no forms and no tabular data. If you need one of these, define it in `globals.css` first — and consider whether the guide needs it at all.

---

## Quick Reference

**Configuration**: `app/globals.css` (source of truth)

**Theme scope**: `.pep-theme` on the wrapper in `app/PEPGuide/layout.tsx` — overrides variables, so normal utility classes just work

**Palette**: pine green primary, terracotta accent, mint highlight, warm off-white ground

**Fonts**: Vollkorn (h1/h2, automatic), Kumbh Sans (body, automatic)

**Body copy**: wrap in `.pep-prose`; lists get `.pep-list`

**Touch targets**: 44px minimum, enforced by the button classes

**Never**: hardcoded colors, `dark:` variants for color, icon libraries, form classes that don't exist
