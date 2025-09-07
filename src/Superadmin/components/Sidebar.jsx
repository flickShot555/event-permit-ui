import React from 'react';
import classnames from 'classnames';

export default function SASidebar({ tab, setTab }) {
  const links = [
    ['overview', '📊 Overview'],
    ['users', '👥 Users'],
    ['admins', '🛡️ Admins'],
    ['events', '🗓️ Events'],
    ['logs', '🧾 Audit Logs'],
    ['settings', '⚙️ Settings'],
  ];
  return (
    <aside className="sidebar">
      <nav className="nav">
        {links.map(([key, label]) => (
          <div
            key={key}
            className={classnames('nav-link', { active: tab === key })}
            onClick={() => setTab(key)}
          >
            {label}
          </div>
        ))}
      </nav>
    </aside>
  );
}
