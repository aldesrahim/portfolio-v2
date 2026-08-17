# Portfolio — exposed grid

Astro 7 static site. Design direction and rules: [DESIGN.md](DESIGN.md).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/
npm run check     # typecheck astro + ts
```

## Where content lives

| What | File |
| --- | --- |
| Everything except projects — name, nav, hero, contact, OSS list, footer, theme, slider timing | `src/config/site.ts` |
| One project | `src/content/projects/<n>-<slug>.md` |
| Project screenshots | `src/assets/gallery/<slug>/` |
| Project schema (allowed frontmatter) | `src/content.config.ts` |
| Styles | `src/styles/global.css` |

## Adding a project

1. Create `src/content/projects/13-new-thing.md`:

   ```markdown
   ---
   title: "New Thing"
   year: "2026"
   client: "Side Project"
   stack:
     - "Laravel"
     - "Livewire"
   description: "One sentence. Shows on the index and as the lede on the project page."
   featured: true          # false -> listed under "Also built"
   liveUrl: "https://example.com/"   # optional
   repoUrl: "https://github.com/…"   # optional
   # gallery: "other-folder"          # optional, defaults to the slug
   # draft: true                      # optional, hides it from the built site
   ---

   Markdown body. This becomes the "About" band on the project page — headings,
   lists, links, tables, and code all render.
   ```

2. Drop screenshots into `src/assets/gallery/new-thing/`. They are picked up
   automatically and shown in filename order (`01.png`, `02.png`, … `10.png`
   sorts after `09.png`). No manifest to update.

That is the whole job. Nothing else references the project.

### Filenames carry order and URL

`3-asset-management.md` sorts third and renders at `/work/asset-management`.
Reorder by renumbering the files; the numeric prefix never appears in the URL.
The number shown in the label column (`01`, `02`, …) is the position in the
rendered list, not the filename prefix.

### Featured vs. also built

`featured: true` gives a full Work row: rail, screenshot slider, description,
stack chips, and links. The column split cycles through three variants, so
consecutive featured rows never share a rhythm. Everything else becomes one line
in the "Other work" index and still gets its own project page.

## Images

Gallery images are optimised at build time — resized to
`site.gallery.maxWidth` and converted to `site.gallery.format` (webp by
default). Originals stay out of `dist/`. Any `png`, `jpg`, `webp`, `avif`, or
`gif` works.

## Fonts

Inter and IBM Plex Mono are fetched at build time by Astro's font pipeline and
self-hosted from `dist/_astro/fonts/` — no request to Google at runtime.
Configured in `astro.config.ts`; used through `--font-sans` / `--font-mono`.

## Theme

Light by default, set by `site.defaultTheme`. The toggle stores the choice in
`localStorage` and an inline script applies it before first paint, so there is
no flash.

## Counts in copy

Strings in `src/config/site.ts` may carry `{year}`, `{years}`, `{projects}`,
`{featured}`, `{other}`, or `{oss}`. They are replaced at build time from the
content on disk (`src/lib/tokens.ts`), so no count in the copy can drift.

## Not wired up

- No sitemap or RSS integration — add `@astrojs/sitemap` if the site needs one.
- `mockup/`, `mockup2/`, and `backup-1/` are static prototypes, kept for
  reference. `mockup2/` is the design this site now implements. They are
  excluded from the build.
