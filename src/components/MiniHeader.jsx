// src/components/LPHeader.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * LPHeader - reusable header component for landing pages / detail pages
 *
 * Props:
 * - logoSrc (string) default: '/images/logo-3.png'
 * - logoAlt (string) default: 'TheO Logo'
 * - showBack (bool) default: true
 * - onBack (func) optional; if not provided uses navigate(-1)
 * - actions (node) optional: right-side action elements (e.g. buttons, links)
 * - className (string) additional wrapper class
 */
export default function LPHeader({
  logoSrc = "/images/logo-3.png",
  logoAlt = "TheO Logo",
  showBack = true,
  onBack,
  actions = null,
  className = "",
}) {
  const navigate = useNavigate();

  // Inject stylesheet once
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("lp-header-styles")) return;

    const style = document.createElement("style");
    style.id = "lp-header-styles";
    style.innerHTML = `
.lp-nav {
  background: #324858;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  top: 0;
  z-index: 100;
  animation: navSlideDown 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.lp-nav-container {
  max-width: 100%;
  margin: 0px;
  padding: 18px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

/* actions container (right side) */
.lp-nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* ghost button (if used) */
.btn.ghost {
  background: transparent;
  color: #374151;
  border: 1px solid #e6e7ea;
}

/* back button */
.how-back-btn {
  color: #96BBBB;               /* default text + icon color */
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 8px 12px;
  margin-right: 8px;
  border-radius: 8px;
}

.how-back-btn:hover { color: white; cursor: pointer; transform: translateY(-1px); }

/* icon inside back button */
.icon-back {
  color: inherit;
  width: 1.25rem;
  height: 1.25rem;
}

/* logo spacing */
.lp-logo { padding-right: 20px; max-height: 48px; object-fit: contain; }

/* small nav animation keyframes if desired */
@keyframes navSlideDown {
  from { transform: translateY(-8px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* responsive tweaks */
@media (max-width: 640px) {
  .lp-nav-container { padding: 12px 16px; }
  .lp-logo { max-height: 40px; }
}
    `;
    document.head.appendChild(style);
  }, []);

  const handleBack = (e) => {
    if (e) e.preventDefault();
    if (typeof onBack === "function") {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <header className={`lp-nav ${className}`}>
      <div className="lp-nav-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          {showBack && (
            <button
              onClick={handleBack}
              aria-label="Go back"
              className="how-back-btn"
              type="button"
            >
              <ArrowLeft className="icon-back" aria-hidden="true" />
            </button>
          )}

          <img src={logoSrc} alt={logoAlt} className="lp-logo" />
        </div>

        {/* right side actions (optional) */}
        <div className="lp-nav-actions">{actions}</div>
      </div>
    </header>
  );
}
