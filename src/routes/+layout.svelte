<script lang="ts">
	import '../app.css';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<a href="#main-content" class="skip-link">Skip to content</a>
<SiteHeader />
<main id="main-content">
	{@render children()}
</main>
<SiteFooter />
