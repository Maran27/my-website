import type { Education } from '$lib/types';

/**
 * Education content — Milestone 5.
 * Verbatim as provided. No specializations, ranks, awards, coursework,
 * scholarships or achievements have been added.
 */
export const education: Education[] = [
	{
		id: 'integrated-mtech-vit',
		duration: '2018 — 2023',
		degree: 'Integrated M.Tech',
		field: 'Software Engineering',
		school: 'Vellore Institute of Technology',
		location: 'Vellore',
		score: '9.18 / 10',
		primary: true
	},
	{
		id: 'hsc-velammal-2018',
		duration: '2018',
		degree: '12th Grade',
		field: null,
		school: 'Velammal Matric Higher Secondary School, Madurai',
		location: null,
		score: '1103 / 1200 · 92%',
		primary: false
	},
	{
		id: 'sslc-velammal-2016',
		duration: '2016',
		degree: '10th Grade',
		field: null,
		school: 'Velammal Matric Higher Secondary School, Madurai',
		location: null,
		score: '469 / 500 · 94%',
		primary: false
	}
];

export const primaryEducation: Education[] = education.filter((entry) => entry.primary);

export const earlierEducation: Education[] = education.filter((entry) => !entry.primary);
