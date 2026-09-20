<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import Container from '$lib/components/Container.svelte';
	import ProjectPreview from '$lib/components/ProjectPreview.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import TextLink from '$lib/components/TextLink.svelte';
	import type { Project } from '$lib/types';

	interface Props {
		projects: Project[];
		eyebrow: string;
		title: string;
		lede?: string;
		index: string;
		total?: string;
		/** Heading level for the section title. Defaults to `'h2'`; pages use `'h1'`. */
		level?: 'h1' | 'h2';
		/** Show the "view all projects" link (homepage only). */
		showAllLink?: boolean;
	}

	let {
		projects,
		eyebrow,
		title,
		lede,
		index,
		total,
		level = 'h2',
		showAllLink = false
	}: Props = $props();
</script>

<!-- TEMPORARY PREVIEW CONTENT (Milestone 3): project entries, descriptions and
	statuses below are un-finalized placeholders. Replace text, URLs and visuals
	during the content-finalization milestone. See `src/lib/data/projects.ts`. -->
<section class="section-pad pt-10 sm:pt-12 lg:pt-16">
	<Container>
		<div use:reveal={{}}>
			<SectionHeader {index} {total} label={eyebrow} {title} description={lede} {level} />
		</div>
		<div class="mt-8 flex flex-col gap-10 sm:mt-12 sm:gap-14">
			{#each projects as project, i (project.id)}
				<ProjectPreview {project} flip={i % 2 === 1} revealDelay={Math.min(i, 2) * 90} />
				{#if i < projects.length - 1}
					<div class="rule-line" aria-hidden="true" use:reveal={{ variant: 'line' }}></div>
				{/if}
			{/each}
		</div>
		{#if showAllLink}
			<div class="mt-12 sm:mt-16" use:reveal={{}}>
				<TextLink
					href="/projects"
					class="inline-flex min-h-11 items-center gap-2 text-sm font-medium no-underline"
				>
					View all projects
					<ArrowRight size={16} aria-hidden="true" />
				</TextLink>
			</div>
		{/if}
	</Container>
</section>
