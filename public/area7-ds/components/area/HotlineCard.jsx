import React from 'react';

/* A phone number a visitor can call right now, or a marked-pending slot.
   Every Area 7 number is answered by a compulsive gambler, not a service. */
export function HotlineCard({ label, number, hours, pending = false, className = '', ...rest }) {
  const style = pending
    ? { border: '1px dashed var(--heron-light)', background: '#F7FAFB' }
    : { border: '1px solid var(--hairline)', background: 'var(--paper)' };

  return (
    <div className={className} style={{ borderRadius: 10, padding: 26, ...style }} {...rest}>
      <div className="eyebrow" style={{ marginBottom: 12, color: pending ? 'var(--heron)' : 'var(--sage-deep)' }}>{label}</div>
      {pending ? (
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: 30, lineHeight: '36px', fontWeight: 700, color: 'var(--ink-pending)' }}>
          Number pending
        </div>
      ) : (
        <a href={'tel:' + String(number).replace(/[^0-9+]/g, '')}
           style={{ fontFamily: 'var(--font-heading)', fontSize: 30, lineHeight: '36px', fontWeight: 700, color: 'var(--heron-deep)', textDecoration: 'none' }}>
          {number}
        </a>
      )}
      {hours ? <div style={{ fontSize: 15, lineHeight: '24px', color: 'var(--ink-soft)', marginTop: 10 }}>{hours}</div> : null}
    </div>
  );
}
