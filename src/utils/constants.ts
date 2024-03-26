import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	carrent,
	jobit,
	tripguide,
	threejs,
	posh,
	tvc,
	inmagine,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Frontend Development",
		icon: mobile,
	},
	{
		title: "Backend Developement",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Business Intelligence Analyst",
		company_name: "PACC Offshore Services Holding",
		icon: posh,
		iconBg: "#383E56",
		date: "July 2020 - June 2021",
		points: [
			"Created data framework of finance metrics dashboard using the identified performance metrics for operations, commercial stakeholders",
			"Develop, refine and review a set of traffic light based management dashboards with back-end integration to operations system and data files.",
		],
	},
	{
		title: "Full - Stack Developer",
		company_name: "TVConal",
		icon: tvc,
		iconBg: "#E6DEDD",
		date: "Jun 2021 - July 2022",
		points: [
			"Developed mobile responsive UI/UX , React using Bootstrap for Player Management dashboard app. ",
			"Developed , maintained and integrated CRUD , media upload , canvas annotation APIs with Django for Player Management app.",
			"Implemented tier-based access control for backend microservice and front end UI/UX in Player Management Web App for Cricket South Africa comprising of over 100 coaches, players, analysts.",
			"Responsible for refactoring frontend to ES7 , React 16.8 with the implementation of react hooks in Match Prediction Analytics app.",
			"Implemented and integrated Slack APIs to monitor accuracy and frequency of outputs from data generated from inhouse predictive analytic models",
		],
	},
	{
		title: "Frontend Developer",
		company_name: "INMAGINE Labs",
		icon: inmagine,
		iconBg: "#383E56",
		date: "May 2023 - Nov 2023",
		points: [
			"Contributed to development of custom Material-UI components for UI redesign of AI Writer app next.js",
			"Implemented and maintained state management Zustand , for smooth application behavior",
			"Developed and maintained responsive UI/UX for mobile/desktop platforms using Material-UI",
			"Collaborated with back- end developers to ensure API integration of front- end and back- end systems",
			"Actively participated in agile development processes and sprint planning",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
