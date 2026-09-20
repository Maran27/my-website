<script lang="ts">
	import { page } from '$app/state';
	import Container from '$lib/components/Container.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import TechnicalLabel from '$lib/components/TechnicalLabel.svelte';
	import TextLink from '$lib/components/TextLink.svelte';
</script>

<Seo title="Not found" path={page.url.pathname} />
<Container class="py-16 sm:py-24">
	<TechnicalLabel>Error {page.status}</TechnicalLabel>
	<h1 class="mt-4 text-3xl font-semibold sm:text-4xl">Something went off the rails.</h1>
	<p class="measure-reading mt-4 text-base text-ink-secondary">
		{page.error?.message ?? 'The page you are looking for does not exist.'}
	</p>
	<p class="mt-8">
		<TextLink href="/">Back to the index</TextLink>
	</p>
</Container>
