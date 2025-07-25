// src/SignUpPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';

export default function SignUpPage() {
  const navigate = useNavigate();

  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [contact, setContact]   = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm]   = useState('');

  const [errors, setErrors] = useState({
    name: '', email: '', contact: '', password: '', confirm: ''
  });
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    const newErrors = { name:'', email:'', contact:'', password:'', confirm:'' };

    if (!name.trim()) newErrors.name = 'Full name is required';

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email)                newErrors.email = 'Email is required';
    else if (!emailRe.test(email)) newErrors.email = 'Invalid email address';

    const contactRe = /^\+?[0-9 ]{7,}$/;
    if (!contact)             newErrors.contact = 'Contact number is required';
    else if (!contactRe.test(contact)) newErrors.contact = 'Invalid phone number';

    if (!password)            newErrors.password = 'Password is required';
    else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';

    if (!confirm)             newErrors.confirm = 'Please confirm your password';
    else if (confirm !== password) newErrors.confirm = 'Passwords do not match';

    setErrors(newErrors);
    setCanSubmit(Object.values(newErrors).every(e => e === ''));
  }, [name, email, contact, password, confirm]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!canSubmit) return;
    // … call your signup API
    navigate('/dashboard');
  };

  return (
    <div className="signup-page">
      {/* LEFT HERO IMAGE */}
      <div className="signup-left">
        <img
          src={`${process.env.PUBLIC_URL}/images/hero.jpeg`}
          alt="Ireland Event Platform"
          className="signup-hero-image"
        />
        <div className="signup-overlay">
          <h1>Secure access to Ireland’s smarter event permitting platform.</h1>
        </div>
      </div>

      {/* RIGHT SIGNUP FORM */}
      <div className="signup-right">
        <div className="signup-card">
          <h2>Create your TheO account</h2>
          <p>Join TheO and start managing your events smarter.</p>

          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                id="name" type="text" value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your full name"
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email" type="email" value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div>
              <label htmlFor="contact">Contact Number</label>
              <input
                id="contact" type="tel" value={contact}
                onChange={e => setContact(e.target.value)}
                placeholder="+353 1 234 5678"
              />
              {errors.contact && <div className="error">{errors.contact}</div>}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password" type="password" value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Choose a secure password"
              />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>

            <div>
              <label htmlFor="confirm">Confirm Password</label>
              <input
                id="confirm" type="password" value={confirm}
                onChange={e => setConfirm(e.target.value)}
                placeholder="Re‑enter your password"
              />
              {errors.confirm && <div className="error">{errors.confirm}</div>}
            </div>

            <button
              type="submit"
              className="signup-btn"
              disabled={!canSubmit}
            >
              Sign Up
            </button>
          </form>

          <div className="signup-footer">
            Already have an account?{' '}
            <Link to="/login" className="link">Log in here.</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
