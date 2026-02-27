import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Plus, Calendar, User } from 'lucide-react';

const columns = [
  { label: 'TO DO', tasks: [
    { title: 'Call with prospect',    desc: 'Discuss project requirements and timeline', when: 'Today at 2:00 PM',    done: false },
    { title: 'Prepare presentation',  desc: 'Create slides for client meeting',          when: 'Tomorrow at 10:00 AM', done: false },
  ]},
  { label: 'IN PROGRESS', tasks: [
    { title: 'Draft proposal',        desc: 'Write detailed proposal for Enterprise Solution', when: 'Due in 2 days', done: false },
  ]},
  { label: 'COMPLETED', tasks: [
    { title: 'Follow-up email',       desc: 'Send follow-up to Jane Smith',             when: 'Completed yesterday',  done: true },
    { title: 'Update CRM records',    desc: 'Add new contacts from conference',         when: 'Completed 2 days ago', done: true },
  ]},
];

export default function Tasks() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">Manage your todo list and assignments</p>
        </div>
        <Button size="sm"><Plus className="mr-2 h-4 w-4" />Add Task</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {columns.map(col => (
          <div key={col.label} className="space-y-4">
            <div className="font-semibold text-sm text-muted-foreground">{col.label}</div>
            {col.tasks.map(task => (
              <Card key={task.title}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" defaultChecked={task.done} className="mt-1 w-4 h-4 rounded border-input accent-primary" />
                    <div className="flex-1">
                      <h3 className={['font-semibold mb-2', task.done && 'line-through text-muted-foreground'].filter(Boolean).join(' ')}>
                        {task.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{task.desc}</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" /><span>{task.when}</span>
                        </div>
                        {!task.done && (
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <User className="h-3 w-3" /><span>Assigned to you</span>
                          </div>
                        )}
                      </div>
                    </div>
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
