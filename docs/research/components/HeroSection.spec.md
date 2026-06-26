# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/paidinfull/hero-section.png`
- **Interaction model:** static (Wistia video placeholder)

## DOM Structure
```
SECTION.hero
  DIV.eyebrow
    SPAN.chev > SVG (chevron-down double arrow)
    SPAN.etext "Aspiring High Ticket Sales Reps In 2026"
    SPAN.chev > SVG
  H1.headline
    "See The Exact AI System That 500+ Students Have Used To Land "
    SPAN.accent-mark "$8k–$15k/Mo"
    " Remote Sales Roles"
  P.sub "…And How I've Helped Hundreds Of Beginners Land Unicorn Offers"
  DIV.hero-media
    DIV.vsl-frame (video placeholder, 16:9)
```

## Computed Styles

### SECTION.hero
- width: 984px, textAlign: center, backgroundColor: transparent

### DIV.eyebrow
- display: inline-flex, justifyContent: center, alignItems: center, gap: 10px
- fontSize: 14px, fontWeight: 700, letterSpacing: 0.56px
- color: rgb(27, 158, 69), margin: 0px 0px 14px

### H1.headline
- fontSize: 50px, fontWeight: 700, lineHeight: 59px, letterSpacing: -1px
- color: rgb(21, 23, 26), maxWidth: 900px, margin: 0px 42px 14px

### SPAN.accent-mark
- color: rgb(27, 158, 69), textDecoration: underline 4px rgb(37, 199, 90), fontWeight: 700, whiteSpace: nowrap

### P.sub
- fontSize: 18px, fontWeight: 600, lineHeight: 27px
- color: rgba(21, 23, 26, 0.66), maxWidth: 760px, margin: 0px 112px 26px

### DIV.vsl-frame
- width: 900px, height: 506.25px (16:9), borderRadius: 14px
- boxShadow: rgba(18, 20, 23, 0.16) 0px 24px 60px -16px
- position: relative, overflow: hidden, backgroundColor: #000

## Assets
- Chevron SVG icons → icons.tsx (double-chevron-down, 15×15, viewBox 0 0 24 24)

## Text Content (verbatim)
- Eyebrow: "Aspiring High Ticket Sales Reps In 2026"
- H1: "See The Exact AI System That 500+ Students Have Used To Land $8k–$15k/Mo Remote Sales Roles"
- Sub: "…And How I've Helped Hundreds Of Beginners Land Unicorn Offers"

## Responsive
- Desktop: 50px h1, 900px video
- Tablet: ~36px h1, video narrower
- Mobile: ~28px h1, video full-width
