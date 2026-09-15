---
name: Skill Computer Academy
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3f4944'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6f7974'
  outline-variant: '#bfc9c3'
  surface-tint: '#206a55'
  primary: '#004333'
  on-primary: '#ffffff'
  primary-container: '#0a5c48'
  on-primary-container: '#8bd2b8'
  inverse-primary: '#8ed5bb'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#543300'
  on-tertiary: '#ffffff'
  tertiary-container: '#734700'
  on-tertiary-container: '#ffb553'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a9f1d6'
  primary-fixed-dim: '#8ed5bb'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#00513e'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an accessible, empowering, and deeply credible visual identity for an educational SaaS platform dedicated to tuition-free computer literacy and tech skills. The visual tone bridges institutional prestige with approachable community learning, communicating dependability, academic rigor, and forward momentum.

The design movement blends **Corporate Modernism** with crisp **Editorial SaaS refinement**:
- **Clarity and Focus:** High-contrast reading environments, generous breathing room, structured content hierarchies, and clear learning milestones.
- **Empowering Accents:** Trustworthy deep forest teal anchors core workflows and institutional navigation, while dynamic emerald and radiant gold accents reward learner progression, assessments, and certifications.
- **Micro-tactile Depth:** Surfaces rely on layered elevation cards, whisper-thin slate borders, and subtle tinted drop-shadows that feel structured without visual clutter.

## Colors

The color palette is built around high-contrast legibility and purposeful feedback:

- **Primary Brand (`#0a5c48` - Deep Teal Forest):** Represents stability, institutional credibility, and focus. Used for primary CTAs, active navigation items, key progress highlights, and foundational header elements. Darker variant `#074737` serves hover and pressed states, while lighter `#0d7359` handles interactive focus rings and elevated badges.
- **Secondary / Ink (`#0f172a` - Deep Slate Charcoal):** Primary text and headings. Provides uncompromising AAA legibility against pure white and off-white backgrounds. Mid-slate (`#475569`) is used for secondary metadata, timestamps, and instructor labels.
- **Tertiary Accent (`#f59e0b` - Warm Amber Gold):** Dedicated to achievements, certificates, course completion stars, warning states, and high-value milestones.
- **Success Accent (`#10b981` - Vibrant Emerald):** Used for completed lessons, passing quiz indicators, live enrollment status, and verified student credentials.
- **Neutrals & Surfaces (`#ffffff`, `#f8fafc`, `#f1f5f9`):** Pure white cards emerge cleanly from cool mist-gray canvas backdrops, defined by micro-borders (`#e2e8f0`).

## Typography

Plus Jakarta Sans is employed throughout all typography tiers to unify the modern tech ethos with soft, humanist curves that feel accessible to first-time computer learners.

- **Headlines:** Set in Bold (700) and ExtraBold (800) with slight negative tracking (`-0.02em`) for commanding, punchy hierarchy in course catalog headlines and dashboard welcomes.
- **Body:** Set at 400 weight with generous line heights (`1.5` to `1.6`) to minimize visual fatigue during long instructional tutorials, syllabus reviews, and step-by-step guides.
- **Labels & Badges:** Set in Semibold (600) and Bold (700) with slight letter spacing (`+0.01em` to `+0.04em`) to ensure instant scannability on pill badges, tags, and data metrics.

## Layout & Spacing

The layout model uses a responsive 12-column grid system built on an 8px base grid rhythm:

- **Desktop (1200px+):** 12 columns, `gutter: 1.5rem`, `margin: 4rem` outer bounds, constrained to a maximum content container of `1280px` for optimal reading width.
- **Tablet (768px - 1199px):** 8 columns, `gutter: 1.25rem`, `margin: 2rem`. Sidebar collapses into an overlay or compact icon rail.
- **Mobile (320px - 767px):** 4 columns, `gutter: 1rem`, `margin: 1rem`. Multi-column course grids reflow into single-column vertical stacks.
- **Vertical Spacing Cadence:** Inter-card groupings leverage `space-lg` (`1.5rem`), micro-interactions inside components utilize `space-sm` (`0.5rem`) to `space-md` (`1rem`), and primary page section dividers use `space-xl` (`2.5rem`).

