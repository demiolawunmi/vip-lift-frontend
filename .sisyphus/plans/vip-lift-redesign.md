# VIP Lift Nigeria React + Vite Redesign

## TL;DR
> **Summary**: Build a new static, multi-page React + Vite marketing website for VIP Lift Nigeria using a Tesla-inspired minimalist, photography-first design adapted to lift engineering services.
> **Deliverables**: React + Vite app; Home/About/Projects/Contact routes; VIP Lift content model; Tesla-inspired DESIGN.md/tokens; responsive layouts; static contact CTAs; Playwright QA evidence.
> **Effort**: Medium
> **Parallel**: YES - 3 waves
> **Critical Path**: Task 1 → Task 2 → Tasks 3-6 → Tasks 7-8 → Final Verification Wave

## Context
### Original Request
User requested a new clean website for VIP Lift Nigeria (`https://viplift.com.ng`), research into the current website/business context, selection of a matching design markdown file from `https://github.com/VoltAgent/awesome-design-md`, and implementation with React + Vite.

### Interview Summary
- Visual direction: Tesla-inspired design system, selected by user.
- Site structure: multi-page site matching current nav — Home, About, Projects, Contact.
- Contact flow: static links only; no backend form in first version.
- Image policy: mixed approach; reuse suitable current public VIP Lift imagery and use polished placeholders/abstract lift/building imagery where existing assets are weak.
- Verification: build + Playwright QA; no unit test setup initially.

### Gap Review (gaps addressed)
- Plan-family delegation prevented external Metis invocation in this session; the gap review was incorporated directly into this plan.
- Guardrails added: no WordPress/cart/search artifacts, no ecommerce, no backend/CMS, no extra color accents beyond Tesla-inspired palette, no overdecorated UI, no fake certifications/projects beyond researched current-site claims.
- Acceptance criteria require agent-executed commands and Playwright evidence; no human-only validation.

## Work Objectives
### Core Objective
Create a polished, modern static marketing site that presents VIP Lift Nigeria as a premium lift engineering company while preserving current business facts, services, trust claims, project examples, and contact details.

### Deliverables
- Vite React application scaffolded from the empty repo.
- Tesla-inspired `DESIGN.md` adapted for VIP Lift.
- Content/data layer for services, audiences, trust claims, projects, and contact details.
- Four routes: `/`, `/about`, `/projects`, `/contact`.
- Responsive shared layout: header/nav, footer, CTA bands, project/service cards.
- Static contact CTAs: `tel:`, `mailto:`, map/address link, and optional quote/info-pack CTA using mailto.
- Playwright QA evidence under `.sisyphus/evidence/`.

### Definition of Done (verifiable conditions with commands)
- `npm install` completes successfully after app scaffold.
- `npm run build` exits 0.
- `npm run dev -- --host 127.0.0.1` serves all four routes.
- Playwright verifies desktop and mobile views for `/`, `/about`, `/projects`, `/contact`.
- Playwright verifies static contact links and navigation links.
- No visible references to WordPress theme author, cart, search overlay, lorem ipsum, or broken placeholder copy.

### Must Have
- React + Vite.
- Tesla-inspired minimalist design: full-bleed/viewport hero sections, white/neutral surfaces, Carbon Dark text, Electric Blue primary CTAs, 4px button radius, minimal shadows/decor.
- VIP Lift content researched from current site.
- Multi-page routing.
- Responsive/mobile-friendly implementation.
- Accessibility basics: semantic landmarks, visible focus states, alt text, color contrast, keyboard-reachable nav.

### Must NOT Have
- Do not implement WordPress, CMS, ecommerce/cart, search overlay, login, or backend contact form.
- Do not fabricate new certifications, partners, client logos, or project names.
- Do not copy Tesla branding/logo/vehicle content; only use the design-system principles.
- Do not use lorem ipsum in final UI.
- Do not use heavy gradients, glassmorphism, random accent colors, or rounded pill SaaS styling that conflicts with Tesla-inspired direction.

