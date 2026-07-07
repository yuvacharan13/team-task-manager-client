export const APP_NAME = 'Team Task Manager'

export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
  newTask: '/tasks/new',
  editTask: (id: string) => `/tasks/${id}/edit`,
  notFound: '/404',
} as const

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000/api'
