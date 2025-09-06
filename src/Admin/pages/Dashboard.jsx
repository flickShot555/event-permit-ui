import StatsCard from "../components/Statscard";
import { orders } from "../data/orders";
import { users } from "../data/users";
import { logs } from "../data/activity";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { CheckCircle, Clock, Users } from "lucide-react";

const trend = Array.from({ length: 7 }).map((_, i) => ({
  day: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i],
  apps: Math.floor(Math.random() * 20) + 5
}));
const pieData = [
  { name: "Approved", value: orders.filter(o => o.status === "Approved").length },
  { name: "In Review", value: orders.filter(o => o.status === "In Review").length },
  { name: "Rejected", value: orders.filter(o => o.status === "Rejected").length },
];
const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

export default function Dashboard() {
  return (
    <div className="admin-dashboard-content">
      {/* Status */}
      <div className="status-container">
        <StatsCard icon={<CheckCircle />} title="Active Applications" value={orders.length} variant="active" />
        <StatsCard icon={<Clock />} title="Pending Review" value={orders.filter(o => o.status === "In Review").length} variant="pending" />
        <StatsCard icon={<Users />} title="Total Users" value={users.length} variant="active" />
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3 className="card-section-title">Applications per Day</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={trend} margin={{ left: -20, right: 10 }}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#607979" stopOpacity={0.8}/>
                  <stop offset="90%" stopColor="#96BBBB" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="apps" stroke="#96BBBB" fillOpacity={1} fill="url(#g1)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3 className="card-section-title">Status Breakdown</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
                {pieData.map((entry, idx) => <Cell key={idx} fill={COLORS[idx % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="events-section">
        <h2 className="events-section-title">Your Events & Applications</h2>
        <div className="events-container">
          {orders.slice(0,4).map((o) => (
            <div className="event-row" key={o.id}>
              <div className="event-info">
                <p className="event-title">{o.event}</p>
                <span className={`event-badge ${o.status === "Approved" ? "approved" : o.status === "In Review" ? "in-review" : "rejected"}`}>
                  {o.status === "Approved" ? "✅ Approved" : o.status === "In Review" ? "🟡 In Review" : "⛔ Rejected"}
                </span>
                <p className="event-updated">Updated {o.updatedAt}</p>
              </div>
              <div className="admin-event-action">
                <button className="admin-event-button primary">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity snippet */}
      <div className="calendar-section">
        <h2 className="section-title">Recent Admin Activity</h2>
        <div className="idea-note">
          <span className="idea-icon">🧾</span>
          <span className="idea-text">
            {logs.slice(0,1).map(l => `${l.actor} ${l.action.toLowerCase()} ${l.target} on ${new Date(l.at).toLocaleString()}`)}
          </span>
        </div>
      </div>
    </div>
  );
}
