import React, { useMemo } from 'react';
import { downloadCSV } from '../utils/csv';

export default function Logs({ logs, search }) {
  const filtered = useMemo(() => {
    const q = (search || '').toLowerCase();
    return logs.filter(l => [l.actor, l.action, l.target, l.at].some(x => String(x).toLowerCase().includes(q)));
  }, [logs, search]);

  return (
    <div>
      <div className="actions-row">
        <button className="btn-secondary btn" onClick={() => downloadCSV(filtered, 'audit_logs.csv')}>⬇️ Export CSV</button>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead><tr><th>Actor</th><th>Action</th><th>Target</th><th>Timestamp</th></tr></thead>
          <tbody>
            {filtered.map(l => (
              <tr key={l.id}><td>{l.actor}</td><td>{l.action}</td><td>{l.target}</td><td>{new Date(l.at).toLocaleString()}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
