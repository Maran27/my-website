<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		id?: string;
		children: Snippet;
	}

	let { class: className = '', id, children }: Props = $props();
</script>

<div {id} class={cn('container-editorial', className)}>
	{@render children()}
</div>