## Elevation & Depth

Visual hierarchy uses crisp surface separation through soft slate tinted shadows and low-contrast borders:

- **Canvas Level (`#f8fafc`):** Base workspace background behind modules and sidebars.
- **Level 1 (Default Cards & Panels):** Surface `#ffffff`, border `1px solid #e2e8f0`, shadow `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`.
- **Level 2 (Interactive Hover / Floating Nav):** Surface `#ffffff`, border `1px solid #cbd5e1`, shadow `0 10px 15px -3px rgba(10, 92, 72, 0.08), 0 4px 6px -4px rgba(10, 92, 72, 0.04)`. Subtly tinted with the deep teal brand color to bring life to interactive card states.
- **Level 3 (Modals, Certificate Previews & Overlays):** Surface `#ffffff`, border `1px solid #e2e8f0`, shadow `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`.
- **Flat Accents:** No heavy brutalist borders. Outlines stay within `1px` to `1.5px` maintaining refined precision.

## Shapes

The design system adopts a welcoming yet structured shape profile:

- **Cards & Course Containers:** `rounded-2xl` (`1rem` to `1.25rem` / `16px - 20px`) creates a friendly, modern canvas that softens technical subject matter.
- **Buttons & Input Fields:** Rounded at `0.75rem` (`12px`) for a comfortable, tap-friendly ergonomic feel.
- **Pills & Status Badges:** Fully rounded (`9999px`) for high visual distinction against rectangular cards.
- **Media & Lesson Thumbnails:** `rounded-xl` (`0.75rem`) with inner border alignment to prevent clip distortion.

## Components

### Buttons
- **Primary:** Background `#0a5c48`, text `#ffffff`, font `label-lg`, radius `0.75rem`, padding `0.75rem 1.5rem`. Hover `#074737` with subtle lift (`translate-y(-1px)`).
- **Secondary / Outline:** Background `#ffffff`, border `1.5px solid #0a5c48`, text `#0a5c48`. Hover background `#f0fdf4`.
- **Ghost / Neutral:** Background transparent, text `#475569`. Hover background `#f1f5f9` and text `#0f172a`.
- **Accent (Certificates/Enroll):** Background `#f59e0b`, text `#0f172a`, font-weight 700. Hover background `#d97706`.

### Badges & Chips
- **Pill Badges:** Height `24px` to `28px`, full radius (`9999px`), padding `0.25rem 0.75rem`, font `label-sm`, uppercase tracking.
  - *Free Tier / Verified:* Background `#ecfdf5`, text `#065f46`, border `1px solid #a7f3d0`.
  - *Certificate / Honor:* Background `#fffbeb`, text `#92400e`, border `1px solid #fde68a`.
  - *Category Tag:* Background `#f1f5f9`, text `#334155`, border `1px solid #e2e8f0`.

### Cards (Course & Track Units)
- Pure white background (`#ffffff`), `16px` border-radius (`rounded-2xl`), `1px solid #e2e8f0` border, `1.5rem` internal padding.
- Contains course category badge top-left, estimated completion hours top-right, followed by `headline-md` title, instructor label, and bottom progress bar tracker.

### Progress Indicators
- **Track Progress Bars:** Background `#e2e8f0`, filled track `#10b981` (or `#0a5c48`), height `6px`, full radius.
- **Circular Milestone Trackers:** Stroke width `6px`, track `#e2e8f0`, active stroke `#0a5c48` with `#f59e0b` milestone stars.

### Input Fields & Search
- Surface `#ffffff`, border `1.5px solid #cbd5e1`, radius `0.75rem`, height `48px`, padding `0.75rem 1rem`, typography `body-md`.
- Focus state: border `#0a5c48`, box-shadow `0 0 0 3px rgba(10, 92, 72, 0.15)`, outline none.

### Checkboxes & Radios
- Size `20px x 20px`, radius `6px` for checkbox, `50%` for radio.
- Unchecked: border `1.5px solid #cbd5e1`, background `#ffffff`.
- Checked: background `#0a5c48`, border-color `#0a5c48`, checkmark icon pure white `#ffffff`.