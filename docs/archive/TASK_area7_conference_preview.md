# TASK: Area 7 Mini-Conference Preview

## INSTRUCTIONS

1. Reference this file before starting work and update it after major changes.
2. For upgrades: List phases and steps for each phase.
3. For debugging: Log each attempt immediately to avoid repetition.
4. Keep TASK, UPGRADE and DEBUG files under 750 lines - condense or transfer information to a REF file if needed.
5. Update STARTER.md when completing upgrades or successful debugging.
6. DO NOT add, remove, or modify ANY content without explicit instructions from the user.

---

## TASK OVERVIEW

Publish the 2027 Area 7 Mini-Conference page from the Baton Rouge GA design folder as a preview on marshallnaquin.com so people can review it before it goes on its own site.

Source: `batonrougega-nextjs/Gamblers Anonymous Area 7 Conference/Area 7 Mini-Conference 2027.dc.html`

---

## PHASES / STEPS

1. Convert the Design Composer HTML into a Next.js route at `/area7` (later moved to `/2027miniconf`; no redirect from `/area7`).
2. Keep volunteer signup as client-side only (same as the source preview).
3. Link it from the home page and add a smoke test.
4. Deploy so the page is publicly shareable.

---

## PROGRESS

- [x] Convert page to Next.js
- [x] Smoke test
- [x] Browser verification
- [x] Publish to marshallnaquin.com

---

## NOTES

- Isolated route, similar to `/GBC`.
- Volunteer form does not persist; it shows the thank-you state locally.
