# Area 7 site — UI kit

Static, high-fidelity recreations of the Area 7 surfaces, built from this
system's token classes. They are click-through between each other; forms and
filters are cosmetic.

Published on marshallnaquin.com at `/area7`, `/area7/meetings`, and `/area7/map`.
Asset paths in these files are root-absolute (`/area7-ds/...`) so they resolve
from those pretty URLs. In-page nav uses the pretty paths, not `*.html`.

| File | Screen |
|---|---|
| `index.html` | Area home — hero, three-state map, help copy, intergroups, start-a-meeting, area business, professionals, hotlines |
| `meetings.html` | Multi-state meeting finder — state chips, sidebar filters, meeting rows |
| `area7-map.html` | The clickable three-state map, embedded by the home page |

## Known placeholders

- **Meeting data is invented.** Every group, venue and time in `meetings.html`
  and on the map is a stand-in for the real area list.
- **The southern-Alabama boundary is drawn at 32°N** and should be redrawn on
  the actual county line the area recognizes.
- **The Area 7 hotline number does not exist yet** and is rendered as a dashed
  "Number pending" card rather than omitted.
- **Only Baton Rouge and Shreveport intergroups are confirmed.** Everything
  else routes to the area secretary.

Screens are HTML rather than JSX because the interactivity is cosmetic; the
React components under `components/` are the reusable layer.
