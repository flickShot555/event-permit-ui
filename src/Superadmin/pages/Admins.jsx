import React, { useState, useMemo } from 'react';
import SAModal from '../components/Modal';
import { SAdownloadCSV } from '../utils/csv';

export default function SAAdmins({ admins, setAdmins, search }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', role:'Admin' });

  const filtered = useMemo(() => {
    const q = (search || '').toLowerCase();
    return admins.filter(a => [a.name,a.email,a.role,a.lastLogin].some(x => String(x).toLowerCase().includes(q)));
  }, [admins, search]);

  const addAdmin = () => {
    const id = Math.max(0, ...admins.map(a => a.id)) + 1;
    setAdmins(prev => [{ id, lastLogin: '—', ...form }, ...prev]);
    setForm({ name:'', email:'', role:'Admin' });
    setOpen(false);
  };

  return (
    <div>
      <div className="actions-row">
        <button className="btn" onClick={() => setOpen(true)}>➕ Add Admin</button>
        <button className="btn-secondary btn" onClick={() => SAdownloadCSV(filtered, 'admins.csv')}>⬇️ Export CSV</button>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Last Login</th></tr></thead>
          <tbody>
            {filtered.map(a => (
              <tr key={a.id}><td>{a.name}</td><td>{a.email}</td><td>{a.role}</td><td>{a.lastLogin}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      {open && (
        <SAModal title="Add Admin" onClose={() => setOpen(false)} actions={
          <>
            <button className="btn-secondary btn" onClick={() => setOpen(false)}>Cancel</button>
            <button className="btn" onClick={addAdmin}>Save</button>
          </>
        }>
          <div className="actions-row">
            <input className="input" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input className="input" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <select className="input" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}><option>Admin</option><option>Super Admin</option></select>
          </div>
        </SAModal>
      )}
    </div>
  );
}
