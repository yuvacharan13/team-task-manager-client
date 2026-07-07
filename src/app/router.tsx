import { createBrowserRouter, Navigate } from 'react-router-dom'

import { AppLayout } from '@/components/layout/AppLayout'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { RootLayout } from '@/components/layout/RootLayout'
import { ROUTES } from '@/lib/constants'
import { DashboardPage } from '@/pages/dashboard/DashboardPage'
import { NotFoundPage } from '@/pages/errors/NotFoundPage'
import { HomePage } from '@/pages/home/HomePage'
import { LoginPage } from '@/pages/auth/LoginPage'
import { RegisterPage } from '@/pages/auth/RegisterPage'
import { EditTaskPage } from '@/pages/tasks/EditTaskPage'
import { NewTaskPage } from '@/pages/tasks/NewTaskPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'register',
            element: <RegisterPage />,
          },
        ],
      },
      {
        element: <AppLayout />,
        children: [
          {
            path: 'dashboard',
            element: <DashboardPage />,
          },
          {
            path: 'tasks/new',
            element: <NewTaskPage />,
          },
          {
            path: 'tasks/:id/edit',
            element: <EditTaskPage />,
          },
        ],
      },
      {
        path: '404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <Navigate to={ROUTES.notFound} replace />,
      },
    ],
  },
])
