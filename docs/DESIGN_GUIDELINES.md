# Earthen — Design Guidelines

Design system for **guptakanika.com**, the portfolio of Kanika Gupta (transaction
advisory / financial due diligence). Extracted from `inspiration.pen`.

> **Source of truth:** `inspiration.pen` is the canonical design. This document
> is the translation layer between that canvas and the React/CSS implementation.
> When the two disagree, re-read the `.pen` file (via the pencil MCP tools —
> it is encrypted, never `cat` it) and update this doc.

---

## 1. Design intent

**Earthen** — a calm, grounded palette for a portfolio. Beige foundations, muted
greens, warm clay accents.

The work being presented is financial: audits, quality of earnings, carve-outs.
The design deliberately does *not* look like fintech. There is no blue, no glass,
no neon, no dark-mode-by-default dashboard aesthetic. It reads like good print —
a well-set page in a quiet room. Credibility here comes from restraint and from
typography that is confident at rest.

Three rules carry most of the identity:

1. **Warm ground, never white.** The page is `#F5F1E8`, not `#FFFFFF`. Every
   surface sits somewhere on the beige ladder.
2. **Fraunces for statements, Inter for substance, mono for metadata.** The
   serif never does body copy; the mono never does prose.
3. **Section rhythm over decoration.** Structure is communicated by vertical
   spacing and a couple of tonal bands — not by bordering every element.

---

## 2. Color tokens

All values are exact and taken from the `.pen` variables. Use the token name,
not the hex, everywhere in code.

### Foundation

| Token | Hex | Use |
| --- | --- | --- |
| `bg-canvas` | `#F5F1E8` | Page background. The default ground. |
| `bg-raised` | `#FAF7F0` | Cards lifted off the canvas (case cards, credentials panel). |
| `bg-sunken` | `#EDE7DA` | Recessed bands (experience section, tag chips). |
| `bg-inverse` | `#2F3630` | Dark contact block and closing panel. |

### Earth

| Token | Hex | Use |
| --- | --- | --- |
| `clay` | `#E3D9C6` | Soft warm fill. |
| `sand` | `#D9CDB6` | Thumbnail / placeholder fill. |
| `stone` | `#C4B7A0` | Heavier warm neutral. |
| `bark` | `#786952` | Eyebrow text on light ground. |
| `soil` | `#5C5245` | Deep warm neutral. |

### Green

| Token | Hex | Use |
| --- | --- | --- |
| `sage` | `#A8B5A0` | Light green wash. |
| `sage-deep` | `#7D8F76` | Mid green. |
| `moss` | `#5A6B52` | Company names, inline links, link arrows. |
| `forest` | `#3D4A38` | Primary button fill. The strongest action color. |
| `fern` | `#94A88C` | Eyebrow text on dark ground. |

### Accent

| Token | Hex | Use |
| --- | --- | --- |
| `terracotta` | `#BE8460` | Easter-egg accent, signature dots. |
| `terracotta-deep` | `#96694A` | Pressed / darker terracotta. |
| `ochre` | `#CC9766` | Warm highlight. |
| `rust` | `#9E6447` | Deep accent. |

Accents are **rare**. Terracotta is essentially reserved for the easter-egg page
and signature dots; it must not creep into the main portfolio's CTAs.

### Text

| Token | Hex | Use |
| --- | --- | --- |
| `text-primary` | `#2E332C` | Headlines, names, roles. |
| `text-secondary` | `#5C6357` | Body copy, descriptions. |
| `text-muted` | `#6A7063` | Metadata, years, captions. |
| `text-inverse` | `#F5F1E8` | Text on `bg-inverse`. |

On `bg-inverse`, body copy uses `#C9CFC4` rather than `text-inverse` — a step
down in brightness so the heading stays dominant.

### Borders

| Token | Hex | Use |
| --- | --- | --- |
| `border-subtle` | `#E0D8C8` | Card outlines, section band edges. |
| `border-default` | `#CFC4AE` | Footer rule. |
| `border-strong` | `#A89C85` | Secondary button outline. |

### Slate (portrait surfaces only)

These exist solely to sit behind photography and must not be used as general UI
neutrals — they are cool, and they clash with the warm ground when exposed.

| Token | Hex |
| --- | --- |
| `slate-mist` | `#EBE9EC` |
| `slate-veil` | `#D6D4D9` |
| `slate-soft` | `#ADA9B1` |
| `slate` | `#75717A` |
| `slate-deep` | `#4C4A4F` |
| `slate-ink` | `#2E2B31` |
| `slate-blend` | `#545257` |
| `photo-backdrop` | `#4D4B4F` |
| `photo-mauve` | `#95726F` |
| `photo-ink` | `#101014` |
| `clay-rose` | `#AD8A85` |

---

## 3. The portrait rule

From the theme frame, verbatim:

> The portrait backdrop is not flat — it's a vignette ranging from `#403A3E` to
> `#7A686A`. A single flat colour always seams on one edge, so the slate
> surfaces use a gradient that tracks it, or feather the photo out entirely.

Three sanctioned treatments, in order of safety:

