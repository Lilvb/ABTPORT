# Tech Spec — Abanob Thabet Portfolio

## Dependencies

### Core
- `react` + `react-dom` — UI framework (via Vite)
- `typescript` — Type safety
- `tailwindcss` — Utility-first styling
- `vite` — Build tool

### Animation
- `gsap` — Core animation engine + ScrollTrigger + quickTo
- `@studio-freight/lenis` — Smooth scroll with inertia

### Icons
- `lucide-react` — Icons (GitHub, LinkedIn, Mail, Phone, MapPin, Sun, Moon, ChevronDown, Menu, X, ExternalLink, Send)

### Fonts
- Google Fonts: `Bricolage+Grotesque:opsz,wght@12..96,200..800`

---

## Component Inventory

### shadcn/ui Components
| Component | Source | Usage |
|-----------|--------|-------|
| Button | shadcn/ui | CTA buttons, nav actions (override: pill radius 80px) |
| Input | shadcn/ui | Contact form name/email fields (override: dark bg, purple focus) |
| Textarea | shadcn/ui | Contact form message field |

### Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| `GooeyBlob` | `className?: string` | SVG blob with 5 animated circles + feGaussianBlur/feColorMatrix filter. GSAP timeline loops infinitely with yoyo. |
| `CustomCursor` | — | Fixed div, follows mouse via gsap.quickTo. 3 states: default (20px circle), hover (48px), text (4x32px bar). Hidden on touch devices. mix-blend-mode: difference. |
| `TypingEffect` | `text: string, speed?: number, delay?: number` | Character-by-character reveal with blinking cursor. Cursor fades 3s after completion. |
| `ScrollReveal` | `children, className?, delay?, direction?` | Wrapper that triggers GSAP ScrollTrigger entrance (fade + translate). Configurable direction (up/left/right). |
| `ThemeToggle` | — | Pill button toggling dark/light mode. Persists to localStorage. Sun/Moon icon swap. |
| `ProjectCard` | `number, title, tags[], description, links?` | Sharp-edged card with hover border glow. |
| `SkillCard` | `title, skills[]` | Category card with purple dot list. |
| `TimelineItem` | `date, title, subtitle, description, tags[]` | Left badge + right content card with connector line. |
| `SectionLabel` | `text` | Uppercase purple label used above every section heading. |

### Sections

| Section | Key Features |
|---------|-------------|
| `Navigation` | Fixed, blur backdrop, active link tracking, theme toggle, CTA |
| `HeroSection` | GooeyBlob bg, typing animation, CTA buttons, scroll indicator |
| `AboutSection` | Two-column (text + blob image), social links |
| `ExperienceSection` | Timeline layout with connector lines |
| `ProjectsSection` | 2-column grid of ProjectCards |
| `EducationSkillsSection` | Education card + 3-column skill categories |
| `ContactSection` | Two-column (info + form), social links |
| `Footer` | Copyright + last updated badge |

---

## Animation Implementation

| Animation | Library | Implementation | Complexity |
|-----------|---------|----------------|------------|
| Gooey morphing blob | GSAP | Timeline with 5 circle elements, repeat:-1, yoyo, sine.inOut ease. SVG filter with feGaussianBlur + feColorMatrix. | **High** 🔒 |
| Custom cursor | GSAP quickTo | Two quickTo instances (x, y) on mousemove. CSS class toggling for states via mouseover delegation. | **Medium** |
| Typing effect | React state | setInterval character append. Blinking cursor via CSS keyframes. Fade out via setTimeout. | **Low** |
| Scroll-triggered reveals | GSAP ScrollTrigger | Batch pattern: query all section contents, apply from({opacity:0, y:40}) with stagger. Trigger: "top 80%", once:true. | **Medium** |
| Smooth scroll | Lenis | Lenis instance with lerp:0.15. Sync to GSAP ticker. | **Low** |
| Number counter | GSAP ScrollTrigger | gsap.from with snap:{textContent:1} on year element. | **Low** |
| Scroll indicator bounce | CSS | @keyframes translateY 0→8px, infinite. | **Low** |
| Card hover glow | CSS | transition on border-color, background, box-shadow. 300ms ease. | **Low** |
| Nav link hover | CSS | transition on color, 200ms. | **Low** |
| Theme toggle | CSS + React | Class on root element, CSS variables for colors. Transition all 400ms. | **Medium** |
| Mobile menu | GSAP | Slide-in drawer, stagger nav links. | **Low** |

---

## State & Logic

### Theme System
- React Context (`ThemeContext`) exposes `theme: 'dark' | 'light'` and `toggleTheme()`.
- `useEffect` on mount reads `localStorage.getItem('theme')` or defaults to `'dark'`.
- `<html>` element gets `data-theme` attribute. CSS variables swap color values.
- Light mode colors: bg `#F2F3F4`, card `#FFFFFF`, text `#090917`, secondary `#4B4B5B`.

### Lenis ↔ GSAP Integration
1. Initialize Lenis in `useEffect` at app level.
2. `lenis.on('scroll', ScrollTrigger.update)`
3. `gsap.ticker.add((time) => lenis.raf(time * 1000))`
4. `gsap.ticker.lagSmoothing(0)`

### Navigation Active State
- Track scroll position via ScrollTrigger `onUpdate` or Lenis scroll event.
- Compare current scroll Y against section offsets to determine active section.
- Update active nav link style (color + bottom border).

### Contact Form
- Controlled inputs (React state).
- Submit handler: preventDefault, show success message (no backend — purely frontend demo).
- Optional: `mailto:` link as fallback.

### Reduced Motion
- `useReducedMotion` hook checks `prefers-reduced-motion: reduce`.
- Disables: blob animation, typing effect, counter animation.
- Shows static states: full text immediately, static blob positions, final year number.

---

## Project Structure

```
/mnt/agents/output/app/
├── public/
│   ├── images/
│   │   └── about-blob.png
│   └── videos/
│       └── hero-bg.mp4
├── src/
│   ├── components/
│   │   ├── ui/               # shadcn components (button, input, textarea)
│   │   ├── GooeyBlob.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── TypingEffect.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SkillCard.tsx
│   │   ├── TimelineItem.tsx
│   │   ├── SectionLabel.tsx
│   │   └── SocialLinks.tsx
│   ├── sections/
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSkillsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useTypingEffect.ts
│   │   ├── useTheme.ts
│   │   ├── useLenis.ts
│   │   └── useReducedMotion.ts
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Tailwind Config Additions

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#854CE6',
          deep: '#6714B4',
          light: '#C4A0FF',
        },
        sage: '#62644C',
        navy: {
          deep: '#090917',
          dark: '#1C1E27',
          DEFAULT: '#1C1E27',
        },
        offwhite: '#F2F3F4',
        gray: {
          light: '#D4D5D6',
          medium: '#B1B2B3',
        },
      },
      fontFamily: {
        bricolage: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '80px',
      },
    },
  },
}
```

---

## CSS Variables for Theme

```css
:root[data-theme="dark"] {
  --bg-primary: #090917;
  --bg-secondary: #1C1E27;
  --bg-card: #1C1E27;
  --text-primary: #F2F3F4;
  --text-secondary: #D4D5D6;
  --border-color: rgba(212, 213, 214, 0.1);
}

:root[data-theme="light"] {
  --bg-primary: #F2F3F4;
  --bg-secondary: #FFFFFF;
  --bg-card: #FFFFFF;
  --text-primary: #090917;
  --text-secondary: #4B4B5B;
  --border-color: rgba(0, 0, 0, 0.1);
}
```
