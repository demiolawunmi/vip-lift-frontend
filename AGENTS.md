# PROJECT KNOWLEDGE BASE

**Generated:** 2026-05-22
**Commit:** no-commit
**Branch:** main

## OVERVIEW

VIP Lift Nigeria marketing site: React 19 + Vite 8 + Tailwind CSS SPA with client-side routing. The official VIP Lift Nigeria brand kit governs the visual system (see `DESIGN.md`). No backend, CMS, or form API—contact is `mailto:` / `tel:` only.

## STRUCTURE

```
vip-lift-frontend/
├── index.html          # Static meta + root mount
├── public/assets/      # Brand logo + favicon (served at /assets/...)
├── DESIGN.md           # Tokens, components, do/do-not
├── src/
│   ├── main.jsx        # BrowserRouter + StrictMode
│   ├── App.jsx         # Routes, sections, and page components
│   ├── components/     # Chakra-compatible Tailwind migration primitives
│   ├── data/siteContent.js   # All copy, navigation, and asset paths
│   └── styles/global.css     # Tailwind theme and global styles
└── .omo/               # Orchestration plans/notepads (not app code)
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add/edit page copy | `src/data/siteContent.js` | Single content source |
| Brand logo / favicon | `public/assets/` + `siteContent.js` → `brand` | Drop files in `public/assets/`; paths in `brand` export |
| New route / page | `src/App.jsx` | Add `pageMeta` entry + `<Route>` + page component |
| Per-route `<title>` / description | `src/App.jsx` | Updates title, description, and schema |
| Header / footer / page shell | `src/App.jsx` | Shared responsive layout |
| Global styles / tokens | `src/styles/global.css` | Tailwind v4 theme mirroring `DESIGN.md` |
| Typography / fonts | `src/styles/global.css` | Self-hosted Cormorant Garamond, Inter, Montserrat |
| Design rules | `DESIGN.md` | Authoritative for visual constraints |
| Redesign plan | `.omo/plans/vip-lift-redesign.md` | Active boulder, not runtime |

## CODE MAP

| Symbol | Type | Location | Role |
|--------|------|----------|------|
| `App` | default export | `src/App.jsx` | Route table |
| `MetaTitle` / `SchemaMarkup` | components | `src/App.jsx` | SEO title, description, and schema per path |
| `siteContent` exports | data | `src/data/siteContent.js` | `contact`, `navItems`, `hero`, `services`, etc. |
| `PageShell` | component | `src/App.jsx` | Header + main + footer wrapper |

Routes include home, about, projects and project details, service pages, audience pages, service area, contact, and customize-lift.

## CONVENTIONS

- **JSX only** — no TypeScript; `.jsx` entry, ESM (`"type": "module"`).
- **Content separation** — never hardcode marketing copy in components; use `siteContent.js`.
- **Images** — local files in `public/assets/images/` (sourced from legacy WordPress uploads); lazy-load in grids. Paths centralized in `siteContent.js` → `images` export.
- **Routing** — `react-router-dom` v7; `NavLink` with `end` on home; mobile nav closes on `pathname` change.
- **Design authority** — use official assets in `public/assets/brand/`; do not reintroduce the legacy Tesla/blue visual system.
- **Styling** — Tailwind v4 is configured through `@tailwindcss/vite` and `src/styles/global.css`.

## ANTI-PATTERNS (THIS PROJECT)

- No WordPress, cart, search, CMS, or server-side forms.
- No fabricated certifications, partners, or project names.
- No Tesla marks, vehicle content, or copied branding.
- No lorem ipsum or placeholder business facts.
- Do not add dependencies without plan approval (minimal stack: React, Router, Vite).

## UNIQUE STYLES

- Fixed translucent header (`backdrop-filter`), centered nav, compact CTAs.
- Photography-first sections; Emerald Accent (`#168A55`) primary actions.
- Contact CTAs use encoded `mailto:` subjects (`VIP%20Lift%20...`).

## COMMANDS

```bash
npm run dev      # Vite dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## NOTES

- Repo has **no commits yet**; git metadata in header will update after first commit.
- `src/` subdirs (`data/`, `styles/`) are thin—no child `AGENTS.md` (parent covers).
- Orchestration artifacts under `.omo/`, `.sisyphus/` — ignore for app changes unless editing plans.
