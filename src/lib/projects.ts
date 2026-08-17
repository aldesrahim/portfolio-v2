import { getCollection, type CollectionEntry } from 'astro:content';
import { getGallery, type GalleryImage } from './gallery';

export type ProjectEntry = CollectionEntry<'projects'>;

export interface Project {
  entry: ProjectEntry;
  /** URL slug — the filename with its numeric prefix stripped. */
  slug: string;
  /** Numeric prefix of the filename. Files without one sort last. */
  order: number;
  url: string;
  data: ProjectEntry['data'];
  images: GalleryImage[];
}

/** "3-asset-management" -> { order: 3, slug: "asset-management" } */
function parseId(id: string): { order: number; slug: string } {
  const match = /^(\d+)[-_.](.+)$/.exec(id);
  if (!match) return { order: Number.MAX_SAFE_INTEGER, slug: id };
  return { order: Number(match[1]), slug: match[2]! };
}

function toProject(entry: ProjectEntry): Project {
  const { order, slug } = parseId(entry.id);
  return {
    entry,
    slug,
    order,
    url: `/work/${slug}`,
    data: entry.data,
    images: getGallery(entry.data.gallery ?? slug, entry.data.title),
  };
}

/** Every project, ordered by filename prefix. Drafts appear in dev only. */
export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection('projects', ({ data }: ProjectEntry) =>
    import.meta.env.DEV ? true : !data.draft,
  );
  return entries
    .map(toProject)
    .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
}

export async function getProject(slug: string): Promise<Project | undefined> {
  return (await getProjects()).find((p) => p.slug === slug);
}

/** Featured projects get full Work entries; the rest go in "Also built". */
export async function getSplitProjects() {
  const all = await getProjects();
  return {
    all,
    featured: all.filter((p) => p.data.featured),
    rest: all.filter((p) => !p.data.featured),
  };
}

export function pad(n: number): string {
  return String(n).padStart(2, '0');
}
