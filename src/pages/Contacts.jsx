import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, Plus, Mail, Phone } from 'lucide-react';

const contacts = [
  { initials: 'JD', name: 'John Doe',   role: 'CEO at Acme Corp',             email: 'john@acme.com',      phone: '+1 234 567 8900' },
  { initials: 'JS', name: 'Jane Smith', role: 'CTO at Tech Solutions',         email: 'jane@techsol.com',   phone: '+1 234 567 8901' },
  { initials: 'MB', name: 'Mike Brown', role: 'Sales Director at InnovateCo',  email: 'mike@innovate.com',  phone: '+1 234 567 8902' },
];

export default function Contacts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Contacts</h1>
          <p className="text-muted-foreground">Manage your contact relationships</p>
        </div>
        <Button size="sm"><Plus className="mr-2 h-4 w-4" />Add Contact</Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input type="text" placeholder="Search contacts..." className="flex-1 bg-transparent border-none outline-none text-sm" />
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contacts.map(c => (
          <Card key={c.name}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold">{c.initials}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.role}</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-3 w-3" /><span>{c.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3 w-3" /><span>{c.phone}</span>
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
