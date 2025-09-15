import React from 'react';
import classnames from 'classnames';
import {
  BarChart3,
  Users,
  Shield,
  CalendarDays,
  FileText,
  Settings,
} from "lucide-react";

export default function SASidebar({ tab, setTab }) {
  const links = [
    ['overview', <><BarChart3 className="navIcon"  /> Overview</>],
    ['users', <><Users className="navIcon" /> Users</>],
    ['admins', <><Shield className="navIcon" /> Admins</>],
    ['events', <><CalendarDays className="navIcon" /> Events</>],
    ['logs', <><FileText className="navIcon" /> Audit Logs</>],
    ['settings', <><Settings className="navIcon" /> Settings</>],
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
