import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, LayoutDashboard, Shield } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { APP_NAME, ROUTES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Unified dashboard',
    description:
      'See team workload, priorities, and progress in one clean view.',
  },
  {
    icon: CheckCircle2,
    title: 'Task workflows',
    description:
      'Create, assign, and track tasks with clear status and ownership.',
  },
  {
    icon: Shield,
    title: 'Secure by design',
    description:
      'JWT authentication with access and refresh tokens for safe sessions.',
  },
] as const

export function HomePage() {
  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col px-4 sm:px-6">
      <header className="flex h-16 items-center justify-between">
        <span className="text-sm font-semibold tracking-tight">{APP_NAME}</span>
        <div className="flex items-center gap-2">
          <Link
            to={ROUTES.login}
            className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
          >
            Sign in
          </Link>
          <Link
            to={ROUTES.register}
            className={cn(buttonVariants({ size: 'sm' }))}
          >
            Get started
          </Link>
        </div>
      </header>

      <section className="flex flex-1 flex-col items-center justify-center py-16 text-center">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Team productivity, reimagined
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Manage team tasks with clarity and confidence
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-balance">
          A modern workspace for distributed teams to plan work, track progress,
          and ship faster — without the clutter.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to={ROUTES.register} className={cn(buttonVariants({ size: 'lg' }))}>
            Start for free
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            to={ROUTES.dashboard}
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            View dashboard
          </Link>
        </div>
      </section>

      <section className="grid gap-4 pb-16 sm:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="shadow-sm">
            <CardHeader>
              <div className="mb-2 flex size-9 items-center justify-center rounded-lg bg-muted">
                <Icon className="size-4 text-foreground" aria-hidden />
              </div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </section>
    </div>
  )
}
