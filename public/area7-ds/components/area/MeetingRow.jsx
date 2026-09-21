import React from 'react';
import { Badge } from '../core/Badge.jsx';

/* One meeting in a listing: name and time on one line, place and format below. */
export function MeetingRow({ name, time, place, city, state, format, note, tags = [], className = '', ...rest }) {
  return (
    <div className={['card', className].filter(Boolean).join(' ')} {...rest}>
      <div className="meeting-header">
        <h3 className="meeting-title">{name}</h3>
        <div className="meeting-time">{time}</div>
      </div>
      {(place || city) ? (
        <div style={{ fontSize: 16, lineHeight: '26px', color: 'var(--ink-soft)', marginTop: 6 }}>
          {[place, city, state].filter(Boolean).join(' · ')}
        </div>
      ) : null}
      {(format || tags.length) ? (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
          {format ? <Badge variant="info">{format}</Badge> : null}
          {tags.map((t) => <Badge key={t} variant="success">{t}</Badge>)}
        </div>
      ) : null}
      {note ? <span className="special-note">{note}</span> : null}
    </div>
  );
}
