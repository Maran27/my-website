import type { WritingEntry } from '$lib/types';

export interface WritingDocument extends WritingEntry {
	content: string;
	order: number;
}

const files = import.meta.glob('/src/content/writing/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;

function parseFrontmatter(source: string): { meta: Record<string, string>; body: string } {
	const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
	if (!match) return { meta: {}, body: source.trim() };

	const meta: Record<string, string> = {};
	for (const line of match[1].split('\n')) {
		const separator = line.indexOf(':');
		if (separator === -1) continue;
		const key = line.slice(0, separator).trim();
		const value = line
			.slice(separator + 1)
			.trim()
			.replace(/^['"]|['"]$/g, '');
		meta[key] = value;
	}

	return { meta, body: match[2].trim() };
}

function documentFromFile(source: string, path: string): WritingDocument {
	const { meta, body } = parseFrontmatter(source);
	const slug = meta.slug ?? path.split('/').pop()?.replace(/\.md$/, '') ?? '';

	return {
		slug,
		title: meta.title ?? slug,
		date: meta.date ?? '',
		category: meta.category ?? 'Notes',
		status: (meta.status as WritingEntry['status']) ?? 'Draft',
		summary: meta.summary ?? '',
		content: body,
		order: Number(meta.order ?? 999)
	};
}

export const writingDocuments = Object.entries(files)
	.map(([path, source]) => documentFromFile(source, path))
	.sort((a, b) => a.order - b.order);

export const writing = writingDocuments;

export function getWritingDocument(slug: string): WritingDocument | undefined {
	return writingDocuments.find((entry) => entry.slug === slug);
}
