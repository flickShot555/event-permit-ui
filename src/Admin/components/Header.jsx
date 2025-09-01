import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="loading-skeleton">Loading...</div>;

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <button type="button" className="back-button" onClick={() => navigate("/login")}>←</button>
        <div className="logo-container">
          <div className="logo-icon-modern">P</div>
          <span className="brand-name">TheO</span>
        </div>
      </div>

      <h1 className="welcome-text">
        <span className="wave-emoji">👋</span>
        <span className="welcome-message">
          {location.pathname === "/" ? "Admin Dashboard" : location.pathname.replace("/", "").toUpperCase()}
        </span>
      </h1>

      <div className="header-right">
        <div className="search-container">
          <input type="text" placeholder="🔍 Search..." className="search-bar" />
        </div>
        <div className="notification-container" onClick={() => navigate("/notifications")}>
          <span className="icon notification-bell">🔔</span>
          <div className="notification-badge"></div>
        </div>
        <div className="profile" onClick={() => setShowDropdown(!showDropdown)}>
          <span className="icon profile-avatar">👤</span>
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => navigate("/settings")}>⚙️ Settings</div>
              <div className="dropdown-item logout" onClick={() => navigate("/login")}>🚪 Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
