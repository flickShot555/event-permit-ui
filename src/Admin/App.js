import { Routes, Route, Navigate, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import ActivityLogs from "./pages/ActivityLogs";

export default function App() {
  return (
    <div className="dashboard">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/logs" element={<ActivityLogs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
      <footer className="dashboard-footer">
        <div className="footer-content">
            <div className="footer-logo-container">
              <div className="footer-logo-icon">P</div>
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
