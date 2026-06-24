# VIP Lift Nigeria Open Design System

**Updated:** 2026-06-24
**Branch:** open-design-test
**Canonical CSS:** `public/assets/open-design/css/site.css`

## 1. Design Direction

VIP Lift Nigeria now uses the Open Design system installed from the redesigned prototype. This replaces the previous Tesla-inspired reference. The site should feel premium, architectural, calm, and technically credible without copying automotive product-page conventions.

The visual language is built around restrained luxury: deep navy foundations, emerald action color, warm pale surfaces, editorial serif headlines, sharp uppercase labels, and quiet bordered cards. The brand should feel like a lift specialist serving serious residential, commercial, public-building, and architectural clients in Nigeria.

## 2. Product Feel

- Premium lift consulting, not generic construction marketing.
- Clear categories and service paths for homes, public buildings, modernisation, maintenance, and custom work.
- Editorial and architectural rather than playful or decorative.
- Local Nigerian expertise with international lift technology.
- Trustworthy, specific, and understated. Avoid exaggerated claims, invented certifications, and fake partner names.

## 3. Color Tokens

Use the variables in `site.css` as the source of truth.

### Brand

| Token | Value | Role |
|---|---:|---|
| `--deep-navy` | `#020814` | Dark brand panels, footer, premium contrast |
| `--secondary` | `#006d40` | Primary emerald action color |
| `--forest-emerald` | `#0F5F3C` | Hover and deeper accent |
| `--platinum` | `#D8D8D4` | Soft text on dark surfaces |
| `--warm-silver` | `#C9C7BF` | Supporting neutral |
| `--cool-grey` | `#A8ADB3` | Muted dark-surface text |

### Surfaces

| Token | Value | Role |
|---|---:|---|
| `--bg` | `#f8f9ff` | Page background |
| `--fg` | `#191c20` | Main text |
| `--muted` | `#44474d` | Secondary text |
| `--muted-2` | `#75777d` | Captions and quiet metadata |
| `--surface-lowest` | `#ffffff` | Cards and inputs |
| `--surface-low` | `#f2f3f9` | Alternate soft surface |
| `--surface-container` | `#eceef3` | Table rows and subtle panels |
| `--surface-high` | `#e6e8ee` | Raised light surface |
| `--surface-highest` | `#e1e2e8` | Strongest light surface |

### Lines And States

| Token | Value | Role |
|---|---:|---|
| `--border` | `rgba(6, 19, 38, 0.14)` | Hairline dividers and card borders |
| `--border-strong` | `rgba(6, 19, 38, 0.28)` | Inputs, tags, secondary buttons |
| `--nav-pill` | `rgba(6, 19, 38, 0.08)` | Nav hover and active pills |
| `--on-dark` | `#eff0f6` | Main text on navy |
| `--on-dark-muted` | `#A8ADB3` | Secondary text on navy |
| `--on-dark-border` | `rgba(255, 255, 255, 0.14)` | Borders on navy |
| `--on-dark-accent` | `#74db9e` | Emerald tint on dark surfaces |
| `--error` | `#ba1a1a` | Error state |

## 4. Typography

The type system intentionally combines a classic display face with modern sans-serif UI text.

| Role | Family | Token | Use |
|---|---|---|---|
| Display | Cormorant Garamond | `--font-display` | H1, H2, large stats, quotes |
| Body | Inter | `--font-body` | Paragraphs, cards, forms, functional text |
| Label | Montserrat | `--font-label` | Nav, buttons, tags, eyebrows, table headers |

### Scale

| Token | Value | Use |
|---|---|---|
| `--fs-hero` | `clamp(36px, 6vw, 72px)` | Page and hero headlines |
| `--fs-h2` | `clamp(30px, 4vw, 48px)` | Section headlines |
| `--fs-h3` | `22px` | Card headings |
| `--fs-lead` | `clamp(18px, 1.6vw, 20px)` | Intro paragraphs |
| `--fs-body` | `16px` | Body text |
| `--fs-body-sm` | `14px` | Supporting copy |
| `--fs-label` | `12px` | Buttons, nav, labels |
| `--fs-tiny` | `10px` | Tiny labels |

