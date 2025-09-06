import { useMemo, useState } from "react";
import Table from "../components/Table";
import ConfirmModal from "../components/ConfirmModal";
import { users as seed, ROLES } from "../data/users";

export default function UsersFromAdmin() {
  const [data, setData] = useState(seed);
  const [query, setQuery] = useState("");
  const [confirm, setConfirm] = useState({ open: false, row: null });
  const [form, setForm] = useState({ name: "", email: "", role: "User" });

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return data.filter(u => [u.name, u.email, u.role].some(v => v.toLowerCase().includes(q)));
  }, [data, query]);

  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Email", accessor: "email" },
    { Header: "Role", accessor: "role", Cell: ({ row }) => (
        <select
          value={row.role}
          onChange={(e) => setData(prev => prev.map(u => u.id === row.id ? { ...u, role: e.target.value } : u))}
          className="input role-select"
        >
          {ROLES.map(r => <option key={r}>{r}</option>)}
        </select>
      )
    },
    { Header: "Created", accessor: "createdAt" },
  ];

  const onEdit = (row) => setForm({ name: row.name, email: row.email, role: row.role, id: row.id });
  const onDelete = (row) => setConfirm({ open: true, row });

  const handleDelete = () => {
    setData(prev => prev.filter(u => u.id !== confirm.row.id));
    setConfirm({ open: false, row: null });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (form.id) {
      setData(prev => prev.map(u => u.id === form.id ? { ...u, ...form } : u));
    } else {
      const id = Math.max(0, ...data.map(d => d.id)) + 1;
      setData(prev => [{ id, createdAt: new Date().toISOString().slice(0,10), ...form }, ...prev]);
    }
    setForm({ name: "", email: "", role: "User" });
  };

  return (
    <div className="dashboard-content">
      <div className="actions-row">
        <input className="input search" placeholder="Search users..." value={query} onChange={(e)=>setQuery(e.target.value)} />
        <form className="user-form" onSubmit={handleSave}>
          <input className="input" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
          <input className="input" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
          <select className="input" value={form.role} onChange={(e)=>setForm({...form, role:e.target.value})}>
            {ROLES.map(r => <option key={r}>{r}</option>)}
          </select>
          <button className="btn">{form.id ? "Update" : "Add User"}</button>
        </form>
      </div>

      <Table columns={columns} data={filtered} onEdit={onEdit} onDelete={onDelete} />

      <ConfirmModal
        open={confirm.open}
        title="Delete user?"
        message={`Are you sure you want to delete ${confirm.row?.name}? This cannot be undone.`}
        onConfirm={handleDelete}
        onCancel={() => setConfirm({ open: false, row: null })}
      />
    </div>
  );
}
