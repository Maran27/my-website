<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import CertificationList from '$lib/components/CertificationList.svelte';
	import Container from '$lib/components/Container.svelte';
	import EducationBlock from '$lib/components/EducationBlock.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import type { Certification, Education } from '$lib/types';

	interface Props {
		eyebrow: string;
		statement: string;
		supporting: string;
		education: Education[];
		certifications: Certification[];
		index: string;
		total?: string;
	}

	let { eyebrow, statement, supporting, education, certifications, index, total }: Props = $props();
</script>

<section class="section-pad pt-10 sm:pt-12 lg:pt-16">
	<Container>
		<div use:reveal={{ delay: 0 }}>
			<SectionHeader {index} {total} label={eyebrow} title={statement} />
		</div>
		<div class="mt-8 grid gap-10 sm:mt-12 md:grid-cols-12 md:gap-8">
			<div class="md:col-span-5" use:reveal={{ delay: 90 }}>
				<p class="type-body max-w-prose text-ink-secondary">{supporting}</p>
			</div>
			<div class="md:col-span-6 md:col-start-7">
				<div use:reveal={{ delay: 180 }}>
					<EducationBlock entries={education} />
				</div>
				<div class="rule-line mt-8 pt-8" use:reveal={{ delay: 270 }}>
					<CertificationList {certifications} />
				</div>
			</div>
		</div>
	</Container>
</section>
