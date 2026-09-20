<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	/** Monospace technical label: AI ENGINEER · 01 / 05 · SYSTEM STATUS. */
	interface Props {
		class?: string;
		tone?: 'muted' | 'secondary' | 'accent' | 'ink';
		children: Snippet;
	}

	let { class: className = '', tone = 'muted', children }: Props = $props();

	const tones = {
		muted: 'text-ink-muted',
		secondary: 'text-ink-secondary',
		accent: 'text-accent',
		ink: 'text-ink'
	} as const;
	const toneClass = $derived(tones[tone]);
</script>

<p
	class={cn('font-mono text-[11px] font-medium tracking-[0.18em] uppercase', toneClass, className)}
>
	{@render children()}
</p>
