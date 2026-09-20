<script lang="ts">
	import SystemRail from '$lib/components/SystemRail.svelte';

	/**
	 * Conceptual flow only: document → OCR → extraction → validation →
	 * structured data. Rendered as a system rail; `EXTRACTION` is the core
	 * stage. Implies no confirmed implementation details.
	 */
	const stages = [
		{ index: 'S.01', title: 'Document' },
		{ index: 'S.02', title: 'OCR' },
		{ index: 'S.03', title: 'Extraction', core: true },
		{ index: 'S.04', title: 'Validation' },
		{ index: 'S.05', title: 'Structured data' }
	];
	const delays = [400, 1300, 2200, 2900];
</script>

<div class="parallax-layer">
	<SystemRail {stages} {delays} />
</div>
