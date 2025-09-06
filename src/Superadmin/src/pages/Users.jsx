import React, { useState, useMemo } from 'react';
import Modal from '../components/Modal';
import { downloadCSV } from '../utils/csv';

export default function Users({ users, setUsers, logs, setLogs, search }) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', role:'User' });

  const filtered = useMemo(() => {
    const q = (search || '').toLowerCase();
    return users.filter(u => [u.name,u.email,u.role,u.status].some(x => String(x).toLowerCase().includes(q)));
  }, [users, search]);

  const addUser = () => {
    const id = Math.max(0, ...users.map(u=>u.id)) + 1;
    const newUser = { id, status:'Active', createdAt: new Date().toISOString().slice(0,10), ...form };
    setUsers(prev => [newUser, ...prev]);
    setLogs(prev => [{ id: 'L' + (prev.length + 1), actor:'Super Admin', action:'CREATED_USER', target:newUser.email, at:new Date().toISOString() }, ...prev]);
    setForm({ name:'', email:'', role:'User' });
    setShow(false);
  };

  const updateRole = (id, role) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, role } : u));
    const target = users.find(u => u.id === id)?.email;
    setLogs(prev => [{ id: 'L' + (prev.length + 1), actor:'Super Admin', action:'UPDATED_ROLE', target, at:new Date().toISOString() }, ...prev]);
  };

  const toggleStatus = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' } : u));
  };

  return (
    <div>
      <div className="actions-row">
        <button className="btn" onClick={() => setShow(true)}>➕ Add User</button>
        <button className="btn-secondary btn" onClick={() => downloadCSV(filtered, 'users.csv')}>⬇️ Export CSV</button>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Created</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <select className="input" value={u.role} onChange={e => updateRole(u.id, e.target.value)}>
                    <option>User</option>
                    <option>Moderator</option>
                    <option>Admin</option>
                  </select>
                </td>
                <td>
                  <button className={`btn-small ${u.status === 'Active' ? 'btn' : 'btn-danger'}`} onClick={() => toggleStatus(u.id)}>
                    {u.status}
                  </button>
                </td>
                <td>{u.createdAt}</td>
                <td className="table-actions">
                  <button className="btn-small btn-secondary">View</button>
                  <button className="btn-small btn-danger" onClick={() => setUsers(prev => prev.filter(x => x.id !== u.id))}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {show && (
        <Modal title="Add New User" onClose={() => setShow(false)} actions={
          <>
            <button className="btn-secondary btn" onClick={() => setShow(false)}>Cancel</button>
            <button className="btn" onClick={addUser}>Save</button>
          </>
        }>
          <div className="actions-row">
            <input className="input" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input className="input" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <select className="input" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
              <option>User</option><option>Moderator</option><option>Admin</option>
            </select>
          </div>
        </Modal>
      )}
    </div>
  );
}
