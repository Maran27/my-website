import type { ResearchEntry } from '$lib/types';

/**
 * Research and exploration notes. Entries describe work, directions and
 * technical questions rather than implying peer-reviewed publication status.
 */
export const research: ResearchEntry[] = [
	{
		slug: 'vehicle-trajectory-prediction',
		title: 'Vehicle Trajectory Prediction with Spatial-Temporal Attention',
		venue: 'Applied machine learning research',
		year: '2022 — 2023',
		summary:
			'Explored LSTM-based trajectory prediction, spatial-temporal attention and federated learning for vehicle motion modelling using traffic simulation data.',
		authors: []
	},
	{
		slug: 'paper-to-project-agents',
		title: 'Paper-to-Project Agents',
		venue: 'Technical exploration',
		year: '2026',
		summary:
			'Exploring how a multi-agent system can turn research papers into reproducible software projects while explicitly surfacing missing implementation details and uncertainty.',
		authors: []
	},
	{
		slug: 'liquid-neural-networks',
		title: 'Liquid Neural Networks',
		venue: 'Ongoing exploration',
		year: '2026',
		summary:
			'Investigating adaptive neural dynamics, compact sequence models and where continuous-time approaches could be useful beyond conventional deep learning architectures.',
		authors: []
	},
	{
		slug: 'topological-data-analysis',
		title: 'Topological Data Analysis for Machine Learning',
		venue: 'Ongoing exploration',
		year: '2026',
		summary:
			'Learning how topology can expose structure in high-dimensional data and how those representations might complement modern machine learning pipelines.',
		authors: []
	},
	{
		slug: 'quantum-inspired-optimization',
		title: 'Quantum-Inspired Optimization for AI Systems',
		venue: 'Technical exploration',
		year: '2026',
		summary:
			'Exploring QUBO formulations and classical quantum-inspired optimization methods for constrained decision and risk-intelligence problems.',
		authors: []
	}
];
