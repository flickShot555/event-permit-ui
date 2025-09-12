import React, { useState } from 'react';
import {Home, Bell, Sun, Moon, User} from 'lucide-react';
//import '../styles/App.css';

export default function SAHeader({ onSearch, onToggleTheme, themeDark }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <button className="back-button" title="Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>< Home /></button>
        <div className="logo-container">
          {/*<div className="logo-icon-modern">SA</div>*/}
          <div className="brand-name">Super Admin</div>
        </div>
      </div>

      <div className="welcome-text"><span className="wave-emoji"></span>Control Center</div>

      <div className="header-right">
        <input className="search-bar" placeholder="Search users, events, logs..." onChange={(e) => onSearch(e.target.value)} />
        <div className="icon notification-container" title="Notifications"><Bell style={{color: '#96BBBB'}} /><span className="notification-badge" /></div>
        <div className="icon" title="Toggle Theme" onClick={onToggleTheme}>{themeDark ? <Sun style={{color: '#96BBBB'}} size={24} /> : <Moon style={{color: '#96BBBB'}} size={24} />}</div>
        <div className="profile" onClick={() => setOpen(v => !v)}>
          <div className='sa-profile-avatar' ><User /></div>
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
