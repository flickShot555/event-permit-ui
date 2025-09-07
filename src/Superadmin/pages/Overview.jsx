import React, { useMemo } from 'react';
import SAStatCard from '../components/Statcard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

export default function SAOverview({ users, events }) {
  const metrics = useMemo(() => ({
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === 'Active').length,
    totalEvents: events.length,
    pendingEvents: events.filter(e => e.status === 'In Review').length,
    rejectedEvents: events.filter(e => e.status === 'Rejected').length,
  }), [users, events]);

  const trend = useMemo(() => {
    const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    return days.map((d, i) => ({ day: d, apps: Math.floor(10 + 10 * Math.sin(i/2) + (i*2)) }));
  }, []);

  const pieData = useMemo(() => {
    const counts = { Approved:0, 'In Review':0, Rejected:0 };
    events.forEach(e => counts[e.status] = (counts[e.status]||0)+1);
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [events]);

  const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

  return (
    <div>
      <div className="status-container">
        <SAStatCard emoji="👥" title="Total Users" value={metrics.totalUsers} variant="active" />
        <SAStatCard emoji="✅" title="Active Users" value={metrics.activeUsers} variant="active" />
        <SAStatCard emoji="🗓️" title="Total Events" value={metrics.totalEvents} variant="pending" />
        <SAStatCard emoji="🟡" title="Pending Events" value={metrics.pendingEvents} variant="pending" />
        <SAStatCard emoji="⛔" title="Rejected Events" value={metrics.rejectedEvents} variant="danger" />
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3 className="section-title">Applications per Day</h3>
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trend} margin={{ left: -20, right: 10 }}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#667eea" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#764ba2" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="apps" stroke="#667eea" fillOpacity={1} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <h3 className="section-title">Status Breakdown</h3>
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
                  {pieData.map((entry, idx) => <Cell key={idx} fill={COLORS[idx % COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
