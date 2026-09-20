<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import StatusDot from '$lib/components/StatusDot.svelte';

	interface Props {
		index: string;
		title: string;
		tags: string[];
		/** `core` renders the dominant inverted INTELLIGENCE node. */
		tone?: 'default' | 'core';
	}

	let { index, title, tags, tone = 'default' }: Props = $props();

	const core = $derived(tone === 'core');
</script>

<div
	class={cn(
		'border transition-colors duration-150 hover:border-accent',
		core ? 'border-ink bg-ink px-5 py-5 text-surface' : 'border-line bg-surface px-5 py-4'
	)}
>
	<div class="flex items-center gap-2.5">
		{#if core}
			<StatusDot pulse label={`${title} layer active`} />
		{:else}
			<StatusDot tone="muted" />
		{/if}
		<p class="type-technical">{title}</p>
		<span
			class={cn(
				'ms-auto font-mono text-[11px] tracking-[0.18em]',
				core ? 'text-surface/60' : 'text-ink-muted'
			)}
			aria-hidden="true"
		>
			{index}
		</span>
	</div>
	<ul class="mt-3.5 flex flex-wrap gap-1.5">
		{#each tags as tag (tag)}
			<li
				class={cn(
					'border px-2 py-1 font-mono text-[10px] tracking-[0.14em] uppercase',
					core ? 'border-surface/25 text-surface/80' : 'border-line text-ink-secondary'
				)}
			>
				{tag}
			</li>
		{/each}
	</ul>
</div>
