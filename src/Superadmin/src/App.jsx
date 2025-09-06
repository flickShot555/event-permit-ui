import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Overview from './pages/Overview';
import Users from './pages/Users';
import Admins from './pages/Admins';
import Events from './pages/Events';
import Logs from './pages/Logs';
import Settings from './pages/Settings';

import { seedUsers, seedAdmins, seedEvents, seedLogs } from './data/mock';

export default function App() {
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
      <Header onSearch={setSearch} onToggleTheme={() => setThemeDark(v => !v)} themeDark={themeDark} />
      <div className="app-body">
        <Sidebar tab={tab} setTab={setTab} />
        <main className="main-content">
          {tab === 'overview' && <Overview users={users} events={events} />}
          {tab === 'users' && <div><h2 className="section-title">User Management</h2><Users users={users} setUsers={setUsers} logs={logs} setLogs={setLogs} search={search} /></div>}
          {tab === 'admins' && <div><h2 className="section-title">Admin & Staff</h2><Admins admins={admins} setAdmins={setAdmins} search={search} /></div>}
          {tab === 'events' && <Events events={events} search={search} />}
          {tab === 'logs' && <div><h2 className="section-title">Audit Trail</h2><Logs logs={logs} search={search} /></div>}
          {tab === 'settings' && <Settings settings={settings} setSettings={setSettings} />}
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
