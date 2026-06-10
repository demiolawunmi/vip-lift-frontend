# VIP Lift Nigeria — Codex UI Upgrade Brief

> **Use this file as the source-of-truth Markdown brief for upgrading the existing VIP Lift Nigeria website UI with Codex.**
>
> This is not a request to rebuild the entire website from scratch. The goal is to upgrade the existing site into a premium, modern, credible lift-solutions website using the current codebase and **Chakra UI** styling system.

---

## 1. Project Goal

Upgrade the VIP Lift Nigeria website from its current older visual system into a refined, premium, architectural, consumer-facing website that feels suitable for:

- Luxury homes and duplexes
- Apartment buildings
- Hotels
- Offices
- Malls
- Churches and public buildings
- Developers, architects, property managers, and homeowners in Nigeria

The upgraded site should feel:

- Premium, modern, and architectural
- Nigerian, but globally credible
- European-engineered without feeling cold or generic
- Technical and trustworthy, but still elegant
- Clean enough for high-end residential clients
- Serious enough for commercial and institutional clients

The website should not look like an AI-generated template, a cheap construction website, or an outdated “luxury chrome badge” brand.

---

## 2. Current Context

The existing website is using older color schemes, older images, and older visual assumptions. These should be replaced or updated once the new VIP Lift brand kit is added to the project.

The new website should treat the upcoming **VIP Lift brand kit** as the source of truth for:

- Logo files
- Logo spacing and sizing
- Official color palette
- Typography rules
- Brand patterns or graphic elements
- Image direction
- Icon direction
- PDF/profile/proposal visual language, where relevant

Until the brand kit is physically available in the repo, Codex should use placeholder implementation names and TODO comments instead of inventing final brand rules.

Example:

```ts
// TODO: Replace with official VIP Lift brand kit token once assets are added.
brand.navy = "#071322";
```

Do **not** hard-code random new brand colors if the final brand kit has not been added yet.

---

## 3. Core Business Positioning

VIP Lift Nigeria should be positioned as:

> **A Nigerian lift-solutions partner that supplies, installs, repairs, services, and maintains selected international lift systems for Nigerian homes, businesses, and public buildings.**

The website should **not** position VIP Lift Nigeria as simply:

> “We sell Cibes lifts.”

That is too narrow and makes the brand look like only a reseller.

Instead, the website should communicate that VIP Lift Nigeria helps clients choose the right lift solution for each building type, then supports the lift locally through installation, repair, servicing, and maintenance.

Preferred messaging:

> **We supply, install, repair, service, and maintain selected international lift systems for Nigerian homes, businesses, and public buildings.**

Supporting messaging:

> Our lift solutions include platform lifts from brands such as Cibes and Swift, as well as traction lift systems from selected European and international manufacturers.

Only use supplier/manufacturer claims that are already verified in provided content or official company materials. Do not invent exclusive partnerships, certifications, warranties, country-of-origin claims, or distributor status.

---

## 4. Services and Product Architecture

The website should make VIP Lift’s offering immediately clear.

### Primary Service Categories

| Category | Example Suppliers / Systems | Best Use Case | Brand Meaning |
|---|---|---|---|
| Platform Lifts | Cibes, Swift | Homes, duplexes, accessibility needs, low-rise spaces, compact retrofits | Premium, compact, design-friendly mobility |
| Traction Lifts | CREA, Millepiani, Puma Lifts pending verification | Apartments, offices, hotels, malls, churches, higher-use buildings | Traditional elevator performance, capacity, engineering credibility |
| Repairs & Maintenance | Across supported installed systems | Existing lifts, service contracts, breakdown support | Trust, reliability, local support, long-term care |

### Main Service Pages / Sections

The upgraded site should strongly support these sections, either as pages or homepage modules depending on the current site structure:

1. **Platform Lifts**
   - Homes
   - Duplexes
   - Accessibility
   - Compact installations
   - Modern residential mobility

2. **Traction Lifts**
   - Apartments
   - Offices
   - Hotels
   - Malls
   - Churches
   - Commercial/public buildings

3. **Repairs & Maintenance**
   - Lift repairs
   - Servicing
   - Maintenance contracts
   - Breakdown support
   - Long-term reliability

4. **Supply & Installation**
   - Project consultation
   - Product selection
   - Installation coordination
   - Handover/support

5. **Contact / Quote Request**
   - WhatsApp-first CTA if already part of the business workflow
   - Request a quote
   - Book an inspection
   - Speak to a lift specialist

