# CtaButton / CtaRow Specification

## Overview
- **Target file:** `src/components/CtaButton.tsx`
- **Screenshot:** `docs/design-references/paidinfull/apply-section.png`
- **Interaction model:** click-driven (anchor to #apply)

## DOM Structure
```
DIV.cta-row
  A.cta "Apply Now"
```

## Computed Styles

### DIV.cta-row (wrapper)
- width: 984px
- height: 91px (75px button + spacing)
- textAlign: center
- backgroundColor: transparent

### A.cta (button link)
- display: inline-block
- fontSize: 26px
- fontWeight: 800
- lineHeight: 39px
- letterSpacing: -0.26px
- color: rgb(255, 255, 255)
- backgroundColor: rgb(47, 209, 102) /* #2fd166 */
- padding: 18px 54px
- borderRadius: 12px
- boxShadow: rgba(37, 199, 90, 0.45) 0px 12px 30px -8px
- textDecoration: none
- textAlign: center
- transition: transform 0.15s, background 0.15s

## States & Behaviors

### Hover
- transform: scale(1.02) (subtle grow)
- Transition: transform 0.15s, background 0.15s

## Text Content
- "Apply Now"

## Assets
- N/A (text-only button)

## Responsive Behavior
- Desktop: 26px, 18px 54px padding, inline-block
- Mobile: centered, same proportions

## Props
```ts
{ text: string; href: string; className?: string }
```
