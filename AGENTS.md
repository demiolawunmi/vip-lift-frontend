# PROJECT KNOWLEDGE BASE

**Updated:** 2026-06-24
**Branch:** open-design-test

## OVERVIEW

VIP Lift Nigeria marketing site: React 19 + Vite 8 SPA with client-side routing. The current branch renders the Open Design prototype through a React adapter and uses the Open Design visual system documented in `DESIGN.md`. No backend, CMS, or form API is present; contact flows use `mailto:`, `tel:`, and WhatsApp links.

## STRUCTURE

```
vip-lift-frontend/
├── index.html                  # Static meta + root mount
├── DESIGN.md                   # Open Design system source of truth
├── public/assets/open-design/   # Extracted prototype CSS, fonts, images, scripts
├── src/
│   ├── main.jsx                # BrowserRouter + StrictMode
│   ├── App.jsx                 # Route adapter for raw prototype pages
│   ├── components/
│   │   └── CoverageGlobe.jsx   # Contact coverage globe
│   ├── prototype/              # Open Design HTML pages imported as raw strings
│   └── styles/global.css       # Imports Open Design CSS + app overrides
└── .omo/                       # Orchestration plans/notepads, not runtime app code
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add/edit page markup or copy | `src/prototype/*.html` | Current pages are raw Open Design HTML rendered by the SPA adapter |
| Add/edit route mapping | `src/App.jsx` | Update `pageSources`, `htmlRoutes`, or `aliases` |
| Per-route title/description | HTML `<title>` and meta description in `src/prototype/*.html` | Parsed by `App.jsx` |
| Global design tokens | `public/assets/open-design/css/site.css` | Canonical colors, typography, layout, components |
| App overrides | `src/styles/global.css` | Focus styles, adapter fixes, coverage globe styles |
| Contact coverage map | `src/components/CoverageGlobe.jsx` | Lagos hub, Abuja FCT and Toronto nodes |
| Design rules | `DESIGN.md` | Authoritative visual and content constraints |

## CODE MAP

| Symbol | Type | Location | Role |
|--------|------|----------|------|
| `App` | default export | `src/App.jsx` | Route table and SPA adapter |
| `pageSources` | object | `src/App.jsx` | Maps routes to raw prototype HTML |
| `htmlRoutes` | object | `src/App.jsx` | Rewrites `.html` links to SPA routes |
| `aliases` | object | `src/App.jsx` | Legacy route redirects |
| `rewriteHtml` | function | `src/App.jsx` | Rewrites asset paths and placeholder contact details |
| `usePrototypeInteractions` | hook | `src/App.jsx` | Restores nav, filters, forms, and link handling |
| `CoverageGlobe` | component | `src/components/CoverageGlobe.jsx` | MapLibre globe on contact page |

## CONVENTIONS

- **JSX only**: no TypeScript; `.jsx` entry, ESM (`"type": "module"`).
- **Prototype pages**: page content currently lives in `src/prototype/*.html`, not a central `siteContent.js`.
- **Assets**: Open Design assets live under `public/assets/open-design/` and are served from `/assets/open-design/...`.
- **Routing**: `react-router-dom` v7; raw HTML links are intercepted and routed in `App.jsx`.
- **Styling**: `src/styles/global.css` imports `/assets/open-design/css/site.css`; shared tokens should be changed there first.
- **Typography**: Cormorant Garamond display, Inter body, Montserrat labels.
- **Coverage map**: MapLibre dependency powers the contact globe; Lagos is the starting center and hub.

## ANTI-PATTERNS

- No WordPress, cart, search, CMS, or server-side forms.
- No fabricated certifications, partners, project names, or manufacturer authorisations.
- No Tesla visual system, Tesla marks, vehicle content, or copied automotive brand conventions.
- No lorem ipsum or bracketed placeholders on final production-facing pages.
- Do not add dependencies unless they are needed for a concrete approved feature.
- Do not hardcode new repeated design tokens inline when they belong in `site.css`.

## UNIQUE STYLES

- Fixed translucent navigation with backdrop blur and compact uppercase labels.
- Editorial serif headlines over a restrained Inter/Montserrat UI system.
- Deep navy and emerald brand palette with pale, lightly bordered surfaces.
- Bordered cards, compact tags, crisp CTAs, and minimal elevation.
- Contact coverage globe centered on Lagos with Abuja FCT and Toronto nodes.

## COMMANDS

```bash
npm run dev      # Vite dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## NOTES

- This branch intentionally blesses the Open Design redesign instead of the previous Tesla-inspired reference.
- `.omo/` and `.sisyphus/` are orchestration artifacts; ignore them for app changes unless editing plans.
- The app currently imports prototype HTML as raw strings. Future refactors may convert pages into React components, but should preserve the Open Design system unless the user asks for a redesign.