---

## 5. Supplier Landscape Context

This information should guide the tone and site architecture, but should not be overstated publicly unless verified.

### Cibes

Cibes is the strongest heritage/credibility supplier in the current context. Its public positioning is Scandinavian, design-conscious, accessible, compact, comfortable, and easy to install. It supports the platform lift / home lift side of the VIP Lift brand.

### Swift

Swift is also Swedish but feels more lifestyle and home-tech oriented. It supports a modern residential/home-lift message: stylish, less complicated, future-facing, and attractive for premium homes.

### CREA

CREA appears to support the Italian/elevator-engineering side of the brand: technology, design, safety, quality, service, and operational autonomy.

### Millepiani

Millepiani supports custom elevators, home lifts, residential lifts, platform lifts, luxury lifts, comfort, safety, and eco-friendly mobility messaging.

### Puma Lifts

Puma Lifts should be treated as **pending verification**. Do not build public-facing claims around Puma until the exact manufacturer website, country, product catalogue, and relationship with VIP Lift Nigeria are confirmed.

---

## 6. Brand Direction

The new VIP Lift visual direction should combine:

- Premium Nigerian trust
- European engineering credibility
- Modern architectural lifestyle
- Clean Scandinavian restraint
- Italian/custom-lift elegance
- Lift service reliability

The supplier landscape suggests this visual lane:

> **Premium Nigerian + European engineering + modern architectural lifestyle.**

The site should feel like a premium architectural services brand, not a random elevator parts vendor.

Think:

- Bang & Olufsen restraint
- Tesla-like confidence and simplicity
- Otis-level reliability and engineering trust
- High-end architecture firm polish

Do not copy those brands. Use them only as taste references.

---

## 7. Visual Style Requirements

### Desired Feeling

- Premium
- Calm
- High-trust
- Spacious
- Precise
- Architectural
- Modern
- Engineered
- Slightly luxurious, but not flashy

### Avoid

- Heavy fake chrome everywhere
- Cheap gradients
- Random gold overload
- Plastic-looking buttons or icons
- Generic construction stock photography
- Overly busy section dividers
- Low-resolution elevator photos
- Distorted logos
- Fake supplier badges
- AI-looking placeholder imagery
- Fake text in images
- Random lettering
- Dark sections with poor contrast
- Tiny cramped text
- Misaligned cards
- Inconsistent border radii
- Inconsistent button styles

### Preferred Visual Cues

- Dark navy shadows
- Warm off-white backgrounds
- Subtle emerald accents if included in the brand kit
- Brushed-silver or stainless-steel references only where tasteful
- Flush glass / architectural glass
- Clean elevator cabin photography
- Minimal line icons
- Large whitespace
- Grid-based layouts
- Strong typographic hierarchy
- Premium CTA sections

---

## 8. Logo and Brand Asset Rules

When the VIP Lift brand kit is added:

1. Use the official brand mark exactly as provided.
2. Do not redraw, reinterpret, warp, stretch, trace, or recreate the logo in CSS.
3. Prefer official SVG or PNG assets.
4. Preserve aspect ratio always.
5. Do not apply random gradients, shadows, outlines, or metallic effects to the logo unless the brand kit explicitly provides that treatment.
6. Do not use the old website logo/colors if the new brand kit is available.
7. Do not create fake logo lockups.
8. For dark backgrounds, use the official light/white logo version from the brand kit.
9. For light backgrounds, use the official primary/dark logo version from the brand kit.
10. Use accessible alt text such as `VIP Lift Nigeria`.

The logo should appear clean, premium, and confident in:

- Website header
- Footer
- Contact/quote CTA sections
- Possibly project/service cards if needed

Do not overuse the logo.

---

## 9. Chakra UI Styling Requirements

This project uses **Chakra UI**. Codex should work with Chakra UI rather than introducing a competing styling system.

### Do Not Add Unless Specifically Approved

- Tailwind CSS
- Material UI
- Bootstrap
- Styled Components
- New animation libraries
- New icon packs if the project already has one
- Large visual frameworks that fight Chakra UI

### Preferred Chakra Approach

Use or improve the existing Chakra setup:

- `extendTheme`
- `ChakraProvider`
- `theme.ts` / `theme.js`
- `semanticTokens`
- component variants
- responsive Chakra props
- layout primitives such as `Box`, `Container`, `Stack`, `SimpleGrid`, `Grid`, `Flex`, `Heading`, `Text`, `Button`, `Card`
- accessible Chakra components

