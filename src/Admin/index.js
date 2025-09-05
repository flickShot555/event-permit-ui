// admin/index.js
import React from "react";
import AdminApp from "./App";       // the admin App (must NOT mount its own BrowserRouter)
import "./styles.css";        // scoped admin styles

// Export a component (do NOT call createRoot or include BrowserRouter here)
export default function AdminAppFromIndex() {
  return (
    <div className="admin-root">
      <AdminApp />
    </div>
  );
}