## Verification Strategy
> ZERO HUMAN INTERVENTION - all verification is agent-executed.
- Test decision: build + Playwright QA; no unit tests initially.
- QA policy: Every task has agent-executed scenarios.
- Evidence: `.sisyphus/evidence/task-{N}-{slug}.{ext}`.

## Execution Strategy
### Parallel Execution Waves
> Target: 5-8 tasks per wave where dependencies allow.

Wave 1: Task 1 foundation scaffold; Task 2 content/design source setup depends on scaffold.
Wave 2: Tasks 3-6 can run after shared content/design structures exist.
Wave 3: Tasks 7-8 integrate polish, responsive behavior, and QA.

### Dependency Matrix (full, all tasks)
- Task 1: blocks all implementation tasks.
- Task 2: blocked by Task 1; blocks Tasks 3-8.
- Task 3: blocked by Tasks 1-2; can run parallel with Tasks 4-6.
- Task 4: blocked by Tasks 1-2; can run parallel with Tasks 3,5,6.
- Task 5: blocked by Tasks 1-2; can run parallel with Tasks 3,4,6.
- Task 6: blocked by Tasks 1-2; can run parallel with Tasks 3-5.
- Task 7: blocked by Tasks 3-6.
- Task 8: blocked by Tasks 3-7.

### Agent Dispatch Summary (wave → task count → categories)
- Wave 1 → 2 tasks → quick, visual-engineering.
- Wave 2 → 4 tasks → visual-engineering, writing.
- Wave 3 → 2 tasks → visual-engineering, unspecified-high.

## TODOs
> Implementation + Test = ONE task. Never separate.
> EVERY task MUST have: Agent Profile + Parallelization + QA Scenarios.

- [ ] 1. Scaffold React + Vite application

  **What to do**: Create a Vite React app in the repo root. Add scripts for `dev`, `build`, and `preview`. Use a conventional source structure: `src/main.jsx`, `src/App.jsx`, `src/styles/`, `src/components/`, `src/pages/`, `src/data/`, `src/assets/` if assets are added locally. Install only necessary dependencies: React, Vite, and a router if multi-page client routing is chosen.
  **Must NOT do**: Do not add backend/server code, CMS, WordPress migration tooling, or unrelated UI libraries unless needed and justified in commit notes.

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: greenfield Vite setup in empty repo.
  - Skills: [] - No special skill required.
  - Omitted: [`frontend-ui-ux`] - Styling decisions are handled in later tasks.

  **Parallelization**: Can Parallel: NO | Wave 1 | Blocks: Tasks 2-8 | Blocked By: none

  **References**:
  - Repo state: current workspace contains only `.git`; create app from scratch.
  - External: `https://vite.dev/guide/` - Vite app conventions.

  **Acceptance Criteria**:
  - [ ] `npm install` exits 0.
  - [ ] `npm run build` exits 0.
  - [ ] `src/` exists with React entrypoint and root app.

  **QA Scenarios**:
  ```
  Scenario: Fresh app builds
    Tool: Bash
    Steps: Run `npm install`; run `npm run build`.
    Expected: Both commands exit 0 and `dist/` is produced.
    Evidence: .sisyphus/evidence/task-1-scaffold-build.txt

  Scenario: Dev server serves app shell
    Tool: Playwright
    Steps: Start `npm run dev -- --host 127.0.0.1`; open `/`.
    Expected: Page responds with HTTP 200 and no console errors from missing React entrypoint.
    Evidence: .sisyphus/evidence/task-1-scaffold-page.png
  ```

  **Commit**: YES | Message: `chore(app): scaffold vite react site` | Files: `package.json`, `index.html`, `src/**`, config files