### Theme Token Strategy

Codex should inspect the project first and find the existing Chakra theme file. If no custom theme exists, propose adding one.

Recommended token structure:

```ts
const theme = extendTheme({
  colors: {
    brand: {
      navy: "TODO_FROM_BRAND_KIT",
      ink: "TODO_FROM_BRAND_KIT",
      ivory: "TODO_FROM_BRAND_KIT",
      silver: "TODO_FROM_BRAND_KIT",
      emerald: "TODO_FROM_BRAND_KIT",
      muted: "TODO_FROM_BRAND_KIT",
    },
  },
  semanticTokens: {
    colors: {
      "bg.canvas": { default: "brand.ivory" },
      "bg.dark": { default: "brand.navy" },
      "text.primary": { default: "brand.ink" },
      "text.inverse": { default: "white" },
      "accent.primary": { default: "brand.emerald" },
      "border.subtle": { default: "blackAlpha.200" },
    },
  },
  fonts: {
    heading: "TODO_FROM_BRAND_KIT",
    body: "TODO_FROM_BRAND_KIT",
  },
});
```

If the brand kit specifies exact colors and fonts, use those instead of the placeholders.

### Chakra Component Variants

Create or improve variants for:

- `Button`
  - primary
  - secondary
  - ghost/nav
  - dark-section CTA

- `Card`
  - service card
  - project type card
  - supplier/solution card

- `Heading`
  - hero
  - section title
  - eyebrow label

- `Container`
  - consistent max width
  - consistent section padding

### Responsive Standards

Every upgraded section must be checked on:

- Mobile width
- Tablet width
- Desktop width
- Large desktop width

Use Chakra responsive props such as:

```tsx
fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
py={{ base: 16, md: 24 }}
gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
```

Do not create desktop-only layouts that collapse badly on phones.

---

## 10. Page / Section Upgrade Requirements

Codex should inspect the existing site structure before deciding file paths. Do not assume the framework.

### 10.1 Header / Navigation

The header should feel premium and architectural.

Requirements:

- Use the new official logo once brand kit is added.
- Clear navigation.
- Strong CTA button: `Request a Quote`, `Book an Inspection`, or `WhatsApp Us`.
- Avoid oversized nav bars.
- Avoid tiny logo sizing.
- Ensure mobile menu is clean and accessible.
- Header should work on dark and light hero backgrounds.

Suggested nav items:

- Home
- Solutions
- Services
- Maintenance
- About
- Contact

If the existing site has fewer pages, keep the structure simple and upgrade what exists.

### 10.2 Homepage Hero

The homepage hero should immediately say what VIP Lift does.

Preferred hero direction:

**Headline option:**

> Premium lift solutions for Nigerian homes and buildings.

**Subheadline option:**

> VIP Lift Nigeria supplies, installs, repairs, services, and maintains selected international lift systems for residential, commercial, and public spaces.

**CTA options:**

- Request a Quote
- Book an Inspection
- Speak to a Lift Specialist
- WhatsApp Us

Hero visual direction:

- Premium elevator cabin
- Architectural interior
- Lift control panel close-up
- Clean platform lift in a luxury home
- Avoid old low-quality stock images

### 10.3 Services Overview

Create a strong services block with 3 to 4 cards.

Suggested cards:

1. Platform Lifts
   - Compact lift solutions for homes, duplexes, accessibility, and low-rise spaces.

2. Traction Lifts
   - Engineered lift systems for apartments, offices, hotels, malls, churches, and higher-traffic buildings.

3. Repairs & Maintenance
   - Local support for servicing, repairs, inspections, and long-term lift reliability.

4. Supply & Installation
   - Guidance from product selection through installation and handover.

Cards should feel premium, not like generic SaaS cards.

### 10.4 Product / Solution Architecture Section

Include a section that helps visitors understand which lift type fits their building.

Possible structure:

| Need | Recommended Direction |
|---|---|
| Duplex or private home | Platform lift |
| Accessibility retrofit | Platform lift |
| Apartment block | Traction lift |
| Hotel or office | Traction lift |
| Existing lift issues | Repairs / Maintenance |
| Long-term reliability | Maintenance contract |

### 10.5 Trust / Process Section

VIP Lift should feel trustworthy and process-driven.

Suggested process:

1. Consultation
2. Site assessment
3. Lift selection
4. Supply and installation
5. Service and maintenance

Keep the process concise and visually refined.

