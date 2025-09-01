// admin/index.js
import React from "react";
import App from "./App";       // the admin App (must NOT mount its own BrowserRouter)
import "./styles.css";        // scoped admin styles

// Export a component (do NOT call createRoot or include BrowserRouter here)
export default function AdminApp() {
  return (
    <div className="admin-root">
      <App />
    </div>
  );
}
