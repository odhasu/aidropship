# ApplySection Specification

## Overview
- **Target file:** `src/components/ApplySection.tsx`
- **Screenshot:** `docs/design-references/paidinfull/apply-section.png`
- **Interaction model:** static (contains embedded Typeform)

## DOM Structure
```
SECTION#apply
  DIV.step-label "Step 2"
  H2.section-head
    "Apply For "
    SPAN.accent-mark "PIF"
    " Below"
  DIV.apply-wrap
    DIV.typeform-embed (embedded Typeform iframe)
  DIV.avatars
    IMG.reps-img (student avatars strip)
    DIV "100+ Sales Reps Trained And Placed On Offers"
```

## Computed Styles

### SECTION#apply
- margin: 54px 0px 0px
- textAlign: center
- backgroundColor: transparent

### DIV.step-label
- fontSize: 20px
- fontWeight: 800
- color: rgb(21, 23, 26)
- margin: 0px 0px 2px

### H2.section-head
- fontSize: 36px
- fontWeight: 800
- lineHeight: 40.32px
- letterSpacing: -0.792px
- color: rgb(21, 23, 26)
- marginBottom: 0px

### SPAN.accent-mark
- color: rgb(27, 158, 69)
- textDecoration: underline 4px rgb(37, 199, 90)
- fontWeight: 700

### DIV.apply-wrap
- maxWidth: 720px
- margin: 26px 132px 18px (centered)
- height: ~661px (contains the form)

### DIV.avatars
- display: flex
- alignItems: center
- gap: 7px
- fontSize: 12.5px
- fontWeight: 700
- color: rgba(21, 23, 26, 0.66)
- margin: 16px 0px 8px
- justifyContent: center

### IMG.reps-img
- width: 879px native, displayed smaller
- Alt: "Students placed on offers"

## Assets
- Reps image: `public/images/reps-trained.webp`

## Text Content (verbatim)
- Step label: "Step 2"
- Heading: "Apply For PIF Below" (PIF is accent)
- Avatars text: "100+ Sales Reps Trained And Placed On Offers"

## Notes
- Typeform embed is external — render a placeholder card with the form dimensions
- Typeform ID: 01KQN9GGERJ5KWCRRSCNDVWR1Z

## Responsive Behavior
- Desktop: 720px form width, centered
- Mobile: full-width form
