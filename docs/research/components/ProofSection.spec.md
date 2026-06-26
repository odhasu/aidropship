# ProofSection Specification

## Overview
- **Target file:** `src/components/ProofSection.tsx`
- **Screenshot:** `docs/design-references/paidinfull/desktop-fullpage.png` (proof area)
- **Interaction model:** static (grid of testimonial screenshots)

## DOM Structure
```
SECTION.proof
  H2.section-head "Real Students, Real Results"
  DIV.proof-grid
    DIV.proof-card (×33+) — ProofCard components
```

## Computed Styles

### SECTION.proof
- textAlign: center
- backgroundColor: transparent

### H2.section-head
- fontSize: 36px
- fontWeight: 800
- lineHeight: 40.32px
- letterSpacing: -0.792px
- color: rgb(21, 23, 26)

### DIV.proof-grid
- display: grid (3 columns)
- width: 984px
- gap: ~12px (estimate from 318px cards in 984px container)
- padding: ~24px 0

## Text Content
- "Real Students, Real Results"

## Proof Cards
- 33+ testimonial screenshots from `public/images/testimonials/`
- Files: 51.avif through 89.avif (skipping 73, 84), plus colby-testimonial-1.avif, ct2-ct5.avif
- Each card: 318px wide, 10px border-radius, dark bg #1a1a1f, shadow

## States & Behaviors

### Card hover
- Subtle shadow increase or scale

## Responsive Behavior
- Desktop: 3 columns (318px each)
- Tablet (768px): 2 columns
- Mobile (390px): 2 columns (compact)
