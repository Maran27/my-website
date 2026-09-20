<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import CareerTimeline from '$lib/components/CareerTimeline.svelte';
	import CertificationList from '$lib/components/CertificationList.svelte';
	import Container from '$lib/components/Container.svelte';
	import EducationBlock from '$lib/components/EducationBlock.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import TechnicalLabel from '$lib/components/TechnicalLabel.svelte';
	import { certifications } from '$lib/data/certifications';
	import { education } from '$lib/data/education';
	import { experience } from '$lib/data/experience';

	const aboutParagraphs = [
		"I'm an AI Engineer based in Chennai, working across machine learning, computer vision, NLP, generative AI, and intelligent automation.",
		'My work is mostly about turning ideas and emerging technologies into systems that are actually useful. I enjoy moving between experimentation and engineering — understanding how something works, building it, testing where it breaks, and figuring out how to make it better.',
		"I'm particularly interested in the space where AI meets other disciplines. That curiosity has led me to explore areas such as mathematics, quantum computing, liquid neural networks, and topological data analysis."
	];

	const curiosities = [
		'AI SYSTEMS',
		'MATHEMATICS',
		'QUANTUM COMPUTING',
		'LIQUID NEURAL NETWORKS',
		'TOPOLOGICAL DATA ANALYSIS',
		'ASTRONOMY'
	];

	/** Chronological (oldest-first) progression, derived from experience data. */
	const path = [...experience].reverse();

	/** Year range exactly as specified, derived from data (e.g. `2022 — 2023`). */
	function yearRange(startDate: string, endDate: string | null): string {
		const startYear = startDate.split(' ').at(-1) ?? startDate;
		const endYear = endDate ? (endDate.split(' ').at(-1) ?? endDate) : 'PRESENT';
		return `${startYear} — ${endYear}`;
	}
</script>

{#snippet sectionIndex(number: string, label: string)}
	<div class="md:col-span-2">
		<p class="type-index" aria-label={`Section ${number}: ${label}`}>
			<span class="type-index-strong">{number}</span>
		</p>
		<div class="rule-line mt-4 hidden md:block" aria-hidden="true"></div>
	</div>
{/snippet}

<Seo
	title="About"
	description="About Maran A, an AI Engineer based in Chennai working across machine learning, computer vision, NLP, generative AI, and intelligent automation."
	path="/about"
/>

<section class="section-pad pt-10 sm:pt-12 lg:pt-16">
	<Container>
		<div use:reveal={{}}>
			<SectionHeader
				index="03"
				label="About"
				title="I build intelligent systems for real-world problems, and spend the rest of my time wondering what else can be built."
				level="h1"
			/>
		</div>

		<!-- 01 / A LITTLE ABOUT ME -->
		<div class="layout-12 mt-10 sm:mt-14" use:reveal={{ delay: 90 }}>
			{@render sectionIndex('01', 'A little about me')}
			<div class="md:col-span-8 md:col-start-5">
				<TechnicalLabel tone="secondary">A little about me</TechnicalLabel>
				{#each aboutParagraphs as paragraph (paragraph.slice(0, 24))}
					<p class="type-body mt-4 max-w-prose text-ink-secondary first:mt-3">{paragraph}</p>
				{/each}
			</div>
		</div>

		<!-- 02 / THE PATH -->
		<div class="layout-12 mt-10 sm:mt-14" use:reveal={{ delay: 180 }}>
			{@render sectionIndex('02', 'The path')}
			<div class="md:col-span-8 md:col-start-5">
				<TechnicalLabel tone="secondary">The path</TechnicalLabel>
				<ol class="mt-4">
					{#each path as entry, i (entry.id)}
						<li class="grid grid-cols-[1.75rem_1fr] gap-x-4 pb-8 last:pb-0">
							<div>
								<CareerTimeline
									current={entry.current}
									segmentAbove={i > 0}
									segmentBelow={i < path.length - 1}
									srLabel={`${entry.category}, ${yearRange(entry.startDate, entry.endDate)}${entry.current ? ', current role' : ''}`}
									class="h-full"
								/>
							</div>
							<div>
								<p class="type-technical text-ink">{entry.category}</p>
								<p class="type-technical mt-1 text-ink-muted">
									{yearRange(entry.startDate, entry.endDate)}
								</p>
								<p class="mt-2 text-lg font-semibold tracking-tight">{entry.role}</p>
								<p class="type-body mt-0.5 text-ink-secondary">{entry.company}</p>
							</div>
						</li>
					{/each}
				</ol>
				<p class="type-small mt-6 max-w-prose text-ink-secondary">
					From learning how models work to building systems around them.
				</p>
			</div>
		</div>

		<!-- 03 / EDUCATION -->
		<div class="layout-12 mt-10 sm:mt-14" use:reveal={{ delay: 270 }}>
			{@render sectionIndex('03', 'Education')}
			<div class="md:col-span-8 md:col-start-5">
				<EducationBlock entries={education} />
			</div>
		</div>

		<!-- 04 / CERTIFICATION -->
		<div class="layout-12 mt-10 sm:mt-14" use:reveal={{ delay: 360 }}>
			{@render sectionIndex('04', 'Certification')}
			<div class="md:col-span-8 md:col-start-5">
				<CertificationList {certifications} />
			</div>
		</div>

		<!-- 05 / CURRENTLY CURIOUS ABOUT -->
		<div class="layout-12 mt-10 sm:mt-14" use:reveal={{ delay: 450 }}>
			{@render sectionIndex('05', 'Currently curious about')}
			<div class="md:col-span-8 md:col-start-5">
				<TechnicalLabel tone="secondary">Currently curious about</TechnicalLabel>
				<ul class="mt-3">
					{#each curiosities as item (item)}
						<li
							class="type-technical border-t border-line py-3 text-ink transition-colors duration-150 last:border-b hover:text-accent"
						>
							{item}
						</li>
					{/each}
				</ul>
				<p class="type-small mt-4 max-w-prose text-ink-secondary">
					Some are things I work with. Others are things I'm still trying to understand.
				</p>
			</div>
		</div>
	</Container>
</section>
