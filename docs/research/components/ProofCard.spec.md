# ProofCard Specification

## Overview
- **Target file:** `src/components/ProofCard.tsx`
- **Screenshot:** `docs/design-references/paidinfull/desktop-fullpage.png` (proof section)
- **Interaction model:** static

## DOM Structure
```
DIV.proof-card
  IMG (testimonial screenshot)
```

## Computed Styles

### DIV.proof-card
- width: 318.664px (flex: 1 1 ~318px in a 3-column grid)
- height: auto (fits image content)
- borderRadius: 10px
- boxShadow: rgba(18, 20, 23, 0.06) 0px 2px 10px 0px
- backgroundColor: rgb(26, 26, 31) (#1a1a1f)
- padding: 0px
- display: block
- overflow: hidden

### IMG
- width: 100%
- height: auto
- objectFit: cover

## States & Behaviors

### Hover
- Slight scale-up or shadow increase (subtle)

## Assets
- Images from `public/images/testimonials/*.avif`
- Alt text: "PIF student win"

## Responsive Behavior
- Desktop: 3 columns (984px → ~318px per card)
- Tablet (768px): 2 columns
- Mobile (390px): 2 columns (compact grid)

## Props
```ts
interface ProofCard {
  src: string;
  alt: string;
}
```
