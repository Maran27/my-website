<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import Button from '$lib/components/Button.svelte';
	import HeroSystemVisualization from '$lib/components/HeroSystemVisualization.svelte';
	import StatusDot from '$lib/components/StatusDot.svelte';
	import TechnicalLabel from '$lib/components/TechnicalLabel.svelte';
</script>

<section aria-labelledby="hero-heading" class="relative overflow-hidden">
	<div class="bg-grid-technical mask-fade-y absolute inset-0" aria-hidden="true"></div>
	<div class="container-wide relative">
		<div class="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
			<div class="lg:col-span-7">
				<div use:reveal={{ delay: 0 }}>
					<TechnicalLabel tone="ink">AI Engineer</TechnicalLabel>
				</div>
				<h1 id="hero-heading" class="type-display mt-5" use:reveal={{ delay: 90 }}>
					I build intelligent
					<br class="hidden lg:block" />
					systems for
					<br class="hidden lg:block" />
					real-world problems<span class="text-accent" aria-hidden="true">.</span>
				</h1>
				<p class="type-lead measure-reading mt-6" use:reveal={{ delay: 180 }}>
					AI Engineer working across Machine Learning, Computer Vision, NLP, Generative AI, and
					intelligent automation — while continuously exploring new ideas in AI and emerging
					technologies.
				</p>
				<div class="mt-8 flex flex-wrap gap-3" use:reveal={{ delay: 260 }}>
					<Button href="/projects">
						View work
						<ArrowRight size={16} aria-hidden="true" />
					</Button>
					<Button href="/about" variant="secondary">
						About me
						<ArrowRight size={16} aria-hidden="true" />
					</Button>
				</div>
			</div>
			<div class="lg:col-span-4 lg:col-start-9">
				<HeroSystemVisualization />
			</div>
		</div>
		<div
			class="rule-line flex flex-col gap-3 pt-5 pb-14 sm:flex-row sm:items-center sm:justify-between sm:pb-20 lg:pb-24"
			use:reveal={{ delay: 430 }}
		>
			<p class="type-technical text-ink-secondary">Engineer · Builder · Lifelong Learner</p>
			<p class="type-technical flex items-center gap-2.5 text-ink-secondary">
				<StatusDot pulse label="System status: exploring and building" />
				System status · Exploring / Building
			</p>
		</div>
	</div>
</section>
