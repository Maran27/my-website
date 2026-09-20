<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import Container from '$lib/components/Container.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import TechnicalLabel from '$lib/components/TechnicalLabel.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import WritingList from '$lib/components/WritingList.svelte';
	import { writing } from '$lib/data/writing';
</script>

<Seo title="Writing" path="/writing" />

<section class="section-pad pt-10 sm:pt-12 lg:pt-16">
	<Container>
		<div use:reveal={{}}>
			<SectionHeader
				index="01"
				label="Writing"
				title="Ideas, notes and things I've learned by building."
				description="Working notes on AI engineering, systems, experiments and the questions that keep me curious."
				level="h1"
			/>
		</div>

		<div class="mt-10 sm:mt-14" use:reveal={{ delay: 90 }}>
			<WritingList entries={writing} />
		</div>

		<div class="mt-6 flex items-center justify-between gap-6" use:reveal={{ delay: 180 }}>
			<TechnicalLabel tone="muted">Working archive · not all pieces are published</TechnicalLabel>
			<span
				class="hidden font-mono text-[10px] tracking-[0.16em] text-ink-muted uppercase sm:inline"
			>
				{writing.length} pieces in progress
			</span>
		</div>
	</Container>
</section>
