import type { Action } from 'svelte/action';

export interface PointerParallaxOptions {
	/** Maximum drift in px at the pointer extremes. Defaults to `6`. */
	max?: number;
}

/**
 * Subtle pointer parallax (`use:pointerParallax`).
 *
 * Writes normalized pointer position (`-1…1`) to `--tx`/`--ty` on the node;
 * a `.parallax-layer` child drifts by `--parallax-max` while the frame stays
 * fixed, giving quiet depth. Decorative only — short-circuits under
 * `prefers-reduced-motion` and resets on pointer leave.
 */
export const pointerParallax: Action<HTMLElement, PointerParallaxOptions> = (
	node,
	options = {}
) => {
	const { max = 6 } = options;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	node.style.setProperty('--parallax-max', `${max}px`);

	function handleMove(event: PointerEvent) {
		const rect = node.getBoundingClientRect();
		if (rect.width === 0 || rect.height === 0) return;
		node.style.setProperty('--tx', `${((event.clientX - rect.left) / rect.width - 0.5) * 2}`);
		node.style.setProperty('--ty', `${((event.clientY - rect.top) / rect.height - 0.5) * 2}`);
	}

	function handleLeave() {
		node.style.setProperty('--tx', '0');
		node.style.setProperty('--ty', '0');
	}

	node.addEventListener('pointermove', handleMove);
	node.addEventListener('pointerleave', handleLeave);

	return {
		destroy() {
			node.removeEventListener('pointermove', handleMove);
			node.removeEventListener('pointerleave', handleLeave);
		}
	};
};
