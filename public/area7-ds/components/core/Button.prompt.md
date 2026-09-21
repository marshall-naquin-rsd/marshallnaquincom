The Area 7 action button — use it for every call to action; never hand-style an anchor.

```jsx
<Button variant="primary" hero href="/meetings">FIND A MEETING</Button>
<Button variant="outline" href="/first-meeting">WHAT MY FIRST MEETING IS LIKE</Button>
<Button variant="sage" href="/start-a-meeting">START A MEETING IN MY TOWN</Button>
```

Variants: `primary` (heron-light fill, near-black label — the default ask),
`secondary` (heron-deep, white label — on white sections), `sage` (sage-deep,
white label — area-service actions like starting a meeting), `outline` (on the
deep hero band or pale panels), `danger`, `small` (in-card, still 44px tall).

Never use `--sage` (#7E8F6F) under white text; `btn-sage` uses `--sage-deep`
for the 7.6:1 ratio. `hero` adds the 235px minimum the hero row expects.
