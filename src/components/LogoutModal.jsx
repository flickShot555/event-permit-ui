import React, { useEffect, useState } from "react";

// LogoutModal.jsx
// A tiny, dependency-free React component that shows a centered logout prompt
// Usage: <LogoutModal isOpen={open} onClose={() => setOpen(false)} redirectTo="/" />

export default function LogoutModal({ isOpen = false, onClose = () => {}, redirectTo = "/login" }) {
  const [visible, setVisible] = useState(isOpen);
  const [text, setText] = useState("Are you sure you want to log out?");

  // keep internal visible state in sync with prop
  useEffect(() => {
    setVisible(isOpen);
    if (isOpen) setText("Are you sure you want to log out?");
  }, [isOpen]);

  if (!visible) return null;

  const handleYes = () => {
    // show the friendly message for ~0.5s, then navigate
    setText("See you soon!");
    setTimeout(() => {
      // call onClose so parent can update its state
      try {
        onClose();
      } catch (e) {
        /* ignore */
      }
      // fallback navigation — this works regardless of router
      window.location.href = redirectTo;
    }, 0);
  };

  const handleNo = () => {
    // simply close the modal
    setText("Are you sure you want to log out?");
    onClose();
  };

  // Inline styles so this is a single-file drop-in component.
  const overlayStyle = {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.35)",
    // blur the background content (modern browsers)
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    zIndex: 9999,
    padding: "1rem",
  };

  const boxStyle = {
    width: "min(420px, 90%)",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    padding: "1.5rem",
    textAlign: "center",
    transform: "translateY(0)",
    transition: "transform 160ms ease",
  };

  const titleStyle = {
    margin: "0 0 0.5rem 0",
    fontSize: "1.05rem",
    fontWeight: 600,
  };

  const textStyle = {
    margin: "0 0 1rem 0",
    color: "#333",
    fontSize: "0.95rem",
  };

  const buttonsRow = {
    display: "flex",
    gap: "0.75rem",
    justifyContent: "center",
    marginTop: "0.5rem",
  };

  const btnBase = {
    padding: "0.5rem 1rem",
    minWidth: "96px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "0.95rem",
  };

  const yesStyle = {
    ...btnBase,
    background: "#ef4444",
    color: "white",
  };

  const noStyle = {
    ...btnBase,
    background: "transparent",
    border: "1px solid #ddd",
    color: "#222",
  };

  return (
    <div style={overlayStyle} role="dialog" aria-modal="true">
      <div style={boxStyle}>
        <h3 style={titleStyle}>Log out</h3>
        <p style={textStyle}>{text}</p>
        <div style={buttonsRow}>
          <button style={yesStyle} onClick={handleYes} aria-label="Confirm log out">
            Yes
          </button>
          <button style={noStyle} onClick={handleNo} aria-label="Cancel log out">
            No
          </button>
        </div>
      </div>
    </div>
  );
}
