<script lang="ts">
	import { Minus, Plus } from '@lucide/svelte';
	import StatusDot from '$lib/components/StatusDot.svelte';
	import type { Experience } from '$lib/types';

	interface Props {
		entry: Experience;
		/**
		 * Highlights visible before the disclosure. `null` shows all.
		 * Homepage passes a small number for the current role.
		 */
		initialHighlights?: number | null;
	}

	let { entry, initialHighlights = null }: Props = $props();

	let expanded = $state(false);

	const needsToggle = $derived(
		initialHighlights !== null && entry.highlights.length > initialHighlights
	);
	const visibleHighlights = $derived(
		needsToggle && !expanded ? entry.highlights.slice(0, initialHighlights ?? 0) : entry.highlights
	);
	const hiddenCount = $derived(entry.highlights.length - (initialHighlights ?? 0));
	const listId = $derived(`highlights-${entry.id}`);
</script>

<div>
	<div class="flex flex-wrap items-center gap-x-3 gap-y-2">
		<h3 class="text-xl font-semibold tracking-tight md:text-2xl">{entry.role}</h3>
		{#if entry.current}
			<span
				class="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-[0.18em] text-accent uppercase"
			>
				<StatusDot />
				Current
			</span>
		{/if}
	</div>
	<p class="type-body mt-1 font-medium">
		{entry.company}
		<span class="font-normal text-ink-muted"> · {entry.location}</span>
	</p>
	<p class="type-body mt-3 max-w-prose text-ink-secondary">{entry.summary}</p>
	<p class="type-technical mt-4 text-ink-secondary">
		{entry.technologies.join(' · ')}
	</p>
	<ul id={listId} class="mt-4 list-[square] space-y-2 pl-5 marker:text-ink-muted">
		{#each visibleHighlights as highlight (highlight)}
			<li class="type-body text-ink-secondary">{highlight}</li>
		{/each}
	</ul>
	{#if needsToggle}
		<button
			type="button"
			aria-expanded={expanded}
			aria-controls={listId}
			onclick={() => (expanded = !expanded)}
			class="mt-4 inline-flex min-h-11 items-center gap-1.5 font-mono text-[11px] font-medium tracking-[0.18em] uppercase underline decoration-line-strong underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent"
		>
			{#if expanded}
				<Minus size={14} aria-hidden="true" />
				Show less
			{:else}
				<Plus size={14} aria-hidden="true" />
				Show {hiddenCount} more
			{/if}
		</button>
	{/if}
</div>
