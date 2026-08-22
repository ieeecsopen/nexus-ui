# Nexus Kit

An animated React component library — 60+ accessible, composable components with
motion built in. Ships as ESM + CJS with TypeScript definitions.

```bash
npm install nexus-kit
```

```tsx
import { MagneticButton, BentoGrid, Typewriter } from 'nexus-kit';

export function Hero() {
  return (
    <BentoGrid>
      <Typewriter text="Build interfaces that feel alive" />
      <MagneticButton onClick={ship}>Get started</MagneticButton>
    </BentoGrid>
  );
}
```

## Why this exists

Most component libraries give you correct, static primitives and leave motion to
you. Nexus Kit bundles the animation in — magnetic buttons, spotlight cards,
parallax scroll, text reveals — so interactive polish doesn't mean rebuilding
the same effects on every project.

## What's included

**Primitives** — Button, Input, Textarea, Checkbox, Switch, RadioGroup, Select,
Slider, Label, Badge, Avatar, AvatarGroup, Card, Alert, Separator, Skeleton,
Progress, AspectRatio, Toggle, ToggleGroup

**Layout** — BentoGrid, Masonry, ScrollArea, Collapsible, Sheet, Modal,
Accordion, Table, Pagination, Breadcrumb, Navbar, Footer, FloatingDock

**Motion** — Typewriter, TextReveal, TextGlowHover, Sparkles, Confetti,
MagneticButton, SpotlightCard, TiltCard, MovingBorder, AnimatedGradient,
AnimatedTabs, ParallaxScroll, StickyScroll, ScrollProgress, FadeIn,
GlowingEffect

**Overlays** — Tooltip, HoverCard, Command (⌘K palette), RatingStars

Full export list: [`src/index.ts`](src/index.ts).

## Requirements

- React 18 or 19
- Tailwind CSS (components use Tailwind utility classes)

Peer animation is handled by `framer-motion` / `motion`.

## Local development

```bash
npm install
npm run dev        # demo site on http://localhost:5173
npm run build:lib  # bundle the library with tsup -> dist/
npm run preview
```

`npm run dev` runs the showcase app, which is the fastest way to see every
component. `npm run build:lib` produces the publishable artefact:

| Output | Purpose |
| --- | --- |
| `dist/index.js` | ESM entry |
| `dist/index.cjs` | CommonJS entry |
| `dist/index.d.ts` | TypeScript definitions |

## Project layout

```
src/
  index.ts        # public API - every export lives here
  components/     # 62 components, one file each
    ui/           # lower-level primitives
  lib/            # shared helpers (cn, class merging)
```

## Adding a component

1. Create `src/components/YourThing.tsx`. Export the component **and** its props
   interface.
2. Use `cn()` from `src/lib` for class merging so consumers can override styles.
3. Accept `className` and spread `...rest` onto the root element — without this,
   consumers can't style it.
4. Add the export to `src/index.ts`.
5. Add a demo to the showcase app so reviewers can see it.

Keep animation opt-out-able where reasonable; respect `prefers-reduced-motion`.

## Contributing

See [CONTRIBUTING.md](https://github.com/ieeecsopen/.github/blob/main/CONTRIBUTING.md).
Component contributions are especially welcome — check issues labelled
`good first issue`.

## Licence

MIT — see [LICENSE](LICENSE).
