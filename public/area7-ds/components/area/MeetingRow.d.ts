import * as React from 'react';

/**
 * One meeting in a listing.
 * @startingPoint section="Area" subtitle="Meeting listing row with place, format and note" viewport="700x200"
 */
export interface MeetingRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Group name, e.g. "Thursday Night Mid City". */
  name: string;
  /** Day and time, right-aligned and never wrapped. */
  time: string;
  /** Venue name. */
  place?: string;
  city?: string;
  /** "Louisiana" | "Mississippi" | "Southern Alabama". */
  state?: string;
  /** In person, hybrid, phone, online. */
  format?: string;
  /** Sage note for exceptions — holiday closures, entrance directions. */
  note?: string;
  /** Extra labels: "Open", "Closed", "Beginners". */
  tags?: string[];
  className?: string;
}

export function MeetingRow(props: MeetingRowProps): React.ReactElement;
