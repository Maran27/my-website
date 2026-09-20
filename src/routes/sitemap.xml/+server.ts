import { site } from '$lib/data/site';
import { writingDocuments } from '$lib/content/writing';
import type { RequestHandler } from './$types';

export const prerender = true;

const routes = ['/', '/projects', '/research', '/writing', '/about', '/now'];

function url(path: string): string {
	const origin = site.url.replace(/\/$/, '');
	return `${origin}${path}`;
}

export const GET: RequestHandler = () => {
	const now = new Date().toISOString();

	const entries = [
		...routes.map(
			(path) => `<url>
  <loc>${url(path)}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>${path === '/' ? '1.0' : '0.8'}</priority>
</url>`
		),
		...writingDocuments.map(
			(doc) => `<url>
  <loc>${url(`/writing/${doc.slug}`)}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>`
		)
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
