import { useState } from "react";
import LPHeader from "../components/MiniHeader";

export default function SettingsFromAdmin() {
  const [maintenance, setMaintenance] = useState(false);
  const [apiKey, setApiKey] = useState("sk-**********");
  const [brand, setBrand] = useState("TheO -Beta");

  return (
  <div>
  <LPHeader />
  <div className="dashboard-content">
        <h2 className="section-title">System Settings</h2>
        <div className="settings-grid">
          <div style={{display:'flex', flexDirection:'row', justifyContent:"space-around", padding:'3%', gap:'3%', width:'100%'}}>
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
          </div>

          <button className="btn">Save Settings</button>
        </div>
      </div>
  </div>
  );
}
