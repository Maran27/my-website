<script lang="ts">
	import { navItems, site } from '$lib/data/site';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-line bg-canvas">
	<div
		class="container-editorial flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between"
	>
		<p class="text-sm text-ink-secondary">
			© {year}
			{site.name} · {site.title}
		</p>
		<p class="font-mono text-[11px] font-medium tracking-[0.18em] text-ink-muted uppercase">
			{site.location}
		</p>
		<nav aria-label="Footer">
			<ul class="flex flex-wrap items-center gap-x-5 gap-y-2">
				{#each navItems as item (item.href)}
					<li>
						<a
							href={item.href}
							class="text-sm text-ink-secondary transition-colors duration-150 hover:text-accent"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</footer>
