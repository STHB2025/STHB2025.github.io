import type { APIRoute } from 'astro';
import projects from '../data/projects.json';

const routes = [
  '/', '/about/', '/work/', '/hospitality/', '/technology/',
  '/business-development/', '/thought-leadership/', '/contact/',
  ...projects.map((project) => `/work/${project.slug}/`),
];

export const GET: APIRoute = ({ site }) => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || site?.toString();
  if (!siteUrl) return new Response('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" />', {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
  const urls = routes.map((path) => `  <url><loc>${new URL(path, siteUrl).toString()}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
