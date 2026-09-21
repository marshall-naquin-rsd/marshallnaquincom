The keyboard-accessible twin of the map. Always render the chip row alongside the map — never the map alone.

```jsx
<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
  <StateChip selected>All of Area 7</StateChip>
  <StateChip>Louisiana</StateChip>
  <StateChip>Mississippi</StateChip>
  <StateChip>Southern Alabama</StateChip>
</div>
```

Selection state is `aria-pressed`, so screen readers get it for free.