### 10.6 Supplier / International Systems Section

Use careful language.

Possible heading:

> Selected international lift systems, supported locally.

Possible body copy:

> VIP Lift Nigeria works with selected international lift systems across platform lift and traction lift categories, helping clients match the right solution to their building type, space, and usage needs.

Do not claim exclusive relationships unless verified.

If supplier logos are used, only use official approved assets from the brand kit or confirmed supplier logo files.

### 10.7 Maintenance CTA

Maintenance is a major trust and revenue message. It should not be hidden.

Possible heading:

> Keep your lift safe, reliable, and professionally maintained.

Possible body:

> From routine servicing to urgent repairs, VIP Lift Nigeria provides local support for residential and commercial lift systems.

CTA:

> Book a Maintenance Visit

### 10.8 Footer

Footer should be clean and practical.

Include:

- Logo
- Short positioning line
- Services
- Contact
- WhatsApp / phone / email placeholders if existing
- Location/Nigeria context if already known
- Copyright

Do not invent contact details.

---

## 11. Content and Copy Rules

### Tone

- Confident
- Clear
- Premium
- Helpful
- Direct
- Technically credible
- Not hype-heavy

### Avoid

- “Best elevator company in Africa” unless legally/actually verified
- “Official partner” unless verified
- “Certified distributor” unless verified
- “Guaranteed cheapest”
- “World-class” overuse
- Long vague paragraphs
- Random AI-sounding copy

### Preferred Phrases

- Premium lift solutions
- Supported locally
- Selected international lift systems
- Residential and commercial buildings
- Supply, installation, repairs, servicing, and maintenance
- Platform lifts
- Traction lifts
- Long-term reliability
- Building-specific lift guidance
- Designed for homes, businesses, and public buildings

### Homepage Copy Draft

Codex may use this as starter copy if current copy is weak:

```md
# Premium lift solutions for Nigerian homes and buildings.

VIP Lift Nigeria supplies, installs, repairs, services, and maintains selected international lift systems for residential, commercial, and public spaces.

[Request a Quote] [Book an Inspection]
```

Service card copy:

```md
## Platform Lifts
Compact, design-conscious lift solutions for homes, duplexes, accessibility needs, and low-rise spaces.

## Traction Lifts
Engineered lift systems for apartments, offices, hotels, malls, churches, and higher-traffic buildings.

## Repairs & Maintenance
Local support for inspections, servicing, repairs, and long-term lift reliability.
```

---

## 12. Image and Media Direction

Replace old website imagery with new brand-kit-approved or premium-quality images.

### Preferred Image Types

- Luxury elevator cabin interiors
- Clean elevator control panels
- Platform lifts in modern homes
- Architectural interiors
- Stainless steel, glass, and premium cabin details
- Realistic Nigerian / architectural context if available
- Maintenance/service imagery only if polished and professional

### Avoid

- Random construction workers with hard hats if unrelated
- Low-resolution stock images
- Generic skyscraper photos
- Overly American/European imagery that feels disconnected from Nigeria unless used carefully
- Fake AI elevator photos with distorted numbers/text/logos
- Images that include incorrect or fake brand marks

### Product Photography Direction

For any control-panel or cabin-detail image:

- Use the official VIP Lift logo only.
- Do not redesign or redraw the logo.
- Keep logo placement subtle and premium.
- Use realistic reflective brushed silver / mirror-polished steel.
- Use soft cinematic lighting.
- Use white raised circular buttons or a premium flush-glass interface only if it looks realistic.
- Avoid distorted text, fake logos, messy reflections, and cheap plastic.

---

## 13. Codex Workflow Instructions

Codex should follow this exact workflow.

### Step 1 — Inspect Before Editing

Before changing files, inspect:

- `package.json`
- Chakra provider setup
- theme file, if any
- page structure
- component structure
- routing framework
- image/assets folders
- current header/footer implementation
- current homepage layout
- current styling patterns

Then summarize:

1. Current framework and structure
2. Current Chakra setup
3. Existing pages/components
4. Biggest UI problems
5. Files likely needing edits
6. Recommended phased plan

Do not edit code during this step.

### Step 2 — Create an Implementation Plan

The implementation plan should be broken into small phases:

#### Phase 1 — Brand + Chakra Theme Foundation

- Add or update Chakra theme tokens.
- Prepare semantic tokens for brand colors.
- Add typography scale.
- Add button/card variants.
- Replace old hard-coded colors where safe.
- Do not fully redesign pages yet.