- [ ] 2. Add VIP Lift content model and Tesla-inspired design foundation

  **What to do**: Create `DESIGN.md` adapted from the Tesla-inspired design system for VIP Lift; define CSS variables/tokens for Electric Blue `#3E6AE1`, Carbon Dark `#171A20`, Graphite `#393C41`, Pewter `#5C5E62`, Light Ash `#F4F4F4`, White `#FFFFFF`, 4px button radius, and system sans typography. Create `src/data/siteContent.js` containing services, audiences, trust claims, projects, and contact info from research.
  **Must NOT do**: Do not use Tesla names/logos/vehicles. Do not invent business claims. Do not include lorem ipsum.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: design tokens and content structure affect all pages.
  - Skills: [`frontend-ui-ux`] - Needed for disciplined visual-system adaptation.
  - Omitted: []

  **Parallelization**: Can Parallel: NO | Wave 1 | Blocks: Tasks 3-8 | Blocked By: Task 1

  **References**:
  - Current site Home: `https://viplift.com.ng/` - services, hero claims, product categories.
  - Current site About: `https://viplift.com.ng/about-us/` - who they serve and audience-specific value props.
  - Current site Projects: `https://viplift.com.ng/projects/` - project names and trust claims.
  - Current site Contact: `https://viplift.com.ng/contact-us/` - address, phone, email, hours.
  - Design: `https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/tesla/DESIGN.md` - selected inspiration.

  **Acceptance Criteria**:
  - [ ] `DESIGN.md` exists and describes VIP Lift-specific Tesla-inspired tokens/components.
  - [ ] `src/data/siteContent.js` exports reusable content objects with no lorem ipsum.
  - [ ] Content includes contact details exactly as researched: `+234 1 4540118`, `sales@viplift.com.ng`, Lagos Island address, Mon-Fri 08:00-17:00.
  - [ ] `npm run build` exits 0.

  **QA Scenarios**:
  ```
  Scenario: Content source contains required facts
    Tool: Bash
    Steps: Grep `src/data/siteContent.js` for VIP Lift, Cibes, CE-Certified, EN 81-41, sales@viplift.com.ng, +234 1 4540118.
    Expected: All required strings are present once or in appropriate data arrays.
    Evidence: .sisyphus/evidence/task-2-content-grep.txt

  Scenario: Design tokens are applied globally
    Tool: Playwright
    Steps: Open `/`; inspect computed styles for primary CTA and body text.
    Expected: CTA uses `#3E6AE1` or equivalent rgb; body text uses dark neutral; no default Vite styling remains visible.
    Evidence: .sisyphus/evidence/task-2-design-tokens.png
  ```

  **Commit**: YES | Message: `feat(design): add vip lift content and design tokens` | Files: `DESIGN.md`, `src/data/**`, `src/styles/**`

- [ ] 3. Implement shared layout, navigation, and route shell

  **What to do**: Add route structure for `/`, `/about`, `/projects`, `/contact`. Implement shared header with VIP Lift wordmark/tagline, desktop nav, mobile nav, and CTA link. Implement footer with contact summary and nav links. Ensure nav labels are Home, About, Projects, Contact.
  **Must NOT do**: Do not add cart, search, WordPress attribution, or login links.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: layout and responsive nav need design care.
  - Skills: [`frontend-ui-ux`] - Needed for clean responsive navigation.
  - Omitted: []

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: Task 7 | Blocked By: Tasks 1-2

  **References**:
  - Current nav: Home, About Us, Completed Projects, Contact Us from `https://viplift.com.ng/`.
  - Tesla design: transparent/floating minimal nav, 14px medium links, 4px hover states.

  **Acceptance Criteria**:
  - [ ] All four routes render without blank pages.
  - [ ] Header nav works on desktop and mobile.
  - [ ] Footer contains email, phone, address, and hours.
  - [ ] `npm run build` exits 0.

  **QA Scenarios**:
  ```
  Scenario: Navigation reaches every route
    Tool: Playwright
    Steps: Open `/`; click Home, About, Projects, Contact nav links.
    Expected: URL changes to expected route and page h1 matches route.
    Evidence: .sisyphus/evidence/task-3-navigation.png

  Scenario: Mobile navigation is usable
    Tool: Playwright
    Steps: Set viewport 390x844; open `/`; open mobile menu; tap Projects; tap Contact.
    Expected: Menu opens/closes, routes load, no horizontal overflow.
    Evidence: .sisyphus/evidence/task-3-mobile-nav.png
  ```

  **Commit**: YES | Message: `feat(layout): add routes navigation and footer` | Files: `src/App.jsx`, `src/components/**`, `src/pages/**`, `src/styles/**`

- [ ] 4. Build Home page as Tesla-inspired VIP Lift showroom

  **What to do**: Create homepage sections: full-viewport hero with lift/building imagery or polished placeholder, headline such as “Lift solutions for homes and businesses”, subtitle about supply/install/maintenance, CTA pair (Request Info Pack via mailto, View Projects). Add sections for Home Lifts, Public Lifts, Why VIP Lift, and after-sales maintenance. Use one-message-per-section pacing.
  **Must NOT do**: Do not crowd the hero with all company details. Do not use generic stock copy that conflicts with researched content.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: homepage is primary visual expression.
  - Skills: [`frontend-ui-ux`] - Needed for Tesla-inspired responsive composition.
  - Omitted: []

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: Task 7 | Blocked By: Tasks 1-2

  **References**:
  - Home source: `https://viplift.com.ng/` - “A reliable way to move forward”, home/public lifts, Cibes/Italy supply/install/maintenance copy.
  - Tesla design: full-viewport photography, two-button CTA pair, minimal typography.

  **Acceptance Criteria**:
  - [ ] Homepage includes hero, Home Lifts, Public Lifts, trust/value props, and CTA section.
  - [ ] Primary CTA uses `mailto:sales@viplift.com.ng?subject=VIP%20Lift%20Information%20Pack` or equivalent static email link.
  - [ ] No lorem ipsum or default Vite content.
  - [ ] `npm run build` exits 0.

  **QA Scenarios**:
  ```
  Scenario: Homepage CTAs work
    Tool: Playwright
    Steps: Open `/`; locate primary Request Info Pack CTA and View Projects CTA.
    Expected: Request CTA has mailto href to sales@viplift.com.ng; View Projects navigates to `/projects`.
    Evidence: .sisyphus/evidence/task-4-home-ctas.png

  Scenario: Homepage responsive sections
    Tool: Playwright
    Steps: Capture `/` at 1440x900 and 390x844.
    Expected: Hero and sections are readable, CTAs visible, no horizontal scrolling.
    Evidence: .sisyphus/evidence/task-4-home-responsive.png
  ```

  **Commit**: YES | Message: `feat(home): build vip lift showroom homepage` | Files: `src/pages/Home*`, `src/components/**`, `src/styles/**`

- [ ] 5. Build About page with audience-specific value propositions

  **What to do**: Create About page sections: who we are, why architects choose VIP Lift, why contractors choose VIP Lift, why building owners choose VIP Lift. Present capabilities around quotations, specifications, drawings, custom options, panoramic glass shafts, up to 1000kg platform lifts, new/existing building suitability, fixed project contact, and support during installation.
  **Must NOT do**: Do not overclaim beyond current site copy. Do not hide the Lagos/Nigeria business context.

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: content restructuring and clarity are central.
  - Skills: [] - No special skill required.
  - Omitted: [`frontend-ui-ux`] - Shared components and design system already exist.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: Task 7 | Blocked By: Tasks 1-2

  **References**:
  - About source: `https://viplift.com.ng/about-us/` - audience-specific sections.

  **Acceptance Criteria**:
  - [ ] About page contains the three audience sections: architects, contractors, building owners.
  - [ ] Copy is polished but remains faithful to source facts.
  - [ ] Page includes a CTA to Contact.
  - [ ] `npm run build` exits 0.

  **QA Scenarios**:
  ```
  Scenario: Audience sections visible
    Tool: Playwright
    Steps: Open `/about`; find headings for architects, contractors, building owners.
    Expected: All headings are visible and each has descriptive copy.
    Evidence: .sisyphus/evidence/task-5-about-sections.png

  Scenario: About contact CTA navigates correctly
    Tool: Playwright
    Steps: Open `/about`; click Contact/Discuss a project CTA.
    Expected: Browser navigates to `/contact`.
    Evidence: .sisyphus/evidence/task-5-about-cta.png
  ```

  **Commit**: YES | Message: `feat(about): add audience-focused company page` | Files: `src/pages/About*`, `src/data/**`, `src/styles/**`

- [ ] 6. Build Projects page with researched gallery and trust claims

  **What to do**: Create Projects page with intro copy, trust claim list (CE-certified, EN 81-41, Machinery Directive 2006/42/EC, electric screw drive not hydraulics, quiet/user-friendly, suitable for existing buildings), and gallery/cards for researched project examples. Use mixed imagery: public current-site images where suitable; consistent placeholder treatment where image quality is weak/unavailable.
  **Must NOT do**: Do not create fake client logos. Do not imply endorsement by named clubs/government beyond “project example” wording from current site.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: gallery layout and image treatment are central.
  - Skills: [`frontend-ui-ux`] - Needed for polished responsive gallery.
  - Omitted: []

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: Task 7 | Blocked By: Tasks 1-2

  **References**:
  - Projects source: `https://viplift.com.ng/projects/` - project names, claim list, images.

  **Acceptance Criteria**:
  - [ ] Projects page lists at least: Banana Island, Island Club Lagos, Ikoyi Club, Alausa Secretariat, Afikpo site, Swift Lift, Baba Iteri site, Gabriel site, Johnson site.
  - [ ] Trust claims are visible and accurate.
  - [ ] Images have meaningful alt text.
  - [ ] `npm run build` exits 0.

  **QA Scenarios**:
  ```
  Scenario: Project examples render
    Tool: Playwright
    Steps: Open `/projects`; search page text for Banana Island, Ikoyi Club, Alausa Secretariat, Swift Lift.
    Expected: All named project examples are present.
    Evidence: .sisyphus/evidence/task-6-projects-list.png

  Scenario: Gallery is responsive
    Tool: Playwright
    Steps: Capture `/projects` at 1440x900 and 390x844.
    Expected: Gallery cards reflow cleanly; no image overflow; alt attributes exist on images.
    Evidence: .sisyphus/evidence/task-6-projects-responsive.png
  ```

  **Commit**: YES | Message: `feat(projects): add completed projects gallery` | Files: `src/pages/Projects*`, `src/data/**`, `src/styles/**`, optional `src/assets/**`

- [ ] 7. Build Contact page and polish global responsive UX

  **What to do**: Create Contact page with contact cards, operating hours, address, email, phone, static CTA buttons, and embedded/static map link if suitable. Add final responsive polish across all pages: focus states, active nav state, mobile spacing, image loading states, and consistent CTA styling.
  **Must NOT do**: Do not add a working form/backend. If a “drop a line” affordance is needed, make it a mailto CTA.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: final UI polish and contact affordances.
  - Skills: [`frontend-ui-ux`] - Needed for responsive/contact UX.
  - Omitted: []

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocks: Task 8 | Blocked By: Tasks 3-6

  **References**:
  - Contact source: `https://viplift.com.ng/contact-us/` - exact contact details.
  - Tesla design: static CTA button grammar, minimal panels, no form clutter.

  **Acceptance Criteria**:
  - [ ] Contact page includes address, phone, email, hours exactly as researched.
  - [ ] Phone CTA uses `tel:+23414540118` or equivalent valid `tel:` link.
  - [ ] Email CTA uses `mailto:sales@viplift.com.ng`.
  - [ ] All pages have visible focus states and no horizontal overflow at 390px width.
  - [ ] `npm run build` exits 0.

  **QA Scenarios**:
  ```
  Scenario: Contact links are static and valid
    Tool: Playwright
    Steps: Open `/contact`; inspect phone and email CTA hrefs.
    Expected: Phone href starts with `tel:`; email href starts with `mailto:sales@viplift.com.ng`.
    Evidence: .sisyphus/evidence/task-7-contact-links.png

  Scenario: Keyboard and mobile polish
    Tool: Playwright
    Steps: Open each route at 390x844; press Tab through interactive elements.
    Expected: Focus is visible, elements are reachable, no horizontal scrollbar appears.
    Evidence: .sisyphus/evidence/task-7-responsive-focus.png
  ```

  **Commit**: YES | Message: `feat(contact): add contact page and responsive polish` | Files: `src/pages/Contact*`, `src/components/**`, `src/styles/**`

- [ ] 8. Production QA, SEO metadata, and cleanup

  **What to do**: Add page titles/descriptions, favicon/brand metadata if available, semantic headings, Open Graph defaults, sitemap-like route sanity if no generator. Remove unused Vite assets, dead code, console logs, and broken image references. Run full build and Playwright QA across all pages.
  **Must NOT do**: Do not introduce new scope such as analytics, CMS, or deployment unless user asks later.

  **Recommended Agent Profile**:
  - Category: `unspecified-high` - Reason: end-to-end QA and cleanup across app.
  - Skills: [] - Use standard Bash/Playwright verification.
  - Omitted: [`git-master`] - Commit can be normal; no complex git operation needed.

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocks: Final Verification | Blocked By: Task 7

  **References**:
  - All routes: `/`, `/about`, `/projects`, `/contact`.
  - DESIGN.md: local adapted design guardrails.

  **Acceptance Criteria**:
  - [ ] `npm run build` exits 0.
  - [ ] All route titles/descriptions are meaningful and VIP Lift-specific.
  - [ ] No console errors on route load.
  - [ ] No broken images in Playwright network logs.
  - [ ] No strings: `Lorem`, `Vite`, `React logo`, `WPoperation`, `cart`, `No products in the cart` visible in UI.

  **QA Scenarios**:
  ```
  Scenario: Full route smoke test
    Tool: Playwright
    Steps: Start dev server; visit `/`, `/about`, `/projects`, `/contact`; collect console errors and screenshots.
    Expected: Every route loads with no console errors and visually complete above the fold.
    Evidence: .sisyphus/evidence/task-8-route-smoke.png

  Scenario: Cleanup forbidden strings
    Tool: Bash
    Steps: Grep built/source files for `Lorem|WPoperation|No products in the cart|React logo|Vite`.
    Expected: No UI-visible forbidden strings remain; package/dev-only mentions are justified if any.
    Evidence: .sisyphus/evidence/task-8-cleanup-grep.txt
  ```

  **Commit**: YES | Message: `chore(qa): add seo metadata and final cleanup` | Files: `index.html`, `src/**`, optional public assets

## Final Verification Wave (MANDATORY — after ALL implementation tasks)
> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.
> **Do NOT auto-proceed after verification. Wait for user's explicit approval before marking work complete.**
> **Never mark F1-F4 as checked before getting user's okay.** Rejection or user feedback -> fix -> re-run -> present again -> wait for okay.
- [ ] F1. Plan Compliance Audit — oracle
- [ ] F2. Code Quality Review — unspecified-high
- [ ] F3. Real Manual QA — unspecified-high (+ playwright)
- [ ] F4. Scope Fidelity Check — deep

## Commit Strategy
- Commit after each task with the specified message.
- Keep commits atomic by feature/page/foundation.
- Do not squash unless user explicitly asks later.

## Success Criteria
- VIP Lift has a complete modern React + Vite static marketing site matching the confirmed Tesla-inspired direction.
- Current business context and contact details are preserved accurately.
- The site is responsive, accessible at baseline, free of old WordPress artifacts, and verified by build + Playwright QA evidence.
