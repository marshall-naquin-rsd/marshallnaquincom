import * as React from 'react';

/** Status, role and milestone labels. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `officer`/`gsr` are solid role labels; `milestone` is the pill used for clean time; the rest are states. */
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'officer' | 'gsr' | 'milestone';
  className?: string;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): React.ReactElement;
