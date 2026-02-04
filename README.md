## React Starter Template

Teaching-focused starter for building modern web apps.

Included:

- React 19 + TypeScript
- Vite
- React Router v7 (SPA, `createBrowserRouter`)
- Tailwind CSS v4
- shadcn/ui (Tailwind v4 compatible)
- ESLint (type-aware) + Prettier
- Vitest + React Testing Library
- Husky + lint-staged (pre-commit + pre-push)
- GitHub Actions CI (lint + typecheck + test + build)

Convex is optional and can be added later: `docs/convex.md`.

### Requirements

- Node 24
- npm

### VS Code (Recommended)

This repo includes:

- `./.vscode/extensions.json` (recommended extensions)
- `./.vscode/settings.json` (format on save + ESLint fixes)

### Getting Started

```bash
npm install
npm run dev
```

### Quality Checks

```bash
npm run lint
npm run typecheck
npm run test:run
npm run build
```

Or run everything:

```bash
npm run check
```
