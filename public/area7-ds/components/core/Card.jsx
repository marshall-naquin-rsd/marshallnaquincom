import React from 'react';

/* The Area 7 record card. Unlike the parent's marketing cards these carry a
   hairline, so meeting and document listings read as records. */
export function Card({ tone = 'default', raised = false, className = '', children, ...rest }) {
  const classes = [
    'card',
    tone === 'sage' ? 'card-sage' : '',
    tone === 'milestone' ? 'card-milestone' : '',
    raised ? 'card-raised' : '',
    className,
  ].filter(Boolean).join(' ');

  return <div className={classes} {...rest}>{children}</div>;
}
