<script lang="ts">
	import TechnicalLabel from '$lib/components/TechnicalLabel.svelte';
	import type { Education } from '$lib/types';

	interface Props {
		entries: Education[];
	}

	let { entries }: Props = $props();

	const primary = $derived(entries.filter((entry) => entry.primary));
	const earlier = $derived(entries.filter((entry) => !entry.primary));
</script>

<div>
	<TechnicalLabel>Education</TechnicalLabel>
	{#each primary as entry (entry.id)}
		<p class="type-technical mt-4 text-ink-secondary">{entry.duration}</p>
		<p class="mt-2 text-xl font-semibold tracking-tight">
			{entry.degree}
			{#if entry.field}
				<span class="font-normal text-ink-secondary"> · {entry.field}</span>
			{/if}
		</p>
		<p class="type-body mt-1 text-ink-secondary">
			{entry.school}{#if entry.location}<span class="text-ink-muted"> · {entry.location}</span>{/if}
		</p>
		{#if entry.score}
			<p class="mt-2 text-xl font-semibold tracking-tight">{entry.score}</p>
		{/if}
	{/each}
	{#if earlier.length > 0}
		<div class="rule-line mt-6 pt-4">
			<TechnicalLabel>Earlier education</TechnicalLabel>
			<ul class="mt-3 space-y-4">
				{#each earlier as entry (entry.id)}
					<li>
						<p class="type-technical text-ink-muted">{entry.duration}</p>
						<p class="type-body mt-1 font-medium">{entry.degree}</p>
						<p class="type-small mt-0.5 text-ink-secondary">{entry.school}</p>
						{#if entry.score}
							<p class="type-technical mt-1 text-ink-secondary">{entry.score}</p>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