#### Phase 2 — Header, Footer, and Global Layout

- Upgrade header/nav.
- Add clean CTA.
- Improve footer.
- Ensure logo rules are respected.
- Improve responsive behavior.

#### Phase 3 — Homepage Redesign

- Hero section
- Services overview
- Platform vs traction section
- Process/trust section
- Maintenance CTA
- Contact CTA

#### Phase 4 — Interior Pages / Sections

- Upgrade service pages if they exist.
- Upgrade about/contact pages if they exist.
- Reuse components instead of one-off styling.

#### Phase 5 — Brand Kit Integration

After the VIP Lift brand kit is added:

- Replace placeholder colors with official tokens.
- Replace old logos with official assets.
- Replace old images.
- Update typography to official brand fonts if possible.
- Add brand patterns only if they enhance the UI and remain subtle.

#### Phase 6 — QA and Polish

- Run build/lint/typecheck scripts available in `package.json`.
- Check mobile, tablet, desktop, and large desktop.
- Fix spacing, wrapping, and overflow.
- Check contrast/accessibility.
- Remove unused imports/files.
- Summarize changes.

### Step 3 — Work in Small Reviewable Chunks

Codex should not perform a massive all-at-once rewrite.

For each phase:

1. List intended files.
2. Make focused changes.
3. Run available checks.
4. Summarize the diff.
5. Note any unresolved TODOs.

---

## 14. Codex Prompt to Use

Paste this into Codex after placing this file in the repo:

```txt
Read docs/VIP-Lift-Codex-UI-Upgrade-Brief.md completely.

Then inspect the existing codebase, especially package.json, Chakra UI setup, theme files, page structure, components, assets, header, footer, and homepage.

Do not edit files yet.

First return a concise implementation plan with:
1. Current stack summary
2. Current Chakra setup
3. Current pages/components found
4. Biggest UI issues
5. Which files you recommend editing in Phase 1
6. How you will preserve the existing architecture
7. How you will prepare for the upcoming VIP Lift brand kit

This is a UI upgrade, not a full rebuild. Use Chakra UI. Do not add Tailwind, Material UI, Bootstrap, or a new styling framework.
```

After reviewing the plan, give Codex this follow-up:

```txt
Proceed with Phase 1 only: create or improve the Chakra theme foundation for the VIP Lift UI upgrade.

Use placeholder brand tokens only where the final brand kit is not yet available. Do not invent final brand colors if the brand kit is missing.

After the change, run the available lint/build/typecheck scripts from package.json and summarize the diff.
```

---

## 15. File Placement Recommendation

Place this file at:

```txt
docs/VIP-Lift-Codex-UI-Upgrade-Brief.md
```

If the repo does not have a `docs/` folder, create it.

Optional supporting files Codex may create later:

```txt
AGENTS.md
MEMORY.md
REVIEW-CHECKLIST.md
agent_docs/project_brief.md
agent_docs/tech_stack.md
agent_docs/code_patterns.md
agent_docs/product_requirements.md
agent_docs/testing.md
specs/001-ui-upgrade-plan.md
```

Codex should only create these if useful for the workflow and after inspecting the repo.

---

## 16. Acceptance Criteria

The UI upgrade is successful when:

- The site clearly communicates what VIP Lift Nigeria does within the first screen.
- The visual system feels premium, modern, architectural, and trustworthy.
- Chakra UI is used consistently.
- Old colors and images are removed or prepared for replacement.
- The upcoming brand kit can be integrated cleanly.
- The logo is used from official assets only.
- Platform lifts, traction lifts, repairs, servicing, and maintenance are clearly represented.
- Supplier claims are careful and not overstated.
- The homepage works well on mobile, tablet, desktop, and large desktop.
- Buttons, cards, section spacing, type hierarchy, and CTAs are consistent.
- There are no obvious AI-template artifacts.
- There are no distorted logos, fake supplier claims, or fake contact details.
- Build/lint/typecheck scripts pass or any failures are clearly documented.

---

## 17. Final Notes for Codex

Be conservative with architecture and bold with visual polish.

The site should feel like a premium lift-solutions brand, not a generic contractor website.

Prioritize:

1. Clear business positioning
2. Strong Chakra theme foundation
3. Premium homepage hierarchy
4. Correct use of brand assets
5. Mobile polish
6. Honest supplier/service claims

Do not overcomplicate the project. The upgrade should be refined, structured, and easy to maintain.
