import React from 'react';

/* The small uppercase label above a heading. New in Area 7 — it carries the
   state or section context the single-city parent site never needed. */
export function Eyebrow({ onDark = false, className = '', children, ...rest }) {
  return (
    <div
      className={['eyebrow', className].filter(Boolean).join(' ')}
      style={onDark ? { color: 'var(--sage-line)' } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
