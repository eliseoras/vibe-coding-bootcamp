<!--
This is the single source of truth for AI agents working in this repo.

Some tools look for other filenames (e.g. CLAUDE.md). We intentionally keep
only AGENTS.md to avoid duplication.
-->

# Project Instructions (AGENTS.md)

This file is meant for AI coding agents.

## What This Repo Is

Student-friendly React SPA starter.

- Frontend: React 19 + TypeScript + Vite
- Routing: React Router v7 (SPA)
- UI: Tailwind CSS v4 + shadcn/ui (New York v4)
- Forms: react-hook-form + zod
- Tests: Vitest + React Testing Library
- Quality gates: ESLint (type-aware) + Prettier
- Git: Husky + lint-staged
- CI: GitHub Actions (lint + typecheck + tests + build)
- Backend: Convex is optional (see `docs/convex.md`)

## Non-Negotiables

- Node.js: 24+ required. `npm install` will fail early if Node is older.
- Keep Convex optional: do not add Convex dependencies unless explicitly requested.
- Prefer existing patterns and shadcn components instead of inventing new UI primitives.

## Commands

- Dev server: `npm run dev`
- Full verification (run after meaningful changes): `npm run check`
- Lint only: `npm run lint`
- Typecheck only: `npm run typecheck`
- Tests: `npm run test` (watch) / `npm run test:run` (CI)
- Format: `npm run format`

## Git Hooks

- pre-commit: runs `lint-staged` then `npm run typecheck`
- pre-push: runs `npm run test:run`

If you are asked to make commits, commits should pass hooks locally.

## Repo Layout

- Routes:
  - `src/router.tsx` defines route table
  - `src/routes/*` contains route components
  - Example CRUD route: `src/routes/tasks.tsx`
- Shared layout: `src/routes/root-layout.tsx`
- UI components:
  - shadcn components: `src/components/ui/*`
  - utilities: `src/lib/utils.ts`
- Local persistence helper:
  - `src/lib/use-local-storage-state.ts`

Import alias:

- Use `@/` for `src/` imports (configured in TS + Vite).

## Implementation Conventions

- Use TypeScript strictly; avoid `any`.
- Keep route components presentational + small helpers.
- Prefer controlled forms via react-hook-form + zod schema validation.
- When adding UI, use shadcn components + Tailwind utilities.
- When adding new shadcn components, use `npx shadcn@latest add <name>`.

## Repo Goals

Teaching-focused React SPA template with:

- Local CRUD example that persists to localStorage (`/tasks`)
- CI + hooks to keep students on the happy path

## How To Add A New Page (Pattern)

1. Create `src/routes/<page>.tsx` exporting `<PageName>Route`.
2. Register route in `src/router.tsx`.
3. Add nav entry in `src/routes/root-layout.tsx` if needed.
4. Run `npm run check`.

## Local Persistence

For student CRUD demos, prefer local-first state + persistence.

- Use `useLocalStorageState` for simple persisted lists.
- Keep storage keys versioned, e.g. `something.v1`.
- Do not store secrets in localStorage.

## When To Suggest Convex

Convex should be suggested only when the user needs:

- multi-device persistence
- multi-user data sharing
- server-side authorization
- realtime sync across clients

Use `docs/convex.md` as the starting point.
