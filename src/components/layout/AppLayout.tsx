import { Link, NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, Plus } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { APP_NAME, ROUTES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const navItems = [
  { to: ROUTES.dashboard, label: 'Dashboard', icon: LayoutDashboard },
] as const

export function AppLayout() {
  return (
    <div className="min-h-svh bg-muted/30">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-8">
            <Link
              to={ROUTES.dashboard}
              className="text-sm font-semibold tracking-tight"
            >
              {APP_NAME}
            </Link>

            <nav className="hidden items-center gap-1 sm:flex" aria-label="Main">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    cn(
                      'inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
                      isActive && 'bg-muted text-foreground',
                    )
                  }
                >
                  <Icon className="size-4" aria-hidden />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          <Link to={ROUTES.newTask} className={cn(buttonVariants({ size: 'sm' }))}>
            <Plus className="size-4" aria-hidden />
            New task
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Outlet />
      </main>
    </div>
  )
}
