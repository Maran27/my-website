import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, message }) => {
				if (path === '/resume.pdf') {
					console.warn(`[prerender] ignoring missing résumé asset: ${message}`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
