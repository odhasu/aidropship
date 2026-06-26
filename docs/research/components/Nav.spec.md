# Nav Specification

## Overview
- **Target file:** `src/components/Nav.tsx`
- **Screenshot:** `docs/design-references/paidinfull/hero-section.png` (top)
- **Interaction model:** static

## DOM Structure
```
HEADER.nav
  IMG.brand-logo (just a logo, no nav links)
```

## Computed Styles

### HEADER.nav
- display: flex
- alignItems: center
- width: 984px
- height: 52px
- margin: 0px 0px 22px
- padding: 0px
- backgroundColor: transparent
- position: static

### IMG.brand-logo
- height: 52px (displayed)

## States & Behaviors
- N/A — static, no scroll changes, no links

## Assets
- Logo: `public/images/logos/logo-header.avif` (500x157 native, displayed at 52px height)
- Alt: "Paid In Full"

## Responsive Behavior
- Desktop: 984px container, logo left-aligned
- Mobile: centered logo

## Notes
- Use next/image with unoptimized (static export)
- No navigation links present on this page
