import * as React from 'react';

/** Checkbox/radio plus label at a 44px touch target. */
export interface CheckLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox' | 'radio';
  id?: string;
  label?: React.ReactNode;
  className?: string;
}

export function CheckLabel(props: CheckLabelProps): React.ReactElement;
