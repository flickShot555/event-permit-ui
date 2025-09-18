import React from "react";
import { Mail, MessageSquare, Linkedin, Twitter } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import './UpdatedFooter.css'

export default function UpdatedFooter() {
  return (
    <footer className="lp-footer footer-spectacular">
      <div className="lp-footer-container">
        <img
          src="/images/logo-3.png"
          alt="TheO Logo"
          className="lp-footer-col footer-info footer-logo-spectacular"
        />

        {/*
        <nav className="lp-nav-links">
          <a href="#home" className="nav-link-entrance" style={{ "--delay": "0.1s" }}>
            Home
          </a>
          <a href="#how" className="nav-link-entrance" style={{ "--delay": "0.2s" }}>
            How it Works
          </a>
          <a href="#features" className="nav-link-entrance" style={{ "--delay": "0.3s" }}>
            Features
          </a>
          <a href="#about" className="nav-link-entrance" style={{ "--delay": "0.4s" }}>
            About
          </a>
          <a href="#start" className="nav-link-entrance" style={{ "--delay": "0.5s" }}>
            Get Started
          </a>
        </nav>*/}
        <nav className="lp-nav-links">
            <HashLink smooth to="/#home" className="nav-link-entrance" style={{ "--delay": "0.1s" }}>
                Home
            </HashLink>
            <HashLink smooth to="/#how" className="nav-link-entrance" style={{ "--delay": "0.2s" }}>
                How it Works
            </HashLink>
            <HashLink smooth to="/#features" className="nav-link-entrance" style={{ "--delay": "0.3s" }}>
                Features
            </HashLink>
            <HashLink smooth to="/#about" className="nav-link-entrance" style={{ "--delay": "0.4s" }}>
                About
            </HashLink>
            <HashLink smooth to="/#start" className="nav-link-entrance" style={{ "--delay": "0.5s" }}>
                Get Started
            </HashLink>
            <HashLink smooth to="/#cta" className="nav-link-entrance" style={{ "--delay": "0.6s" }}>
                CTA
            </HashLink>
        </nav>

        <div className="lp-footer-col footer-contact footer-contact-spectacular">
          <p>
            <Mail size={16} color="#ffff" style={{ marginRight: 5 }} /> hello@theo-platform.com
          </p>
          <p>
            <MessageSquare size={16} color="#ffff" style={{ marginRight: 5 }} /> Live Chat
          </p>

          <div className="lp-social">
            <a href="#" className="social-spectacular" style={{ "--delay": "0.1s" }}>
              <Linkedin color="#ffff" />
            </a>
            <a href="#" className="social-spectacular" style={{ "--delay": "0.2s" }}>
              <Twitter color="#ffff" />
            </a>
          </div>
        </div>
      </div>

      {/* Legal / EU links row */}
      <div className="lp-footer-legal">
        <nav className="lp-legal-links" aria-label="Legal and privacy links">
          <a href="/disclaimer" target="_blank" rel="noopener noreferrer">Disclaimer</a>
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="/cookies" target="_blank" rel="noopener noreferrer">Cookies</a>
          <a href="/privacy-policy#gdpr" target="_blank" rel="noopener noreferrer">GDPR</a>
          <a href="/data-processing" target="_blank" rel="noopener noreferrer">Data Processing Addendum</a>
          <a href="/terms" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>
          <a href="/accessibility" target="_blank" rel="noopener noreferrer">Accessibility</a>
          <a href="/sitemap" target="_blank" rel="noopener noreferrer">Sitemap</a>
          <button
            className="cookie-settings-button"
            onClick={() => {
              // example - replace with your cookie manager trigger
              if (window && window.showCookieSettings) window.showCookieSettings();
            }}
            aria-label="Open cookie settings"
            type="button"
          >
            Cookie settings
          </button>
        </nav>
      </div>

      {/* Bottom small-print row */}
      <div className="lp-footer-bottom">
        <div className="lp-footer-bottom-inner">
          <span>© {new Date().getFullYear()} TheO. All rights reserved.</span>
          <span className="dpo">
            DPO: <a href="mailto:dpo@theo-platform.com">dpo@theo-platform.com</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
