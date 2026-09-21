import React from 'react';

/* Labelled form control — input, select or textarea — with error text.
   Covers every form on the area site (meeting corrections, speaker
   requests, literature orders, member login). */
export function Field({
  as = 'input',
  id,
  label,
  error,
  hint,
  options = [],
  className = '',
  children,
  ...rest
}) {
  const controlClass =
    as === 'select' ? 'form-select' : as === 'textarea' ? 'form-textarea' : 'form-input';

  let control;
  if (as === 'select') {
    control = (
      <select id={id} className={controlClass} {...rest}>
        {children || options.map((o) => (
          <option key={typeof o === 'string' ? o : o.value} value={typeof o === 'string' ? o : o.value}>
            {typeof o === 'string' ? o : o.label}
          </option>
        ))}
      </select>
    );
  } else if (as === 'textarea') {
    control = <textarea id={id} className={controlClass} {...rest} />;
  } else {
    control = <input id={id} className={controlClass} {...rest} />;
  }

  return (
    <div className={className}>
      {label ? <label className="form-label" htmlFor={id}>{label}</label> : null}
      {control}
      {hint && !error ? <span className="form-error" style={{ color: 'var(--ink-soft)' }}>{hint}</span> : null}
      {error ? <span className="form-error">{error}</span> : null}
    </div>
  );
}
