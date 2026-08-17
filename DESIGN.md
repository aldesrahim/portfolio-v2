# Design system — Ahmad Al Desrahim portfolio

Direction: **Exposed grid.** A printed reference page drawn on a 12-column
frame. Warm paper, hairline rules, crosshairs where the rules meet. Every
section declares its own column spans, so the page reads as a plan sheet rather
than a stack of bands.

Implemented in `src/styles/global.css`, with the crosshair painter in
`src/layouts/Sheet.astro`. Tokens are CSS custom properties on `:root`,
overridden under `html[data-theme="dark"]`.

Source of the direction: `mockup2/` (kept for reference, excluded from the
build).

---

## Color — warm paper

### Light (default)

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#F4F2ED` | Page background |
| `--ink` | `#14130F` | Headings, primary text, crosshairs |
| `--ink-2` | `#4A4740` | Body paragraphs, nav links, chips |
| `--ink-3` | `#8D887C` | Meta terms, notes under stack items |
| `--line` | `#C9C4B8` | Structural grid rules (cell borders) |
| `--hair` | `#DDD9CF` | Sub-rules inside a cell (list separators) |
| `--panel` | `#EBE8E1` | Screenshot wells, index row hover |
| `--accent` | `#B3411F` | Section numbers, status square, link arrows |

### Dark

| Token | Value |
| --- | --- |
| `--paper` | `#101010` |
| `--ink` | `#ECE9E2` |
| `--ink-2` | `#A9A49A` |
| `--ink-3` | `#6D6961` |
| `--line` | `#34322D` |
| `--hair` | `#242220` |
| `--panel` | `#171716` |
| `--accent` | `#E0703F` |

One accent only. It never fills an area larger than the 6px status square — it
is a text color, an arrow, a 1px underline. No gradients, no tints, no shadows.

The theme is a switch, not a media query: light is the default, the masthead
toggle writes the choice to `localStorage`, and an inline head script applies it
before first paint.

## Typography

- **Display / body — Inter**, weights 400–500, `--font-sans`.
- **Labels / meta / nav / lists — IBM Plex Mono**, 400–500, `--font-mono`.

Both are self-hosted through Astro's font pipeline; no runtime CDN request.

| Role | Size / weight | Notes |
| --- | --- | --- |
| H1 (name) | `clamp(44px, 6.4vw, 84px)` / 500 | `line-height: .88`, `letter-spacing: -.045em`, optical `-.055em` left hang |
| Lede (brief) | `clamp(19px, 2.05vw, 25px)` / 1.32 | |
| Section H2 | `clamp(28px, 3.6vw, 44px)` | `line-height: .94` |
| Index heading (`small`) | `clamp(16px, 1.6vw, 20px)` / 400 | In `--ink-2` |
| Feature H3 | `clamp(21px, 2.3vw, 29px)` | |
| Project H1 | `clamp(30px, 4.2vw, 52px)` | |
| Mailto | `clamp(26px, 3.4vw, 42px)` | Wraps at `{split}` in the config |
| Body / description | 13–15px / 1.5–1.65 | `--ink-2` |
| Mono label | 11px | `letter-spacing: .09em`, uppercase |
| Stack note, card meta | 10px mono | `--ink-3` |

Uppercase is for mono only. The sans is never uppercased.

## Layout — the frame

- `.frame`: `max-width: 1280px`, centered, with **only** a top and a left rule.
- `.row`: `grid-template-columns: repeat(12, 1fr)`.
- `.cell`: `padding: var(--pad)` (24px, 20px, then 18px), plus its **own** right
  and bottom rule. Lines therefore stop and start with the boxes instead of
  running the full page height — that is the whole device.
- Spans are `.c1` … `.c12`. Every row must add up to 12, or the row leaves a gap
  where the frame's right edge should be. `src/pages/index.astro` computes the
  stack and OSS spans from the config length and gives the last cell the
  remainder for exactly this reason.
- Vertical rhythm is per-section padding on `.cell`, not a global scale:
  masthead/footer 13px, hero 48px, brief 38px, section heads 32px, features
  28px, stack 26/30px, contact 44px.

### Crosshairs

`Sheet.astro` measures every `.cell` after layout, collects the four corners,
dedupes them, and drops a 13px `+` at each. Because the marks come from the
cells, they land wherever rules actually meet — no fixed line positions. Repaint
runs on resize (debounced 60ms), on `load`, on `document.fonts.ready`, on a
`ResizeObserver` over the frame, and on any image `load` in the capture phase.

