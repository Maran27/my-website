/**
 * Shared domain types.
 *
 * These shapes let projects, experience, certifications and research entries
 * be driven by structured data in later milestones. No content lives here —
 * only the contracts the UI will render against.
 */

/** Site-wide identity and metadata. */
export interface SiteMetadata {
	name: string;
	title: string;
	location: string;
	description: string;
	/** Canonical origin, e.g. `https://maran.dev`. Update at deploy time. */
	url: string;
	locale: string;
}

/** Primary navigation entry. */
export interface NavItem {
	label: string;
	href: string;
	/**
	 * `action` renders the item as a deliberate bordered action (e.g. Resume)
	 * rather than an ordinary text link. Defaults to `'link'`.
	 */
	variant?: 'link' | 'action';
	/** Opens the link in a new tab with `rel="noreferrer"`. */
	external?: boolean;
}

/** External profile link (GitHub, LinkedIn, …). Populate with real URLs only. */
export interface SocialLink {
	label: string;
	href: string;
	/** Key of a Lucide icon rendered by the UI, e.g. `github`. */
	icon: string;
}

/** Abstract visual language for a project preview. One entry per visual component. */
export type ProjectVisualType = 'risk-intelligence' | 'document-pipeline' | 'rag-pipeline';

/** A portfolio project entry. URLs are `null` until real destinations exist. */
export interface Project {
	id: string;
	/** Display number, e.g. `'01'`. */
	number: string;
	title: string;
	shortTitle: string;
	description: string;
	category: string;
	technologies: string[];
	/** Lifecycle label, e.g. `'Temporary preview'`. Never invent deployment claims. */
	status: string;
	featured: boolean;
	githubUrl: string | null;
	demoUrl: string | null;
	caseStudyUrl: string | null;
	visualType: ProjectVisualType;
	/** Internal flag: `true` marks un-finalized content for the content milestone. */
	temporary?: boolean;
	// Future case-study fields (populated during content finalization).
	problem?: string;
	solution?: string;
	architecture?: string;
	results?: string;
	lessons?: string;
	images?: string[];
}

/** A professional experience entry. Dates are display strings as given. */
export interface Experience {
	id: string;
	/** Timeline node year, e.g. `'2025'`. */
	year: string;
	/** Display start, e.g. `'Jan 2025'`. */
	startDate: string;
	/** Display end, e.g. `'Dec 2024'`; `null` when ongoing. */
	endDate: string | null;
	current: boolean;
	role: string;
	company: string;
	location: string;
	summary: string;
	technologies: string[];
	highlights: string[];
	/** Progression era, e.g. `'AI ENGINEERING'`. */
	category: string;
}

/**
 * A formal education entry. Only provided facts — no specializations,
 * ranks, awards, coursework or scholarships unless supplied.
 */
export interface Education {
	id: string;
	/** Display duration, e.g. `'2018 — 2023'`, or year for earlier entries. */
	duration: string;
	degree: string;
	field?: string | null;
	school: string;
	location?: string | null;
	/** Display score, e.g. `'9.18 / 10'`; `null` when not provided. */
	score?: string | null;
	/** `false` renders the entry as secondary (compact) information. */
	primary: boolean;
}

/**
 * A professional certification. Nullable fields stay `null` until real
 * values exist — never render links or dates from them.
 */
export interface Certification {
	id: string;
	name: string;
	issuer: string;
	date: string | null;
	credentialId: string | null;
	credentialUrl: string | null;
}

/** A research entry — paper, preprint, report or technical note. */
export interface ResearchEntry {
	slug: string;
	title: string;
	venue: string;
	year: string;
	summary: string;
	authors: string[];
	href?: string;
}

/** A writing entry — essay, article or documentation. */
export interface WritingEntry {
	slug: string;
	title: string;
	date: string;
	category: string;
	status: 'Published' | 'Draft' | 'Idea';
	summary: string;
	href?: string;
}

/** A `/now` status entry. */
export interface NowEntry {
	date: string;
	summary: string;
	items: string[];
}
