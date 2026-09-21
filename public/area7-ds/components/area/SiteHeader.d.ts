import * as React from 'react';

/**
 * Area-wide site header.
 * @startingPoint section="Area" subtitle="Heron-deep header with two-line wordmark" viewport="700x110"
 */
export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Nav items in order. Labels are title case; the header uppercases them. */
  links?: Array<{ label: string; href: string }>;
  loginHref?: string;
  homeHref?: string;
  className?: string;
}

export function SiteHeader(props: SiteHeaderProps): React.ReactElement;
