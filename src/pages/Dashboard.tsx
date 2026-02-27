import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Legend, Filler
} from 'chart.js'
import { Users, Building2, TrendingUp, DollarSign } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const revenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Revenue',
    data: [185000, 198000, 192000, 225000, 210000, 234567],
    borderColor: 'rgb(66, 184, 131)',
    backgroundColor: 'rgba(66, 184, 131, 0.1)',
    tension: 0.4,
    fill: true,
  }],
}

const revenueOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) => `Revenue: $${(ctx.parsed.y / 1000).toFixed(0)}k`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { callback: (v: any) => `$${(v / 1000).toFixed(0)}k` },
    },
  },
}

const stats = [
  { title: 'Total Contacts', value: '1,234', change: '+12% from last month', icon: Users },
  { title: 'Companies',      value: '456',   change: '+8% from last month',  icon: Building2 },
  { title: 'Active Deals',   value: '89',    change: '+23% from last month', icon: TrendingUp },
  { title: 'Revenue',        value: '$234,567', change: '+18% from last month', icon: DollarSign },
]

const recentActivity = [
  { title: 'New contact added',   sub: 'John Doe from Acme Corp',             time: '2 hours ago' },
  { title: 'Deal closed',         sub: '$45,000 deal with Tech Solutions',     time: '5 hours ago' },
  { title: 'Task completed',      sub: 'Follow-up call with Jane Smith',       time: '1 day ago' },
]

const upcomingTasks = [
  { title: 'Call with prospect', time: 'Today at 2:00 PM' },
  { title: 'Send proposal',      time: 'Tomorrow at 10:00 AM' },
  { title: 'Review contracts',   time: 'Friday at 3:00 PM' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your new CRM dashboard</p>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ title, value, change, icon: Icon }) => (
          <Card key={title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value}</div>
              <p className="text-xs text-muted-foreground">{change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue chart */}
      <Card>
        <CardHeader><CardTitle>Revenue Trend</CardTitle></CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <Line data={revenueData} options={revenueOptions as any} />
          </div>
        </CardContent>
      </Card>

      {/* Activity + tasks */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
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
              {upcomingTasks.map((task) => (
                <div key={task.title} className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded border-input" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{task.title}</p>
                    <p className="text-xs text-muted-foreground">{task.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
