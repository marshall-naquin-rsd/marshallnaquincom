# Area 7 Gamblers Anonymous — Design System

Area 7 is the Gamblers Anonymous service area covering **all of Louisiana, all
of Mississippi, and the southern counties of Alabama**. It sits organizationally
*above* the city intergroups inside it — of which only **Baton Rouge** and
**Shreveport** are currently confirmed.

This system exists so Area 7 can have its own voice and its own site without
diluting the Baton Rouge intergroup's site, which performs well and keeps its
own traffic. **The two are deliberately separate systems.** Area 7 routes
visitors *outward* to their local intergroup or group; it does not compete for
them.

## Relationship to the Baton Rouge system

Area 7 was derived from the Baton Rouge GA design system (the published
`batonrougega-nextjs` component library) and then moved away from it on purpose:

| | Baton Rouge | Area 7 |
|---|---|---|
| Palette | Sky blues `#8BB7D1` / `#6B92B0`, gold `#d4af37` | Heron gray-blue `#2F4250`–`#A3B8C4`, sage `#7E8F6F`, brass `#8A6D3B` |
| Headings | Centered on every page | Left-aligned; centering is opt-in via `.page-heading` |
| Content column | 805px | 1200px (805px kept for prose) |
| Cards | Marketing cards, no border | Hairlined record cards |
| Job of the page | Get you to a meeting in one city | Route you to the right *place*, across three states |

Parent utility names (`--primary-blue`, `--secondary-blue`, `--accent-gold`,
`--text-dark`) are kept as **back-compat aliases** pointing at Area 7 values, so
markup lifted from the parent renders in the Area 7 palette instead of breaking.
Do not author new code against those names.

## Sources

- **Baton Rouge GA design system** — project `f0f6e662-2480-4388-8ba3-5e0b892f064a`,
  published from the `batonrougega-nextjs@0.1.0` Next.js codebase. Palette, League
  Spartan headings, form classes and the imagery set come from there.
- **`batonrougega-nextjs`** local codebase (attached during design) — Tailwind v4,
  CSS-first config in `app/globals.css`, no `tailwind.config.js`.
- **gamblersanonymous.org** — GA International, for fellowship language and the
  International Service Office listing process.

No Figma file and no Area 7 brand assets were provided.

---

## CONTENT FUNDAMENTALS

The voice belongs to a member talking to a stranger who may be in the worst week
of their life. It is plain, unhurried, and never sells.

**Person.** Second person to the visitor ("you"), third person about the
fellowship ("the area", "a group", "a trusted servant"). Never "we" — Area 7 is
not a company with a marketing department. Never "our services".

**Sentences.** Short declaratives. No subordinate stacking. Contractions are
avoided in the hero and help copy ("You do not have to give your name", not
"You don't have to") — it reads steadier. They are fine in incidental UI.

**What we say and don't say:**

| Write | Not |
|---|---|
| "compulsive gambler" | "addict", "problem gambler", "gambling addict" |
| "Only you can decide whether you are a compulsive gambler." | "Take our assessment to find out if you have a problem." |
| "There are no dues or fees." | "Free!" |
| "Answered by a compulsive gambler, not a call center." | "24/7 support hotline" |
| "Two people and a room is a meeting." | "Launch a chapter in your community" |
| "Hold the meeting, whether one person comes or twelve." | "Grow your group" |
| "Meeting data above is placeholder." | silently showing fake data as real |

**Anonymity is a hard constraint, not a preference.** Never a member's full
name, never a photograph of a recognizable face, never a testimonial with an
attribution. Examples in this system use first name and last initial at most,
and usually no name at all. Forms never ask for a full legal name.

**Honesty about gaps.** Where the area has not decided or does not yet cover
something — the hotline, intergroups outside Baton Rouge and Shreveport, towns
with no meeting — say so in the interface. A visible gap invites someone to fill
it; a hidden gap makes the area look like it is covering ground it isn't. This
is why `HotlineCard` has a `pending` state and `IntergroupCard` has
`status="none"`.

**Casing.** Sentence case for headings and body. `UPPERCASE` only for button
labels and nav items. Eyebrows are uppercase with 2px tracking. Middots
separate list items ("Louisiana · Mississippi · Southern Alabama").

