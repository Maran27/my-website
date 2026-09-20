<script lang="ts">
	import { ArrowUpRight, Menu, X } from '@lucide/svelte';
	import { page } from '$app/state';
	import { navItems, site } from '$lib/data/site';
	import { cn } from '$lib/utils/cn';

	const isActive = (href: string) => page.url.pathname === href;

	let scrolled = $state(false);
	let menuOpen = $state(false);
	let menuButton = $state<HTMLButtonElement>();
	let mobileNav = $state<HTMLElement>();

	function openMenu() {
		menuOpen = true;
		requestAnimationFrame(() => {
			mobileNav?.querySelector('a')?.focus();
		});
	}

	function closeMenu(returnFocus = true) {
		menuOpen = false;
		if (returnFocus) menuButton?.focus();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && menuOpen) closeMenu();
	}

	// Lock body scroll while the overlay menu is open (client-only effect).
	$effect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:window
	onscroll={() => {
		scrolled = window.scrollY > 8;
	}}
	onkeydown={handleKeydown}
/>

<header class="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-sm">
	<div
		class={cn(
			'container-editorial flex items-center gap-x-6 transition-[padding] duration-150',
			scrolled ? 'py-3' : 'py-5'
		)}
	>
		<a href="/" class="flex min-h-11 items-baseline gap-3" aria-label={`${site.name} — home`}>
			<span class="text-base font-semibold tracking-tight uppercase">{site.name}</span>
			<span
				class="hidden font-mono text-[11px] font-medium tracking-[0.18em] text-ink-muted uppercase min-[420px]:inline"
			>
				{site.title} · Chennai
			</span>
		</a>
		<nav aria-label="Primary" class="ms-auto hidden lg:block">
			<ul class="flex items-center gap-1">
				{#each navItems as item (item.href)}
					<li>
						{#if item.variant === 'action'}
							<a
								href={item.href}
								target={item.external ? '_blank' : undefined}
								rel={item.external ? 'noreferrer' : undefined}
								class="ms-3 inline-flex min-h-11 items-center gap-1.5 border border-ink px-4 text-sm font-medium whitespace-nowrap transition-colors duration-150 hover:bg-ink hover:text-surface"
							>
								{item.label}
								<ArrowUpRight size={14} aria-hidden="true" />
							</a>
						{:else}
							<a
								href={item.href}
								aria-current={isActive(item.href) ? 'page' : undefined}
								class="block px-2 py-1 text-sm whitespace-nowrap transition-colors duration-150 hover:text-accent aria-[current=page]:text-accent aria-[current=page]:underline aria-[current=page]:decoration-accent aria-[current=page]:underline-offset-4"
							>
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
		<button
			type="button"
			bind:this={menuButton}
			onclick={openMenu}
			aria-expanded={menuOpen}
			aria-controls="mobile-menu"
			aria-label="Open menu"
			class="-me-2 ms-auto inline-flex min-h-11 min-w-11 items-center justify-center transition-colors duration-150 hover:text-accent lg:hidden"
		>
			<Menu size={22} aria-hidden="true" />
		</button>
	</div>
</header>

{#if menuOpen}
	<div
		id="mobile-menu"
		role="dialog"
		aria-modal="true"
		aria-label="Menu"
		class="menu-overlay fixed inset-0 z-50 flex flex-col bg-canvas lg:hidden"
	>
		<div class="container-editorial flex items-center gap-x-6 py-5">
			<span class="text-base font-semibold tracking-tight uppercase">{site.name}</span>
			<span class="font-mono text-[11px] font-medium tracking-[0.18em] text-ink-muted uppercase">
				{site.title} · Chennai
			</span>
			<button
				type="button"
				onclick={() => closeMenu()}
				aria-label="Close menu"
				class="-me-2 ms-auto inline-flex min-h-11 min-w-11 items-center justify-center transition-colors duration-150 hover:text-accent"
			>
				<X size={22} aria-hidden="true" />
			</button>
		</div>
		<nav
			aria-label="Mobile"
			bind:this={mobileNav}
			class="container-editorial flex flex-1 flex-col justify-center"
		>
			<ul class="flex flex-col">
				{#each navItems.filter((item) => item.variant !== 'action') as item, i (item.href)}
					<li
						class="menu-item border-t border-line last:border-b"
						style:animation-delay={`${80 + i * 60}ms`}
					>
						<a
							href={item.href}
							onclick={() => closeMenu(false)}
							aria-current={isActive(item.href) ? 'page' : undefined}
							class="flex min-h-16 items-center justify-between py-4 text-2xl font-semibold tracking-tight transition-colors duration-150 hover:text-accent aria-[current=page]:text-accent"
						>
							{item.label}
							<span
								class="font-mono text-xs font-medium tracking-[0.18em] text-ink-muted"
								aria-hidden="true"
							>
								0{i + 1}
							</span>
						</a>
					</li>
				{/each}
			</ul>
			{#each navItems.filter((item) => item.variant === 'action') as item (item.href)}
				<a
					href={item.href}
					onclick={() => closeMenu(false)}
					class="menu-item mt-8 inline-flex min-h-13 items-center justify-center gap-2 border border-ink px-4 py-3 text-base font-medium transition-colors duration-150 hover:bg-ink hover:text-surface"
					style:animation-delay="440ms"
				>
					{item.label}
					<ArrowUpRight size={16} aria-hidden="true" />
				</a>
			{/each}
		</nav>
		<p class="container-editorial type-technical pt-8 pb-10 text-ink-muted">
			AI Engineer · Chennai, India
		</p>
	</div>
{/if}
