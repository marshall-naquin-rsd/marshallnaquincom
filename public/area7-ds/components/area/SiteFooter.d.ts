import * as React from 'react';

/**
 * Area-wide site footer.
 * @startingPoint section="Area" subtitle="Link columns and closing reassurance line" viewport="700x340"
 */
export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Three or four columns of links. */
  columns?: Array<{ title: string; links: Array<{ label: string; href: string }> }>;
  /** The centered closing sentence. Keep it about reaching a person, not about the organization. */
  closing?: React.ReactNode;
  className?: string;
}

export function SiteFooter(props: SiteFooterProps): React.ReactElement;
