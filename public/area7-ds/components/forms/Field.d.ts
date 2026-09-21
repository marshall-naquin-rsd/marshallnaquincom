import * as React from 'react';

/**
 * Labelled input, select or textarea.
 * @startingPoint section="Forms" subtitle="Input, select and textarea with label and error" viewport="700x300"
 */
export interface FieldProps {
  /** Which control to render. */
  as?: 'input' | 'select' | 'textarea';
  id?: string;
  label?: string;
  /** Error message — renders in danger red below the control. */
  error?: string;
  /** Neutral helper text. Ignored when `error` is set. */
  hint?: string;
  /** Select options; strings or `{value,label}`. */
  options?: Array<string | { value: string; label: string }>;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export function Field(props: FieldProps): React.ReactElement;
