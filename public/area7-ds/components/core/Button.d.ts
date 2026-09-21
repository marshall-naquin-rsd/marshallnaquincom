import * as React from 'react';

/**
 * Area 7 action button.
 * @startingPoint section="Core" subtitle="Five button variants, link or button element" viewport="700x200"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual treatment. `primary` heron-light, `secondary` heron-deep, `sage` for area-service actions, `outline` on pale grounds, `outlineDark` on the heron-deep band, `danger` destructive, `small` inside cards. */
  variant?: 'primary' | 'secondary' | 'sage' | 'outline' | 'outlineDark' | 'danger' | 'small';
  /** Applies the 235px minimum width used by hero actions. */
  hero?: boolean;
  /** Renders an anchor instead of a button. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): React.ReactElement;
