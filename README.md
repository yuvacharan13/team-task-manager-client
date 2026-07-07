# Team Task Manager

A modern SaaS-style team task management client built with React 19, TypeScript, and Vite.

## Stack

- React 19 + TypeScript
- Vite
- React Router
- Tailwind CSS + shadcn/ui
- React Hook Form + Zod
- Axios
- TanStack Query
- Lucide React

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

## Routes

| Path | Page |
|------|------|
| `/` | Landing |
| `/login` | Sign in |
| `/register` | Create account |
| `/dashboard` | Dashboard |
| `/tasks/new` | Create task |
| `/tasks/:id/edit` | Edit task |
| `/404` | Not found |

## Project structure

```
src/
├── app/              # App shell, providers, router
├── components/
│   ├── layout/       # Layout components
│   └── ui/           # shadcn/ui primitives
├── features/         # Feature modules (auth, tasks)
├── hooks/            # Shared hooks
├── lib/              # API client, constants, utils
├── pages/            # Route-level page components
└── types/            # Shared TypeScript types
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — run oxlint

## Folder structure

src/
├── app/
│   ├── App.tsx           # Root app with providers + router
│   ├── providers.tsx     # TanStack Query provider
│   └── router.tsx        # Route definitions
├── components/
│   ├── layout/
│   │   ├── RootLayout.tsx
│   │   ├── AuthLayout.tsx    # Split layout for login/register
│   │   └── AppLayout.tsx     # Dashboard shell with nav
│   └── ui/                   # shadcn/ui (button, card, input, label)
├── features/
│   ├── auth/types/
│   └── tasks/types/
├── hooks/
├── lib/
│   ├── api/
│   │   ├── client.ts         # Axios instance + JWT header
│   │   └── endpoints.ts
│   ├── constants.ts          # Routes + app config
│   └── utils.ts              # cn() helper
├── pages/
│   ├── home/HomePage.tsx
│   ├── auth/LoginPage.tsx
│   ├── auth/RegisterPage.tsx
│   ├── dashboard/DashboardPage.tsx
│   ├── tasks/NewTaskPage.tsx
│   ├── tasks/EditTaskPage.tsx
│   └── errors/NotFoundPage.tsx
└── types/
