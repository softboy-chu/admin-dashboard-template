import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Users, Building2, TrendingUp, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 185000 },
  { month: 'Feb', revenue: 198000 },
  { month: 'Mar', revenue: 192000 },
  { month: 'Apr', revenue: 225000 },
  { month: 'May', revenue: 210000 },
  { month: 'Jun', revenue: 234567 },
];

const stats = [
  { label: 'Total Contacts', value: '1,234', change: '+12% from last month', icon: Users },
  { label: 'Companies',      value: '456',   change: '+8% from last month',  icon: Building2 },
  { label: 'Active Deals',   value: '89',    change: '+23% from last month', icon: TrendingUp },
  { label: 'Revenue',        value: '$234,567', change: '+18% from last month', icon: DollarSign },
];

const activity = [
  { title: 'New contact added',  sub: 'John Doe from Acme Corp',              time: '2 hours ago' },
  { title: 'Deal closed',        sub: '$45,000 deal with Tech Solutions',      time: '5 hours ago' },
  { title: 'Task completed',     sub: 'Follow-up call with Jane Smith',        time: '1 day ago' },
];

const tasks = [
  { label: 'Call with prospect', time: 'Today at 2:00 PM' },
  { label: 'Send proposal',      time: 'Tomorrow at 10:00 AM' },
  { label: 'Review contracts',   time: 'Friday at 3:00 PM' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your new CRM dashboard</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(s => {
          const Icon = s.icon;
          return (
            <Card key={s.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{s.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{s.value}</div>
                <p className="text-xs text-muted-foreground">{s.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader><CardTitle>Revenue Trend</CardTitle></CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={v => `$${(v/1000).toFixed(0)}k`} tick={{ fontSize: 12 }} />
                <Tooltip formatter={v => [`$${(v/1000).toFixed(0)}k`, 'Revenue']} />
                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activity.map(a => (
                <div key={a.title} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.sub}</p>
                    <p className="text-xs text-muted-foreground">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Upcoming Tasks</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map(t => (
                <div key={t.label} className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded border-input accent-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{t.label}</p>
                    <p className="text-xs text-muted-foreground">{t.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
