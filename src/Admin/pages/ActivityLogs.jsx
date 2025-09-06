import { logs } from "../data/activity";

export default function ActivityLogsFromAdmin() {
  return (
    <div className="dashboard-content">
      <h2 className="section-title">Activity Logs</h2>
      <div className="events-container">
        {logs.map((l)=>(
          <div className="event-row" key={l.id}>
            <div className="event-info">
              <p className="event-title">{l.actor} • {l.action}</p>
              <span className="event-badge in-review">🕒 {new Date(l.at).toLocaleString()}</span>
              <p className="event-updated">Target: {l.target}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
