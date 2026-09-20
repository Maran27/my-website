<script lang="ts">
	import { site } from '$lib/data/site';
	import { canonicalUrl, createPageTitle } from '$lib/utils/seo';

	interface Props {
		/** Page name, e.g. `Projects`. Omit for the default site title. */
		title?: string;
		description?: string;
		/** Route path used to build the canonical URL. Defaults to `/`. */
		path?: string;
		/** Absolute or root-relative social image. Omitted until a real asset ships. */
		image?: string;
		type?: 'website' | 'article';
	}

	let {
		title,
		description = site.description,
		path = '/',
		image,
		type = 'website'
	}: Props = $props();

	const fullTitle = $derived(createPageTitle(title));
	const canonical = $derived(canonicalUrl(path));
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="author" content={site.name} />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonical} />
	<meta property="og:site_name" content={`${site.name} · ${site.title}`} />
	<meta property="og:locale" content={site.locale} />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
</svelte:head>
