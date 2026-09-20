<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import Container from '$lib/components/Container.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import TechnicalLabel from '$lib/components/TechnicalLabel.svelte';
	import TextLink from '$lib/components/TextLink.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { nowSections, nowLastUpdated, nowAboutLink } from '$lib/data/now';
</script>

<Seo
	title="Now"
	description="What Maran A is currently building, learning, and exploring as an AI Engineer."
	path="/now"
/>

<section class="section-pad pt-10 sm:pt-12 lg:pt-16">
	<Container>
		<div use:reveal={{}}>
			<SectionHeader
				index="04"
				label="Now"
				title="What I'm focused on right now."
				description="This page is a snapshot of what I'm building, learning, and exploring at the moment. It will change as my interests and projects evolve."
				level="h1"
			/>
		</div>

		{#each nowSections as section, i (section.id)}
			{@const baseDelay = i * 90}
			<div class="layout-12 mt-10 sm:mt-14" use:reveal={{ delay: baseDelay }}>
				<div class="md:col-span-2">
					<p class="type-index" aria-label={`Section ${section.number}: ${section.label}`}>
						<span class="type-index-strong">{section.number}</span>
					</p>
					<div class="rule-line mt-4 hidden md:block" aria-hidden="true"></div>
				</div>
				<div class="md:col-span-8 md:col-start-5">
					<TechnicalLabel tone="secondary">{section.label}</TechnicalLabel>
					{#each section.paragraphs as paragraph (paragraph.slice(0, 24))}
						<p class="type-body mt-4 max-w-prose text-ink-secondary first:mt-3">{paragraph}</p>
					{/each}
					{#if section.items && section.items.length > 0}
						{#if section.id === 'building'}
							<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
								{#each section.items as item (item)}
									<p
										class="type-technical border-t border-line pt-3 text-ink transition-colors duration-150 hover:text-accent"
									>
										{item}
									</p>
								{/each}
							</div>
						{:else}
							<ul class="mt-3">
								{#each section.items as item (item)}
									<li
										class="type-technical border-t border-line py-3 text-ink transition-colors duration-150 last:border-b hover:text-accent"
									>
										{item}
									</li>
								{/each}
							</ul>
						{/if}
					{/if}
					{#if section.closing}
						<p class="type-body mt-6 max-w-prose text-ink-secondary font-medium">
							{section.closing}
						</p>
					{/if}
				</div>
			</div>
		{/each}

		<div class="rule-line mt-12 sm:mt-16" use:reveal={{ delay: nowSections.length * 90 }}></div>
		<div
			class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
			use:reveal={{ delay: nowSections.length * 90 + 90 }}
		>
			<p class="type-technical text-ink-muted">
				LAST UPDATED · {nowLastUpdated}
			</p>
			<TextLink
				href={nowAboutLink}
				class="inline-flex min-h-11 items-center gap-2 text-sm font-medium no-underline"
			>
				More about me
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
				>
			</TextLink>
		</div>
	</Container>
</section>
