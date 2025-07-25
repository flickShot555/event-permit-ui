// src/ForgotPasswordPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './EventPermitLoginPage.css'; // reuse your login/signup CSS

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  // form state
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);

  // validate email on change
  useEffect(() => {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError('Email is required');
      setCanSubmit(false);
    } else if (!emailRe.test(email)) {
      setError('Invalid email address');
      setCanSubmit(false);
    } else {
      setError('');
      setCanSubmit(true);
    }
  }, [email]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!canSubmit) return;
    // TODO: call real password‐reset API here
    alert('If that email exists, a reset link has been sent.');
    navigate('/login');
  };

  return (
    <div className="login-page">
      {/* LEFT HALF */}
      <div className="login-left">
        <img
          src={`${process.env.PUBLIC_URL}/images/hero.jpeg`}
          alt="Ireland Event Platform"
          className="login-hero-image"
        />
        <div className="login-overlay">
          <h1>Secure access to Ireland’s smarter event permitting platform.</h1>
        </div>
      </div>

      {/* RIGHT HALF */}
      <div className="login-right">
        <div className="login-card">
          <h2>Forgot your password?</h2>
          <p>Enter your email to receive a reset link.</p>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
            {error && <div className="error">{error}</div>}

            <button
              type="submit"
              className="login-btn"
              disabled={!canSubmit}
            >
              Send Reset Link
            </button>
          </form>

          <p className="request-access">
            Remembered it?{' '}
            <Link to="/login" className="link">
              Back to login.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