The measurement steps back one pixel from each rounded edge, because a 1px
border paints on the pixel *before* the box edge and 12 fractional columns put
those edges on subpixels.

### Rails

The left cell of most rows is a `.rail`: accent section number, mono label,
optional dimmer sub-label. Numbers are the page's running order — `01` Name,
`02` Brief, `03` Tech Stack, `04` Work, `04b` Other Work, `05` OSS, `06`
Contact — and featured rows number themselves `F/01`, `F/02`, …

### Under 1100px

Stack groups and OSS cards drop to 6 columns (an odd last card takes 12, so the
row still closes). The feature rail becomes a full-width strip and the row
splits 7 / 5 between screens and copy.

### Under 820px

The frame loses its border and padding and runs full-bleed, cells lose their
right rule, every cell spans 12, and the crosshairs are switched off — with no
vertical rules left there is nothing for them to mark. Rails lay out
horizontally. The project gallery relaxes from 12/5 to 4/3.

## Components

**Masthead** — one 12-column cell: brand left, mono nav right, then the theme
toggle. Not sticky: a sticky bar inside the frame would drift away from the
crosshair layer, which is measured once per layout.

The active link follows the URL hash, not scroll position. Section header rows
carry a small `scroll-margin-top` so an anchor jump does not clip the rail.

**Theme toggle** — mono 11px in a 1px `--line` box with a 7px accent square
before the label. The square fills in dark mode. There are no circles in this
system, and no rounded corners anywhere (`border-radius: 0 !important` in the
reset).

**Hero (01)** — rail / name / meta list at 3 / 5 / 4. The meta is a mono `dl`
on a 78px term column: Role, Based, Since, Status. Status carries the accent
square.

**Brief (02)** — rail / two paragraphs / figures panel at 3 / 6 / 3. The figures
are counted from the content at build time, never typed by hand: projects,
featured, open source, years.

**Tech stack (03)** — header row, then one cell per group. Each item is a mono
row with a hairline above it and an optional 10px uppercase note under the name.

**Featured work (04)** — one `.row.feature` per project, cycling three column
splits (3/5/4, 3/5/4 reversed, 2/6/4) so the rows never settle into a pattern.
The screens cell has zero padding and holds the slider; the copy cell holds
title, one sentence, stack chips and links. The reversal is done with CSS
`order`, which survives the responsive spans.

**Slider** — a `--panel` well with an aspect-ratio window (8/5 in a feature row,
12/5 on a project page) and a mono control bar under it: `01 / 15` left, `Prev`
/ `Next` right. Slides are full width and scroll vertically, so tall
screenshots stay readable. Autoplays every 4s, pauses on hover or focus. The
single exception to "no motion": a 0.3s track translate.

**Other work (04b)** — a small header row, then two 6-column index columns
reading down the left first. Each line is `year / title / stack` on a
`54px 1fr auto` grid, hairline-separated, `--panel` on hover.

**OSS (05)** — header row, then one card per entry. Card: name and `REPO` tag
over a hairline, description, then the host line as the link. The description
pushes the meta to the bottom (`margin-bottom: auto`), so cards of different
lengths still align their last line.

**Contact (06)** — rail / large mailto / channels at 3 / 5 / 4. The address
wraps where the config puts `{split}`.

**Footer** — two 6-column cells, dim mono, right cell right-aligned.

**Project page** — back row, detail row (rail / title + lede / chips + links),
a full-width gallery row, then an About row (rail / rendered markdown at 9
columns, measure capped at 62ch).

## Links

Default `--ink`, hover `--accent`. `.link` carries a 1px underline and an accent
arrow in a `<span>`. Nav links use a transparent bottom border that turns accent
on hover, so nothing shifts. Focus is a 1px accent outline at 2px offset.

## Rules of the system

1. Rules belong to cells, never to the page. Never draw a full-height divider.
2. Every row adds up to 12 columns.
3. No motion, except the slider track. No hover transforms, no scroll reveals.
4. No filled buttons. A link is an underline.
5. No rounded corners, no shadows, no gradients.
6. Borders are 1px, in `--line` (structure) or `--hair` (inside a cell) — never
   both weights in the same seam.
7. Uppercase is for mono only.
8. Never invent project metadata or figures. Counts in copy come from
   `{tokens}` filled at build time; a field with no source is omitted.

## Open content items

- The contact note is still draft copy awaiting the owner's wording
  (`src/config/site.ts`).
- Stack notes ("primary", "browser · node", "ci · builds") are the owner's to
  confirm; items themselves come from the project files and the OSS entries.
- Hero meta (role, location, since) carries over from the previous build.
