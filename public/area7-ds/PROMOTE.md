# How to turn this folder into a live design system

`area7-ds/` is a **staging copy**. A design system has to be its own project —
`styles.css` must sit at a project root for the compiler to find it, and this
project already has the Baton Rouge system bound to it.

To promote it:

1. **Download this folder** (it was offered in chat, or export `area7-ds/`).
2. **Create a new project** and upload the folder's *contents* to its root — so
   `styles.css`, `readme.md`, `SKILL.md`, `tokens/`, `components/`,
   `ui_kits/`, `guidelines/`, `assets/`, `fonts/` all land at the top level.
   Do **not** nest them inside an `area7-ds/` folder.
3. In that project, **Share → File type → Design System**. Without this, no one
   else in the org can bind it.
4. The compiler then generates `_ds_bundle.js`, `_ds_bundle.css` and
   `_ds_manifest.json`, and `window.Area7GA.*` (exact namespace comes from
   `check_design_system`) exposes the 13 components. Do not hand-write those
   generated files.

## One thing to fix after promotion

The three component cards (`components/*/*.card.html`) currently render with
plain HTML and the token classes rather than mounting the React components,
because no bundle exists in this staging project. They are visually identical to
what the components emit. After the compiler runs you can optionally rewrite
them to mount from `_ds_bundle.js` — the specimens will look the same either way.
