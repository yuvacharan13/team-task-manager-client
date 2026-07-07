import { Link, useParams } from 'react-router-dom'
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

export function EditTaskPage() {
  const { id } = useParams<{ id: string }>()

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
          <h1 className="text-2xl font-semibold tracking-tight">Edit task</h1>
          <p className="text-sm text-muted-foreground">
            Update task details{ id ? ` · ${id}` : '' }.
          </p>
        </div>
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Task details</CardTitle>
          <CardDescription>
            Make changes to this task and save when you&apos;re done.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" noValidate>
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" name="description" />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Link
                to={ROUTES.dashboard}
                className={cn(buttonVariants({ variant: 'outline' }))}
              >
                Cancel
              </Link>
              <Button type="submit">Save changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