1. **Rounded avatar** — crops the backdrop out entirely. The safest use on warm
   surfaces.
2. **Feathered** — no seam at all. This is what the hero uses: the photo sits on
   a `slate-blend` frame with a vertical gradient overlay fading `#545257` →
   transparent at 15% → transparent at 85% → `#545257`, so both the top and
   bottom edges dissolve into the frame.
3. **Gradient slate** — a backdrop gradient that tracks the vignette.

Never place the portrait as a hard-edged rectangle directly on `bg-canvas`. The
cool backdrop against warm beige produces a visible seam on whichever edge is
lightest.

---

## 4. Typography

| Role | Family | Notes |
| --- | --- | --- |
| Display | **Fraunces** | Weight 600. Headlines, section titles, card titles, names. |
| Body | **Inter** | 400 for prose, 500 for link/button labels, 600 for roles and names. |
| Mono | **JetBrains Mono** | Eyebrows, years, counts, captions. Always with letter-spacing. |

### Desktop scale

| Element | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Hero headline | Fraunces | 56 | 600 | 1.12 | — |
| Contact heading | Fraunces | 44 | 600 | 1.15 | — |
| Section title | Fraunces | 40 | 600 | 1.15 | — |
| Credentials title | Fraunces | 34 | 600 | 1.2 | — |
| Case card title | Fraunces | 26 | 600 | 1.25 | — |
| Tribute name | Fraunces | 24 | 600 | — | — |
| Qualification | Fraunces | 20 | 600 | 1.3 | — |
| Hero sub | Inter | 17 | 400 | 1.65 | — |
| Role | Inter | 17 | 600 | — | — |
| Company | Inter | 16 | 400 | — | — |
| Contact sub / tribute body | Inter | 16 | 400 | 1.65–1.75 | — |
| Card desc | Inter | 15 | 400 | 1.65 | — |
| Nav brand | Inter | 15 | 600 | — | — |
| Button label | Inter | 14–15 | 500 | — | — |
| Experience desc | Inter | 14.5 | 400 | 1.65 | — |
| Nav link | Inter | 14 | 400 | — | — |
| Institution | Inter | 14 | 400 | 1.5 | — |
| Footer / social | Inter | 13.5 | 400 | — | — |
| Detail | Inter | 13 | 400 | 1.5 | — |
| Location line | JetBrains Mono | 12 | 400 | — | 1.6 |
| Years / count | JetBrains Mono | 12 | 400 | 1.7 | — |
| Eyebrow | JetBrains Mono | 11 | 400 | — | 2 |
| Card meta | JetBrains Mono | 11 | 400 | — | 1 |
| Relation label | JetBrains Mono | 10 | 400 | — | 1.5 |

### Mobile scale (390px)

| Element | Size |
| --- | --- |
| Hero headline | 34 |
| Section title | 28 |
| Contact heading | 26 |
| Case card title | 19 |
| Qualification | 18 |
| Company | 16 |
| Hero sub | 15 |
| Contact sub | 14 |
| Card meta | 10 |

### Rules

- **Eyebrows are uppercase mono with tracking.** `SELECTED ENGAGEMENTS`,
  `EXPERIENCE`, `GET IN TOUCH`, `EDUCATION & CREDENTIALS`. They are `bark` on
  light ground, `fern` on dark ground, `text-muted` when subordinate.
- Fraunces is never used below 18px and never for running text.
- Prose line-height is 1.65; the tribute body relaxes to 1.75.
- Sentence case for headlines. Uppercase is only for mono eyebrows.

---

## 5. Spacing, radius, layout

### Spacing scale

`space-1: 4` · `space-2: 8` · `space-3: 12` · `space-4: 16` · `space-5: 24` ·
`space-6: 32` · `space-7: 48` · `space-8: 64` · `space-9: 96`

### Radius scale

`radius-sm: 4` (tags) · `radius-md: 8` (thumbnails) · `radius-lg: 16` (cards,
panels, portrait) · `radius-full: 999` (buttons)

### Page grid

- Desktop frame: **1440px**, content column **1040px**, centered.
- Mobile frame: **390px**, content **342px** (24px side padding).
- There is **no multi-column grid**. Layout is a single centered column with
  horizontal splits (hero copy 600 / portrait 300, case card thumb 280 / body
  fill).

### Section rhythm

Each section is a full-bleed `*-Wrap` frame that holds a 1040px inner frame.
Vertical padding, desktop:

| Section | Padding (top / bottom) |
| --- | --- |
| Nav Wrap | 20 / 20 |
| Hero Wrap | 96 / 88 |
| Work Wrap | 88 / 88 |
| Experience Wrap | 88 / 88 |
| Credentials Wrap | 88 / 88 |
| Contact Wrap | 0 / 88 |
| Footer Wrap | 36 / 36 |

**88px is the standard section rhythm.** The hero gets 96 on top. Contact has no
top padding because it follows the credentials panel directly.

Mobile collapses to 56px bottom padding per section, 24px horizontal.

### Tonal banding

Only one section breaks the canvas color: **Experience** is `bg-sunken` with a
1px `border-subtle` on top *and* bottom. This is the single band that segments
the page. Do not add more — the effect depends on being the only one.

