import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ROUTES } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function NewTaskPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center gap-3">
        <Link
          to={ROUTES.dashboard}
          className={cn(buttonVariants({ variant: 'ghost', size: 'icon-sm' }))}
          aria-label="Back to dashboard"
        >
          <ArrowLeft className="size-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">New task</h1>
          <p className="text-sm text-muted-foreground">
            Add a task for your team to track and complete.
          </p>
        </div>
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Task details</CardTitle>
          <CardDescription>
            Fill in the information below to create a new task.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" noValidate>
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Ship onboarding flow"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="Optional details about this task"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Link
                to={ROUTES.dashboard}
                className={cn(buttonVariants({ variant: 'outline' }))}
              >
                Cancel
              </Link>
              <Button type="submit">Create task</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
