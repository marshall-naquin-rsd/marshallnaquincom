import * as React from 'react';

/**
 * A callable hotline number, or a pending slot.
 * @startingPoint section="Area" subtitle="Live hotline and pending-number states" viewport="700x200"
 */
export interface HotlineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Who this number reaches, e.g. "Baton Rouge & Northshore". */
  label: string;
  /** Formatted number; becomes a `tel:` link. */
  number?: string;
  /** Answering hours, e.g. "Answered 24 hours a day, seven days a week." */
  hours?: string;
  /** Dashed placeholder for a number the area has not established. */
  pending?: boolean;
  className?: string;
}

export function HotlineCard(props: HotlineCardProps): React.ReactElement;
