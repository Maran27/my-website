// Barrel for non-component library code. Components are imported by
// direct path ($lib/components/…) to keep imports explicit.
export { navItems, site, socialLinks } from './data/site';
export { featuredProjects, projects, resolveProjectDestination } from './data/projects';
export type { ProjectDestination } from './data/projects';
export { experience, formatRange } from './data/experience';
export { education, primaryEducation, earlierEducation } from './data/education';
export { certifications } from './data/certifications';
export { research } from './data/research';
export { writing } from './data/writing';
export { nowSections, nowLastUpdated, nowAboutLink } from './data/now';
export { reveal } from './actions/reveal';
export type { RevealOptions } from './actions/reveal';
export { pointerParallax } from './actions/pointerParallax';
export type { PointerParallaxOptions } from './actions/pointerParallax';
export { cn } from './utils/cn';
export { formatDate } from './utils/format';
export { canonicalUrl, createPageTitle } from './utils/seo';
export type * from './types';
