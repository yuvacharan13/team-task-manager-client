# AI Process Log

Living document for this take-home assessment. Updated incrementally as work proceeds — not reconstructed at the end.

**Last updated:** 2026-07-08 (session 1)

---

## Tools

| Tool | Role in this project |
|------|----------------------|
| **Cursor (Agent / Auto)** | Primary development environment. Used for project scaffolding, dependency installation, folder structure, page components, router wiring, build verification, and this log. |
| **Vite (`create-vite`)** | Scaffolded the React 19 + TypeScript base project. |
| **shadcn CLI (`npx shadcn@latest`)** | Initialized shadcn/ui (base-nova style) and added `button`, `card`, `input`, `label` components. |
| **npm** | Package management and script execution (`dev`, `build`, `lint`). |
| **oxlint** | Linting (bundled with the Vite template). |

_No other AI tools used yet (Claude Code, Copilot, ChatGPT, v0, etc.)._

---

## Prompts

### Prompt 1 — Project bootstrap (planning + implementation)

> You are acting as a senior frontend engineer.
>
> I am building a take-home assessment called "Team Task Manager".
>
> The goal is NOT simply to build a CRUD app.
>
> The goal is to demonstrate professional engineering practices, clean architecture, maintainable code, accessibility, scalability, and AI-assisted development.
>
> Think like a senior React architect.
>
> =================================================
> STACK
> =================================================
>
> Use:
>
> - React 19
> - TypeScript
> - Vite
> - React Router
> - TailwindCSS
> - shadcn/ui
> - React Hook Form
> - Zod
> - Axios
> - TanStack Query
> - Lucide React icons
>
> Do NOT use Redux.
>
> Authentication will be JWT Access Token + Refresh Token.
>
> The backend will expose REST APIs.
>
> =================================================
> DESIGN GOALS
> =================================================
>
> The application should look like a modern SaaS dashboard.
>
> Clean.
>
> Minimal.
>
> Professional.
>
> Lots of whitespace.
>
> Rounded cards.
>
> Subtle shadows.
>
> Responsive.
>
> Accessible.
>
> Dark mode ready.
>
> Think Linear, Notion, Vercel Dashboard, Clerk, Supabase.
>
> Avoid looking like a student project.
>
>
> Now, create a react project and required dependencies and created below mnetioned folder structure
>
> =================================================
> PAGES
> =================================================
>
> Create these routes.
>
> /
>
> /login
>
> /register
>
> /dashboard
>
> /tasks/new
>
> /tasks/:id/edit
>
> /404

**Outcome:** Successful. Full project scaffolded with architecture, dependencies, layouts, placeholder pages, and router.

---

### Prompt 2 — AI process documentation (this file)

> Maintain AI-PROCESS.md in the repo root, updated as you go — not reconstructed at the end. It must include:
> Section / What to record
> Tools — Every AI tool used …
> Prompts — Your key prompts verbatim …
> Skills / commands — Agent skills, slash commands, or custom instructions …
> MCP servers — Any MCP servers used …
> Plugins / extensions — IDE plugins or agent plugins used
> Interventions — Every place you overrode, corrected, or rejected AI output …
> Time log — Rough hours per phase

**Outcome:** In progress (this update).

---

## Skills / commands

### Agent skills available (not invoked this session)

The Cursor environment listed these skills; none were read or applied for the bootstrap work:

- `babysit` — PR merge-ready triage
- `canvas` — Live React canvas artifacts
- `create-hook` — Cursor hooks
- `create-rule` — Cursor rules
- `create-skill` — Agent skill authoring
- `loop` — Recurring prompts
- `sdk` — Cursor SDK
- `split-to-prs` — Split work into PRs
- `statusline` — CLI status line
- `update-cursor-settings` — VSCode/Cursor settings

### User rules applied (from Cursor settings)

These governed agent behavior throughout session 1:

- **Git safety** — No commits unless explicitly requested.
- **PR workflow** — Use `gh` for GitHub tasks when creating PRs.
- **Code principles** — Minimize scope, avoid over-engineering, match existing conventions, useful tests only.
- **Communication** — Code citations, markdown links, proportional responses.

### Custom project files

| File | Purpose |
|------|---------|
| `components.json` | shadcn/ui config (base-nova, neutral, Lucide icons, `@/` aliases) |
| `.env.example` | `VITE_API_BASE_URL` placeholder |
| User rules (Cursor) | Global agent instructions — not committed to repo |

_No `CLAUDE.md`, `.cursorrules`, or slash commands written yet._

---

## MCP servers

**None used in session 1.**

Available agent tools were built-in only: Shell, Read, Write, Grep, Glob, Delete, StrReplace, TodoWrite, ReadLints, WebSearch, WebFetch, Task, etc.

---

## Plugins / extensions