### Rules

- Headlines use Cormorant Garamond at weight 500.
- Body copy uses Inter and should remain readable, direct, and practical.
- Labels use Montserrat, uppercase, with `0.08em` letter spacing.
- Use the eyebrow pattern sparingly to orient sections, not to decorate every block.
- Do not invent dramatic type treatments, gradients, outlined text, or large all-caps headlines.

## 5. Layout

### Spacing

The spacing rhythm is based on 4px tokens:

| Token | Value |
|---|---:|
| `--s-xs` | `4px` |
| `--s-sm` | `8px` |
| `--s-md` | `16px` |
| `--s-lg` | `24px` |
| `--s-xl` | `32px` |
| `--s-2xl` | `48px` |
| `--s-3xl` | `64px` |
| `--s-4xl` | `96px` |
| `--s-5xl` | `112px` |

Use generous vertical rhythm, but keep business pages efficient. Avoid turning every section into the same padded block.

### Containers And Grids

- Main container: `--container: 1280px`.
- Gutter: `clamp(20px, 4vw, 48px)`.
- Common grids: `.grid-2`, `.grid-3`, `.grid-4`, `.grid-split`, `.grid-1-2`, `.grid-2-1`.
- Desktop grids may use two or three columns, but avoid repetitive six-card scaffolds when content can be grouped by importance.
- Mobile layouts collapse to a single column with readable spacing and no horizontal overflow.

## 6. Components

### Navigation

- Fixed top navigation with translucent light background and backdrop blur.
- Over hero imagery, nav may become transparent with white logo/text.
- Logo sits left, primary links center/right, CTA at the far right.
- Mobile uses a full-screen menu overlay with the same nav links and primary CTA.
- Active and hover states use `--nav-pill`, not heavy underlines or shadows.

### Buttons

Buttons use Montserrat uppercase labels, small radius, and a technical feel.

- `.btn-primary`: emerald background, white text, emerald border.
- `.btn-secondary`: transparent background, strong border, dark text.
- `.btn-ghost`: text-first action with no border.
- `.btn-on-dark-secondary`: secondary action on dark panels.
- Minimum height is generally 48px; nav CTA may be 44px.
- Active state may move down by 1px. Avoid scale or springy motion.

### Cards

- Cards are white or transparent surfaces with `1px` borders.
- Main card radius is `--r-card: 14px`.
- Panels can use `--r-panel: 20px` when they are large, isolated surfaces.
- Use `--shadow-float` only for true overlays or mobile nav. Do not add routine shadows to every card.
- Avoid nested cards.

### Tags And Pills

- `.tag` is neutral, outlined, and small.
- `.pill` uses emerald soft fill for selective emphasis.
- Tags should clarify audience, building type, service type, or status.

### Forms

- Inputs use white backgrounds, strong borders, 48px minimum height, and 3px-ish radius through `--r-btn`.
- Focus state uses emerald border and a 1px emerald ring.
- Labels are uppercase Montserrat.
- Contact flows currently submit through `mailto:` behavior, not a backend.

### Placeholders

`.ph-img` exists for prototype images, but it is not a final marketing asset. Replace placeholders with real, relevant lift, installation, architecture, or service imagery when available. Do not ship visible placeholder labels on final production pages.

## 7. Imagery

Use real lift, architectural, installation, maintenance, and project imagery whenever possible.

- Prioritize inspectable product or project imagery over atmospheric stock.
- Avoid unrelated automotive, generic skyline, or abstract business images.
- Placeholder blocks are acceptable only while a page is being assembled.
- Hero imagery may be full bleed, but inner pages can use cleaner editorial headers when better for scanning.

## 8. Motion And Interaction

- Default transitions should be quick and restrained: `0.15s` to `0.35s`.
- Use color, border, and subtle background changes for most interactions.
- Buttons may use a 1px active translate.
- Avoid exaggerated transforms, parallax gimmicks, or decorative motion.
- Map/globe interactions should start from useful business context, such as Lagos as the hub for coverage.

### Motion Tokens

The site uses a small motion layer rather than a motion library. Tokens live in `tokens.css` and are imported by `src/styles/global.css`.