**No emoji, anywhere.** Not in UI, not in copy, not in documents.

---

## VISUAL FOUNDATIONS

**The feeling to hit:** a quiet civic reference document. Closer to a well-kept
library noticeboard than to a health startup. Muted, steady, slightly cool,
nothing urgent or bright competing for attention — because the person reading it
may already be overwhelmed.

### Color

Three families and nothing else.

- **Heron gray-blue** carries all structure: `--heron-deep #2F4250` (header,
  footer, hero band, every heading), `--heron #4F6B7C` (links, focus ring —
  5.4:1 on white), `--heron-light #A3B8C4` (primary button fill, always with a
  `#1B1B1B` label), `--heron-pale #E3EAEE` (info boxes, table heads).
- **Sage** is the single accent: `--sage #7E8F6F` for hairlines, map pins and
  borders; `--sage-deep #4B5842` for **any** sage that carries text or sits
  under white (7.6:1); `--sage-line #C3CDB8` for accent text on the deep band;
  `--sage-pale #F3F5EF` for advisory panels.
- **Brass** `#8A6D3B` is reserved for **clean-time milestones and confirmed
  intergroups**. If brass appears anywhere else it is misused.

Feedback is a muted clay `--danger #9B4A3F` — not a fire-engine red. Sage does
double duty as success.

**The contrast rule that trips people up:** `--sage` under white text is 3.5:1
and fails. Every white-on-sage surface uses `--sage-deep`. Likewise
`--heron-light` buttons take a near-black label, never white.

**Muted text has a floor too.** `--ink-muted #8B979D` is for *placeholders
only* — it does not clear 3:1 on a pale ground. Anything that carries meaning
while looking deliberately unfilled (a pending hotline number, a TBD officer
slot) uses `--ink-pending #6E7F8A`, which clears the headline floor at 3.6:1
on `#F7FAFB`. Never set a 30px status value in `--ink-muted`.

### Type

League Spartan for every heading (400/500/600/700 shipped in `fonts/`);
the Helvetica Neue stack for body. Two families, no third.

- h1 56/60 · 700 — **left aligned**, the clearest break from the parent
- `.hero-h1` 64/67 · 700, clamped down to 36px on phones
- `.section-heading` 40/48 · 700
- Card titles 26/32 · 700
- `.lede` 20/32 · `text-wrap: pretty`
- Body 18/29
- `.eyebrow` 13px · 700 · 2px tracking · uppercase · sage-deep
- `.meeting-title` / `.meeting-time` 22/30 — the time never wraps

Minimum body size anywhere is 15px; touch targets are 44px without exception.

### Backgrounds and bands

No gradients. No textures. No patterns. Pages alternate three flat grounds:
`--paper #FAFAF8` (default reading), `#fff` with hairline rules top and bottom
(the section that needs emphasis), and `--heron-deep` (hero, calls to action,
header, footer). At most two grounds before a deep band, and never two deep
bands adjacent.

### Cards, borders, radii

Cards are white, `1px solid --hairline #DFE4E2`, **10px** radius, 24px padding,
and a barely-there shadow `0 1px 2px rgba(29,42,51,.06)`. The hairline is the
signature: it makes a listing read as a record rather than an ad. Variants:
`card-milestone` (4px brass top rule), `card-sage` (sage-pale ground, sage-line
border), `card-raised` (`0 8px 20px -8px rgba(29,42,51,.22)`) for overlays.

Radii: 4px small controls and badges · 6px buttons, inputs, info boxes ·
10px cards · 12px images and the map frame · 999px only for state chips and
milestone pills.

### Transparency and blur

Almost none. Two sanctioned uses: the heron focus ring
`rgba(79,107,124,.18)`, and card shadows. No frosted glass, no scrims over
photography, no `backdrop-filter`. Disabled controls use `opacity: .5`.

### Motion

200ms color fades on hover, nothing else. Nothing scales, nothing translates,
nothing bounces. Press states change color only. The single entrance animation
is `.animate-slide-in-right` (300ms ease-out) for toasts. No scroll-triggered
reveals, no parallax, no counting numbers — an area service page is not a
product launch.

