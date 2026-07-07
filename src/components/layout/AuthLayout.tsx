import { Link, Outlet } from 'react-router-dom'

import { APP_NAME, ROUTES } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function AuthLayout() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between bg-muted/40 p-10 lg:flex">
        <Link
          to={ROUTES.home}
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {APP_NAME}
        </Link>
        <blockquote className="space-y-2">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Coordinate work across your team with clarity, accountability, and
            focus.
          </p>
        </blockquote>
        <p className="text-sm text-muted-foreground">
          Built for modern product teams.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center p-6 sm:p-10">
        <div className="mb-8 w-full max-w-sm lg:hidden">
          <Link
            to={ROUTES.home}
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            {APP_NAME}
          </Link>
        </div>

        <div className={cn('w-full max-w-sm')}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
