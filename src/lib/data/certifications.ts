import type { Certification } from '$lib/types';

/**
 * Certification content — Milestone 5.
 * Only the name and issuer are known. Date, credential ID and URL remain
 * `null` until real values exist; components must not render links or
 * dates from null fields.
 */
export const certifications: Certification[] = [
	{
		id: 'aws-certified-cloud-practitioner',
		name: 'AWS Certified Cloud Practitioner',
		issuer: 'Amazon Web Services',
		date: null,
		credentialId: null,
		credentialUrl: null
	}
];
