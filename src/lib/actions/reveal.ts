import type { Action } from 'svelte/action';

export interface RevealOptions {
	/** Transition delay in ms — staggers siblings. Defaults to `0`. */
	delay?: number;
	/** Entrance variant. Defaults to `'rise'`. */
	variant?: 'rise' | 'fade' | 'line';
	/** Fraction of the element that must be visible before revealing. */
	threshold?: number;
}

/**
 * Viewport-triggered entrance (`use:reveal`).
 *
 * Adds the `.reveal` + variant classes at mount — JS-only, so content stays
 * visible when JS is disabled — then adds `.is-visible` on intersection.
 * Observes once per element. Short-circuits entirely under
 * `prefers-reduced-motion`, rendering content immediately.
 *
 * ```svelte
 * <div use:reveal={{ variant: 'rise', delay: 120 }}>…</div>
 * ```
 */
export const reveal: Action<HTMLElement, RevealOptions> = (node, options = {}) => {
	const { delay = 0, variant = 'rise', threshold = 0.15 } = options;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	node.classList.add('reveal', `reveal-${variant}`);
	if (delay > 0) node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold, rootMargin: '0px 0px -8% 0px' }
	);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
