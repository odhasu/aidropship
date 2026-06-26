# InterviewsSection Specification

## Overview
- **Target file:** `src/components/InterviewsSection.tsx`
- **Screenshot:** `docs/design-references/paidinfull/interviews-section.png`
- **Interaction model:** static (individual cards are click-driven for YouTube)

## DOM Structure
```
SECTION.interviews
  H2.section-head "Check Out Our Student Interviews:"
  BR
  DIV.vcard (×8) — InterviewCard components
```

## Computed Styles

### SECTION.interviews
- textAlign: center
- backgroundColor: transparent
- Full width within 984px container

### H2.section-head
- fontSize: 36px
- fontWeight: 800
- lineHeight: 40.32px
- letterSpacing: -0.792px
- color: rgb(21, 23, 26)

## States & Behaviors
- N/A — static section, individual cards have their own behavior

## Text Content
- "Check Out Our Student Interviews:"

## Interview Cards Data
```ts
const interviews = [
  { title: "How This 18 Year Old Makes $500/Day In HTS", accent: "18 Year Old", videoId: "eigS4YGosOs" },
  { title: "How He Makes $4k/Week In HTS", accent: "$4k/Week", videoId: "oijqSykQvk0" },
  { title: "How He Went From D2D To $600/Day In HTS", accent: "D2D To $600/Day", videoId: "vAUx_UkNP2g" },
  { title: "How He Made $100k As An Appointment Setter", accent: "$100k", videoId: "j4FBCuKlDBM" },
  { title: "How Davis Makes $2k+ Per Week", accent: "$2k+", videoId: "mNbYqzOOGuE" },
  { title: "Meet Stef Who Is Hitting $700 Days As A Setter", accent: "$700 Days", videoId: "inIT0Q1TAto" },
  { title: "Jaden Went From Failing Complicated Business Models To Printing $6k/Month As A Setter", accent: "$6k/Month", videoId: "EqSfdyi9B6U" },
  { title: "How He Crushes Cold Outreach With AI", accent: "Cold Outreach", videoId: "X3CHqNkPAm0" },
];
```

## Responsive Behavior
- Desktop: cards 760px wide, stacked vertically with 22px gap
- Mobile: cards full-width
