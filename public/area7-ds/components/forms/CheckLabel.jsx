import React from 'react';

/* Checkbox or radio with its label, at a 44px touch target. */
export function CheckLabel({ type = 'checkbox', id, label, className = '', ...rest }) {
  return (
    <label className={['form-check-label', className].filter(Boolean).join(' ')} htmlFor={id}>
      <input type={type} id={id} {...rest} />
      {label}
    </label>
  );
}
