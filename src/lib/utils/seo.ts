import { site } from '$lib/data/site';

/** Build a consistent `<title>`: `Page — Maran A · AI Engineer`. */
export function createPageTitle(page?: string): string {
	if (!page) return `${site.name} · ${site.title}`;
	return `${page} — ${site.name} · ${site.title}`;
}

/** Resolve a route path against the canonical origin. */
export function canonicalUrl(path = '/'): string {
	const origin = site.url.replace(/\/$/, '');
	const suffix = path.startsWith('/') ? path : `/${path}`;
	return `${origin}${suffix}`;
}
