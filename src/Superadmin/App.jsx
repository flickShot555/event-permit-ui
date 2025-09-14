import React, { useState } from 'react';
import SAHeader from './components/Header';
import SASidebar from './components/Sidebar';

import SAOverview from './pages/Overview';
import SAUsers from './pages/Users';
import SAAdmins from './pages/Admins';
import SAEvents from './pages/Events';
import SALogs from './pages/Logs';
import SASettings from './pages/Settings';

//import './styles/App.css'

import { seedUsers, seedAdmins, seedEvents, seedLogs } from './data/mock';

export default function SuperAdminApp() {
  const [themeDark, setThemeDark] = useState(false);
  const [tab, setTab] = useState('overview');
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState(seedUsers);
  const [admins, setAdmins] = useState(seedAdmins);
  const [events] = useState(seedEvents);
  const [logs, setLogs] = useState(seedLogs);
  const [settings, setSettings] = useState({
    brand: 'Super Admin',
    tz: 'Asia/Karachi',
    defaultRole: 'User',
    enforce2FA: true,
    maintenance: false
  });

  React.useEffect(() => {
    document.body.classList.toggle('dark', themeDark);
  }, [themeDark]);

  return (
    <div className="dashboard">
      <SAHeader onSearch={setSearch} onToggleTheme={() => setThemeDark(v => !v)} themeDark={themeDark} />
      <div className="app-body">
        <SASidebar tab={tab} setTab={setTab} />
        <main className="main-content">
          {tab === 'overview' && <SAOverview users={users} events={events} />}
          {tab === 'users' && <div><h2 className="section-title">User Management</h2><SAUsers users={users} setUsers={setUsers} logs={logs} setLogs={setLogs} search={search} /></div>}
          {tab === 'admins' && <div><h2 className="section-title">Admin & Staff</h2><SAAdmins admins={admins} setAdmins={setAdmins} search={search} /></div>}
          {tab === 'events' && <SAEvents events={events} search={search} />}
          {tab === 'logs' && <div><h2 className="section-title">Audit Trail</h2><SALogs logs={logs} search={search} /></div>}
          {tab === 'settings' && <SASettings settings={settings} setSettings={setSettings} />}
        </main>
      </div>

      <footer className="dashboard-footer">
        <div className="footer-content">
          <div>© {new Date().getFullYear()} Super Admin • All rights reserved</div>
          <div>Build: Vite • React • Recharts</div>
        </div>
      </footer>
    </div>
  );
}
