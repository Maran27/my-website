<script lang="ts">
	import { ArrowRight, ArrowUpRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import ProjectVisual from '$lib/components/ProjectVisual.svelte';
	import { resolveProjectDestination } from '$lib/data/projects';
	import { cn } from '$lib/utils/cn';
	import type { Project } from '$lib/types';

	interface Props {
		project: Project;
		/** Mirror the composition: visual leads on desktop. */
		flip?: boolean;
		/** Stagger offset for the scroll reveal, in ms. */
		revealDelay?: number;
	}

	let { project, flip = false, revealDelay = 0 }: Props = $props();

	const headingId = $derived(`project-${project.id}-title`);
	const destination = $derived(resolveProjectDestination(project));

	const textCols = $derived(cn('lg:col-span-4', flip ? 'lg:col-start-9' : 'lg:col-start-1'));
	const visualCols = $derived(
		flip ? 'lg:col-span-7 lg:col-start-1' : 'lg:col-span-7 lg:col-start-6'
	);
	const actionCols = $derived(cn('lg:col-span-4', flip ? 'lg:col-start-9' : 'lg:col-start-1'));
</script>

<article aria-labelledby={headingId} class="group" use:reveal={{ delay: revealDelay }}>
	<div class="grid items-start gap-x-6 gap-y-4 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-5">
		<div class={cn('lg:row-start-1', textCols)}>
			<p
				class="type-index transition-colors duration-150 group-hover:text-accent group-focus-within:text-accent"
			>
				<span aria-hidden="true">{project.number} /&nbsp;</span>{project.category}
			</p>
			<h3
				id={headingId}
				class="type-h2 mt-3 transition-transform duration-150 group-hover:translate-x-1 group-focus-within:translate-x-1"
			>
				{project.title}
			</h3>
			<p class="type-body mt-3 max-w-prose text-ink-secondary">{project.description}</p>
			<p class="type-technical mt-4 text-ink-secondary">
				{project.technologies.join(' · ')}
			</p>
			<p
				class="mt-1.5 font-mono text-[10px] font-medium uppercase leading-relaxed tracking-[0.14em] text-ink-muted"
			>
				Status · {project.status}
			</p>
		</div>
		<div class={cn('lg:row-start-1', visualCols)}>
			<ProjectVisual {project} />
		</div>
		<div class={cn('lg:row-start-2', actionCols)}>
			{#if destination}
				<a
					href={destination.href}
					target={destination.external ? '_blank' : undefined}
					rel={destination.external ? 'noreferrer' : undefined}
					class="group/explore inline-flex min-h-11 items-center gap-2 text-sm font-medium transition-colors duration-150 hover:text-accent"
				>
					Explore
					{#if destination.external}
						<ArrowUpRight
							size={16}
							aria-hidden="true"
							class="transition-transform duration-150 group-hover/explore:translate-x-0.5 group-hover/explore:-translate-y-0.5"
						/>
					{:else}
						<ArrowRight
							size={16}
							aria-hidden="true"
							class="transition-transform duration-150 group-hover/explore:translate-x-1"
						/>
					{/if}
				</a>
			{:else}
				<span class="inline-flex min-h-11 items-center gap-2 text-sm font-medium">
					Explore
					<ArrowRight
						size={16}
						aria-hidden="true"
						class="transition-transform duration-150 group-hover:translate-x-1"
					/>
					<span class="sr-only">(case study in preparation)</span>
				</span>
			{/if}
		</div>
	</div>
</article>
