<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import TechnicalLabel from './TechnicalLabel.svelte';

	/**
	 * Reusable section header — the unit of visual rhythm across the site.
	 * Asymmetric 12-column arrangement: index hairline left, title spanning
	 * wide, description offset right. For entrances, consumers add
	 * `use:reveal` to this component's wrapper or parent.
	 */
	interface Props {
		/** Section number, e.g. `"01"`. */
		index: string;
		/** Total, e.g. `"05"` — renders `"01 / 05"`. */
		total?: string;
		/** Technical eyebrow, e.g. `"SELECTED WORK"`. */
		label: string;
		title: string;
		description?: string;
		/** Heading level for the title. Defaults to `'h2'`; pages use `'h1'`. */
		level?: 'h1' | 'h2';
		class?: string;
	}

	let {
		index,
		total,
		label,
		title,
		description,
		level = 'h2',
		class: className = ''
	}: Props = $props();
</script>

<div class={cn('layout-12', className)}>
	<div class="md:col-span-2">
		<p class="type-index" aria-label={total ? `Section ${index} of ${total}` : `Section ${index}`}>
			<span class="type-index-strong">{index}</span>{#if total}<span aria-hidden="true">
					/ {total}</span
				>{/if}
		</p>
		<div class="rule-line mt-4 hidden md:block" aria-hidden="true"></div>
	</div>
	<div class="md:col-span-6">
		<TechnicalLabel tone="secondary">{label}</TechnicalLabel>
		<svelte:element this={level} class="type-h2 mt-3">{title}</svelte:element>
	</div>
	{#if description}
		<div class="md:col-span-3 md:col-start-10 md:self-end">
			<p class="type-small text-ink-secondary">{description}</p>
		</div>
	{/if}
</div>
