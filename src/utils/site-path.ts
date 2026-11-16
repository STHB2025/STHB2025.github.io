/** Prefix a site-local URL with Astro's configured deployment base. */
export function sitePath(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const cleanPath = path.replace(/^\/+/, '');
  return `${base}${cleanPath}`;
}
