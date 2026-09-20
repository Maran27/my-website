import { error } from '@sveltejs/kit';
import { getWritingDocument, writingDocuments } from '$lib/content/writing';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => writingDocuments.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const entry = getWritingDocument(params.slug);

	if (!entry) {
		throw error(404, 'The writing piece you are looking for does not exist.');
	}

	return { entry };
};
