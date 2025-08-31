"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Search, Bell, User, LogOut, Settings, Pen, FileText, MessageCircle, Calendar, Lightbulb } from 'lucide-react';
import "./Dashboard.css"
import LogoutModal from "./components/LogoutModal";
import EventsSection from "./components/EventsSection";
import  ScrollToTopButton from "./components/ScrollToTopButton";

export default function Dashboard() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [mounted, setMounted] = useState(false)
  const navigate = useNavigate()
  // inside your component:
  const [logoutOpen, setLogoutOpen] = useState(false);

  //suppose we have the Name of the user from the database over here
  //we will use this name further in the dashboard.
  const user = "Smith";

  //suppose we are fetching the data fro the database here. all the hardcoded values will be fetched dynamically from the db.
  const activeApplications= 12;
  const pendingApplications = 5;
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="loading-skeleton">Loading...</div>
  }

  return (
    <div className="dashboard">
      {/* place this near top-level so overlay covers screen */}
      <LogoutModal
        isOpen={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        redirectTo="/"
      />
      {/* HEADER */}
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

      <div className="dashboard-content">
        {/* STATUS */}
        <div className="status-container">
          <div className="status-card active-card">
            <div className="status-content">
              <div className="status-icon-container">
                <span className="status-icon green">✅</span>
              </div>
              <div className="status-info">
                <p className="status-title">{activeApplications}</p>
                <p className="status-label">Active Applications</p>
                <p className="status-sub">Currently in progress</p>
              </div>
            </div>
            <div className="card-glow active-glow"></div>
          </div>

          <div className="status-card pending-card">
            <div className="status-content">
              <div className="status-icon-container">
                <span className="status-icon yellow">🕒</span>
              </div>
              <div className="status-info">
                <p className="status-title">{pendingApplications}</p>
                <p className="status-label">Pending Review</p>
                <p className="status-sub">Awaiting stakeholder review</p>
              </div>
            </div>
            <div className="card-glow pending-glow"></div>
          </div>
        </div>

        {/* EVENTS */}
        <EventsSection />

        {/* QUICK ACTIONS */}
        <div className="quick-actions">
          <h2 className="section-title">Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-box new-app">
              <div className="action-icon-container">
                <Pen size={24} color="#96BBBB" strokeWidth={2} />
              </div>
              <span className="action-label">New Application</span>
              <div className="action-shine"></div>
            </button>

            <button className="action-box upload-docs">
              <div className="action-icon-container">
                <FileText size={24} color="#96BBBB" strokeWidth={2} />
              </div>
              <span className="action-label">Upload Documents</span>
              <div className="action-shine"></div>
            </button>

            <button className="action-box messages">
              <div className="action-icon-container">
              <MessageCircle size={24} color="#96BBBB" strokeWidth={2} />
              </div>
              <span className="action-label">Messages</span>
              <div className="action-shine"></div>
            </button>
          </div>
        </div>

        {/* CALENDAR */}
        <div className="calendar-section">
          <h2 className="section-title">Calendar</h2>
          <div className="calendar-container">
            <div className="calendar-preview">
              <Calendar className="calendar-icon-large" size={80} color="#96BBBB" />
              <p className="calendar-text">Your calendar preview will appear here</p>
              <button className="calendar-button" onClick={() => navigate("/calendar")}>
                <Calendar className="calButton" size={24}  />
                View Calendar
              </button>
            </div>

            <div className="idea-note">
              <Lightbulb size={36} color="#96BBBB" />
              <span className="idea-text">"Group your permit types to simplify the process."</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="dashboard-footer">
        <div className="user-dash-footer-content">
          <div className="footer-left">
            <div className="footer-logo-container">
              {/*<div className="footer-logo-icon">P</div>
              <span className="footer-brand">PermitPro</span>*/}
              <img src="/images/logo-3.png"/>
            </div>
            <span className="footer-tagline">– Transforming Planning with One Seamless Platform</span>
          </div>
          <nav className="user-dash-footer-links">
            <a href="#" className="footer-link">
              Home
            </a>
            <a href="#" className="footer-link">
              FAQ
            </a>
            <a href="#" className="footer-link">
              Contact
            </a>
            <a href="#" className="footer-link">
              LinkedIn
            </a>
          </nav>
          <ScrollToTopButton />
        </div>
      </footer>
    </div>
  )
}
