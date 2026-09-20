<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import SelectedWork from '$lib/components/SelectedWork.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { certifications } from '$lib/data/certifications';
	import { education } from '$lib/data/education';
	import { experience } from '$lib/data/experience';
	import { featuredProjects } from '$lib/data/projects';
</script>

<Seo />
<Hero />
<SelectedWork
	projects={featuredProjects}
	eyebrow="Selected work"
	title="A few systems, experiments and ideas I've built."
	lede="A selection of systems I've built and explored."
	index="01"
	showAllLink
/>
<Experience
	entries={experience}
	eyebrow="Experience"
	title="From machine learning to applied AI engineering."
	index="02"
/>
<About
	eyebrow="About"
	statement="I build intelligent systems for real-world problems, and spend the rest of my time wondering what else can be built."
	supporting="My work spans machine learning, computer vision, NLP, generative AI, and intelligent automation. I'm interested in turning emerging technologies into useful systems, while continuously exploring new ideas across AI, mathematics, and beyond."
	{education}
	{certifications}
	index="03"
/>
