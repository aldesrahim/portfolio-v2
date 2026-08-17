/**
 * Site configuration — every piece of copy and metadata outside the project
 * markdown files lives here. Nothing else needs editing to rebrand the site.
 *
 * Values may carry tokens that are filled at render time (see `src/lib/tokens.ts`):
 * `{year}` `{years}` `{projects}` `{featured}` `{oss}`.
 */

export interface NavLink {
  label: string;
  /** Anchor on the home page (e.g. "#work") or an absolute path. */
  href: string;
}

/** One row of the hero definition list: term on the left, value on the right. */
export interface MetaRow {
  term: string;
  value: string;
  /** Render with the accent square in front (used for the status line). */
  accent?: boolean;
}

/** One row of the figures panel in the Brief section. */
export interface Fact {
  label: string;
  value: string;
}

export interface StackItem {
  name: string;
  /** Small uppercase note under the name. Omit when there is nothing true to say. */
  note?: string;
}

export interface StackGroup {
  title: string;
  items: StackItem[];
}

export interface OssEntry {
  name: string;
  desc: string;
  /** Text of the link line. Omit `url` to render no link. */
  host?: string;
  url?: string;
  /** Chip beside the repo name. */
  tag: string;
}

/** A row in the contact channel list. */
export interface ContactChannel {
  label: string;
  /** Text shown on the row. */
  target: string;
  href: string;
}

export interface SectionMeta {
  /** Mono number in the rail: "01", "04b". */
  num: string;
  /** Mono label under the number. */
  label: string;
  /** Display heading beside the rail. `<br>` allowed. */
  heading?: string;
  /** Small mono paragraph in the last cell of the header row. */
  note?: string;
}

/** Section rails. The number is the page's running order, not a count. */
const sections: Record<
  'name' | 'brief' | 'stack' | 'work' | 'other' | 'oss' | 'contact',
  SectionMeta
> = {
  name: { num: '01', label: 'Name' },
  brief: { num: '02', label: 'Brief' },
  stack: {
    num: '03',
    label: 'Tech Stack',
    heading: 'Tools I reach for<br>without thinking',
  },
  work: {
    num: '04',
    label: 'Work',
    heading: 'Selected<br>Projects',
    note: '{featured} featured below, with screens. The rest are filed in the index — client work and internal systems, most of them not public.',
  },
  other: {
    num: '04b',
    label: 'Other Work',
    heading: 'The rest of the index — {other} entries, 2020 to now.',
  },
  oss: {
    num: '05',
    label: 'OSS',
    heading: 'Open<br>Source',
    note: 'Packages and data sets I maintain in the open — github.com/aldesrahim',
  },
  contact: { num: '06', label: 'Contact' },
};

