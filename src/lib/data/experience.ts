import type { Experience } from '$lib/types';

/**
 * Experience content — Milestone 4.
 * Verbatim career history as provided. No metrics, awards, team sizes,
 * business impact figures or unlisted technologies have been added.
 * Ordered newest-first for the progression narrative.
 */
export const experience: Experience[] = [
	{
		id: 'ai-engineer-tcs',
		year: '2025',
		startDate: 'Jan 2025',
		endDate: null,
		current: true,
		role: 'AI Engineer',
		company: 'Tata Consultancy Services',
		location: 'India',
		summary:
			'Designing and deploying AI-driven solutions across machine learning, computer vision, NLP, generative AI and intelligent automation.',
		technologies: [
			'Python',
			'Machine Learning',
			'Deep Learning',
			'Computer Vision',
			'NLP',
			'LLMs',
			'RAG',
			'Document AI',
			'FastAPI',
			'AWS',
			'GCP'
		],
		highlights: [
			'Designed and developed AI-driven enterprise solutions using Python, Machine Learning, Deep Learning, Computer Vision, NLP, LLMs and Document AI.',
			'Built intelligent document-processing solutions using Google Document AI and Gemini for classification, extraction, validation and workflow automation.',
			'Developed a Retrieval-Augmented Generation application using LLMs, vector databases and FastAPI for enterprise knowledge retrieval.',
			'Developed machine-learning-based resource allocation solutions for airport lounge operations.',
			'Built serverless ETL pipelines using AWS Lambda and Python for enterprise data processing.',
			'Developed OCR, NER and computer vision pipelines for automated extraction and validation.'
		],
		category: 'AI ENGINEERING'
	},
	{
		id: 'systems-engineer-tcs',
		year: '2023',
		startDate: 'Aug 2023',
		endDate: 'Dec 2024',
		current: false,
		role: 'Systems Engineer',
		company: 'Tata Consultancy Services',
		location: 'India',
		summary:
			'Worked across enterprise infrastructure, production operations and automation while building Python- and AI-driven solutions to improve operational workflows.',
		technologies: [
			'Python',
			'Automation',
			'LLMs',
			'RAG',
			'Enterprise Systems',
			'Production Operations'
		],
		highlights: [
			'Monitored enterprise infrastructure and critical business applications.',
			'Managed production incidents and supported Major Incident Management activities.',
			'Automated repetitive operational tasks using Python, LLMs and RAG.',
			'Worked across monitoring, incident management, change management and production validation.'
		],
		category: 'SYSTEMS ENGINEERING'
	},
	{
		id: 'ml-engineer-intern-continental',
		year: '2022',
		startDate: 'Sep 2022',
		endDate: 'Jul 2023',
		current: false,
		role: 'Machine Learning Engineer Intern',
		company: 'Continental Autonomous Mobility',
		location: 'India',
		summary:
			'Developed deep learning and federated learning approaches for vehicle trajectory prediction using spatial-temporal modelling.',
		technologies: [
			'Python',
			'PyTorch',
			'Flower',
			'LSTM',
			'Attention',
			'Federated Learning',
			'Deep Learning'
		],
		highlights: [
			'Developed an LSTM-based vehicle trajectory prediction model with spatial-temporal attention.',
			'Implemented federated learning approaches for privacy-preserving model training across distributed datasets.',
			'Processed NGSIM traffic datasets for model training and evaluation.',
			'Simulated traffic scenarios to evaluate model robustness and generalization.'
		],
		category: 'MACHINE LEARNING'
	}
];

/** Display range, e.g. `'Jan 2025 — Present'`. */
export function formatRange(entry: Experience): string {
	return `${entry.startDate} — ${entry.endDate ?? 'Present'}`;
}
