import React, { useMemo } from 'react';
import SAStatCard from '../components/Statcard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Users, CheckCircle, CalendarDays, Clock, XCircle } from "lucide-react";

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
        <SAStatCard icon={<Users style={{color:"#96BBBB"}} />} title={metrics.totalUsers} value="Total Users" variant="active" />
        <SAStatCard icon={<CheckCircle style={{color:"#96BBBB"}} />} title={metrics.activeUsers} value="Active Users" variant="active" />
        <SAStatCard icon={<CalendarDays style={{color:"#96BBBB"}} />} title={metrics.totalEvents} value="Total Events" variant="pending" />
        <SAStatCard icon={<Clock style={{color:"#96BBBB"}} />} title={metrics.pendingEvents} value="Pending Events" variant="pending" />
        <SAStatCard icon={<XCircle style={{color:"#96BBBB"}} />} title={metrics.rejectedEvents} value="Rejected Events" variant="danger" />
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3   style={{
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#2d2d2d",
    marginBottom: "16px",
  }} >Applications per Day</h3>
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trend} margin={{ left: -20, right: 10 }}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor="#607979" stopOpacity={0.8}/>
                    <stop offset="90%" stopColor="#96BBBB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="apps" stroke="#96BBBB" fillOpacity={1} fill="url(#g1)" />
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
