<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import CareerTimeline from '$lib/components/CareerTimeline.svelte';
	import Container from '$lib/components/Container.svelte';
	import ExperienceEntry from '$lib/components/ExperienceEntry.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { formatRange } from '$lib/data/experience';
	import type { Experience as ExperienceItem } from '$lib/types';

	interface Props {
		entries: ExperienceItem[];
		eyebrow: string;
		title: string;
		lede?: string;
		index: string;
		total?: string;
		/** Highlights shown before the disclosure on current-role entries. */
		currentHighlights?: number;
	}

	let { entries, eyebrow, title, lede, index, total, currentHighlights = 3 }: Props = $props();

	function srLabelFor(entry: ExperienceItem): string {
		return `${entry.category}, ${formatRange(entry)}${entry.current ? ', current role' : ''}`;
	}
</script>

<section class="section-pad pt-10 sm:pt-12 lg:pt-16">
	<Container>
		<div use:reveal={{ delay: 0 }}>
			<SectionHeader {index} {total} label={eyebrow} {title} description={lede} />
		</div>
		<ol class="mt-8 sm:mt-12">
			{#each entries as entry, i (entry.id)}
				{@const base = i * 110}
				<li
					class="group grid grid-cols-[1.75rem_1fr] gap-x-4 pb-10 last:pb-0 md:grid-cols-12 md:gap-x-8 md:pb-14"
				>
					<div
						class="col-span-2 md:order-1 md:col-span-4 md:text-right"
						use:reveal={{ delay: base }}
					>
						<p class="type-technical text-ink">{formatRange(entry)}</p>
						<p class="type-technical mt-1.5 text-ink-muted">{entry.category}</p>
					</div>
					<div
						class="col-start-1 row-start-2 md:order-2 md:col-span-1 md:col-start-5 md:row-start-1"
						use:reveal={{ delay: base }}
					>
						<CareerTimeline
							current={entry.current}
							segmentAbove={i > 0}
							segmentBelow={i < entries.length - 1}
							srLabel={srLabelFor(entry)}
							class="h-full"
						/>
					</div>
					<div
						class="col-start-2 row-start-2 md:order-3 md:col-span-7 md:col-start-6 md:row-start-1"
						use:reveal={{ delay: base + 70 }}
					>
						<ExperienceEntry {entry} initialHighlights={entry.current ? currentHighlights : null} />
					</div>
				</li>
			{/each}
		</ol>
	</Container>
</section>
