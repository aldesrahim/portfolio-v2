/**
 * Site configuration — every piece of copy and metadata outside the project
 * markdown files lives here. Nothing else needs editing to rebrand the site.
 */

export interface NavLink {
  label: string;
  /** Anchor on the home page (e.g. "#work") or an absolute path. */
  href: string;
  /** Matches this nav link to a section id for the active underline. */
  id?: string;
}

export interface IndexRow {
  text: string;
  /** Render in the accent colour (used for the status line). */
  accent?: boolean;
}

export interface ContactLink {
  label: string;
  /** Text shown on the row. */
  target: string;
  href: string;
}

export interface OssEntry {
  name: string;
  desc: string;
  /** Text of the link line. Omit `url` to render no link. */
  host?: string;
  url?: string;
  /** Chip in the label column. */
  tag: string;
}

export interface StackRow {
  label: string;
  items: string;
}

export interface SectionMeta {
  /** Mono label on the left of the section header band. */
  label: string;
  /** Label column of the band under the header. */
  bandLabel?: string;
  /** Mono text on the right of the header band. Omit to leave it blank. */
  counter?: string;
}

/** Section headers. Work and "Also built" count themselves when no counter is set. */
const sections: Record<'work' | 'built' | 'oss' | 'contact', SectionMeta> = {
  work: { label: 'Work' },
  built: { label: 'Also built', bandLabel: 'More projects' },
  oss: { label: 'Open source', counter: 'github.com/aldesrahim' },
  contact: { label: 'Get In Touch', bandLabel: 'Contact' },
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

  /** "light" | "dark" — used before the visitor picks one. */
  defaultTheme: 'light' as 'light' | 'dark',

  nav: {
    /** Mono brand text at the left of the navbar. */
    brand: 'Ahmad Al Desrahim',
    links: [
      { label: 'Work', href: '/#work', id: 'work' },
      { label: 'Also built', href: '/#built', id: 'built' },
      { label: 'OSS', href: '/#oss', id: 'oss' },
      { label: 'Contact', href: '/#contact', id: 'contact' },
    ] satisfies NavLink[],
    themeLabel: 'Theme',
  },

  hero: {
    /** Label column of the hero band. */
    indexLabel: 'Index',
    index: [
      { text: 'Jakarta, ID' },
      { text: 'UTC+7' },
      { text: 'Since 2020' },
      { text: 'Available', accent: true },
    ] satisfies IndexRow[],
    heading: 'Ahmad Al Desrahim',
    /** Paragraph under the name. Inline HTML is allowed. */
    lede:
      'I built and maintain backend systems that keep running 24/7, from APIs, databases and infra underneath.<br><br>Mostly working on private/internal applications that are not allowed to be shared.<br><br>I love working using Laravel and it\'s ecosystems, but eager to expand on other stacks.',
  },

  sections,

  /** Shown on a project page, above the detail band. */
  project: {
    backLabel: '← Back to work',
    galleryLabel: 'Gallery',
    aboutLabel: 'About',
    liveLabel: 'Live ↗',
    repoLabel: 'Repository ↗',
    emptyGallery: 'No gallery',
  },

  contact: {
    statement:
      'A short statement inviting a conversation about a project, a role, or a good book.',
    links: [
      { label: 'Email', target: 'hi@aldes.dev', href: 'mailto:hi@aldes.dev' },
      { label: 'GitHub', target: 'github.com/aldesrahim', href: 'https://github.com/aldesrahim' },
      { label: 'LinkedIn', target: 'linkedin.com/in/aldesrahim', href: 'https://linkedin.com/in/aldesrahim' },
    ] satisfies ContactLink[],
  },

  /** Open source band. Entries without a `url` render no link line. */
  oss: [
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
      tag: 'Repo',
    },
    {
      name: 'Localdev',
      desc: 'A Docker-based local development environment for PHP and Laravel, with a choice of databases. Laradock, cut down for personal use.',
      host: 'github.com/aldesrahim/localdev',
      url: 'https://github.com/aldesrahim/localdev',
      tag: 'Repo',
    },
  ] satisfies OssEntry[],

  /** Tooling summary. Set `showStack` to false to drop the band. */
  showStack: false,
  stack: [
    { label: 'Languages', items: 'PHP · JavaScript · Go' },
    { label: 'Framework', items: 'Laravel' },
    { label: 'Data & cache', items: 'MySQL · Redis' },
    { label: 'Infra & ops', items: 'Linux · Docker' },
  ] satisfies StackRow[],

  footer: {
    /** `{year}` is replaced with the current year. */
    items: ['© {year} Ahmad Al Desrahim', 'Astro · IBM Plex Mono', 'Built with Care'],
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
