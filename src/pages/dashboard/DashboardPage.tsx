import { Link } from 'react-router-dom'
import { CircleDashed, ListTodo, Plus } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ROUTES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const stats = [
  { label: 'Open tasks', value: '—' },
  { label: 'In progress', value: '—' },
  { label: 'Completed', value: '—' },
] as const

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Overview of your team&apos;s tasks and activity.
          </p>
        </div>
        <Link to={ROUTES.newTask} className={cn(buttonVariants({ size: 'sm' }))}>
          <Plus className="size-4" aria-hidden />
          New task
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map(({ label, value }) => (
          <Card key={label} className="shadow-sm">
            <CardHeader className="pb-2">
              <CardDescription>{label}</CardDescription>
              <CardTitle className="text-3xl font-semibold tabular-nums">
                {value}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ListTodo className="size-4" aria-hidden />
            Recent tasks
          </CardTitle>
          <CardDescription>
            Tasks will appear here once connected to the API.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-muted/30 px-6 py-16 text-center">
            <CircleDashed
              className="mb-4 size-10 text-muted-foreground/60"
              aria-hidden
            />
            <p className="text-sm font-medium">No tasks yet</p>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              Create your first task to start organizing work across your team.
            </p>
            <Link
              to={ROUTES.newTask}
              className={cn(buttonVariants({ size: 'sm' }), 'mt-6')}
            >
              <Plus className="size-4" aria-hidden />
              Create task
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
