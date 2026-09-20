<script lang="ts">
	import SystemRail from '$lib/components/SystemRail.svelte';

	/**
	 * Conceptual flow only: documents → embeddings → retrieval → LLM →
	 * answer. Rendered as a system rail; `LLM` is the core stage.
	 * Implies no confirmed implementation details.
	 */
	const stages = [
		{ index: 'S.01', title: 'Documents' },
		{ index: 'S.02', title: 'Embeddings' },
		{ index: 'S.03', title: 'Retrieval' },
		{ index: 'S.04', title: 'LLM', core: true },
		{ index: 'S.05', title: 'Answer' }
	];
	const delays = [800, 1700, 2400, 3100];
</script>

<div class="parallax-layer">
	<SystemRail {stages} {delays} />
</div>
