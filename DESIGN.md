# Design system — Ahmad Al Desrahim portfolio

Direction: **Catalogue.** A printed reference page. One sheet on a cool grey
desk, hairline rules, a fixed label column on the left, no shadows beyond a
single hairline, no motion except the slider track.

Implemented in `src/styles/global.css`. Tokens are CSS custom properties on
`:root`, overridden under `[data-theme="dark"]`.

---

## Color — Nord, cool

### Light (default)

| Token | Value | Use |
| --- | --- | --- |
| `--desk` | `#E5E9F0` | Page background behind the sheet |
| `--paper` | `#FBFCFD` | Sheet background, nav background |
| `--ink` | `#2E3440` | Headings, primary text, nav active |
| `--ink-soft` | `#3B4252` | Body paragraphs |
| `--muted` | `#4C566A` | Labels, meta, mono captions, footer |
| `--rule` | `#D8DEE9` | Structural hairlines (section and column borders) |
| `--rule-faint` | `#ECEFF4` | List-row separators inside a section |
| `--accent` | `#5E81AC` | Link underlines, stack chips, "Available" |

### Dark

| Token | Value |
| --- | --- |
| `--desk` | `#1E222A` |
| `--paper` | `#262B35` |
| `--ink` | `#ECEFF4` |
| `--ink-soft` | `#D8DEE9` |
| `--muted` | `#8A93A5` |
| `--rule` | `#3B4252` |
| `--rule-faint` | `#333A45` |
| `--accent` | `#88C0D0` |

Rules: one accent only. Accent never fills an area — it appears as a 1px
underline, a small text color, nothing larger. No gradients, no tints, no
shadows other than the sheet's `--sheet-shadow` hairline.

The theme is a switch, not a media query: light is the default, the navbar
toggle writes the choice to `localStorage`, and an inline head script applies it
before first paint.

## Typography

- **Display / body — Newsreader** (serif), weights 300–500, `--font-serif`.
- **Labels / meta / nav — IBM Plex Mono**, 400–500, `--font-mono`.

Both are self-hosted through Astro's font pipeline; no runtime CDN request.

| Role | Size / weight | Notes |
| --- | --- | --- |
| H1 (name) | 76px / 300 / 1.02 | `letter-spacing: -0.02em`; 44px under 720px |
| Lede | 21–22px / 300 / 1.5 | Max width 620px |
| H2 (project) | 34px / 400 | `letter-spacing: -0.01em` |
| H1 (project page) | 44px / 300 / 1.05 | |
| H3 (OSS repo) | 26px / 400 | |
| Body | 17–18px / 1.55–1.65 | `text-wrap: pretty` everywhere |
| List row | 19–20px | |
| Mono label | 11px | `letter-spacing: 0.12em`, uppercase |
| Section header | 11px mono | `letter-spacing: 0.14em`, uppercase |
| Entry number | 30px mono | Zero-padded: `01`, `02`, `03` |

Measure caps at `--measure` (600px) regardless of column width.

## Layout

- Sheet: `--sheet-width: 1040px`, 1px `--rule` border, centered, 48px desk
  padding.
- **The spine:** every content band is
  `grid-template-columns: var(--label-column) 1fr` (200px). The 200px column
  holds the mono label (or entry number + metadata) and carries a 1px right
  border that runs the full height of the band. This vertical rule is the page's
  single strongest structural device — never break it.
- Band padding: `34–56px` top/bottom, `40px` (`--gutter`) left/right in the
  content column; the label column pads `24px 24px 24px 40px`.
- Every band closes with `border-bottom: 1px solid var(--rule)`.
- Section headers are their own full-width band: 18px padding, label left,
  a mono counter right (`04 of 12`, `github.com/aldesrahim`).

### Under 720px

The sheet loses its border, margin, and shadow and runs full-bleed. The spine
collapses: every band becomes one column, and the label column turns into a
horizontal meta strip above the content with the accent item pushed to the right
edge. The navbar wraps — brand and theme toggle on row one, links on row two.
Work descriptions are hidden on the index; the project page carries them.

## Components

**Navbar** — sticky, 14px padding, mono 11px uppercase. Name left, links right
at 26px gap, then a hairline divider and the theme toggle. Active link: `ink` +
1px `accent` underline; rest `muted`.

The active link follows the URL hash, not the scroll position: clicking a link
(or landing on `/#oss`) underlines that one and nothing else. Without a hash the
server-rendered link stays underlined. Section bands carry
`scroll-margin-top: var(--nav-h)` so an anchor jump parks the header just below
the bar instead of under it.

A scrollspy was tried and dropped. The last two sections together are shorter
than a viewport, so the page bottoms out before their headers reach the navbar —
the underline skipped Open source and sat on Contact. A hash that only changes
when the reader asks it to suits a printed page better than one that drifts.

**Theme toggle** — mono 11px in a 1px `rule` box, with a 7px ring before the
label. The ring fills with `accent` in dark mode. The only circle in the system.

**Hero** — label column is an "Index": location, timezone, since, status.
Status reads in `accent`.

**Work entry** — label column: number, year, client, then stack in `accent`.
Content: title linking to the project page, one-sentence description, optional
live link, then the gallery slider. The title carries the link hairline in
`rule` plus a small mono `→` in `muted`, both turning `accent` on hover — a
34px serif heading otherwise reads as a heading, not a way in.

**Slider** — a 1px `rule` frame with 6px inset padding (a print mat) around a
16/9 window. Slides are full-width and scroll vertically inside the window, so
tall screenshots stay readable. Below: a mono `01 / 15` counter left, `Prev` /
`Next` right, underlined in `rule`. Autoplays every 4s, pauses on hover or
focus. The single exception to "no motion": a 0.3s track translate.

**Also built** — name left, year right, rows separated by `rule-faint`. Names
are links but carry no underline: the row separators already draw that line, and
a second hairline under each name would double the weight of the seam.

**OSS entry** — a bordered `REPO` chip in the label column; title, description,
repo link. Entries without a `url` render no link line.

**Contact** — statement, then a link table: label right in mono, target left at
20px. Hairline `rule-faint` between rows.

**Footer** — one mono band, three items spread across the width.

**Project page** — back band, detail band (entry number, year, client, stack /
title, lede, live and repo links), gallery band, then an About band holding the
rendered markdown body. Markdown gets the full `.body-copy` treatment:
hairline tables, mono code, `rule`-bordered pre blocks and images.

## Links

Default `ink`, hover `accent`. Inline links carry a 1px underline —
`accent` for primary, `rule` for secondary — with 3px padding beneath.
External links end with ` ↗`. Focus is a 1px `accent` outline at 2px offset.

## Rules of the system

1. No motion, except the slider track. No hover transforms, no scroll reveals.
2. No filled buttons. A link is an underline.
3. No rounded corners anywhere — the theme-toggle ring is the one circle.
4. Borders are 1px, always, in `rule` or `rule-faint` — never both weights
   in the same seam.
5. Uppercase is for mono only; the serif is never uppercased.
6. Never invent project metadata. A field with no source is omitted, not
   filled — the schema in `src/content.config.ts` makes the optional fields
   optional for this reason.

## Open content items

- Hero lede and the contact statement are draft copy awaiting the owner's
  wording (`src/config/site.ts`).
- Hero index says Lisbon / UTC+1 / Since 2016 — placeholders from the mockup.
- Contact targets (email, LinkedIn) are placeholders.
- Stack rows exist in the config but the band is off (`showStack: false`).
