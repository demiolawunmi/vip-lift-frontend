# VIP Lift Nigeria Web Design System

This document translates the official VIP Lift Nigeria brand system into web implementation rules. The upstream authority is:

`VIP-Lift-Nigeria-Brand-Kit/VIP-Lift-Nigeria-Brand-Guidelines.pdf`

Supporting colour, typography, logo, and pattern files in that kit remain authoritative where this summary is incomplete.

## Brand Character

VIP Lift should feel assured, architectural, premium, and technically dependable. The interface uses generous space, strong editorial typography, restrained emerald accents, precise controls, and photography that places lift systems naturally within Nigerian homes and buildings.

## Colour

| Token | Hex | Web role |
|---|---:|---|
| Midnight Navy | `#061326` | Primary text, dark sections, navigation |
| Deep Navy | `#020814` | Footer, deep hero overlays |
| Platinum Silver | `#D8D8D4` | Light text and premium neutral details |
| Warm Silver | `#C9C7BF` | Secondary neutral |
| Emerald Accent | `#168A55` | Primary actions, focus, progress |
| Deep Emerald | `#0F5F3C` | Primary-action hover |
| Pure White | `#FFFFFF` | Cards and high-contrast surfaces |
| Graphite | `#111418` | Alternate dark neutral |
| Cool Grey | `#A8ADB3` | Tertiary text |

The site canvas may use the established warm ivory `#F6F6F2`. Emerald is functional and selective, not decorative filler.

## Typography

- **Cormorant Garamond:** display headings and high-impact editorial statements.
- **Inter:** body copy, forms, supporting text, and general UI.
- **Montserrat:** uppercase labels, navigation, and button text.
- Brand font files are retained in `public/assets/fonts/`. The current protected website baseline self-hosts Cormorant Garamond and preserves its existing Avenir Next fallback rendering for body and label text.
- Headlines use tight leading and restrained negative tracking; body text prioritizes legibility.

## Logos

- Use only approved lockups from `public/assets/brand/`.
- Use the navy horizontal lockup on light surfaces and the white lockup on dark or photographic surfaces.
- Preserve the artwork's proportions and clear space. Never recolour, stretch, outline, shadow, crop, or reconstruct the mark.
- The symbol-only lockup is reserved for contexts where the horizontal mark cannot be legibly used.

## Photography And Pattern

- Prefer architectural, residential, and commercial lift imagery with premium materials and credible building context.
- Use overlays only to preserve text contrast.
- The architectural shaft pattern is a supporting brand device. Keep it low contrast and subordinate to content.
- Do not introduce unrelated stock imagery, fabricated projects, or decorative motifs.

## Web Components

- Primary actions use Emerald Accent with white Montserrat labels and Deep Emerald hover.
- Secondary actions are transparent with a precise navy border.
- Buttons use a `3px` radius and a minimum height of `48px`.
- Cards use a `14px` radius; major panels use `20px`.
- Focus states use a visible emerald ring.
- Motion is restrained, generally `180-330ms`, and must not interfere with reading or navigation.
- The fixed header may be transparent over a hero and becomes an ivory, blurred surface after scrolling.

## Layout

- Section padding: `20px / 40px / 64px` horizontally and `64px / 96px / 112px` vertically at mobile, tablet, and desktop.
- Major content is capped at `1280px`.
- Breakpoints follow `30rem`, `48rem`, `64rem`, `80rem`, and `96rem`.
- Mobile layouts stack actions and content without changing information order.

## Current Website Baseline

The current branded website is the protected visual and behavioral baseline. Engineering migrations must preserve its routes, content, assets, hierarchy, spacing, responsive behavior, forms, navigation, metadata, and interactions.

The official brand kit governs future design work. Applying different brand tokens, new assets, patterns, or layout decisions beyond the current baseline requires a separately approved redesign. Brand-kit source files must not be copied wholesale into runtime folders.
