import React, { useState } from "react";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);

  // Menu items array
  const menuItems = [
    { label: "Home", href: "#header", delay: "0.1s" },
    { label: "How it Works", href: "#how", delay: "0.2s" },
    { label: "Features", href: "#features", delay: "0.3s" },
    
    { label: "Pricing", href: "#pricing", delay: "0.4s" },
    { label: "Get Started", href: "#start", delay: "0.5s" },
    { label: "About", href: "#about", delay: "0.6s" },
  ];

  return (
    <>
      {/* Vertical Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fob-button"
      >
        <span className="fob-text">
          {["M", "E", "N", "U"].map((letter, i) => (
            <div key={i}>{letter}</div>
          ))}
        </span>
      </button>

      {/* Overlay with Blur */}
      {open && (
        <div
          className="fob-overlay"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Side Menu Tray */}
      <div className={`fob-tray ${open ? "open" : ""}`}>
        <div className="fob-tray-header">Menu</div>
        <ul className="fob-tray-list">
          {menuItems.map((item, index) => (
            <li
              key={index}
              style={{ animationDelay: item.delay }}
              className={open ? "fob-tray-item show" : "fob-tray-item"}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Internal Styles */}
      <style>{`
        .fob-button {
          z-index: 9998;
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px 8px;
          border-radius: 0 8px 8px 0;
          border: none;
          background-color: #96BBBB;
          color: white;
          font-weight: bold;
          box-shadow: 0 4px 6px rgba(0,0,0,0.2);
          transition: opacity 0.2s ease-in-out;
          cursor: pointer;
        }
        .fob-button:hover {
          opacity: 0.9;
        }
        .fob-text {
          letter-spacing: 0.1em;
        }
        .fob-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(4px);
          z-index: 9997;
        }
        .fob-tray {
          z-index: 9997;
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 16rem;
          background: white;
          /*background: #0a0a0a0a;*/
          box-shadow: 2px 0 8px rgba(0,0,0,0.2);
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
        }
        .fob-tray.open {
          transform: translateX(0);
        }
        .fob-tray-header {
            text-align: center;
          padding: 1.5rem;
          font-size: 1.25rem;
          font-weight: bold;
          border-bottom: 1px solid #ddd;
          background-color: #96BBBB;
          color: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .fob-tray-list {
            display: flex;
            flex-direction: column;
            padding: 1.5rem;
            list-style: none;
            margin: 0;
            gap: 1.5rem; /* <-- controls spacing between items */
        }
        .fob-tray-item {
            text-align: center;
            opacity: 0;
            transform: translateX(-10px);
            transition: color 0.2s;
            animation: fadeInLeft 0.3s forwards;
        }

        .fob-tray-item a {
            
            padding: 10px 40px;
          text-decoration: none;
          color: #96BBBB;
          font-weight: 500;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .fob-tray-item a:hover {
          background: #96BBBB;
          color: white;
          border-radius: 15px;
        }
        .fob-tray-item.show {
          opacity: 1;
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default FloatingMenu;
