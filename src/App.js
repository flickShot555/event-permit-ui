// src/App.js
import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from "./components/ScrollToTop";

import LandingPage from './LandingPage';
//import EventPermitLoginPage from '../backup/EventPermitLoginPage';
//import SignUpPage from './SignUpPage';
//import ForgotPasswordPage from '../backup/ForgotPasswordPage';
import Dashboard from './Dashboard';
import Loader from './components/Loader';
import Login from './Login/Login';
import './index.css'
import HowItWorksDetailed from './components/HowItWorksDetailed';
import LearnMoreAboutTheO from './components/LearnMoreAboutTheo';
import HowTheoWorksDetailed from './components/HowItWorks-Detailed';
import WhyTheoWorksPage from './components/WhyTheoWorksPage';
import DetailedFeatures from './components/DetailedFeatures'

//import AdminRoot from "./admin/AdminRoot";
import AdminAppFromIndex from './Admin/index';
import UsersFromAdmin from './Admin/pages/Users';
import ReportsFromAdmin from './Admin/pages/Reports';
import NotificationsFromAdmin from './Admin/pages/Notifications';
import SettingsFromAdmin from './Admin/pages/Settings';
import ActivityLogsFromAdmin from './Admin/pages/ActivityLogs';

//super admin
import SuperAdminApp from './Superadmin/App';

// --- Favicon imports (utils you should have added) ---
import useBrowserFavicon from "./hooks/useBrowserFavicon";
import usePrefersColorScheme from "./utils/usePrefersColorScheme";
import { faviconSets } from "./utils/faviconConfig";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // -------------------------
  // FAVICON THEME LOGIC
  // -------------------------
  const scheme = usePrefersColorScheme(); // "light" or "dark"
  const mapping = scheme === "dark" ? faviconSets.dark : faviconSets.light;
  const maskColor = scheme === "dark" ? "#ffffff" : "#000000";
  const version = process.env.REACT_APP_FAVICON_VERSION || "v1";

  useBrowserFavicon({ mapping, version, maskColor });

  // -------------------------
  // REST OF APP (routing)
  // -------------------------
  return (
    <BrowserRouter>
      {/* wrapper that applies theme class site-wide */}
      <div className={`app theme-${scheme}`}>
        {/* Overlay Loader on top for 4 seconds */}
        {showLoader && <Loader />}

        {/* Scrolls to top when route changes */}
        <ScrollToTop />

        {/* Mount all routes immediately */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          {/*<Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />*/}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/how-it-works"
            element={
              <Suspense fallback={<div>Loading…</div>}>
                <HowItWorksDetailed />
              </Suspense>
            }
          />
          <Route
            path="/Why-Theo-works"
            element={
              <Suspense fallback={<div>Loading…</div>}>
                <WhyTheoWorksPage />
              </Suspense>
            }
          />
          <Route
            path='/learn-more'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LearnMoreAboutTheO />
              </Suspense>
            }
          />
          <Route
            path='/how-TheO-Works'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HowTheoWorksDetailed />
              </Suspense>
            }
          />
          <Route
            path='/Admin-Dashboard'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AdminAppFromIndex />
              </Suspense>
            }
          />
          <Route
            path='/users'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UsersFromAdmin />
              </Suspense>
            }
          />
          <Route
            path='/reports'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ReportsFromAdmin />
              </Suspense>
            }
          />
          <Route
            path='/notifications'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NotificationsFromAdmin />
              </Suspense>
            }
          />
          <Route
            path='/settings'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SettingsFromAdmin />
              </Suspense>
            }
          />
          <Route
            path='/logs'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ActivityLogsFromAdmin />
              </Suspense>
            }
          />
          <Route
            path='/Super-Admin'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SuperAdminApp />
              </Suspense>
            }
          />
          <Route
            path='/Detailed-Features'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <DetailedFeatures />
              </Suspense>
            }
          />
          {/* admin mounted at /admin/* 
          <Route path="/admin/*" element={<AdminRoot />} />*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
