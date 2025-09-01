import { useState } from "react";

export default function Settings() {
  const [maintenance, setMaintenance] = useState(false);
  const [apiKey, setApiKey] = useState("sk-**********");
  const [brand, setBrand] = useState("PermitPro");

  return (
    <div className="dashboard-content">
      <h2 className="section-title">System Settings</h2>
      <div className="settings-grid">
        <label className="setting-item">
          <span>Brand Name</span>
          <input className="input" value={brand} onChange={(e)=>setBrand(e.target.value)} />
        </label>

        <label className="setting-item">
          <span>API Key</span>
          <input className="input" value={apiKey} onChange={(e)=>setApiKey(e.target.value)} />
        </label>

        <label className="setting-item switch">
          <span>Maintenance Mode</span>
          <input type="checkbox" checked={maintenance} onChange={()=>setMaintenance(!maintenance)} />
        </label>

        <button className="btn">Save Settings</button>
      </div>
    </div>
  );
}
