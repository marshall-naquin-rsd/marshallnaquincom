import React from 'react';

/* Numbered steps on the heron-deep band — the "start a meeting" sequence. */
export function StepList({ steps = [], className = '', ...rest }) {
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 14 }} {...rest}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#25353F', borderRadius: 8, padding: '18px 20px' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: 'var(--sage-line)', lineHeight: 1, flexShrink: 0, width: 26 }}>
            {i + 1}
          </div>
          <div style={{ fontSize: 16, lineHeight: '26px', color: 'var(--heron-pale)' }}>{s}</div>
        </div>
      ))}
    </div>
  );
}
