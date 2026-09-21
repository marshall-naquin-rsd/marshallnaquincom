import * as React from 'react';

/**
 * An intergroup, or the area-contact fallback where none exists.
 * @startingPoint section="Area" subtitle="Confirmed intergroup and no-intergroup fallback" viewport="700x300"
 */
export interface IntergroupCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** Eyebrow above the name, e.g. "Northwest Louisiana". */
  region?: string;
  description?: string;
  linkLabel?: string;
  href?: string;
  /** `confirmed` = brass top rule. `none` = sage panel, "Everywhere else" eyebrow. Never show a speculative intergroup as confirmed. */
  status?: 'confirmed' | 'none';
  className?: string;
}

export function IntergroupCard(props: IntergroupCardProps): React.ReactElement;
