import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Download, TrendingUp, TrendingDown } from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, Legend,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 185000 }, { month: 'Feb', revenue: 198000 },
  { month: 'Mar', revenue: 192000 }, { month: 'Apr', revenue: 225000 },
  { month: 'May', revenue: 210000 }, { month: 'Jun', revenue: 245000 },
  { month: 'Jul', revenue: 235000 }, { month: 'Aug', revenue: 260000 },
  { month: 'Sep', revenue: 280000 }, { month: 'Oct', revenue: 295000 },
];

const pieData = [
  { name: 'Qualified',   value: 35 },
  { name: 'Proposal',    value: 25 },
  { name: 'Negotiation', value: 22 },
  { name: 'Closed Won',  value: 18 },
];
const PIE_COLORS = ['#42b883cc', '#42b883b3', '#42b88380', '#42b8834d'];

const topProducts = [
  { name: 'Enterprise Solution',      revenue: '$125,000' },
  { name: 'Cloud Migration',          revenue: '$89,500'  },
  { name: 'Data Analytics Platform',  revenue: '$67,000'  },
  { name: 'CRM Implementation',       revenue: '$45,000'  },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted-foreground">View your performance metrics</p>
        </div>
        <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" />Export Report</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader><CardTitle className="text-base">Sales Performance</CardTitle></CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">$234,567</div>
            <div className="flex items-center gap-2 text-sm text-green-500">
              <TrendingUp className="h-4 w-4" />+18% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">Conversion Rate</CardTitle></CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">28.5%</div>
            <div className="flex items-center gap-2 text-sm text-green-500">
              <TrendingUp className="h-4 w-4" />+3.2% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">Average Deal Size</CardTitle></CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">$42,300</div>
            <div className="flex items-center gap-2 text-sm text-red-500">
              <TrendingDown className="h-4 w-4" />-2.1% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Revenue by Month</CardTitle></CardHeader>
        <CardContent>
          <div className="h-80">
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
          <CardHeader><CardTitle>Top Performing Products</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map(p => (
                <div key={p.name} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{p.name}</span>
                  <span className="text-sm text-muted-foreground">{p.revenue}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Deal Stage Distribution</CardTitle></CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="45%" innerRadius={60} outerRadius={100} dataKey="value">
                    {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                  </Pie>
                  <Legend />
                  <Tooltip formatter={v => [`${v}%`]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
