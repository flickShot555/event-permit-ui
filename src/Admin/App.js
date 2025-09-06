import { Routes, Route, Navigate, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import UsersFromAdmin from './pages/Users';
import ReportsFromAdmin from './pages/Reports';
import NotificationsFromAdmin from './pages/Notifications';
import SettingsFromAdmin from './pages/Settings';
import ActivityLogsFromAdmin from './pages/ActivityLogs';

export default function AdminApp() {
  return (
    <div className="dashboard">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UsersFromAdmin />} />
            <Route path="/reports" element={<ReportsFromAdmin />} />
            <Route path="/settings" element={<SettingsFromAdmin />} />
            <Route path="/notifications" element={<NotificationsFromAdmin />} />
            <Route path="/logs" element={<ActivityLogsFromAdmin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
      <footer className="dashboard-footer">
        <div className="footer-content">
            <div className="footer-logo-container">
              {/*<div className="footer-logo-icon">P</div>*/}
              <span className="footer-brand">TheO</span>
            </div>
            <span className="footer-tagline">– Smarter Permitting for Ireland</span>
          {/*<div className="footer-left">
            <div className="footer-logo-container">
              <div className="footer-logo-icon">P</div>
              <span className="footer-brand">TheO</span>
            </div>
            <span className="footer-tagline">– Smarter Permitting for Ireland</span>
          </div>
          
          <nav className="footer-links">
            <Link to="#" className="footer-link">Home</Link> 
            <Link to="/faq" className="footer-link">FAQ</Link> 
            <Link to="#" className="footer-link">Contact</Link> 
            <Link to="#" className="footer-link">LinkedIn</Link>
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">FAQ</a>
            <a href="#" className="footer-link">Contact</a>
            <a href="#" className="footer-link">LinkedIn</a>
          </nav>*/}
        </div>
      </footer>
    </div>
  );
}
