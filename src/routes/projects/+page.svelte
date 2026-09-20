<script lang="ts">
	import SelectedWork from '$lib/components/SelectedWork.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { projects } from '$lib/data/projects';
</script>

<Seo title="Projects" path="/projects" />
<SelectedWork
	{projects}
	eyebrow="Index"
	title="Projects"
	lede="Concepts and systems across risk intelligence, document processing and knowledge retrieval."
	index="01"
	level="h1"
/>
