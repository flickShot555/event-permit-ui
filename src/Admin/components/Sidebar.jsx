import { NavLink } from "react-router-dom";
import { BarChart3, Users, FileText, Bell, ClipboardList, Settings } from "lucide-react";


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="nav">
        <NavLink to="/Admin-Dashboard" end className="nav-link"><BarChart3 className="navIcon" /> Overview</NavLink>
        <NavLink to="/users" className="nav-link"><Users className="navIcon" /> Users</NavLink>
        <NavLink to="/reports" className="nav-link"><FileText className="navIcon" /> Reports</NavLink>
        <NavLink to="/notifications" className="nav-link"><Bell className="navIcon" /> Notifications</NavLink>
        <NavLink to="/logs" className="nav-link"><ClipboardList className="navIcon" /> Activity Logs</NavLink>
        <NavLink to="/settings" className="nav-link"><Settings className="navIcon" /> Settings</NavLink>
      </nav>
    </aside>
  );
}
