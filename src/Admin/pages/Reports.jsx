import { useMemo, useState } from "react";
import { orders } from "../data/orders";

export default function Reports() {
  const [status, setStatus] = useState("All");
  const rows = useMemo(
    () => orders.filter(o => status === "All" ? true : o.status === status),
    [status]
  );

  const exportCSV = () => {
    const header = "ID,Event,Status,UpdatedAt\n";
    const body = rows.map(r => `${r.id},"${r.event}",${r.status},${r.updatedAt}`).join("\n");
    const blob = new Blob([header + body], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `reports-${status.toLowerCase()}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="dashboard-content">
      <div className="actions-row">
        <select className="input" value={status} onChange={(e)=>setStatus(e.target.value)}>
          <option>All</option><option>Approved</option><option>In Review</option><option>Rejected</option>
        </select>
        <button className="btn" onClick={exportCSV}>Export CSV</button>
      </div>

      <div className="events-container">
        {rows.map((o)=>(
          <div className="event-row" key={o.id}>
            <div className="event-info">
              <p className="event-title">{o.event}</p>
              <span className={`event-badge ${o.status === "Approved" ? "approved" : o.status === "In Review" ? "in-review" : "rejected"}`}>
                {o.status === "Approved" ? "✅ Approved" : o.status === "In Review" ? "🟡 In Review" : "⛔ Rejected"}
              </span>
              <p className="event-updated">Updated {o.updatedAt}</p>
            </div>
            <div className="event-action"><button className="event-button secondary">Open</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}
