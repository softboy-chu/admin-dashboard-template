import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, Plus, Building2, Users, DollarSign } from 'lucide-react';

const companies = [
  { name: 'Acme Corporation',   industry: 'Technology',           contacts: 12, revenue: '$125,000' },
  { name: 'Tech Solutions Inc', industry: 'Software Development', contacts: 8,  revenue: '$89,500'  },
  { name: 'InnovateCo',         industry: 'Consulting',           contacts: 15, revenue: '$210,000' },
];

export default function Companies() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Companies</h1>
          <p className="text-muted-foreground">Manage your company relationships</p>
        </div>
        <Button size="sm"><Plus className="mr-2 h-4 w-4" />Add Company</Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input type="text" placeholder="Search companies..." className="flex-1 bg-transparent border-none outline-none text-sm" />
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {companies.map(c => (
          <Card key={c.name}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.industry}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1"><Users className="h-3 w-3" />Contacts</span>
                      <span className="font-medium">{c.contacts}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1"><DollarSign className="h-3 w-3" />Revenue</span>
                      <span className="font-medium">{c.revenue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
