import React, { useState } from 'react';

export default function Header({ onSearch, onToggleTheme, themeDark }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <button className="back-button" title="Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>🏠</button>
        <div className="logo-container">
          <div className="logo-icon-modern">SA</div>
          <div className="brand-name">Super Admin</div>
        </div>
      </div>

      <div className="welcome-text"><span className="wave-emoji">👋</span>Control Center</div>

      <div className="header-right">
        <input className="search-bar" placeholder="Search users, events, logs..." onChange={(e) => onSearch(e.target.value)} />
        <div className="icon notification-container" title="Notifications">🔔<span className="notification-badge" /></div>
        <div className="icon" title="Toggle Theme" onClick={onToggleTheme}>{themeDark ? '🌙' : '🌓'}</div>
        <div className="profile" onClick={() => setOpen(v => !v)}>
          <div className="profile-avatar">SA</div>
          {open && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Profile</div>
              <div className="dropdown-item">Preferences</div>
              <div className="dropdown-item logout">Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
