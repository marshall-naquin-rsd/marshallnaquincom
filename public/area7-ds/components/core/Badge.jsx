import React from 'react';

const VARIANTS = {
  success: 'badge-success',
  warning: 'badge-warning',
  danger: 'badge-danger',
  info: 'badge-info',
  officer: 'badge-officer',
  gsr: 'badge-gsr',
  milestone: 'badge-milestone',
};

/* Small status or role label. Roles (officer, gsr) are solid; states are tinted. */
export function Badge({ variant = 'info', className = '', children, ...rest }) {
  return (
    <span className={[VARIANTS[variant] || VARIANTS.info, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </span>
  );
}
