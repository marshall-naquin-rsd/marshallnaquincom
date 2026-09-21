import React from 'react';

/* An intergroup, or the "ask the area" fallback where none exists yet.
   Area 7 has confirmed intergroups only in Baton Rouge and Shreveport;
   everywhere else uses status="none". */
export function IntergroupCard({ name, region, description, linkLabel, href, status = 'confirmed', className = '', ...rest }) {
  const none = status === 'none';
  const classes = ['card', none ? 'card-sage' : 'card-milestone', className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {none ? <div className="eyebrow" style={{ marginBottom: 12 }}>Everywhere else</div> : null}
      {region && !none ? <div className="eyebrow" style={{ marginBottom: 12 }}>{region}</div> : null}
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 26, lineHeight: '32px', fontWeight: 700, color: 'var(--heron-deep)', marginBottom: 10 }}>
        {name}
      </div>
      <div style={{ fontSize: 16, lineHeight: '26px', color: none ? '#4A5A46' : 'var(--ink-soft)', marginBottom: 18 }}>
        {description}
      </div>
      {href ? (
        <a href={href} style={{ fontSize: 15, fontWeight: 600, color: none ? 'var(--sage-deep)' : 'var(--heron)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
          {linkLabel} &rarr;
        </a>
      ) : null}
    </div>
  );
}
