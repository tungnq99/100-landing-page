# Repository Guidelines

## Project Structure & Module Organization
This repository is a collection of landing-page projects. Each top-level folder is an independent app/site (for example: `cafe-landing-page`, `prodmast`, `shopping-cart-landing-page`).

- Next.js projects contain `package.json` and usually `app/` or `pages/`, plus config files.
- Static projects (like `shopping-cart-landing-page`) keep code in root-level `index.html`, `styles.css`, and `script.js`.
- Shared root files: `.gitignore`, `install_deps.bat`.
- Build artifacts and dependencies (`*/.next`, `*/node_modules`) are ignored and must not be committed.

## Build, Test, and Development Commands
Run commands from the specific project directory.

- `npm install`: install dependencies for that project.
- `npm run dev`: start local development server (Next.js projects).
- `npm run build`: production build check.
- `npm run start`: run production build locally.
- `npm run lint`: run ESLint checks.

For static projects without `package.json`, open `index.html` directly or serve with a simple local server.

## Coding Style & Naming Conventions
- Use 2-space indentation in HTML, CSS, and JS/TS.
- Prefer semantic HTML and small, focused modules/components.
- Use `camelCase` for JS variables/functions, `PascalCase` for React components, and kebab-case for folder names.
- Keep CSS class names descriptive and consistent (`hero-content`, `product-card`).
- Run `npm run lint` before opening a PR for Next.js projects.

## Testing Guidelines
There is no unified test suite at repository root. Current quality gate is:

- Lint passes in project scope (`npm run lint`).
- Manual smoke test for key flows (navigation, responsive layout, interactive elements).

If you add automated tests, place them near the feature (`__tests__/` or `*.test.ts(x)`) and document the run command in that project’s `README`.

## Commit & Pull Request Guidelines
Recent history shows short, task-focused messages (for example: `portfolio landing page`, `fix javascript`, `feat: ...`). Follow this pattern with clearer intent:

- Commit format: `<scope>: <action>` (example: `shopping-cart: add quantity controls`).
- Keep commits focused to one project/fix.
- PRs should include: summary, changed project path(s), before/after screenshots for UI work, and manual test notes.
