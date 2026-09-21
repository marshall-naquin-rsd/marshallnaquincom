Every labelled control on an Area 7 form. Do not re-derive `form-input` styling.

```jsx
<Field id="city" label="City" placeholder="Hammond" />
<Field as="select" id="state" label="State" options={['Louisiana','Mississippi','Southern Alabama']} />
<Field as="textarea" id="note" label="What should we correct?" error="Tell us which meeting." />
```

Focus is a heron ring, not a browser outline. Never ask for a member's full
name in an Area 7 form — first name and last initial is the convention.
