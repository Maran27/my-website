<script lang="ts">
	import SystemRail from '$lib/components/SystemRail.svelte';

	/**
	 * Conceptual flow only: suppliers → risk model → optimization → decision.
	 * Rendered as a system rail; `RISK MODEL` is the core stage.
	 * Implies no confirmed implementation details.
	 */
	const stages = [
		{ index: 'S.01', title: 'Suppliers' },
		{ index: 'S.02', title: 'Risk model', core: true },
		{ index: 'S.03', title: 'Optimization' },
		{ index: 'S.04', title: 'Decision' }
	];
	const delays = [0, 1100, 2200];
</script>

<div class="parallax-layer">
	<SystemRail {stages} {delays} />
</div>