| Token | Value | Use |
|---|---:|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Reveals and hover feedback |
| `--ease-in` | `cubic-bezier(0.7, 0, 0.84, 0)` | Exits if needed |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | State toggles |
| `--dur-micro` | `120ms` | Press feedback |
| `--dur-short` | `220ms` | Hover and control transitions |
| `--dur-long` | `420ms` | Page-load and one-shot reveal |

### Motion Primitives

- **Load reveal**: hero or page-header content enters once on route load.
- **One-shot reveal**: cards, media blocks, and structured panels reveal once with IntersectionObserver on desktop/tablet.
- **Interaction feedback**: buttons, cards, chips, form options, map controls, and nav links use small transform/color feedback.

### Motion Rules

- Animate only `transform` and `opacity` for spatial motion.
- Do not reveal every paragraph or every section; reading content should settle quickly.
- Do not run scroll-triggered reveals below `40rem`; compact mobile views render the final state immediately.
- Respect `prefers-reduced-motion: reduce`; spatial motion is removed.
- Do not use parallax, cursor effects, bouncy easing, animated gradients, or looping decoration.

## 9. Page Patterns

### Home

The home page should establish VIP Lift Nigeria as a premium local lift partner. Use brand imagery, clear service paths, and direct CTAs.

### Lift Solutions

The lift solutions page groups offerings by building need. It should help users choose a category without overloading them with engineering terms.

Required categories:

- Home and Platform Lifts
- Passenger and Traction Lifts
- Commercial and Public-Building Solutions
- Accessibility Solutions
- Custom and Architectural Solutions
- Modernisation Solutions

Avoid stale placeholder copy such as `[ Detail page - to be built ]` on final pages. If a detail page does not exist, route the action to contact or make the card non-clickable with a useful next step.

### Contact

The contact page should make direct enquiry easy through email, phone, WhatsApp, and the form-to-mail flow. The coverage globe uses Lagos as the hub and shows Abuja FCT and Toronto as connected nodes, with additional locations marked as available on request.

### Footer

The footer may use a multi-column structure, but it must not contain placeholders. Keep contact details real, concise, and consistent with the site copy.

## 10. Content Rules

- Do not fabricate certifications, manufacturer authorisations, project names, or partner relationships.
- If supplier relationships are unconfirmed, say so plainly.
- Prefer concrete service language over vague luxury claims.
- Use "Nigeria" and actual service areas only where the business can support them.
- Use "Abuja FCT" for Abuja coverage labels.
- Use "Other on request" for unspecific coverage expansion.
- Avoid lorem ipsum and bracket placeholders in production-facing pages.

## 11. Technical Source Of Truth

- React app entry: `src/main.jsx`.
- Route adapter and raw HTML rendering: `src/App.jsx`.
- Prototype pages: `src/prototype/*.html`.
- Canonical CSS and font tokens: `public/assets/open-design/css/site.css`.
- App overrides, focus styles, and coverage globe styles: `src/styles/global.css`.
- Coverage globe React component: `src/components/CoverageGlobe.jsx`.
- Open Design assets: `public/assets/open-design/`.

When changing styles, prefer updating shared CSS tokens and reusable classes before adding page-specific inline styles. Page-local styles are acceptable for prototype carryover, but they should be folded into the design system when a pattern repeats.

## 12. Do And Do Not

### Do

- Use the Open Design tokens in `site.css`.
- Keep emerald as the main action color.
- Use navy for high-value dark sections and the footer.
- Preserve the serif display and sans UI contrast.
- Replace placeholder visuals with real lift-relevant assets.
- Keep forms, cards, and navigation crisp and practical.
- Check desktop and mobile for overflow after any layout change.

### Do Not

- Reintroduce the old Tesla-inspired blue/white/vehicle-showroom system.
- Use Tesla marks, vehicle content, or copied brand conventions.
- Add decorative gradient blobs, large generic hero cards, or one-note color washes.
- Use unsupported claims about partners, certifications, coverage, or authorisation.
- Leave visible placeholders on final production pages.
- Add dependencies unless they are needed for a concrete feature and the user has approved the direction.