The footer carries a 1px `border-default` top rule.

---

## 6. Components

### Buttons

| Variant | Fill | Text | Padding | Radius | Border |
| --- | --- | --- | --- | --- | --- |
| Primary CTA | `forest` | `text-inverse` @ 14/500 | 13 / 24 | `radius-full` | — |
| Secondary CTA | transparent | `text-primary` @ 14/500 | 13 / 24 | `radius-full` | 1px `border-strong` |
| On dark (contact) | `bg-canvas` | `text-primary` @ 15/500 | 14 / 28 | `radius-full` | — |

Gap between icon and label: 8px. Pills only — never square buttons.

### Case card

Horizontal frame, 1040px wide, `bg-raised`, `radius-lg`, 1px inner `border-subtle`,
`space-6` (32) padding, `space-7` (48) gap.

- **Thumb** — 280×196 rectangle, `sand`, `radius-md`.
- **Body** — fills remaining width, vertical, `space-4` gap:
  - Meta row (`space-3` gap): year (mono 11, tracking 1, muted) · separator `·` ·
    role (mono 11, tracking 1, muted)
  - Title — Fraunces 26/600, line-height 1.25
  - Description — Inter 15/400, line-height 1.65, `text-secondary`
  - Tags — `space-2` gap, each `bg-sunken`, `radius-sm`, 6/11 padding
  - Link — `moss` label @ 14/500 + `lucide:arrow-right` 14px in `moss`, 7px gap

Used as a reusable component with four instances: Engineering VDD — Revenue
Recognition, SaaS Buy-Side Diligence, Software Carve-Outs, Multinational Asset
Consolidation.

### Experience row

Years (mono 12, muted, lh 1.7) in a left rail, then role (Inter 17/600
`text-primary`) · separator · company (Inter 16, `moss`), then description
(Inter 14.5, lh 1.65, `text-secondary`).

### Credentials panel

`bg-raised`, `radius-lg`, `space-8` (64) padding, `space-7` (48) gap. Each entry:
when (mono 11, tracking 1, muted) → qualification (Fraunces 20/600) →
institution (Inter 14, lh 1.5) → detail (Inter 13, muted).

### Contact block

`bg-inverse`, `radius-lg`, 72/64 padding, `space-5` gap, center-aligned. Eyebrow
in `fern`, heading Fraunces 44 in `text-inverse`, sub in `#C9CFC4`, then a
light pill button carrying the email address.

### Tag

`bg-sunken`, `radius-sm`, 6/11 padding, Inter label.

---

## 7. The easter egg

A hidden second page — a birthday tribute, reached **through the email address**
on the contact block ("hidden behind the email"). It is not linked in the nav.

- Its own top bar: "back to the portfolio" (Inter 14, `text-muted`).
- A `YOU FOUND IT` tag in mono 11, `terracotta`.
- A stack of **Tribute** blocks: 480×640 photo (`radius-lg`, `slate-blend` with
  the bottom-weighted gradient scrim) beside a message column — a 32px
  `terracotta` dot, the sender's name in Fraunces 24, their relation in mono 10
  tracking 1.5, and the message in Inter 16 at line-height 1.75. A mirrored
  variant alternates photo side.
- Closing panel on `bg-inverse`, then a footer note in mono 11: "made with love ·
  hidden behind the email · 2026".

Tone: warm and personal, but built from the same tokens. The easter egg is the
one place terracotta leads.

---

## 8. Iconography

`lucide`, sized 14–26px, colored with a token fill (`moss` for link arrows).
Icons are the only vector artwork — no hand-drawn illustration, no logo marks.

---

## 9. Accessibility

- `text-primary` on `bg-canvas` — `#2E332C` on `#F5F1E8` — is roughly 12:1. All
  primary and secondary text passes AA comfortably.
- `text-muted` (`#6A7063`) on `bg-canvas` is around 5:1 — fine for body sizes,
  but do not drop it below 11px on light ground, and do not use it for anything
  essential at small mono sizes without checking.
- `#C9CFC4` on `bg-inverse` is the sanctioned dark-surface body color; do not go
  dimmer.
- Never signal state with color alone — the mono metadata carries meaning in
  text.
- Respect `prefers-reduced-motion`; the design has no motion dependency.
- Section wraps map to `<section>` with a heading; eyebrows are decorative and
  should not stand in for headings.

---

## 10. Implementation notes

- Ship tokens as CSS custom properties on `:root` in `src/styles/tokens.css`,
  named exactly as above (`--bg-canvas`, `--space-5`, `--radius-lg`).
- Load Fraunces, Inter, and JetBrains Mono with `display: swap` and a real
  fallback stack. Fraunces is variable — pin the 600 weight.
- There is **no dark mode**. The palette is single-mode by design; `bg-inverse`
  is a surface, not a theme.
- Mobile breakpoint at 768px. The layout has exactly two states — 1440 desktop
  and 390 mobile — so a single breakpoint plus fluid content width is enough.
- Content column: `max-width: 1040px; margin-inline: auto; padding-inline: 24px`.
