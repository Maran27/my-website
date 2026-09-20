<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import Container from '$lib/components/Container.svelte';
	import TechnicalLabel from '$lib/components/TechnicalLabel.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import TextLink from '$lib/components/TextLink.svelte';
	import { writingDocuments } from '$lib/content/writing';
	import { renderMarkdown } from '$lib/utils/markdown';
	import type { WritingDocument } from '$lib/content/writing';

	interface Props {
		data: {
			entry: WritingDocument;
		};
	}

	let { data }: Props = $props();
	const entry = $derived(data.entry);
	const currentIndex = $derived(writingDocuments.findIndex((item) => item.slug === entry.slug));
	const previous = $derived(currentIndex > 0 ? writingDocuments[currentIndex - 1] : null);
	const next = $derived(
		currentIndex >= 0 && currentIndex < writingDocuments.length - 1
			? writingDocuments[currentIndex + 1]
			: null
	);
	const isPublished = $derived(entry.status === 'Published');
	const articleHtml = $derived(renderMarkdown(entry.content));
</script>

<Seo
	title={entry.title}
	description={entry.summary}
	path={`/writing/${entry.slug}`}
	type="article"
/>

<section class="section-pad pt-10 sm:pt-12 lg:pt-16">
	<Container>
		<div class="mb-10 sm:mb-14" use:reveal={{}}>
			<TextLink href="/writing">← Writing</TextLink>
		</div>

		<header class="layout-12 border-b border-line pb-10 sm:pb-14" use:reveal={{ delay: 60 }}>
			<div class="md:col-span-2">
				<p
					class="type-index"
					aria-label={`Writing piece ${String(currentIndex + 1).padStart(2, '0')}`}
				>
					<span class="type-index-strong">{String(currentIndex + 1).padStart(2, '0')}</span>
				</p>
			</div>

			<div class="md:col-span-7">
				<TechnicalLabel tone="secondary">{entry.category}</TechnicalLabel>
				<h1 class="type-h1 mt-3 max-w-4xl">{entry.title}</h1>
				<p class="type-lead mt-6 max-w-3xl">{entry.summary}</p>
			</div>

			<div
				class="mt-6 flex flex-wrap items-start gap-x-6 gap-y-3 md:col-span-3 md:mt-0 md:justify-end"
			>
				<TechnicalLabel tone="accent">{entry.date}</TechnicalLabel>
				<TechnicalLabel tone={isPublished ? 'accent' : 'muted'}>{entry.status}</TechnicalLabel>
			</div>
		</header>

		<article class="layout-12 py-10 sm:py-14" use:reveal={{ delay: 120 }}>
			<div class="hidden md:col-span-2 md:block" aria-hidden="true"></div>
			<div class="article-prose measure-reading md:col-span-7">
				{#if isPublished}
					{@html articleHtml}
				{:else}
					<div class="border-y border-line py-8 sm:py-10">
						<TechnicalLabel tone="muted">Working {entry.status.toLowerCase()}</TechnicalLabel>
						<h2 class="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
							This piece is not published yet.
						</h2>
						<p class="type-body mt-4 text-ink-secondary">
							Edit the Markdown source when the ideas and technical details are ready, then change
							the frontmatter status to <code>Published</code> to make the article public.
						</p>
					</div>
				{/if}
			</div>
		</article>

		<nav class="layout-12 border-t border-line py-8 sm:py-10" aria-label="Writing navigation">
			<div class="md:col-span-2">
				<TechnicalLabel tone="muted">Continue</TechnicalLabel>
			</div>
			<div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between md:col-span-10">
				{#if previous}
					<a
						href={`/writing/${previous.slug}`}
						class="group max-w-md"
						aria-label={`Previous: ${previous.title}`}
					>
						<TechnicalLabel tone="muted">← Previous</TechnicalLabel>
						<span
							class="mt-2 block text-lg font-semibold tracking-tight transition-transform duration-150 group-hover:-translate-x-1"
						>
							{previous.title}
						</span>
					</a>
				{:else}
					<span></span>
				{/if}

				{#if next}
					<a
						href={`/writing/${next.slug}`}
						class="group max-w-md sm:text-right"
						aria-label={`Next: ${next.title}`}
					>
						<TechnicalLabel tone="muted">Next →</TechnicalLabel>
						<span
							class="mt-2 block text-lg font-semibold tracking-tight transition-transform duration-150 group-hover:translate-x-1"
						>
							{next.title}
						</span>
					</a>
				{/if}
			</div>
		</nav>
	</Container>
</section>