| Plugin / tool | Usage |
|---------------|-------|
| **@vitejs/plugin-react** | React Fast Refresh and JSX transform |
| **@tailwindcss/vite** | Tailwind CSS v4 Vite integration |
| **shadcn v4.13.0** | UI component registry and init (`base-nova` style, Geist font) |
| **@base-ui/react** | Headless primitives for shadcn button/input |
| **@fontsource-variable/geist** | Typography (pulled in by shadcn init) |
| **tw-animate-css** | Animation utilities (pulled in by shadcn init) |
| **oxlint** | Lint step in `npm run lint` |

---

## Interventions

Places where AI output was overridden, corrected, or rejected — and why.

### 1. Vite scaffold cancelled in non-empty directory

- **What happened:** `npm create vite@latest .` exited with "Operation cancelled" because the repo already contained `README.md`.
- **How I knew:** CLI output said cancelled; no files were created.
- **Fix:** Scaffolded in `team-task-manager-client-temp/`, copied into project root, removed temp dir.

### 2. shadcn init failed before Tailwind + path aliases

- **What happened:** First `npx shadcn@latest init` failed — no Tailwind config, no `@/*` alias.
- **How I knew:** CLI errors: "No Tailwind CSS configuration found" and "Could not find valid path aliases".
- **Fix:** Added `@tailwindcss/vite` plugin, `src/index.css` Tailwind imports, `baseUrl`/`paths` in `tsconfig.app.json`, `@` alias in `vite.config.ts`. Re-ran init successfully.

### 3. shadcn wrote components to literal `@/` folder

- **What happened:** `shadcn add` created `/@[path]/components/ui/` at repo root instead of `src/components/ui/`.
- **How I knew:** `Glob` showed `@/components/ui/button.tsx` as a real directory named `@`, not under `src/`.
- **Fix:** Copied UI components to `src/components/ui/`, deleted the `@/` directory.

### 4. `Button asChild` not supported

- **What happened:** Initial `AppLayout` used `<Button asChild><Link>…</Link></Button>` (Radix pattern).
- **How I knew:** shadcn v4 `button.tsx` uses `@base-ui/react/button`, which has no `asChild` prop; would fail type-check or render incorrectly.
- **Fix:** Replaced with `<Link className={cn(buttonVariants({ size: 'sm' }))}>` pattern across layout and pages.

### 5. Unused imports after refactors

- **What happened:** `Button` imported but unused in `HomePage`, `DashboardPage`; `buttonVariants` imported but unused in `LoginPage`.
- **How I knew:** Would trigger `noUnusedLocals` on build.
- **Fix:** Removed unused imports.

### 6. TypeScript `baseUrl` deprecation error on build

- **What happened:** `tsc -b` failed with TS5101 — `baseUrl` deprecated in TypeScript 6.
- **How I knew:** `npm run build` exit code 2 with explicit compiler message.
- **Fix:** Added `"ignoreDeprecations": "6.0"` to `tsconfig.app.json` (kept `baseUrl`/`paths` for `@/*` resolution until TS 7 migration path is chosen).

### 7. Wrong package name from temp scaffold

- **What happened:** `package.json` name was `team-task-manager-client-temp`; `index.html` title matched.
- **How I knew:** Read `package.json` after copying from temp directory.
- **Fix:** Renamed to `team-task-manager-client`; updated HTML title and meta description.

### 8. Forms are UI-only (intentional deferral)

- **What happened:** Login, register, and task forms render but have no React Hook Form + Zod wiring yet.
- **How I knew:** Prompt asked for project + routes + dependencies, not full feature implementation.
- **Decision:** Left as accessible HTML forms with `noValidate`; RHF/Zod installed and ready for next phase.

---

## Time log

Rough hours per phase (session 1 — 2026-07-08):

| Phase | Hours | Notes |
|-------|-------|-------|
| Project scaffolding (Vite, deps, workarounds) | ~0.5 | Temp-dir workaround for non-empty root |
| Tailwind + shadcn/ui setup | ~0.5 | Init retries, component adds, `@/` path fix |
| Architecture, pages, router, API stubs | ~1.0 | Layouts, 7 routes, types, axios client |
| Build/lint verification | ~0.25 | `tsc` deprecation fix, unused import cleanup |
| AI-PROCESS.md (this file) | ~0.25 | Initial living-document entry |
| **Total session 1** | **~2.5 h** | |

---

## Deliverables completed (session 1)

- [x] Vite + React 19 + TypeScript project
- [x] All specified dependencies installed
- [x] Tailwind CSS v4 + shadcn/ui (button, card, input, label)
- [x] Folder structure (`app/`, `components/`, `features/`, `hooks/`, `lib/`, `pages/`, `types/`)
- [x] Routes: `/`, `/login`, `/register`, `/dashboard`, `/tasks/new`, `/tasks/:id/edit`, `/404`
- [x] TanStack Query provider, Axios client stub, typed endpoints
- [x] Production build passes
- [ ] Auth flow (JWT login/register)
- [ ] Task CRUD with React Hook Form + Zod
- [ ] Protected routes
- [ ] Dark mode toggle

---

## Next session — update here

_When continuing work, append new prompts, interventions, tools, and time under new dated entries rather than rewriting history._
