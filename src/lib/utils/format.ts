/**
 * Format an ISO date string for editorial display, e.g. `2026-09-15`
 * becomes `Sep 15, 2026`. Falls back to the raw input when unparseable
 * so the UI never renders `Invalid Date`.
 */
export function formatDate(input: string, locale = 'en-IN'): string {
	const date = new Date(input);
	if (Number.isNaN(date.getTime())) return input;
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	}).format(date);
}
