import React from 'react';
import { SAdownloadCSV } from '../utils/csv';

export default function SASettings({ settings, setSettings }) {
  return (
    <div>
      <h2 className="section-title">Platform Settings</h2>
      <div className="settings-grid">
        <div className="setting-item">
          <label>Brand Name</label>
          <input className="input" value={settings.brand} onChange={e => setSettings({ ...settings, brand: e.target.value })} />
        </div>

        <div className="setting-item">
          <label>Timezone</label>
          <select className="input" value={settings.tz} onChange={e => setSettings({ ...settings, tz: e.target.value })}>
            <option>Asia/Karachi</option>
            <option>UTC</option>
            <option>Asia/Dubai</option>
            <option>Europe/London</option>
          </select>
        </div>

        <div className="setting-item">
          <label>Default Role for New Users</label>
          <select className="input" value={settings.defaultRole} onChange={e => setSettings({ ...settings, defaultRole: e.target.value })}>
            <option>User</option><option>Moderator</option><option>Admin</option>
          </select>
        </div>

        <div className="setting-item switch">
          <span>Require 2FA for Admins</span>
          <input type="checkbox" checked={settings.enforce2FA} onChange={e => setSettings({ ...settings, enforce2FA: e.target.checked })} />
        </div>

        <div className="setting-item switch">
          <span>Maintenance Mode</span>
          <input type="checkbox" checked={settings.maintenance} onChange={e => setSettings({ ...settings, maintenance: e.target.checked })} />
        </div>
      </div>

      <div className="actions-row" style={{ marginTop: 16 }}>
        <button className="btn" onClick={() => alert('Settings saved (mocked)')}>💾 Save Settings</button>
        <button className="btn-secondary btn" onClick={() => SAdownloadCSV([settings], 'settings_backup.csv')}>⬇️ Export Settings</button>
      </div>
    </div>
  );
}
