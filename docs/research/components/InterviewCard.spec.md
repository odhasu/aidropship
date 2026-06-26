# InterviewCard Specification

## Overview
- **Target file:** `src/components/InterviewCard.tsx`
- **Screenshot:** `docs/design-references/paidinfull/interviews-section.png`
- **Interaction model:** click-driven (YouTube embed on click)

## DOM Structure
```
DIV.vcard
  H3
    "How This "
    SPAN.g "18 Year Old"
    " Makes $500/Day In HTS"
  DIV.video-embed
    BUTTON.yt-lite
      IMG.yt-thumb (YouTube thumbnail)
      SPAN.yt-play (play button overlay)
```

## Computed Styles

### DIV.vcard
- width: 760px
- maxWidth: 760px
- margin: 0px 112px 22px (centered with bottom gap)
- padding: 16px
- borderRadius: 16px
- backgroundColor: rgb(26, 26, 31) /* #1a1a1f */
- boxShadow: rgba(18, 20, 23, 0.06) 0px 2px 10px 0px
- textAlign: center

### H3
- fontSize: 19px
- fontWeight: 700
- lineHeight: 28.5px
- color: rgb(255, 255, 255)
- margin: 0px 0px 12px

### SPAN.g (green accent in title)
- color: rgb(87, 224, 127) /* #57e07f */
- fontWeight: 700

### DIV.video-embed
- width: 728px (760 - 16*2)
- height: 409.5px (16:9 ratio)
- padding: 0px 0px 409.5px (or use aspect-ratio)
- borderRadius: 10px
- backgroundColor: rgb(0, 0, 0)
- position: relative
- overflow: hidden

### BUTTON.yt-lite
- Covers the full video-embed area
- Contains thumbnail image and play button overlay

### IMG.yt-thumb
- width: 100%, height: 100%
- objectFit: cover

## States & Behaviors

### Hover on card
- Subtle shadow increase or scale

## Assets
- Thumbnails: `public/images/thumbs/int-*.jpg`
- Play button: CSS-only triangle (or SVG)

## Props
```ts
{
  title: string;
  accent: string;    // the green-highlighted text portion
  videoId: string;   // YouTube video ID
  thumbnailUrl: string;
}
```

## Responsive Behavior
- Desktop: 760px wide, 728px video
- Tablet: narrower, ~600px
- Mobile: full-width, 16px padding

## Interview Data (8 cards)
1. "How This 18 Year Old Makes $500/Day In HTS" — eigS4YGosOs
2. "How He Makes $4k/Week In HTS" — oijqSykQvk0
3. "How He Went From D2D To $600/Day In HTS" — vAUx_UkNP2g
4. "How He Made $100k As An Appointment Setter" — j4FBCuKlDBM
5. "How Davis Makes $2k+ Per Week" — mNbYqzOOGuE
6. "Meet Stef Who Is Hitting $700 Days As A Setter" — inIT0Q1TAto
7. "Jaden Went From Failing Complicated Business Models To Printing $6k/Month As A Setter" — EqSfdyi9B6U
8. Eighth card title TBD — X3CHqNkPAm0
