import type { APIRoute } from 'astro';

const LANG_PATHS = ['/pl/', '/en/', '/de/'] as const;

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://happy-paws.example');
  const lastmod = new Date().toISOString();

  const urls = LANG_PATHS.map((path) => {
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

