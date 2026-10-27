import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || site?.toString();
  const sitemapLine = siteUrl ? `Sitemap: ${new URL('/sitemap.xml', siteUrl).toString()}\n` : '';
  return new Response(`User-agent: *\nAllow: /\n${sitemapLine}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
