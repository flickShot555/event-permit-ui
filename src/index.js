// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Bootstrap (CSS + optional JS bundle)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// If you later add providers (Redux, Router wrappers you want at top-level,
// or error boundaries), you can place them here. For now App handles routing.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Top-level providers (optional) can wrap <App /> here */}
    <App />
  </React.StrictMode>
);

// Optional: measure performance (send to analytics if desired)
reportWebVitals();
