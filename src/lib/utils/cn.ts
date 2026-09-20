/**
 * Minimal classnames helper — joins truthy tokens with a single space.
 * Kept dependency-free on purpose (no `clsx` for a one-liner).
 */
export function cn(...tokens: Array<string | false | null | undefined>): string {
	return tokens.filter(Boolean).join(' ');
}
