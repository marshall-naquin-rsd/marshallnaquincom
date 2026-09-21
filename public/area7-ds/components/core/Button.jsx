import React from 'react';

const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  sage: 'btn-sage',
  outline: 'btn-outline',
  outlineDark: 'btn-outline btn-outline-dark',
  danger: 'btn-danger',
  small: 'btn-small',
};

/* Area 7 action button. Labels are set in the markup, uppercase by
   convention on hero and section CTAs. */
export function Button({
  variant = 'primary',
  hero = false,
  href,
  type = 'button',
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [VARIANTS[variant] || VARIANTS.primary, hero ? 'btn-hero' : '', className]
    .filter(Boolean).join(' ');

  if (href && !disabled) {
    return (
      <a href={href} className={classes} style={{ textDecoration: 'none' }} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
