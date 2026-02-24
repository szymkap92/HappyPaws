import type { APIRoute } from 'astro';
import { effectsShowcasePaths, LANGUAGES } from '@/lib/i18n';

const HOME_PATHS = ['/pl/', '/en/', '/de/'] as const;
const EFFECTS_PATHS = LANGUAGES.map((lang) => effectsShowcasePaths[lang]);
const ALL_PATHS = [...HOME_PATHS, ...EFFECTS_PATHS];

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://happypawsanna.com');
  const lastmod = '2026-02-24T00:00:00Z';

  const urls = ALL_PATHS.map((path) => {
    const loc = new URL(path, base).toString();
    return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
