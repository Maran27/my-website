/**
 * Now page content — Milestone 10.
 * A living snapshot of current focus areas. Update this file when
 * the snapshot changes. Verbatim copy as provided in the milestone spec.
 */

export interface NowSection {
	id: string;
	number: string;
	label: string;
	paragraphs: string[];
	items?: string[];
	closing?: string;
}

export const nowSections: NowSection[] = [
	{
		id: 'building',
		number: '01',
		label: 'Building',
		paragraphs: [
			"Right now, I'm interested in building useful AI systems rather than stopping at model experimentation — connecting models, retrieval, tools, APIs, and automation into systems that can actually be used."
		],
		items: [
			'GENERATIVE AI',
			'RAG SYSTEMS',
			'AI AGENTS',
			'DOCUMENT INTELLIGENCE',
			'INTELLIGENT AUTOMATION'
		]
	},
	{
		id: 'learning',
		number: '02',
		label: 'Learning',
		paragraphs: [
			'Some of my current learning is deliberately outside the usual AI engineering path.',
			"The goal isn't to master everything immediately. It's to understand enough to discover where these ideas might become useful."
		],
		items: [
			'MATHEMATICS',
			'QUANTUM COMPUTING',
			'LIQUID NEURAL NETWORKS',
			'TOPOLOGICAL DATA ANALYSIS'
		]
	},
	{
		id: 'exploring',
		number: '03',
		label: 'Exploring',
		paragraphs: [
			"I'm interested in the places where different fields overlap — especially when an unfamiliar idea changes how a familiar problem can be approached."
		],
		items: [
			'ASTRONOMY',
			'EMERGING AI ARCHITECTURES',
			'QUANTUM-INSPIRED OPTIMIZATION',
			'AI × OTHER DISCIPLINES'
		]
	},
	{
		id: 'working-toward',
		number: '04',
		label: 'Working toward',
		paragraphs: [],
		items: [
			'BUILDING BETTER AI SYSTEMS',
			'DEEPER UNDERSTANDING OF ML',
			'STRONGER MATHEMATICAL FOUNDATIONS',
			'TURNING EXPERIMENTS INTO USEFUL TOOLS'
		],
		closing: 'Less chasing every new technology. More understanding, building, and shipping.'
	}
];

/** Static last-updated line as specified — not dynamic. */
export const nowLastUpdated = '2026';

/** Link to the About page. */
export const nowAboutLink = '/about';
