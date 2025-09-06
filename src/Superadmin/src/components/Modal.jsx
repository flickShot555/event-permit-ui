import React from 'react';

export default function Modal({ title, children, onClose, actions }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <div>{children}</div>
        <div className="modal-actions">
          {actions}
        </div>
      </div>
    </div>
  );
}
