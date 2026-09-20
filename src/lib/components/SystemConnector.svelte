<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		/** Stagger offset for the travelling signal, in ms. */
		delay?: number;
		/** Connector axis. Defaults to `'vertical'` (Hero behavior preserved). */
		orientation?: 'vertical' | 'horizontal';
		/**
		 * Shorter vertical connector for dense stacks. Vertical only;
		 * defaults to `false` so Hero output is unchanged.
		 */
		compact?: boolean;
	}

	let { delay = 0, orientation = 'vertical', compact = false }: Props = $props();

	const horizontal = $derived(orientation === 'horizontal');
</script>

<div
	class={cn(
		'relative bg-line',
		horizontal
			? 'h-px w-4 flex-none self-center md:w-5'
			: compact
				? 'mx-auto h-8 w-px'
				: 'mx-auto h-14 w-px sm:h-16'
	)}
	aria-hidden="true"
>
	<span
		class={cn('signal-dot', horizontal && 'signal-dot-horizontal')}
		style:animation-delay={`${delay}ms`}
	></span>
</div>
