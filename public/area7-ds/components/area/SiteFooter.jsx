import React from 'react';

/* Area-wide footer: link columns plus the closing reassurance line. */
export function SiteFooter({ columns = [], closing, className = '', ...rest }) {
  return (
    <footer className={className} style={{ background: 'var(--heron-deep)', color: '#fff' }} {...rest}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 28px', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 32 }}>
          {columns.map((c) => (
            <div key={c.title}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{c.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.links.map((l) => (
                  <a key={l.href} href={l.href} style={{ color: 'var(--heron-pale)', textDecoration: 'none', fontSize: 16 }}>{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        {closing ? (
          <div style={{ marginTop: 36, paddingTop: 28, borderTop: '1px solid #47596A', textAlign: 'center' }}>
            <div style={{ fontSize: 15, lineHeight: '24px', color: 'var(--sage-line)' }}>{closing}</div>
          </div>
        ) : null}
      </div>
    </footer>
  );
}
