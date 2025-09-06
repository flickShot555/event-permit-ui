import React from 'react';
export default function StatCard({ emoji, title, value, variant }) {
  const cls = `status-card ${variant === 'active' ? 'active-card' : variant === 'pending' ? 'pending-card' : variant === 'danger' ? 'danger-card' : ''}`;
  return (
    <div className={cls}>
      <div className="status-content">
        <div className="status-icon-container">{emoji}</div>
        <div>
          <p className="status-title">{title}</p>
          <p className="status-value">{value}</p>
        </div>
      </div>
    </div>
  );
}
