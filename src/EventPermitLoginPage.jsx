// src/EventPermitLoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './EventPermitLoginPage.css';

export default function EventPermitLoginPage() {
  const navigate = useNavigate();

  // form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin'); // 'admin' or 'user'
  const [errors, setErrors] = useState({});

  // predefined credentials
  const credentials = {
    admin: { email: 'admin@example.com', password: 'Admin123' },
    user:  { email: 'user@example.com',  password: 'User1234' }
  };

  // basic email regex
  const emailRegex = /^\S+@\S+\.\S+$/;

  const validate = () => {
    const errs = {};
    if (!email) errs.email = 'Email is required';
    else if (!emailRegex.test(email)) errs.email = 'Enter a valid email address';

    if (!password) errs.password = 'Password is required';
    else if (password.length < 6) errs.password = 'Password must be at least 6 characters';

    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // simulate auth
      const creds = credentials[userType];
      if (email === creds.email && password === creds.password) {
        // redirect based on userType
        if (userType === 'admin') navigate('/admin/dashboard');
        else navigate('/user/dashboard'); // simulated non-admin
      } else {
        setErrors({ form: 'Invalid credentials for selected role.' });
      }
    }
  };

  const handleChange = setter => e => {
    setter(e.target.value);
    setErrors(prev => ({ ...prev, form: undefined }));
  };

  const isFormValid = emailRegex.test(email) && password.length >= 6;

  return (
    <div className="login-page">
      <div className="login-left">
        <img src="/images/hero.jpeg" alt="Platform" className="login-hero-image" />
        <div className="login-overlay">
          <h1>Secure access to our smarter event permitting platform.</h1>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card ${userType}">
          <h2>Sign in to TheO</h2>
          <p>Access your event permitting dashboard</p>

          {/**
            {/* user type toggle }
            <div className="user-toggle">
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="admin"
                  checked={userType === 'admin'}
                  onChange={() => setUserType('admin')}
                /> Admin
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="user"
                  checked={userType === 'user'}
                  onChange={() => setUserType('user')}
                /> User
              </label>
          
          </div>*/}

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            {errors.form && <div className="error form-error">{errors.form}</div>}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleChange(setEmail)}
              placeholder="Enter your email"
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handleChange(setPassword)}
              placeholder="Enter your password"
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}

            <div className="forgot-password">
              <Link to="/forgot-password" className="link">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-btn" disabled={!isFormValid}>
              Login
            </button>
          </form>

          {/* SWITCH ROLE BUTTON, outside the form */}
          <button
              type="button"
              className="switch-btn"
              onClick={() => setUserType('admin')}
            >
              Switch to Admin Login
            </button>
          

          {/* hide this when in admin mode */}
          {userType !== 'admin' && (
            <p className="request-access">
              Need access? <Link to="/signup" className="link">Request account access.</Link>
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
