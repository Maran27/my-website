<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'secondary' | 'ghost';
	type Size = 'sm' | 'md';

	interface Props {
		variant?: Variant;
		size?: Size;
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		class?: string;
		ariaLabel?: string;
		children: Snippet;
	}

	let {
		variant = 'primary',
		size = 'md',
		href,
		type = 'button',
		disabled = false,
		class: className = '',
		ariaLabel,
		children
	}: Props = $props();

	const styles = $derived(
		cn(
			'inline-flex items-center justify-center gap-2 border font-medium transition-colors duration-150',
			'disabled:cursor-not-allowed disabled:opacity-50',
			variant === 'primary' &&
				'border-ink bg-ink text-surface hover:bg-accent hover:border-accent disabled:hover:bg-ink disabled:hover:border-ink',
			variant === 'secondary' && 'border-line-strong bg-surface text-ink hover:border-ink',
			variant === 'ghost' && 'border-transparent bg-transparent text-ink hover:text-accent',
			size === 'sm' && 'px-3 py-1.5 text-sm',
			size === 'md' && 'px-5 py-2.5 text-sm',
			className
		)
	);
</script>

{#if href}
	<a {href} class={styles} aria-label={ariaLabel} aria-disabled={disabled || undefined}>
		{@render children()}
	</a>
{:else}
	<button {type} {disabled} class={styles} aria-label={ariaLabel}>
		{@render children()}
	</button>
{/if}
