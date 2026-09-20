<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import TechnicalLabel from '$lib/components/TechnicalLabel.svelte';
	import type { ResearchEntry } from '$lib/types';

	interface Props {
		entries: ResearchEntry[];
	}

	let { entries }: Props = $props();
</script>

<div class="divide-y divide-line border-y border-line">
	{#each entries as entry, i (entry.slug)}
		<article
			class="grid gap-5 py-7 md:grid-cols-12 md:gap-8 md:py-9"
			use:reveal={{ delay: Math.min(i, 4) * 90 }}
		>
			<div class="md:col-span-2">
				<p class="type-index">
					<span class="type-index-strong">{String(i + 1).padStart(2, '0')}</span>
				</p>
			</div>
			<div class="md:col-span-7">
				<div class="flex flex-wrap items-baseline gap-x-4 gap-y-2">
					<h2 class="text-xl font-semibold tracking-tight sm:text-2xl">{entry.title}</h2>
					<TechnicalLabel tone="accent" class="text-[10px]">{entry.year}</TechnicalLabel>
				</div>
				<p class="type-body mt-3 max-w-2xl text-ink-secondary">{entry.summary}</p>
			</div>
			<div class="md:col-span-3 md:self-start">
				<TechnicalLabel tone="secondary">{entry.venue}</TechnicalLabel>
			</div>
		</article>
	{/each}
</div>
