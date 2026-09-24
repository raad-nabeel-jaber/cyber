---
name: apptrainers Cyber Academy
description: Arabic-first dark cyber-academy canon, at Hack The Box Academy's craft, lit in apptrainers coral.
colors:
  ground: "#0B111C"
  ground-raised: "#0E1523"
  panel: "#131C2C"
  panel-2: "#192437"
  panel-3: "#1F2B41"
  field: "#0E1523"
  line: "#212D43"
  line-2: "#2C3A55"
  line-3: "#3A4B6B"
  text: "#F3F6FB"
  text-2: "#AAB6CA"
  text-3: "#8290A8"
  placeholder: "#7B89A2"
  brand: "#EF4050"
  brand-strong: "#DC2E42"
  brand-hover: "#C92539"
  brand-text: "#FF707C"
  danger-text: "#FF8A94"
  danger-line: "#FF5A6A"
  track-blue: "#52B9FF"
  track-violet: "#A495FF"
  track-green: "#3FD99A"
  track-amber: "#F4B942"
  track-steel: "#9DB0CB"
  terminal: "#090E17"
typography:
  display:
    fontFamily: "Alexandria, Readex Pro, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1.1rem + 2.6vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.32
    letterSpacing: "normal"
  headline:
    fontFamily: "Alexandria, Readex Pro, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.45rem + 1.7vw, 2.625rem)"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "normal"
  title:
    fontFamily: "Alexandria, Readex Pro, system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 700
    lineHeight: 1.45
  title-card:
    fontFamily: "Alexandria, Readex Pro, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: "Readex Pro, Alexandria, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.8
  body-sm:
    fontFamily: "Readex Pro, Alexandria, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Readex Pro, Alexandria, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.4
  latin:
    fontFamily: "Mona Sans, Readex Pro, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.3
  display-en:
    fontFamily: "Mona Sans, Readex Pro, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.2rem + 2.7vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.04em"
rounded:
  sm: "8px"
  control: "10px"
  md: "12px"
  window: "14px"
  lg: "16px"
  pill: "99px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  container: "1240px"
  section: "clamp(72px, 8.5vw, 112px)"
  grid-gap: "18px"
  card-pad: "24px 22px"
  header: "72px"
components:
  button-primary:
    backgroundColor: "{colors.brand-strong}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "0.95em 1.5em"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
    textColor: "{colors.text}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "0.95em 1.5em"
  announce-bar:
    backgroundColor: "{colors.brand-strong}"
    textColor: "{colors.text}"
    height: "44px"
  nav-link:
    textColor: "{colors.text-2}"
    rounded: "{rounded.sm}"
    padding: "10px 14px"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    rounded: "{rounded.sm}"
    padding: "9px 14px"
  tab-selected:
    backgroundColor: "{colors.panel-3}"
    textColor: "{colors.text}"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
    height: "50px"
  card-course:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.lg}"
    padding: "24px 22px"
  chip-track:
    rounded: "{rounded.pill}"
    padding: "5px 10px"
  chip-skill:
    textColor: "{colors.text-2}"
    rounded: "6px"
    padding: "4px 9px"
  terminal:
    backgroundColor: "{colors.terminal}"
    rounded: "{rounded.window}"
    typography: "{typography.mono}"
---

# Design System: apptrainers Cyber Academy

## Overview

**Creative North Star: "The Lit Range"**

A night-time training range: a deep navy ground, brightest toward the centre, with raised navy panels standing on it like lab stations. The one warm light in the room is apptrainers coral. It marks what you can act on, what is live, the Red Team, and the single thesis word of the hero. Everything else is cool: white bold Arabic display, blue-gray reading text, hairline navy borders.

This is the category standard executed at full fidelity, not a reinvention. The craft bar is Hack The Box Academy; the brand is apptrainers, and its logo and #EF4050 red are binding. The imagery is the practice itself: a live terminal, a network topology with a marching attack path, a CTF scoreboard, and thin per-track line marks. There are no photographs, no stock hackers, and no invented statistics. Values that are proposals stay visibly marked as proposals until real data replaces them.

The page is Arabic-first and right-to-left, with English as a full peer. Every horizontal decision is written in logical terms so the whole system mirrors when direction flips. Density is moderate: generous section rhythm, compact information inside panels.

