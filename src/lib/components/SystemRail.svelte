<script lang="ts">
	import RailStage from '$lib/components/RailStage.svelte';
	import SystemConnector from '$lib/components/SystemConnector.svelte';
	import { cn } from '$lib/utils/cn';

	export interface RailStageData {
		title: string;
		index: string;
		core?: boolean;
	}

	interface Props {
		stages: RailStageData[];
		/** Per-segment signal stagger offsets, in ms. Defaults to 900ms steps. */
		delays?: number[];
	}

	let { stages, delays = [] }: Props = $props();

	/** Single-select inspection state; `null` when nothing is selected. */
	let selected = $state<number | null>(null);

	function toggle(i: number) {
		selected = selected === i ? null : i;
	}

	function delayFor(i: number): number {
		return delays[i] ?? i * 900;
	}

	function segmentActive(i: number): boolean {
		return selected === i || selected === i + 1;
	}
</script>

<!--
	Alignment contract (desktop): each stage button is [label zone `min-h-14` +
	marker row `h-6`]. Each segment spacer reproduces the same `min-h-14` /
	`h-6` pair so the rail line always crosses marker centers. Keep the two
	in sync if either side changes.
-->
<!-- Mobile: vertical rail, readability first -->
<div class="flex flex-col items-stretch md:hidden">
	{#each stages as stage, i (stage.index)}
		<RailStage
			title={stage.title}
			index={stage.index}
			core={stage.core}
			selected={selected === i}
			onselect={() => toggle(i)}
			orientation="vertical"
		/>
		{#if i < stages.length - 1}
			<SystemConnector orientation="vertical" compact delay={delayFor(i)} />
		{/if}
	{/each}
</div>

<!-- Desktop: horizontal system rail -->
<div class="hidden items-stretch md:flex">
	{#each stages as stage, i (stage.index)}
		<RailStage
			title={stage.title}
			index={stage.index}
			core={stage.core}
			selected={selected === i}
			onselect={() => toggle(i)}
			orientation="horizontal"
		/>
		{#if i < stages.length - 1}
			<span class="flex w-5 flex-none flex-col sm:w-6 lg:w-8" aria-hidden="true">
				<span class="min-h-14"></span>
				<span class="flex h-6 items-center">
					<span
						class={cn(
							'relative h-px w-full transition-colors duration-150',
							segmentActive(i) ? 'bg-accent/60' : 'bg-line'
						)}
					>
						<span
							class="signal-dot signal-dot-horizontal"
							style:animation-delay={`${delayFor(i)}ms`}
						></span>
					</span>
				</span>
			</span>
		{/if}
	{/each}
</div>
