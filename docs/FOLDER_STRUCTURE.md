# Folder Structure

Proposed structure for **guptakanika.com** — Vite 8 + React 19 + TypeScript,
no CSS framework, no router library.

## Guiding constraints

The site is a **single scrolling page plus one hidden page**. That is small.
The structure below is deliberately flat: no `features/`, no barrel files, no
state library, no component-per-folder. Everything is findable in two hops.

Two decisions drive the shape:

1. **Sections are the unit of composition.** The design is seven stacked bands
   (nav, hero, work, experience, credentials, contact, footer). Each becomes one
   section component that owns its own layout.
2. **Content is data, not JSX.** Engagements, roles, credentials, and tributes
   are lists that repeat a component. Keeping them in `src/content/` as typed
   arrays means editing a job description never touches a component.

---

## Tree

```
guptakanika.com/
├── docs/
│   ├── DESIGN_GUIDELINES.md      # Earthen design system
│   └── FOLDER_STRUCTURE.md       # this file
├── public/
│   ├── favicon.svg
│   ├── kanika.jpeg               # hero portrait
│   ├── resume.pdf                # "Download resume" CTA target
│   └── tributes/                 # easter-egg photos
├── src/
│   ├── main.tsx                  # entry; mounts <App>
│   ├── App.tsx                   # routing switch: portfolio vs. easter egg
│   │
│   ├── styles/
│   │   ├── tokens.css            # :root custom properties (colors, space, radius, type)
│   │   ├── reset.css             # normalize + box-sizing + motion preferences
│   │   ├── base.css              # element defaults, font-face loading, typography classes
│   │   └── utilities.css         # .container, .eyebrow, .visually-hidden
│   │
│   ├── components/               # reusable, design-system-level
│   │   ├── Button.tsx            # primary | secondary | on-dark
│   │   ├── Button.module.css
│   │   ├── Tag.tsx
│   │   ├── Tag.module.css
│   │   ├── Eyebrow.tsx           # mono uppercase label
│   │   ├── Eyebrow.module.css
│   │   ├── SectionHeading.tsx    # eyebrow + Fraunces title pair
│   │   ├── SectionHeading.module.css
│   │   ├── Portrait.tsx          # feathered / avatar / gradient-slate variants
│   │   ├── Portrait.module.css
│   │   ├── CaseCard.tsx
│   │   ├── CaseCard.module.css
│   │   ├── ExperienceRow.tsx
│   │   ├── ExperienceRow.module.css
│   │   ├── CredentialItem.tsx
│   │   └── CredentialItem.module.css
│   │
│   ├── sections/                 # one per band of the page; not reusable
│   │   ├── Nav.tsx
│   │   ├── Nav.module.css
│   │   ├── Hero.tsx
│   │   ├── Hero.module.css
│   │   ├── Work.tsx
│   │   ├── Work.module.css
│   │   ├── Experience.tsx
│   │   ├── Experience.module.css
│   │   ├── Credentials.tsx
│   │   ├── Credentials.module.css
│   │   ├── Contact.tsx
│   │   ├── Contact.module.css
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   │
│   ├── pages/
│   │   ├── Portfolio.tsx         # composes the seven sections
│   │   ├── EasterEgg.tsx         # hidden tribute page
│   │   └── EasterEgg.module.css
│   │
│   ├── content/                  # typed content, no JSX
│   │   ├── profile.ts            # name, locations, headline, email, socials
│   │   ├── engagements.ts        # the four case cards
│   │   ├── experience.ts         # the four roles
│   │   ├── credentials.ts        # CPA, MSc, BCom
│   │   └── tributes.ts           # easter-egg messages
│   │
│   ├── hooks/
│   │   └── useEasterEgg.ts       # reveal logic behind the email
│   │
│   ├── lib/
│   │   └── cn.ts                 # className joiner
│   │
│   └── types/
│       └── content.ts            # Engagement, Role, Credential, Tribute
├── index.html
├── vite.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── .oxlintrc.json
└── package.json
```

---

## Conventions

### Styling — CSS Modules over tokens

There is no Tailwind in this project and no reason to add one for seven
sections. Use **CSS Modules** (`*.module.css`, first-class in Vite, zero config)
and have every value come from a custom property:

```css
.card {
  background: var(--bg-raised);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  gap: var(--space-7);
}
```

Hardcoded hex or px in a `.module.css` file is a bug. If a value is missing from
`tokens.css`, add it there first.

`tokens.css` is the direct translation of the `.pen` variables — same names,
kebab-cased with a `--` prefix. That one-to-one mapping is what keeps the design
file and the code in sync.

### Components vs. sections

- `components/` — used more than once, or design-system primitives. Take props,
  no knowledge of page position, no content baked in.
- `sections/` — used exactly once. Own their vertical padding and background
  band. Import content from `content/` and render `components/`.

If a section component starts taking props beyond content, it wants to be split.

### Content files

```ts
// src/content/experience.ts
import type { Role } from '../types/content'

export const experience: Role[] = [
  {
    years: '2025 — 2026',
    role: 'Associate, Transaction Services',
    company: 'BDO · Calgary',
    description: 'Executed 23 middle-market buy-side and sell-side engagements…',
  },
  // …
]
```

Copy edits — a new role, a reworded engagement — happen here alone. This matters
because the content is a live résumé and will change more often than the design.

### Routing

Two pages and no deep linking need. Skip `react-router`; `App.tsx` reads
`window.location.pathname` (or a hash) and renders `Portfolio` or `EasterEgg`.
Add the router only if a third route appears.

The easter egg is reached through the contact email, per the design. Keep that
trigger in `useEasterEgg.ts` so the mechanism is in one named place rather than
buried in a click handler in `Contact.tsx`.

### Assets

- Portrait and résumé live in `public/` — referenced by stable path, never
  hashed, and the résumé must be linkable directly.
- Tribute photos go in `public/tributes/`; they are content, not build inputs.
- Fonts load from Google Fonts in `index.html` with `preconnect`. Self-host into
  `public/fonts/` only if the network hop becomes a measured problem.

### Naming

- Components and files: `PascalCase.tsx`, styles alongside as
  `PascalCase.module.css`.
- Content, hooks, and utilities: `camelCase.ts`.
- CSS classes inside modules: `camelCase` (`.caseCard`, `.metaRow`).
- Custom properties: `--kebab-case`, matching the `.pen` token names exactly.

---

## Build order

1. `styles/tokens.css` — port every `.pen` variable. Nothing else can be built
   correctly first.
2. `styles/reset.css` + `base.css` — fonts and element defaults.
3. `types/content.ts` and `content/*` — the real copy, typed.
4. `components/` primitives — `Button`, `Eyebrow`, `Tag`, `SectionHeading`.
5. `sections/` top to bottom — Nav, Hero, Work, Experience, Credentials,
   Contact, Footer.
6. `Portrait` with the feathered variant — treat as its own step; the seam
   problem described in the design guidelines is the fiddly part of this build.
7. `pages/EasterEgg.tsx` and the reveal hook.
