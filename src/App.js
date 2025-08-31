// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
//import EventPermitLoginPage from '../backup/EventPermitLoginPage';
//import SignUpPage from './SignUpPage';
//import ForgotPasswordPage from '../backup/ForgotPasswordPage';
import Dashboard from './Dashboard';
import Loader from './components/Loader';
import Login from './Login/Login';

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
      </Routes>

      
    </BrowserRouter>
  );
}