**Key Characteristics:**
- Navy ground with a radial centre-light and a dotted grid; coral dots scatter only on the lab side of the hero.
- One warm accent (coral) against a cool neutral ramp; five muted track hues are reserved for course taxonomy.
- Tonal layering first: ground, raised ground, panel, panel-2, panel-3. Shadows are reserved for floating objects.
- Radii step 8 / 10 / 12 / 16: controls are tighter, containers softer.
- Mono appears only where a machine would speak: terminal, course codes, scores, board cells.
- Draft mode makes content honesty visible: proposals carry an amber dotted underline.

## Colors

A cool navy-and-slate system lit by a single coral voice, with a quiet five-hue track palette for taxonomy.

### Primary
- **apptrainers Coral** (brand): the logo red. Used for large type (the hero's thesis word), marks and dots (fact bullets, level-meter pips, the terminal caret, the topology attack path, the "you" node), focus outlines, input focus borders and selected-choice rings. Never as a fill under small white text.
- **Deep Coral** (brand-strong): every fill that carries white text: primary buttons, the announcement bar, the skip link, selected tab counts, the checked consent box, the first journey step, and the hover state of door and course CTAs. Chosen for AA contrast with white.
- **Pressed Coral** (brand-hover): primary button hover only.
- **Signal Pink** (brand-text): coral used as small text on dark: course CTAs at rest, certification course codes, solved CTF cells, the open FAQ chevron, assurance icons.
- **Coral Wash** (`rgba(239, 64, 80, .12)`, from `--brand-soft`): tinted icon wells behind brand-text icons. Glows use the same hue at 15-17% alpha in radial gradients.

### Secondary
- **Track palette** (track-amber, track-steel, track-blue, track-violet, track-green, plus brand for Red Team): one hue per course track: Juniors amber, Foundations steel, Red Team coral, Blue Team blue, Cloud violet, Certification green. A track hue appears as a 14% chip wash, a 6px dot, a corner glow at 18%, the line-art stroke, and the hover border. It never fills a button.
- **Lab Green** (track-green) also means success and "captured": the terminal's OK lines and flag highlight, the live status pill, tick marks, the journey's goal step, and the form success icon.
- **Draft Amber** (track-amber) also means "proposal": draft-mode underlines, the draft badge, and sample-quote tags. The terminal uses it for hits.

### Neutral
- **Night Navy** (ground): the page ground, and the base the hero centre-light rises from.
- **Raised Navy** (ground-raised): alternating full-bleed bands (courses, journey), bounded by `line` hairlines top and bottom. Also the form field fill (`field`).
- **Panel Navy, Panel 2, Panel 3** (panel, panel-2, panel-3): cards and tiles; the open FAQ item and floating toast; the selected tab and certification gradient.
- **Hairlines** (line, line-2, line-3): resting borders, control and interactive borders, and hover or emphasised borders, in that order.
- **Paper White** (text): headings and key values.
- **Blue-Gray** (text-2): body copy, leads, nav links.
- **Slate** (text-3): metadata labels, captions, codes.
- **Terminal Black** (terminal): the lab window only; its chrome is one step lighter.

### Named Rules
**The One Warm Light Rule.** Coral is the only warm accent outside the track taxonomy and draft mode. It marks action, live state, the Red Team and one thesis word. If an element is not one of those, it is not coral.

**The Three Corals Rule.** #EF4050 for marks, large type and focus. #DC2E42 for any fill carrying white text. #FF707C for red text smaller than a heading on dark. Never swap them.

**The Track Owns Its Hue Rule.** A track colour appears only on elements that belong to that track (chip, dot, glow, line mark, hover border). Track hues never become generic decoration.

## Typography

**Display Font:** Alexandria (with Readex Pro, system-ui)
**Body Font:** Readex Pro (with Alexandria, system-ui)
**Latin Font:** Mona Sans: the full display and body face under `html[lang="en"]`, and in Arabic mode for English terms, skills chips, certification names and role tags
**Mono Font:** JetBrains Mono (with ui-monospace, Menlo, Consolas)

**Character:** Alexandria's heavy geometric Arabic gives the headlines a confident, engineered stance. Readex Pro keeps body text open and calm at a tall line-height. Mona Sans makes English a native peer rather than a fallback, and JetBrains Mono is the voice of the machine.

### Hierarchy
- **Display** (800, clamp 2.125rem to 3.25rem, 1.32): the hero H1 only, set to break into two lines at both desktop and mobile widths. One word carries brand coral. It still leads the page over the 2.625rem headline cap. English: Mona Sans, clamp 2.25rem to 3.5rem, 1.02, -0.04em.
- **Headline** (800, clamp 2rem to 2.625rem, 1.3): section heads and the register close. English: 1.08, -0.03em.
- **Title** (700, 1.3125rem to 1.375rem, 1.45): door and tile titles. English 1.2. Journey steps are 1.125rem.
- **Card title** (700, 1.1875rem, 1.5): course card titles, one step below Title because the course grid is denser. English 1.2.
- **Body** (400, 1.0625rem, 1.8): default reading text. Leads are clamp 1.0625rem to 1.25rem in text-2 and capped near 34em. English line-height is 1.6.
- **Body small** (400, 0.9375rem to 0.96875rem, 1.8): door and tile copy in text-2.
- **Course card set** (one step smaller throughout): description 0.875rem at 1.8 (English 1.6), English subtitle 0.8125rem in Mona Sans, skill chips 0.75rem, stat values 0.9375rem at 700 with tabular figures.
- **Label** (600, 0.9375rem, 1.4): buttons, form labels, CTAs, tabs (tabs at 500).
- **Meta** (400 to 500, 0.75rem to 0.875rem, 1.4 to 1.5): dt labels, captions and hints in text-3. Numbers use tabular figures.
- **Mono** (500, 0.625rem to 0.8125rem): course codes (+0.04em), board categories (+0.06em), terminal (clamp 10.5px to 13.25px, 1.62), topology labels, and the status pill, which is the only uppercase text in the system.

### Named Rules
**The Arabic Breathes Rule.** Arabic gets no negative letter-spacing and taller line-heights (body 1.8, headings 1.3 to 1.5). Tightened tracking and compressed leading are applied only under `html[lang="en"]`.

**The Machine Voice Rule.** Mono is reserved for code, identifiers and data: the terminal, course codes, scores, board cells and topology labels. Never set prose, headings or buttons in mono.

**The Latin Peer Rule.** English words inside Arabic copy (skills, certifications, roles, course English names) are set in Mona Sans, not in the Arabic face's Latin glyphs.

## Layout

A centred container of 1240px plus a fluid gutter (clamp 16px to 40px) on each side. Sections breathe vertically at clamp 72px to 112px. Section heads are capped at 680px, and the split variant puts the head and its filter tabs on one baseline. Bands alternate between the ground and a raised ground with hairline borders, so rhythm comes from surface, not from dividers.

Grids are explicit and reflow in steps: the audience doors are 4 columns, then 2 (below 1140px), then 1 (below 640px). The doors rise like a staircase: each step adds 40px of minimum height, so the level ladder reads spatially. Courses are 3, 2, then 1. The method section is a 6-column bento (labs 4x2, certifications and CTF 2 each, career full width) that collapses to full-width tiles. The hero, FAQ and register sections are asymmetric two-column splits that stack below 980px, where the nav also becomes a drop-down panel. In-grid gaps sit at 16 to 24px (18px typical); card padding is about 24px 22px.

**The Logical Axis Rule.** Every horizontal property is logical (`inline-start/end`, `margin-inline`, `padding-inline`, `text-align: start`). Direction-dependent backgrounds read `--start-x`, `--end-x` and `--glow-x`, which flip under `html[dir="ltr"]`. Directional icons flip with `scaleX(-1)` in RTL. The topology diagram alone is pinned `direction: ltr`.

## Elevation & Depth

Depth is tonal first. Surfaces climb a navy ramp (ground, raised ground, panel, panel-2, panel-3) and are edged with hairlines, not shadows. Light, not shadow, gives the page its volume: a radial centre-light in the hero and register sections, and a 28px dotted grid masked to fade downward. Real shadows are reserved for things that float above the page (the lab window, the flag toast, the register form, the draft note), and for coloured hover lift on primary buttons, doors and course cards.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 24px 60px -24px rgba(0,0,0,.75), 0 2px 8px rgba(0,0,0,.25)`): floating objects only: the terminal window, the flag toast, the register form panel, the draft note.
- **Coral lift** (`box-shadow: 0 10px 26px -12px rgba(239,64,80,.7), inset 0 1px 0 rgba(255,255,255,.16)`): primary buttons at rest; on hover it deepens to `0 16px 34px -14px rgba(239,64,80,.85)` with a 1px rise.
- **Tinted hover glow** (`box-shadow: 0 26px 50px -30px <hue>`): doors (coral) and course cards (their track hue at 75%), paired with a 3-4px rise.
- **Focus halo** (`box-shadow: 0 0 0 4px rgba(239,64,80,.18)`): focused inputs.

### Named Rules
**The Flat Until Floating Rule.** Cards and tiles are flat at rest. A neutral shadow means the object floats above the page, and a tinted shadow means hover. Nothing else casts one.

## Shapes

The corners are softly engineered. Inline pieces use 8px (tabs, nav links, role tags). Every control uses 10px (buttons, inputs, selects, choices, the language toggle, card CTAs). Nested containers use 12px (FAQ items, topology frame, certification tiles, the tabs rail, journey numerals), windows use 14px (terminal, toast), and cards use 16px (doors, courses, bento tiles, quotes). Pills (99px) are only for track chips, tab counts and quote tags. Borders are 1px hairlines. Dashed strokes carry meaning: a dashed divider inside doors, dashed borders on sample quotes and empty states, and a dashed coral attack path. Small marks are geometric: 6px coral squares (1.5px radius) as fact bullets, 12x5px level pips, and round track dots.

**The Contained Mark Rule.** Track and door line marks sit wholly inside the card, inset from the inline-end top corner. They never crop at, or bleed past, the card edge, and the title reserves that corner with inline-end padding.

**The Nesting Radius Rule.** An inner element never has a larger radius than its container. Controls at 10px sit inside cards at 16px, and cells at 7px sit inside tiles.

## Components

### Buttons
Confident and warm, with one coral voice per cluster.
- **Shape:** gently rounded (10px), with 0.95em by 1.5em padding. Weight 600, no wrapping.
- **Primary:** Deep Coral fill, white text, coral lift shadow. Hover moves to Pressed Coral, deepens the glow and rises 1px. A directional arrow nudges 3px toward the reading direction.
- **Ghost:** 2% white wash over a line-2 border, white text. Hover takes a line-3 border and a 5% wash. It pairs with the primary as the secondary route, as in "choose your track".
- **Sizes:** lg (1.05em by 1.7em, 1.0625rem) for the hero and the close; sm (0.72em by 1.15em) for the header.
- **Loading:** an inline 18px white ring spinner, `cursor: progress`.
- **Card CTAs:** door CTAs are full-width bordered rows. Course CTAs are borderless rows in Signal Pink. Both fill Deep Coral with white text on hover.

### Chips
- **Track chip:** a pill with a 14% wash of the track hue, text mixed 72% hue into white, and a 6px dot in the hue.
- **Skill chip:** a 6px-radius tag with a hairline border and a 3% wash, text-2 in Mona Sans.
- **Role tag:** an 8px-radius tag with a line-2 border, in Mona Sans.
- **Tab count:** a pill with a 6% wash in text-3. Deep Coral with white when its tab is selected.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** panel. Doors use a vertical gradient from panel to raised ground.
- **Shadow Strategy:** flat at rest, with a tinted hover glow (see Elevation).
- **Border:** a 1px `line` border. On hover it mixes toward the brand or track hue.
- **Internal Padding:** about 24px 22px. Bento tiles use clamp 22px to 32px.
- **Line mark:** a contained icon from the 24px sprite grid (1.4 stroke), set inside the inline-end top corner. Course cards use 40px at 20px/20px in the track hue at 0.75 opacity. Doors use 44px at 22px top and 20px inline-end in brand coral at 0.7. On hover it goes to full opacity and rotates -6deg, with no scale. Titles reserve the corner (course title and English subtitle 52px inline-end padding; door title 56px). See the Contained Mark Rule.
- **Course corner glow:** an 18% radial of the track hue from the inline-start top corner.

### Inputs / Fields
- **Style:** 50px minimum height, 10px radius, line-2 border, field fill, 12px by 14px padding. The caret is coral.
- **Focus:** coral border, the fill lifts to #101828, and a 4px coral halo at 18%.
- **Error:** a #FF5A6A border and a 6% coral wash, with a message in danger-text beneath. The form-level summary is a coral-tinted box.
- **Choices:** radio cards (50px, 10px radius). When checked, they take a coral border, an inset ring and a 9% coral wash, and the dot fills coral.
- **Consent:** a 22px checkbox with a 6px radius that fills Deep Coral with a white check.

### Navigation
- **Announcement bar:** full-bleed Deep Coral, 44px, white text with a pulsing white dot and an underlined link. It shortens on mobile.
- **Header:** sticky at 72px (64px on mobile), 90% ground with no border. Once scrolled it becomes 97% ground with a `line` hairline.
- **Links:** text-2 at 500 weight, 8px radius, 10px by 14px padding. Hover goes to white with a 4.5% wash. The language toggle is a bordered 42px ghost with a globe icon, and the header CTA is a small primary button.
- **Mobile (below 980px):** a 44px menu toggle opens a full-width stacked panel on the ground with larger 14px-padded links and the CTA at the foot.

### Tabs
A segmented rail on panel (12px radius, 5px padding). Tabs are transparent in text-2. The selected tab sits on panel-3 with an inset line-2 ring. The rail scrolls on its own and wraps on mobile.

### Lab Terminal (signature)
A 14px window on Terminal Black with a line-2 border and the float shadow, plus a faint 6px outer ring. Its chrome bar is mono 12px: three window dots with the first in coral, a centred title, and a green uppercase "live" pill with a pulse. The screen text is mono and typed live, coloured by role: blue frame, sky user, white path and command, dim slate, amber hits, green OK, and a green flag highlight. A coral block caret blinks. The mono footer carries a tabular timer. A flag toast floats off the lower edge (panel-2, 14px, float shadow) with a coral icon tile, and becomes in-flow on mobile.

### Topology, CTF Board and Level Meter (signature)
- **Topology:** a dotted 20px grid frame. Nodes are hairline rectangles with mono labels, the "you" node is filled coral, and a compromised node gets a coral stroke. A dashed coral attack path marches, and the flag is a green disc.
- **CTF board:** a 4-column grid of mono cells, 34px tall with a 7px radius. Solved cells are coral-tinted with Signal Pink text and are struck through.
- **Level meter:** five 12x5px pips, coral when filled and line-2 when empty. It shows the level in every door.

### Journey Steps
Numbered 48px tiles (12px radius) joined by a 2px rail that fades from coral to green. The first step is filled Deep Coral, and the goal step is green with a flag icon. Horizontal on desktop, vertical below 980px.

### Draft Mode (system mechanism)
`html[data-draft]` is the honesty switch. Every `[data-proposal]` value (ages, hours, labs, certification mappings, policies, prices) gets a 2px amber dotted underline offset 0.34em, `cursor: help` and a tooltip. Sample-quote sections (`[data-samples]`) render only in draft mode, with dashed borders and an amber "sample" tag. A dismissible amber-badged note explains the marks. It floats at the inline-end bottom on desktop and becomes an in-flow strip on mobile, so it never covers content. Removing the attribute is the only way proposal styling disappears.

## Do's and Don'ts

### Do:
- **Do** use #DC2E42 (brand-strong) for any fill that carries white text, #EF4050 for marks, large type and focus, and #FF707C for small red text on dark.
- **Do** write every horizontal property logically, and read direction-dependent positions from `--start-x`, `--end-x` and `--glow-x`.
- **Do** keep Arabic at normal letter-spacing with body line-height 1.8, and apply negative tracking only under `html[lang="en"]`.
- **Do** mark every unconfirmed number, name, mapping or policy with `data-proposal` so draft mode underlines it, and render sample testimonials only inside `[data-samples]`.
- **Do** tell the story with the practice itself: the terminal, the topology, the CTF board, level meters and per-track line marks.
- **Do** give each course track exactly its own hue, applied as a chip, dot, glow, line mark and hover border.
- **Do** keep line marks fully inside the card (course 40px, door 44px, inset about 20px from the inline-end top corner), and pad the title's inline end to clear them.
- **Do** use tabular figures for every count, score, timer and meta value.
- **Do** respect `prefers-reduced-motion`. Motion is limited to state easing (`cubic-bezier(.16,1,.3,1)`), the typing terminal, the caret, the marching attack path, the live pulse and the staggered card rise.

### Don't:
- **Don't** use stock hacker photography, hooded figures or binary-rain imagery.
- **Don't** present invented statistics, partners, employers, accreditations or testimonials as real; unconfirmed values stay under draft-mode marks.
- **Don't** build walls of icon cards. Icons are 24px line strokes (1.75 width, round joins) that support text, never replace it.
- **Don't** set prose, headings or buttons in mono.
- **Don't** put white text on #EF4050, or on any track hue.
- **Don't** add a second warm accent. Amber is reserved for draft-mode honesty and terminal hits, and the track hues for their tracks.
- **Don't** crop, oversize or bleed a line mark past a card edge.
- **Don't** alter, recolour or restyle the apptrainers logo. Use the dark-ground mark on navy.
