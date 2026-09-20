<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		title: string;
		index: string;
		/** `core` renders the dominant stage with the dark treatment. */
		core?: boolean;
		selected?: boolean;
		onselect?: () => void;
		/** Rail axis. Vertical stacks label over marker; horizontal is a grid cell. */
		orientation?: 'vertical' | 'horizontal';
	}

	let {
		title,
		index,
		core = false,
		selected = false,
		onselect,
		orientation = 'horizontal'
	}: Props = $props();
</script>

<button
	type="button"
	aria-pressed={selected}
	onclick={onselect}
	class={cn(
		'group/stage flex min-w-0 flex-col items-center text-center',
		orientation === 'horizontal' ? 'flex-1' : 'w-full'
	)}
>
	<span
		class={cn(
			'flex flex-col items-center gap-1',
			orientation === 'horizontal' ? 'min-h-14 justify-end' : 'justify-start'
		)}
	>
		{#if core}
			<span
				class="bg-ink px-2 py-1 font-mono text-[11px] font-medium uppercase leading-[1.7] tracking-[0.14em] text-surface"
			>
				{title}
			</span>
		{:else}
			<span
				class={cn(
					'font-mono text-[11px] font-medium uppercase leading-[1.7] tracking-[0.14em] text-ink transition-colors duration-150 group-hover/stage:text-accent',
					selected && 'text-accent'
				)}
			>
				{title}
			</span>
		{/if}
		<span class="font-mono text-[10px] font-medium tracking-[0.14em] text-ink-muted">
			{index}
		</span>
	</span>
	<span class="flex h-6 items-center justify-center" aria-hidden="true">
		<span
			class={cn(
				'size-[9px] rounded-full transition-colors duration-150 group-hover/stage:bg-accent',
				core || selected ? 'bg-accent' : 'bg-ink-muted'
			)}
		></span>
	</span>
</button>
