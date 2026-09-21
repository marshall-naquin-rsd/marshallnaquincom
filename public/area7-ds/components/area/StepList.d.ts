import * as React from 'react';

/**
 * Numbered steps, styled for the heron-deep band.
 * @startingPoint section="Area" subtitle="Numbered steps on the deep band" viewport="700x300"
 */
export interface StepListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** One string per step. Keep each to one or two plain sentences. */
  steps?: React.ReactNode[];
  className?: string;
}

export function StepList(props: StepListProps): React.ReactElement;
