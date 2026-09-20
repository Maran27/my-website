<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import TechnicalLabel from '$lib/components/TechnicalLabel.svelte';
	import type { WritingEntry } from '$lib/types';

	interface Props {
		entries: WritingEntry[];
	}

	let { entries }: Props = $props();
</script>

<div class="divide-y divide-line border-y border-line">
	{#each entries as entry, i (entry.slug)}
		<article
			class="group grid gap-5 py-7 md:grid-cols-12 md:gap-8 md:py-8"
			use:reveal={{ delay: Math.min(i, 4) * 90 }}
		>
			<div class="md:col-span-2">
				<p class="type-index">
					<span class="type-index-strong">{String(i + 1).padStart(2, '0')}</span>
				</p>
			</div>

			<div class="md:col-span-7">
				<div class="flex flex-wrap items-baseline gap-x-4 gap-y-2">
					<a
						href={entry.href ?? `/writing/${entry.slug}`}
						class="text-xl font-semibold tracking-tight transition-transform duration-150 group-hover:translate-x-1 group-focus-within:translate-x-1 sm:text-2xl"
					>
						{entry.title}
					</a>
					<TechnicalLabel tone="accent" class="text-[10px]">{entry.date}</TechnicalLabel>
				</div>
				<p class="type-body mt-3 max-w-2xl text-ink-secondary">{entry.summary}</p>
			</div>

			<div class="flex items-start justify-between gap-6 md:col-span-3">
				<TechnicalLabel tone="secondary">{entry.category}</TechnicalLabel>
				<TechnicalLabel tone={entry.status === 'Published' ? 'accent' : 'muted'}>
					{entry.status}
				</TechnicalLabel>
			</div>
		</article>
	{/each}
</div>
