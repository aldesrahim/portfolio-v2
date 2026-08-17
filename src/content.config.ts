import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One markdown file per project, in `src/content/projects/`.
 *
 * Filename carries the order and the URL slug: `3-asset-management.md` renders
 * at `/work/asset-management` and sorts third. Renumber files to reorder.
 * The markdown body becomes the "About" copy on the project page.
 */
const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdoc,markdown}',
    base: './src/content/projects',
  }),
  schema: z.object({
    title: z.string(),
    /** Label column: year, client, then stack in accent. */
    year: z.string(),
    client: z.string(),
    stack: z.array(z.string()).default([]),
    /** One sentence. Used on the index and as the lede on the project page. */
    description: z.string(),
    /** Featured projects get a full Work entry with a slider. */
    featured: z.boolean().default(false),
    liveUrl: z.url().optional(),
    repoUrl: z.url().optional(),
    /**
     * Folder under `src/assets/gallery/`. Defaults to the project slug.
     * Images are picked up automatically and ordered by filename.
     */
    gallery: z.string().optional(),
    /** Hide from the site. Still visible in `astro dev`. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
