import { useState } from "react";
import LPHeader from "../components/MiniHeader";

export default function NotificationsFromAdmin() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState([]);

  //simulated as if the status received from the firebase api response
  const status = "✅ Sent";
  const send = () => {
    if (!message.trim()) return;
    setSent([{ id: Date.now(), text: message, at: new Date().toLocaleString() }, ...sent]);
    setMessage("");
  };

  return (
    <div>
      <LPHeader />
      <div className="dashboard-content">
      <h2 className="section-title">Send Announcement</h2>
      <div className="actions-row">
        <input className="notif-input" placeholder="Type a message to broadcast..." value={message} onChange={(e)=>setMessage(e.target.value)} />
        {/**here needs to be added an input for specifying who is the notif intended for */}
        <button className="btn" onClick={send}>Send</button>
      </div>

      <div className="events-container">
        {sent.map(s => (
          <div className="event-row" key={s.id}>
            <div className="event-info">
              <p className="event-title">Announcement</p>
              <span className="event-badge approved">{status}</span>
              <p className="event-updated">{s.at}</p>
              <p style={{marginTop:8}}>{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
