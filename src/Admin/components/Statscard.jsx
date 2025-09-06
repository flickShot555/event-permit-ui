export default function StatsCard({ icon, title, value, variant = "active" }) {
    return (
      <div className={`status-card ${variant === "active" ? "active-card" : "pending-card"}`}>
        <div className="status-content">
          <div className="status-icon-container">
            <span className="admin-status-icon">{icon}</span>
          </div>
          <div className="status-info">
            <p className="status-title">{value}</p>
            <p className="status-label">{title}</p>
            <p className="status-sub">{variant === "active" ? "Currently in progress" : "Awaiting review"}</p>
          </div>
        </div>
        <div className={`card-glow ${variant === "active" ? "active-glow" : "pending-glow"}`}></div>
      </div>
    );
  }
  