import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Plus, DollarSign } from 'lucide-react'

const pipeline = [
  {
    stage: 'QUALIFIED',
    deals: [
      { name: 'Enterprise Solution',    company: 'Acme Corporation', value: '$45,000' },
      { name: 'Cloud Migration',         company: 'Tech Solutions',   value: '$32,000' },
    ],
  },
  {
    stage: 'PROPOSAL',
    deals: [
      { name: 'CRM Implementation',     company: 'InnovateCo',        value: '$28,500' },
    ],
  },
  {
    stage: 'NEGOTIATION',
    deals: [
      { name: 'Data Analytics Platform', company: 'DataCorp',          value: '$67,000' },
      { name: 'Mobile App Development',  company: 'StartupXYZ',        value: '$52,000' },
    ],
  },
  {
    stage: 'CLOSED WON',
    deals: [
      { name: 'Website Redesign',        company: 'DesignHub',         value: '$18,000' },
    ],
  },
]

export default function Deals() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Deals Pipeline</h1>
          <p className="text-muted-foreground">Track your sales opportunities</p>
        </div>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Deal
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {pipeline.map((col) => (
          <div key={col.stage} className="space-y-4">
            <div className="font-semibold text-sm text-muted-foreground">{col.stage}</div>
            {col.deals.map((deal) => (
              <Card key={deal.name}>
                <CardContent className="pt-3">
                  <h3 className="font-semibold mb-2">{deal.name}</h3>
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
  )
}
