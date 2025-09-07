import React, { useMemo } from 'react';

export default function SAEvents({ events, search }) {
  const filtered = useMemo(() => {
    const q = (search || '').toLowerCase();
    return events.filter(e => [e.id, e.event, e.status, e.owner].some(x => String(x).toLowerCase().includes(q)));
  }, [events, search]);

  return (
    <div className="events-section">
      <h2 className="section-title">Events & Applications</h2>
      <div className="events-container">
        {filtered.map(o => (
          <div className="event-row" key={o.id}>
            <div className="event-info">
              <p className="event-title">{o.event} — <small>#{o.id}</small></p>
              <span className={`event-badge ${o.status === 'Approved' ? 'approved' : o.status === 'In Review' ? 'in-review' : 'rejected'}`}>
                {o.status === 'Approved' ? '✅ Approved' : o.status === 'In Review' ? '🟡 In Review' : '⛔ Rejected'}
              </span>
              <p className="event-updated">Updated {o.updatedAt}</p>
            </div>
            <div className="event-action">
              <button className="event-button primary">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
