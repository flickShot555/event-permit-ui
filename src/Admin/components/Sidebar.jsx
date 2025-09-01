import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="nav">
        <NavLink to="/" end className="nav-link">📊 Overview</NavLink>
        <NavLink to="/users" className="nav-link">👥 Users</NavLink>
        <NavLink to="/reports" className="nav-link">📑 Reports</NavLink>
        <NavLink to="/notifications" className="nav-link">🔔 Notifications</NavLink>
        <NavLink to="/logs" className="nav-link">🧾 Activity Logs</NavLink>
        <NavLink to="/settings" className="nav-link">⚙️ Settings</NavLink>
      </nav>
    </aside>
  );
}
