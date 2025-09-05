import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, Bell, User, LogOut, Settings, Pen, FileText, MessageCircle, Calendar, Lightbulb } from 'lucide-react';
import LogoutModal from "../../components/LogoutModal";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [logoutOpen, setLogoutOpen] = useState(false);

    //suppose we have the Name of the user from the database over here
  //we will use this name further in the dashboard.
  const user = "Smith";
  
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="loading-skeleton">Loading...</div>;

  return (
    <div>
          {/* place this near top-level so overlay covers screen */}
          <LogoutModal
        isOpen={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        redirectTo="/"
      />
          <header className="dashboard-header">
        <div className="header-left">
          <button type="button" className="back-button" onClick={() => setLogoutOpen(true)}>
            ←
          </button>
          <div className="logo-container">
            <span className="brand-name">TheO -Beta</span>
          </div>
        </div>

        <h1 className="welcome-text">
          {/*<Wave className="wave-icon" role="img" aria-label="Waving hand" />*/}
          <span className="welcome-message">Welcome back, {user}</span>
        </h1>

        <div className="header-right">
          {/*<div className="search-container">
            <input type="text" placeholder="🔍 Search..." className="search-bar" />
          </div>*/}
          <div className="search-container search-inline-wrapper" role="search" aria-label="Site search">
            <Search className="search-icon-inline" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search..."
              className="search-bar-inline"
              aria-label="Search"
            />
          </div>
          <div className="notification-container">
            <button className="icon notification-bell" aria-label="Notifications">
              <Bell />
            </button>
            <div className="notification-badge"></div>
          </div>
          <div className="profile" onClick={() => setShowDropdown(!showDropdown)}>
            <User className="icon profile-avatar" aria-hidden="true" />
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => navigate("/settings")}>
                  {/* Settings Icon */}
                  <Settings size={24} color="#96BBBB" strokeWidth={2} className="icon-settings" />
                  Settings
                </div>
                <div className="dropdown-item logout" onClick={() => navigate("/login")}>
                  {/* Logout Icon */}
                  <LogOut size={24} color="#96BBBB" strokeWidth={2} className="icon-logout" /> Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
