<script lang="ts">
	import StatusDot from '$lib/components/StatusDot.svelte';
	import { cn } from '$lib/utils/cn';

	interface Props {
		/** Accent treatment for the current role; muted gray otherwise. */
		current?: boolean;
		/** Extend the rail above the marker. Omitted on the first row. */
		segmentAbove?: boolean;
		/** Extend the rail below the marker. Omitted on the terminus row. */
		segmentBelow?: boolean;
		/** Screen-reader description of the node, e.g. `'AI Engineering, current role'`. */
		srLabel?: string;
		class?: string;
	}

	let {
		current = false,
		segmentAbove = true,
		segmentBelow = true,
		srLabel,
		class: className = ''
	}: Props = $props();

	const lineClass = $derived(
		cn(
			'absolute left-1/2 w-px -translate-x-1/2 bg-line',
			segmentAbove ? 'top-0' : 'top-2',
			segmentBelow ? 'bottom-0' : 'h-2'
		)
	);
</script>

<div class={cn('relative flex justify-center', className)} aria-hidden="true">
	{#if segmentAbove || segmentBelow}
		<span class={lineClass}></span>
	{/if}
	{#if current}
		<StatusDot pulse class="relative mt-1" />
	{:else}
		<span
			class="relative mt-1 size-2 shrink-0 rounded-full bg-ink-muted transition-colors duration-150 group-hover:bg-accent group-focus-within:bg-accent"
		></span>
	{/if}
</div>
{#if srLabel}
	<span class="sr-only">{srLabel}</span>
{/if}