export const site = {
  /** Absolute site URL, used for canonical links and the sitemap. */
  url: 'https://aldes.dev',
  lang: 'en',

  /** Person / brand. */
  name: 'Ahmad Al Desrahim',
  role: 'Backend & product engineer',
  /** <title> on the home page, and suffix on every other page. */
  title: 'Ahmad Al Desrahim — Portfolio',
  titleSuffix: 'Ahmad Al Desrahim',
  description:
    'Portfolio of Ahmad Al Desrahim — Laravel and PHP developer, provide reliable solutions to fulfill all your digital needs.',

  /** First working year. Feeds the `{years}` token. */
  since: 2020,

  /*
   * No theme knob: the site follows the visitor's OS until they click the
   * toggle, after which their choice is stored. The palettes live in
   * `src/styles/global.css`.
   */

  /*
   * The masthead carries links only — the name belongs to the hero, and
   * repeating it in a bar that scrolls away earned nothing.
   */
  nav: {
    links: [
      { label: 'Stack', href: '/#stack' },
      { label: 'Work', href: '/#work' },
      { label: 'OSS', href: '/#oss' },
      { label: 'Contact', href: '/#contact' },
    ] satisfies NavLink[],
    themeLabel: 'Theme',
  },

  /** 01 — the name cell and the metadata beside it. */
  hero: {
    /** `<br>` splits the display name across lines. */
    heading: 'Ahmad Al<br>Desrahim',
    meta: [
      { term: 'Role', value: 'Backend & product engineer' },
      { term: 'Based', value: 'Jakarta, ID · UTC+7' },
      { term: 'Since', value: '2020 — {years} yrs' },
      { term: 'Status', value: 'Available', accent: true },
    ] satisfies MetaRow[],
  },

  /** 02 — the paragraph and the figures panel beside it. */
  brief: {
    lede: 'I build and maintain backend systems that keep running 24/7 — the APIs, databases and infrastructure underneath.',
    sub: 'Mostly private and internal applications that are not allowed to be shared. I like working in Laravel and its ecosystem, and I am eager to widen the stack.',
    facts: [
      { label: 'Projects filed', value: '{projects}' },
      { label: 'Featured', value: '{featured}' },
      { label: 'Open source', value: '{oss}' },
      { label: 'Years shipping', value: '{years}' },
    ] satisfies Fact[],
  },

  sections,

  /** Shown on a project page. */
  project: {
    backLabel: '← Back to work',
    galleryLabel: 'Gallery',
    aboutLabel: 'About',
    liveLabel: 'Live ↗',
    repoLabel: 'Repository ↗',
    caseLabel: 'View project',
    emptyGallery: 'No gallery',
  },

  contact: {
    /** The large mailto. `{split}` marks where the address wraps. */
    email: 'hi@{split}aldes.dev',
    emailHref: 'mailto:hi@aldes.dev',
    channels: [
      { label: 'GitHub', target: '@aldesrahim ↗', href: 'https://github.com/aldesrahim' },
      {
        label: 'LinkedIn',
        target: 'in/aldesrahim ↗',
        href: 'https://linkedin.com/in/aldesrahim',
      },
    ] satisfies ContactChannel[],
    note: 'A short statement inviting a conversation about a project, a role, or a good book.',
  },

  /** Open source cards. Entries without a `url` render no link line. */
  oss: [
    {
      name: 'Timezone Indonesia',
      desc: 'A Laravel package that turns a coordinate into an Indonesian IANA timezone, offline. The four boundary polygons ship with it — no API, no database, no call at runtime.',
      host: 'github.com/aldesrahim/laravel-timezone-indonesia',
      url: 'https://github.com/aldesrahim/laravel-timezone-indonesia',
      tag: 'Package',
    },
    {
      name: 'Wilayah Indonesia',
      desc: 'Provinces, cities, districts, and villages of Indonesia. GitHub Actions builds the data from BPS sources and publishes it as JSON.',
      host: 'github.com/aldesrahim/wilayah-indonesia',
      url: 'https://github.com/aldesrahim/wilayah-indonesia',
      tag: 'Repo',
    },
    {
      name: 'Filament Compass',
      desc: 'Filament v5 documentation, written for LLMs and AI-assisted development.',
      host: 'github.com/aldesrahim/filament-compass-pkg',
      url: 'https://github.com/aldesrahim/filament-compass-pkg',
      tag: 'Package',
    },
    {
      name: 'Localdev',
      desc: 'A Docker-based local development environment for PHP and Laravel, with a choice of databases. Laradock, cut down for personal use.',
      host: 'github.com/aldesrahim/localdev',
      url: 'https://github.com/aldesrahim/localdev',
      tag: 'Repo',
    },
  ] satisfies OssEntry[],

  /** Tooling columns. Set `showStack` to false to drop the section. */
  showStack: true,
  stack: [
    {
      title: 'Languages',
      items: [
        { name: 'PHP', note: 'primary' },
        { name: 'JavaScript', note: 'browser · node' },
        { name: 'Go' },
      ],
    },
    {
      title: 'Framework',
      items: [
        { name: 'Laravel', note: 'most projects' },
        { name: 'Livewire' },
        { name: 'FilamentPHP' },
        { name: 'NuxtJS' },
      ],
    },
    {
      title: 'Data & cache',
      items: [{ name: 'MySQL' }, { name: 'Redis', note: 'cache · queues' }],
    },
    {
      title: 'Infra & ops',
      items: [
        { name: 'Linux' },
        { name: 'Docker' },
        { name: 'GitHub Actions', note: 'ci · builds' },
      ],
    },
  ] satisfies StackGroup[],

  footer: {
    left: '© {year} Ahmad Al Desrahim',
    right: 'Jakarta · Astro · Built with care',
  },

  gallery: {
    /** Slider autoplay interval in ms. Set to 0 to disable autoplay. */
    autoplayMs: 4000,
    /** Widest rendered image. Larger sources are downscaled at build time. */
    maxWidth: 1600,
    /** Output format for optimised gallery images. */
    format: 'webp' as 'webp' | 'avif' | 'png' | 'jpeg',
  },
};

export type Site = typeof site;
export default site;
