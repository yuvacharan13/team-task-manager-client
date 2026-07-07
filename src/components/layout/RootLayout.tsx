import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className="min-h-svh bg-background">
      <Outlet />
    </div>
  )
}
