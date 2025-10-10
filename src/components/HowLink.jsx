// src/components/HowLink.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * HowLink
 * - Merges any passed className with the `lp-live-demo` styling.
 * - Injects the lp-live-demo CSS into the document head (once).
 * - Saves landing page scroll position to sessionStorage then navigates to `to`.
 *
 * Props:
 * - to: string (default "/how-it-works")
 * - children: node
 * - className: string (optional additional classes)
 * - onBeforeNavigate: optional callback fired before navigate (receives event)
 * - ...rest: other anchor props
 */
export default function HowLink({
  to = "/how-it-works",
  children = "How it works",
  className = "",
  onBeforeNavigate,
  ...rest
}) {
  const navigate = useNavigate();

  // Inject CSS once on client
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("howlink-styles")) return;

    const style = document.createElement("style");
    style.id = "howlink-styles";
    style.innerHTML = `
.lp-live-demo {
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 5px 12px;
  margin-top : 10px;
  border-radius: 6px;
  color: #96bbbb;
  border : 1px solid #96BBBB;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 400;
  transition: color 0.3s ease, transform 0.3s ease;
}

.lp-live-demo::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #96bbbb;
  z-index: -1;
  transition: left 0.5s ease;
}

.lp-live-demo:hover::before {
  left: 0;
}

.lp-live-demo:hover {
  color: white;
  transform: scale(1.05);
  text-decoration: none;
}
    `;
    document.head.appendChild(style);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    // allow caller to run custom logic before navigation
    if (typeof onBeforeNavigate === "function") {
      try {
        onBeforeNavigate(e);
      } catch (err) {
        // ignore callback errors
      }
    }

    // Save current scroll position so it can be restored after back navigation
    try {
      sessionStorage.setItem("landingScroll", String(window.scrollY || 0));
    } catch (err) {
      // ignore storage errors
    }

    // push navigation
    navigate(to);
  };

  // merge provided className with lp-live-demo
  const combinedClassName = `${className ? className + " " : ""}lp-live-demo`;

  return (
    <a href={to} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}
