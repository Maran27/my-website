<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import Container from '$lib/components/Container.svelte';
	import ResearchList from '$lib/components/ResearchList.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { research } from '$lib/data/research';
</script>

<Seo title="Research" path="/research" />

<section class="section-pad pt-10 sm:pt-12 lg:pt-16">
	<Container>
		<div use:reveal={{}}>
			<SectionHeader
				index="01"
				label="Research"
				title="Questions, experiments and ideas I'm exploring."
				description="A working record of research directions, applied experiments and technical questions."
				level="h1"
			/>
		</div>

		<div class="mt-10 sm:mt-14" use:reveal={{ delay: 90 }}>
			<ResearchList entries={research} />
		</div>
	</Container>
</section>
