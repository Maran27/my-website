import type { Project } from '$lib/types';

/**
 * Featured projects. URLs are `null` until real destinations exist.
 * No metrics, users, claims, repositories or demo links are invented;
 * every URL is `null` until real destinations exist.
 */
export const projects: Project[] = [
	{
		id: 'q-audit-plus',
		number: '01',
		title: 'Q-Audit+',
		shortTitle: 'Q-Audit+',
		description: 'Quantum-inspired risk intelligence concept for MSME supply chains.',
		category: 'Risk intelligence',
		technologies: ['GenAI', 'Optimization', 'QUBO'],
		status: 'Temporary preview',
		featured: true,
		githubUrl: null,
		demoUrl: null,
		caseStudyUrl: null,
		visualType: 'risk-intelligence',
		temporary: true
	},
	{
		id: 'document-intelligence',
		number: '02',
		title: 'Document Intelligence',
		shortTitle: 'Document Intelligence',
		description:
			'Intelligent document processing pipeline for classification, extraction and validation.',
		category: 'Document AI',
		technologies: ['Document AI', 'OCR', 'NLP', 'LLMs'],
		status: 'Temporary preview',
		featured: true,
		githubUrl: null,
		demoUrl: null,
		caseStudyUrl: null,
		visualType: 'document-pipeline',
		temporary: true
	},
	{
		id: 'rag-intelligence-platform',
		number: '03',
		title: 'RAG Intelligence Platform',
		shortTitle: 'RAG Platform',
		description:
			'Retrieval-augmented application for enterprise knowledge retrieval and AI-powered question answering.',
		category: 'Knowledge retrieval',
		technologies: ['RAG', 'LLMs', 'FastAPI', 'Vector Search'],
		status: 'Temporary preview',
		featured: true,
		githubUrl: null,
		demoUrl: null,
		caseStudyUrl: null,
		visualType: 'rag-pipeline',
		temporary: true
	}
];

export const featuredProjects: Project[] = projects.filter((project) => project.featured);

export interface ProjectDestination {
	href: string;
	external: boolean;
}

/**
 * Structural prep for future case-study routes. Prefers the case study,
 * then demo, then repository. Returns `null` when nothing real exists yet —
 * callers must render a non-link affordance instead of a broken link.
 */
export function resolveProjectDestination(project: Project): ProjectDestination | null {
	if (project.caseStudyUrl) return { href: project.caseStudyUrl, external: false };
	if (project.demoUrl) return { href: project.demoUrl, external: true };
	if (project.githubUrl) return { href: project.githubUrl, external: true };
	return null;
}
