<script lang="ts">
	import { cn } from '$lib/utils/cn';

	type Tone = 'accent' | 'ink' | 'muted';

	/**
	 * Small status indicator (8px dot). Accent is the default voice for
	 * live/active states; `ink`/`muted` for neutral metadata.
	 */
	interface Props {
		tone?: Tone;
		pulse?: boolean;
		/** Screen-reader label, e.g. `"Status: available"`. */
		label?: string;
		class?: string;
	}

	let { tone = 'accent', pulse = false, label, class: className = '' }: Props = $props();

	const tones: Record<Tone, string> = {
		accent: 'bg-accent',
		ink: 'bg-ink',
		muted: 'bg-ink-muted'
	};
	const toneClass = $derived(tones[tone]);
</script>

<span class={cn('status-dot', toneClass, pulse && 'status-dot-pulse', className)} aria-hidden="true"
></span>
{#if label}
	<span class="sr-only">{label}</span>
{/if}
