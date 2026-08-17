/**
 * Copy in `src/config/site.ts` may carry `{token}` placeholders so that counts
 * never drift from the content on disk. Unknown tokens are left untouched.
 */

import site from '../config/site';
import { getSplitProjects } from './projects';

export interface Counts {
  /** Current year. */
  year: number;
  /** Years since `site.since`. */
  years: number;
  /** Every project on the site. */
  projects: number;
  /** Projects flagged `featured: true`. */
  featured: number;
  /** Projects listed in the index instead. */
  other: number;
  /** Open source entries in the config. */
  oss: number;
}

export async function getCounts(): Promise<Counts> {
  const { all, featured, rest } = await getSplitProjects();
  const year = new Date().getFullYear();
  return {
    year,
    years: Math.max(1, year - site.since),
    projects: all.length,
    featured: featured.length,
    other: rest.length,
    oss: site.oss.length,
  };
}

export function fill(text: string, counts: Counts): string {
  return text.replace(/\{(\w+)\}/g, (token, key: string) =>
    key in counts ? String(counts[key as keyof Counts]) : token,
  );
}
