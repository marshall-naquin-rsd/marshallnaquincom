import React from 'react';

/* Three-state filter control. The primary way a visitor narrows the area
   without touching the map. */
export function StateChip({ selected = false, className = '', children, ...rest }) {
  return (
    <button
      type="button"
      className={['state-chip', className].filter(Boolean).join(' ')}
      aria-pressed={selected}
      {...rest}
    >
      {children}
    </button>
  );
}
