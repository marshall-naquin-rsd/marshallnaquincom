The atom of the meeting finder. Stack these under a state or city heading.

```jsx
<MeetingRow
  name="Thursday Night Mid City"
  time="Thursdays · 7:00 PM"
  place="St. Alban's Chapel"
  city="Baton Rouge" state="Louisiana"
  format="In person" tags={['Open']}
  note="Use the side entrance after 6:45."
/>
```

Time is never wrapped — keep `meeting-time` on one line. Put access details
and closures in `note`, not in the group name.
