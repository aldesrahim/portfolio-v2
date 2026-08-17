/**
 * Gallery images are discovered from disk — drop a file into
 * `src/assets/gallery/<folder>/` and it shows up, ordered by filename.
 */

export type ImageKind = 'landscape' | 'portrait' | 'square';

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
  kind: ImageKind;
  width: number;
  height: number;
}

/**
 * Astro hands out image metadata behind a Proxy that flags an image as
 * "referenced" the moment a property is read, which makes the build keep the
 * unoptimised original in `dist/`. Reading `clone` returns a plain copy without
 * tripping that flag, so dimensions cost us nothing.
 */
function dimensions(src: ImageMetadata): { width: number; height: number } {
  const copy = (src as ImageMetadata & { clone?: ImageMetadata }).clone ?? src;
  return { width: copy.width, height: copy.height };
}

const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/gallery/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,avif,AVIF,gif,GIF}',
  { eager: true },
);

/** "10.png" sorts after "2.png"; "8.1.png" after "8.0.png". */
function naturalCompare(a: string, b: string): number {
  return a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' });
}

function kindOf(width: number, height: number): ImageKind {
  const ratio = width / height;
  if (ratio >= 1.2) return 'landscape';
  if (ratio <= 0.9) return 'portrait';
  return 'square';
}

const byFolder = new Map<string, { path: string; src: ImageMetadata }[]>();

for (const [path, mod] of Object.entries(files)) {
  const match = /\/src\/assets\/gallery\/([^/]+)\//.exec(path);
  if (!match) continue;
  const folder = match[1]!;
  const list = byFolder.get(folder) ?? [];
  list.push({ path, src: mod.default });
  byFolder.set(folder, list);
}

for (const list of byFolder.values()) {
  list.sort((a, b) => naturalCompare(a.path, b.path));
}

/** All images for a gallery folder, in filename order. */
export function getGallery(folder: string, title = folder): GalleryImage[] {
  const list = byFolder.get(folder) ?? [];
  return list.map(({ src }, i) => {
    const { width, height } = dimensions(src);
    return {
      src,
      alt: `${title} — screen ${i + 1} of ${list.length}`,
      kind: kindOf(width, height),
      width,
      height,
    };
  });
}

/** Folders found on disk. Useful for spotting galleries no project claims. */
export function galleryFolders(): string[] {
  return [...byFolder.keys()].sort(naturalCompare);
}
