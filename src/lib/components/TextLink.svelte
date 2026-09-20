<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		class?: string;
		external?: boolean;
		ariaLabel?: string;
		children: Snippet;
	}

	let { href, class: className = '', external = false, ariaLabel, children }: Props = $props();
</script>

<a
	{href}
	class={cn(
		'underline decoration-line-strong underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent',
		className
	)}
	aria-label={ariaLabel}
	target={external ? '_blank' : undefined}
	rel={external ? 'noreferrer' : undefined}
>
	{@render children()}
</a>
