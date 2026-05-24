# PROJECT KNOWLEDGE BASE

**Generated:** 2026-05-22
**Commit:** no-commit
**Branch:** main

## OVERVIEW

VIP Lift Nigeria marketing site: React 19 + Vite 8 SPA with client-side routing. Tesla-inspired visual system (see `DESIGN.md`). No backend, CMS, or form API—contact is `mailto:` / `tel:` only.

## STRUCTURE

```
vip-lift-frontend/
├── index.html          # Static meta + root mount
├── public/assets/      # Brand logo + favicon (served at /assets/...)
├── DESIGN.md           # Tokens, components, do/do-not
├── src/
│   ├── main.jsx        # BrowserRouter + StrictMode
│   ├── App.jsx         # Routes, layout, pages, MetaTitle
│   ├── data/siteContent.js   # All copy, nav, images (WP CDN URLs)
│   └── styles/global.css     # CSS variables + layout
└── .omo/               # Orchestration plans/notepads (not app code)
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add/edit page copy | `src/data/siteContent.js` | Single content source |
| Brand logo / favicon | `public/assets/` + `siteContent.js` → `brand` | Drop files in `public/assets/`; paths in `brand` export |
| New route / page | `src/App.jsx` | Add `pageMeta` entry + `<Route>` + page component |
| Per-route `<title>` / description | `App.jsx` → `pageMeta` + `MetaTitle` | Updates `document.title` and meta description |
| Global styles / tokens | `src/styles/global.css` | Mirrors `DESIGN.md` color tokens |
| Typography / fonts | `index.html` + `global.css` → `--font-display`, `--font-text` | Open Sans via Google Fonts |
| Design rules | `DESIGN.md` | Authoritative for visual constraints |
| Redesign plan | `.omo/plans/vip-lift-redesign.md` | Active boulder, not runtime |

## CODE MAP

| Symbol | Type | Location | Role |
|--------|------|----------|------|
| `App` | default export | `src/App.jsx` | Route table |
| `pageMeta` | object | `src/App.jsx` | SEO title/description per path |
| `siteContent` exports | data | `src/data/siteContent.js` | `contact`, `navItems`, `hero`, `services`, etc. |
| `PageShell` | component | `src/App.jsx` | Header + main + Footer wrapper |

All page UI lives in `App.jsx` (~290 lines; no `src/pages/` split). Pages: `/`, `/about`, `/projects`, `/contact`. Content data ~130 lines; global CSS ~450 lines.

## CONVENTIONS

- **JSX only** — no TypeScript; `.jsx` entry, ESM (`"type": "module"`).
- **Content separation** — never hardcode marketing copy in components; use `siteContent.js`.
- **Images** — remote URLs on `viplift.com.ng` (legacy WordPress uploads); lazy-load in grids.
- **Routing** — `react-router-dom` v7; `NavLink` with `end` on home; mobile nav closes on `pathname` change.
- **Hero background** — CSS custom property `--hero-image` inline on section.

## ANTI-PATTERNS (THIS PROJECT)

- No WordPress, cart, search, CMS, or server-side forms.
- No fabricated certifications, partners, or project names.
- No Tesla marks, vehicle content, or copied branding.
- No lorem ipsum or placeholder business facts.
- Do not add dependencies without plan approval (minimal stack: React, Router, Vite).

## UNIQUE STYLES

- Fixed translucent header (`backdrop-filter`), centered nav, compact CTAs.
- Photography-first sections; `--color-blue` (#3E6AE1) primary actions.
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
