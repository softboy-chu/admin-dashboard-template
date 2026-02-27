import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Plus, DollarSign } from 'lucide-react';

const columns = [
  { label: 'QUALIFIED', deals: [
    { title: 'Enterprise Solution', company: 'Acme Corporation',  value: '$45,000' },
    { title: 'Cloud Migration',     company: 'Tech Solutions',    value: '$32,000' },
  ]},
  { label: 'PROPOSAL', deals: [
    { title: 'CRM Implementation',  company: 'InnovateCo',        value: '$28,500' },
  ]},
  { label: 'NEGOTIATION', deals: [
    { title: 'Data Analytics Platform', company: 'DataCorp',      value: '$67,000' },
    { title: 'Mobile App Development',  company: 'StartupXYZ',    value: '$52,000' },
  ]},
  { label: 'CLOSED WON', deals: [
    { title: 'Website Redesign',    company: 'DesignHub',         value: '$18,000' },
  ]},
];

export default function Deals() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Deals Pipeline</h1>
          <p className="text-muted-foreground">Track your sales opportunities</p>
        </div>
        <Button size="sm"><Plus className="mr-2 h-4 w-4" />Add Deal</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {columns.map(col => (
          <div key={col.label} className="space-y-4">
            <div className="font-semibold text-sm text-muted-foreground">{col.label}</div>
            {col.deals.map(deal => (
              <Card key={deal.title}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{deal.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{deal.company}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-3 w-3" />
                    <span className="font-semibold">{deal.value}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
