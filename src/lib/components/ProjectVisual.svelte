<script lang="ts">
	import { pointerParallax } from '$lib/actions/pointerParallax';
	import DocumentPipelineVisual from '$lib/components/DocumentPipelineVisual.svelte';
	import RagPipelineVisual from '$lib/components/RagPipelineVisual.svelte';
	import RiskIntelligenceVisual from '$lib/components/RiskIntelligenceVisual.svelte';
	import type { Project, ProjectVisualType } from '$lib/types';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();

	const visuals = {
		'risk-intelligence': RiskIntelligenceVisual,
		'document-pipeline': DocumentPipelineVisual,
		'rag-pipeline': RagPipelineVisual
	} satisfies Record<ProjectVisualType, typeof RiskIntelligenceVisual>;

	/** Screen-reader summary of each conceptual flow. Decorative tree is hidden. */
	const descriptions: Record<ProjectVisualType, string> = {
		'risk-intelligence':
			'Conceptual diagram: suppliers flow into a risk model, then optimization, producing a decision.',
		'document-pipeline':
			'Conceptual diagram: a document flows through OCR, extraction, and validation into structured data.',
		'rag-pipeline':
			'Conceptual diagram: documents flow through embeddings and retrieval into a language model, producing an answer.'
	};

	const Visual = $derived(visuals[project.visualType]);
	const figLabel = $derived(`Fig. P.${project.number} — Conceptual flow`);
</script>

<figure
	class="border border-line bg-surface/60 px-4 py-5 transition-colors duration-150 group-hover:border-line-strong group-focus-within:border-line-strong sm:px-5"
	use:pointerParallax={{ max: 5 }}
>
	<p class="type-technical text-ink-muted" aria-hidden="true">{figLabel}</p>
	<div class="mt-5" aria-hidden="true">
		<Visual />
	</div>
	<figcaption class="sr-only">{descriptions[project.visualType]}</figcaption>
</figure>
