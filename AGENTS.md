<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

Package manager is **npm** (`package-lock.json`; no pnpm/yarn config).

- `npm run dev` — dev server; it re-writes the managed block above, so never delete it (commit its changes instead).
- Verify work with, in order: `npm run format` → `npm run lint` → `npm run typecheck`. There is **no test runner and no `npm test`** — don't invent one.
- `npm run lint` is plain `eslint` (flat config, `eslint-config-next`) with no `--fix`; run `npx eslint --fix .` to autofix.
- `npm run format` runs Prettier over `**/*.{ts,tsx}` only (not CSS/JSON/MD). Config `.prettierrc`: no semicolons, double quotes, LF, `prettier-plugin-tailwindcss`.
- `npm run build` for a production check.

## Stack facts that matter

- Single Next.js **16.4.5** App Router app, not a monorepo: routes in `app/`, shared code in `components/`, `hooks/`, `lib/`. Check `node_modules/next/dist/docs/` before assuming any Next API from training data.
- shadcn/ui style is **`base-nova`**: primitives are **Base UI** (`@base-ui/react`), *not* Radix — never import `@radix-ui/*`. Add components with `npx shadcn@latest add <name>` (config in `components.json`); generated code lives in `components/ui/`, hand-written app components in `components/shared/`.
- `cn` comes from the `cn` npm package, re-exported by `lib/utils.ts` — use `import { cn } from "@/lib/utils"`, not clsx/tailwind-merge.
- Tailwind **v4**: no `tailwind.config.*`; all tokens/`@theme` live in `app/globals.css` (also the `tailwindStylesheet` for the Prettier plugin).
- Path alias `@/*` → repo root (tsconfig `paths`).
- `next-env.d.ts` and `.env*` are gitignored/generated — don't hand-edit or commit. `.env` exists but is empty; no env vars are defined yet.

## Repo instructions

- `CLAUDE.md` is just `@AGENTS.md` — keep all agent guidance in this file.
