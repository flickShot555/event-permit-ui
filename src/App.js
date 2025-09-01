// src/App.js
import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
//import AdminRoot from "./admin/AdminRoot";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
    {/* Overlay Loader on top for 4 seconds */}
    {showLoader && <Loader />}
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
          path='/learn-more'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LearnMoreAboutTheO />
              </Suspense>
            }
        />
        {/* admin mounted at /admin/* 
        <Route path="/admin/*" element={<AdminRoot />} />*/}
      </Routes>

      
    </BrowserRouter>
  );
}