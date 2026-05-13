export type Project = {
	title: string;
	tagline: string;
	description: string;
	href?: string;
	initials?: string;
	status: "live" | "in progress" | "archived";
};

export const projects: Project[] = [
	{
		title: "Decision Timeline",
		tagline: "CLI for indexing architectural decisions",
		description:
			"Query git history with natural language to surface why past decisions were made.",
		href: "https://github.com/alek-karp",
		initials: "DT",
		status: "in progress",
	},
	{
		title: "Purple Lotus",
		tagline: "Find a therapist you actually feel good about",
		description:
			"Canadian directory to search verified therapists by specialty and location.",
		href: "https://purplelotusmh.com/",
		initials: "PL",
		status: "live",
	},
];
