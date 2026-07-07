import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'
import { ROUTES } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function NotFoundPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link to={ROUTES.home} className={cn(buttonVariants(), 'mt-8')}>
        Back to home
      </Link>
    </div>
  )
}