**Hover:** a darker step of the same hue. Links go `--heron` → `--heron-deep`.
Underline-on-hover only for phone numbers. **Focus:** 3px heron ring at 18%;
`outline: none` never appears without a replacement ring.

### Imagery

Cool, slightly desaturated photographs of stone, water, plants, hands and open
ground — patience and steadiness. 12px radius, `object-fit: cover`, square or
4:3. **No gambling iconography in editorial imagery** — no chips, cards, dice,
slot reels or cash. No recognizable faces, ever. The six images in `assets/`
carry over from the parent site.

### Map vocabulary (Area 7 only — the parent had no map)

The map is the area's primary navigation and has its own small language:
land `#D9E1D2` on sage strokes, selected land `#B7C5A8`, out-of-area hatched
and dashed, water `--heron-pale`. Pins: **sage-deep** = a listed meeting,
**brass** = an intergroup office, **white with a dashed sage ring** = a town
where people have asked for a meeting but none has started.

**Always render the `StateChip` row alongside the map.** The map alone is not
keyboard- or screen-reader-accessible.

---

## ICONOGRAPHY

**This system has almost no icons, on purpose.** The parent site uses none
beyond social glyphs, and an area reference page does not need them. Where
direction is needed, a literal HTML arrow entity (`&rarr;`) follows the link
text — that is the house convention and it appears on every card link in the
UI kit.

- No icon font, no sprite sheet, no SVG icon set was present in either source.
- **No icon library is linked and none should be added** without the area
  asking for one. If one becomes necessary, use a CDN set with a 1.5px stroke
  that sits quietly next to the hairlines (Lucide is the closest match) and
  document the addition here.
- Map pins are plain SVG circles carrying the `.map-pin*` classes — geometry,
  not illustration.
- **No emoji, and no unicode pictographs as icons.** The middot and arrow
  entities are the only non-alphabetic glyphs in use.

## LOGO

**Area 7 has no logo and none was invented.** GA is an anonymous fellowship
without an area-level mark, and drawing one would be presumptuous. The wordmark
is type: "Area 7" over "Gamblers Anonymous", League Spartan 700, two lines,
`#F7F7F7` on `--heron-deep`, set in `SiteHeader`. If the area adopts a real
mark, it replaces that block and nothing else.

## Intentional additions

Components with no counterpart in the Baton Rouge source, added because the
three-state area genuinely needs them:

- `Eyebrow` — state/section context a single-city site never needed
- `StateChip` — the accessible twin of the map
- `IntergroupCard` — routes outward, including the honest "no intergroup" state
- `HotlineCard` — including the `pending` slot
- `MeetingRow` — carries state and city, which the parent's listing did not
- `StepList` — the start-a-meeting sequence

---

## Index

| Path | What |
|---|---|
| `styles.css` | The one stylesheet consumers link. Imports only. |
| `tokens/fonts.css` | League Spartan `@font-face` rules |
| `tokens/colors.css` | Color custom properties + `@theme inline` mapping |
| `tokens/typography.css` | Heading scale, eyebrow, lede, meeting lines, responsive steps |
| `tokens/layout.css` | Base elements, content columns, info box, mobile utilities, animation |
| `tokens/components.css` | Button, form, card, badge, state-chip and map classes |
| `components/core/` | `Button`, `Badge`, `Card` |
| `components/forms/` | `Field`, `CheckLabel` |
| `components/area/` | `Eyebrow`, `StateChip`, `MeetingRow`, `IntergroupCard`, `HotlineCard`, `StepList`, `SiteHeader`, `SiteFooter` |
| `ui_kits/area7-site/` | Home and meeting-finder recreations + the three-state map |
| `guidelines/` | 14 specimen cards — colors, type, spacing, brand |
| `assets/` | Six editorial photographs carried from the parent site |
| `SKILL.md` | Agent Skills wrapper, for use in Claude Code |

## Open questions for the area

1. **Hotline structure** — one area number, one per state, or a router to the
   intergroups? `HotlineCard` has the slot either way.
2. **The southern-Alabama boundary** is drawn at 32°N and needs the real county
   line.
3. **The meeting list** is entirely placeholder until the area sends the real one.
4. **Member login** — does Area 7 run its own portal, or does the member area
   stay with the intergroups?
