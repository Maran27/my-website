import type { NavItem, SiteMetadata, SocialLink } from '$lib/types';

/**
 * Site identity. Values here are the confirmed facts from the brief —
 * nothing invented. Content collections (projects, experience,
 * certifications, research) arrive as structured data in later milestones.
 */
export const site: SiteMetadata = {
	name: 'Maran A',
	title: 'AI Engineer',
	location: 'Chennai, India',
	description: 'Maran A — AI Engineer based in Chennai, India.',
	url: 'https://maran-arunmozhi.netlify.app',
	locale: 'en_IN'
};

export const navItems: NavItem[] = [
	{ label: 'Projects', href: '/projects' },
	{ label: 'Research', href: '/research' },
	{ label: 'Writing', href: '/writing' },
	{ label: 'About', href: '/about' },
	{ label: 'Now', href: '/now' },
	{ label: 'Resume', href: '/resume.pdf', variant: 'action' }
];

/** Populate with real profile URLs only — no placeholders. */
export const socialLinks: SocialLink[] = [];
