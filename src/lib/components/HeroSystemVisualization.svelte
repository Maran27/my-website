<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import StatusDot from '$lib/components/StatusDot.svelte';
	import SystemConnector from '$lib/components/SystemConnector.svelte';
	import SystemNode from '$lib/components/SystemNode.svelte';

	/**
	 * Signature hero visual — an abstract engineered system diagram:
	 * INPUT → INTELLIGENCE → OUTPUT. Pure HTML/CSS, no image assets.
	 * Motion (travelling signals, pointer parallax) is decorative and
	 * disabled under `prefers-reduced-motion`; the diagram reads fully
	 * as static content via the `figcaption`.
	 */
	let tx = $state(0);
	let ty = $state(0);

	function handlePointerMove(event: PointerEvent) {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const target = event.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
		ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
	}

	function handlePointerLeave() {
		tx = 0;
		ty = 0;
	}
</script>

<figure
	class="relative mx-auto w-full max-w-sm border border-line bg-surface/60 px-5 py-5 sm:px-7 sm:py-6 lg:mx-0 lg:max-w-none"
	style:--tx={tx}
	style:--ty={ty}
	onpointermove={handlePointerMove}
	onpointerleave={handlePointerLeave}
	use:reveal={{ delay: 340 }}
>
	<div class="flex items-center justify-between gap-3" aria-hidden="true">
		<span class="type-technical text-ink-muted">Fig. 01 — Intelligence system</span>
		<StatusDot pulse />
	</div>
	<div class="sys-nodes relative mt-6">
		<SystemNode index="01" title="Input" tags={['Documents', 'Images', 'Data']} />
		<SystemConnector delay={0} />
		<SystemNode index="02" title="Intelligence" tags={['ML', 'LLM', 'RAG']} tone="core" />
		<SystemConnector delay={1700} />
		<SystemNode index="03" title="Output" tags={['Insights', 'Decisions', 'Automation']} />
	</div>
	<p class="type-technical mt-6 text-center text-ink-muted" aria-hidden="true">
		Input → Intelligence → Output
	</p>
	<figcaption class="sr-only">
		Abstract diagram of an intelligent system. Inputs — documents, images, data — flow into a
		central intelligence layer working across ML, LLMs and RAG, producing outputs: insights,
		decisions and automation.
	</figcaption>
</figure>
