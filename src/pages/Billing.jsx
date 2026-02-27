import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CreditCard, Download, Calendar } from 'lucide-react';

const invoices = [
  { id: 'INV-001', date: '2025-10-02', amount: 49, status: 'Paid' },
  { id: 'INV-002', date: '2025-09-02', amount: 49, status: 'Paid' },
  { id: 'INV-003', date: '2025-08-02', amount: 49, status: 'Paid' },
  { id: 'INV-004', date: '2025-07-02', amount: 49, status: 'Paid' },
];

export default function Billing() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Billing</h1>
        <p className="text-muted-foreground">Manage your subscription and billing information</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Current Plan</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold">Professional</p>
                <p className="text-muted-foreground">$49/monthly</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={16} /><span>Next billing date: 2025-11-02</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">Change Plan</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Payment Method</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-accent rounded flex items-center justify-center">
                  <CreditCard size={20} />
                </div>
                <div>
                  <p className="font-medium">Visa •••• 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/25</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">Update Payment Method</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader><CardTitle>Billing History</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="hidden md:grid grid-cols-4 gap-4 px-4 py-2 text-sm font-medium text-muted-foreground border-b">
              <div>Invoice</div><div>Date</div><div>Amount</div><div>Status</div>
            </div>
            {invoices.map(inv => (
              <div key={inv.id} className="flex flex-col md:grid md:grid-cols-4 gap-2 md:gap-4 px-4 py-3 hover:bg-accent rounded-md">
                <div className="flex justify-between md:block">
                  <span className="text-sm md:hidden font-medium text-muted-foreground">Invoice</span>
                  <span className="font-medium">{inv.id}</span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-sm md:hidden font-medium text-muted-foreground">Date</span>
                  <span>{inv.date}</span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-sm md:hidden font-medium text-muted-foreground">Amount</span>
                  <span>${inv.amount}</span>
                </div>
                <div className="flex justify-between md:block items-center">
                  <span className="text-sm md:hidden font-medium text-muted-foreground">Status</span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">{inv.status}</span>
                    <button className="p-1 hover:bg-background rounded" title="Download invoice">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
