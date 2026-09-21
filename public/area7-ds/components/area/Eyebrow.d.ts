import * as React from 'react';

/** Uppercase section/state label above a heading. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Switches to sage-line on the heron-deep band (sage-deep fails contrast there). */
  onDark?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Eyebrow(props: EyebrowProps): React.ReactElement;
