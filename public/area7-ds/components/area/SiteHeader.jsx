import React from 'react';

/* The area-wide header. Two-line wordmark (there is no logo mark), uppercase
   nav, heron-deep ground. */
export function SiteHeader({ links = [], loginHref = '#', homeHref = '#', className = '', ...rest }) {
  return (
    <header className={className} style={{ background: 'var(--heron-deep)', color: '#fff' }} {...rest}>
      <nav aria-label="Global" style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', boxSizing: 'border-box' }}>
        <a href={homeHref} style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 2.5vw, 32px)', lineHeight: 1.08, fontWeight: 700, color: '#F7F7F7' }}>
            <div style={{ whiteSpace: 'nowrap' }}>Area 7</div>
            <div style={{ whiteSpace: 'nowrap' }}>Gamblers Anonymous</div>
          </div>
        </a>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: 15, color: '#F7F7F7', letterSpacing: '1.1px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              {l.label}
            </a>
          ))}
          <a href={loginHref} style={{ fontSize: 15, color: '#F7F7F7', letterSpacing: '1.1px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Login &rarr;
          </a>
        </div>
      </nav>
    </header>
  );
}
