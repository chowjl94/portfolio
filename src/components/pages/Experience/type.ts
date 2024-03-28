export interface Experience {
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points: string[];
}

export interface ExperienceCardProps extends ExperiencePointerProps {
	whileInViewXpos?: number;
	cardRef?: React.RefObject<HTMLDivElement>;
	LoR?: string;
	cardHeight?: number;
}

export interface ExperiencePointerProps {
	experience: Experience;
	index: number;
}
