<script lang="ts">
	import TechnicalLabel from '$lib/components/TechnicalLabel.svelte';
	import TextLink from '$lib/components/TextLink.svelte';
	import type { Certification } from '$lib/types';

	interface Props {
		certifications: Certification[];
	}

	let { certifications }: Props = $props();

	function numberFor(i: number): string {
		return String(i + 1).padStart(2, '0');
	}
</script>

<div>
	<TechnicalLabel>Certifications</TechnicalLabel>
	<ol class="mt-2">
		{#each certifications as certification, i (certification.id)}
			<li class="group flex gap-4 border-b border-line py-4 first:border-t">
				<span class="type-technical pt-0.5 text-ink-muted" aria-hidden="true">
					{numberFor(i)}
				</span>
				<div class="min-w-0">
					<p class="type-body font-medium transition-colors duration-150 group-hover:text-accent">
						{certification.name}
					</p>
					<p class="type-small mt-0.5 text-ink-secondary">{certification.issuer}</p>
					{#if certification.date}
						<p class="type-technical mt-1 text-ink-muted">{certification.date}</p>
					{/if}
					{#if certification.credentialUrl}
						<TextLink
							href={certification.credentialUrl}
							external
							class="type-technical mt-1.5 inline-block"
						>
							View credential
						</TextLink>
					{/if}
				</div>
			</li>
		{/each}
	</ol>
</div>
