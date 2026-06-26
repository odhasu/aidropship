# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/paidinfull/desktop-fullpage.png` (bottom)
- **Interaction model:** static

## DOM Structure
```
FOOTER
  IMG.flogo (footer logo)
  DIV.fcopy
    "Paid In Full – Copyright © 2025."
    BR
    "All rights reserved."
    BR
    A → "Terms of Service"
    " | "
    A → "Privacy Policy"
```

## Computed Styles

### FOOTER
- width: 984px
- margin: 64px 0px 0px
- padding: 28px 0px 0px
- textAlign: center
- fontSize: 17px (inherited body font)
- color: rgb(21, 23, 26)
- backgroundColor: transparent

### DIV.fcopy
- fontSize: 10px (small copyright text)
- color: rgb(21, 23, 26)

### Links (A)
- fontSize: 13px
- color: rgb(27, 158, 69) /* #1b9e45 */
- textDecoration: none

## States & Behaviors

### Link hover
- opacity reduction or underline

## Assets
- Footer logo: `public/images/logos/logo-footer.avif`
- Alt: "Paid In Full"

## Text Content (verbatim)
- "Paid In Full – Copyright © 2025."
- "All rights reserved."
- "Terms of Service" → href="/terms-of-use/"
- "Privacy Policy" → href="/privacy-policy/"

## Responsive Behavior
- Desktop: centered, 984px max
- Mobile: stacked, same layout, logo smaller
