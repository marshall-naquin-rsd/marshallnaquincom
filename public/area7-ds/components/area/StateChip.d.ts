import * as React from 'react';

/**
 * Three-state filter chip.
 * @startingPoint section="Area" subtitle="State filter chips, selected and unselected" viewport="700x120"
 */
export interface StateChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Drives `aria-pressed` and the heron-deep selected fill. */
  selected?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function StateChip(props: StateChipProps): React.ReactElement;
