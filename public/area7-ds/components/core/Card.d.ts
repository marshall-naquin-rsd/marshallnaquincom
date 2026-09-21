import * as React from 'react';

/**
 * Hairlined record card.
 * @startingPoint section="Core" subtitle="Default, sage and milestone card tones" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `sage` tints the panel for asides; `milestone` adds the brass top rule used for confirmed intergroups. */
  tone?: 'default' | 'sage' | 'milestone';
  /** Lifts the card off the page for overlays and featured panels. */
  raised?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Card(props: CardProps): React.ReactElement;
