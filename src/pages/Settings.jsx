import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your application preferences</p>
      </div>

      <Card>
        <CardHeader><CardTitle>Profile Settings</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: 'Full Name',      type: 'text',  placeholder: 'John Doe' },
            { label: 'Email Address',  type: 'email', placeholder: 'john@example.com' },
            { label: 'Job Title',      type: 'text',  placeholder: 'Sales Manager' },
          ].map(f => (
            <div key={f.label} className="space-y-2">
              <label className="text-sm font-medium">{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} className="w-full p-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          ))}
          <Button size="sm">Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Notification Preferences</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: 'Email Notifications', desc: 'Receive email updates for important events', defaultChecked: true },
            { label: 'Deal Updates',         desc: 'Get notified when deals change status',       defaultChecked: true },
            { label: 'Task Reminders',       desc: 'Receive reminders for upcoming tasks',        defaultChecked: false },
          ].map(n => (
            <div key={n.label} className="flex items-center justify-between">
              <div>
                <div className="font-medium text-sm">{n.label}</div>
                <div className="text-sm text-muted-foreground">{n.desc}</div>
              </div>
              <input type="checkbox" defaultChecked={n.defaultChecked} className="w-4 h-4 rounded border-input accent-primary" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Display Settings</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Theme</label>
            <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              <option>Light</option><option>Dark</option><option>System</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Language</label>
            <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              <option>English</option><option>Spanish</option><option>French</option><option>German</option>
            </select>
          </div>
          <Button size="sm">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
