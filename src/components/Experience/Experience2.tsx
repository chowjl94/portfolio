import { motion } from "framer-motion";
import { experiences } from "../../utils/constants";
import { useEffect, useRef, useState } from "react";
import { textVariant } from "../../utils/motion";
import { styles } from "../../utils/styles";

interface Experience {
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points: string[];
}
interface ExperienceCardProps {
	experience: Experience;
	index: number;
}

const CompanyBubble = ({
	icon,
	company_name,
	leftORright,
	cardHeight,
}: {
	icon: string;
	company_name: string;
	leftORright: string;
	cardHeight: number | null;
}) => {
	const position = {
		arrowLeft: "absolute top-9 -left-6 w-4 h-4",
		arrowRight: "absolute top-9 -right-6 w-4 h-4",
		bubbleLeft: "absolute top-5 -left-24 w-14 h-14",
		bubbleRight: "absolute top-5 -right-24 w-14 h-14",
		lineLeft: `absolute -top-4 -left-40 w-[2px] bg-white`,
		lineRight: `absolute -top-4 -right-40 w-[2px] bg-white`,
	};
	const arrowPosition =
		leftORright === "right" ? position.arrowRight : position.arrowLeft;
	const bubblePosition =
		leftORright === "right" ? position.bubbleRight : position.bubbleLeft;
	const linePosition =
		leftORright === "right" ? position.lineRight : position.lineLeft;
	return (
		<div className="relative">
			<div className={arrowPosition}>
				<div className="absolute w-4 h-4 bg-gray-500 transform -rotate-45"></div>
			</div>
			<div className={bubblePosition}>
				<div className="absolute w-14 h-14 bg-gray-500 transform rounded-full border-2 border-white">
					<img
						src={icon}
						alt={company_name}
						className="absolute top-2 left-2 w-[70%] h-[70%] object-contain"
					/>
				</div>
			</div>
			<div className={linePosition} style={{ height: `${cardHeight}px` }}></div>
		</div>
	);
};

const Title = ({
	title,
	company_name,
}: {
	title: string;
	company_name: string;
}) => {
	return (
		<>
			<h3 className="text-white text-2xl font-bold ">{title}</h3>
			<p
				className="text-secondary text-lg font-semibold"
				style={{ margin: "0" }}
			>
				{company_name}
			</p>
		</>
	);
};

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const [cardHeight, setCardHeight] = useState<number | null>(null);

	const LoR = (index + 1) % 2 === 0 ? "left" : "right";
	const whileInViewXpos = index % 2 === 0 ? 200 : 800;

	useEffect(() => {
		const handleResize = () => {
			if (cardRef.current) {
				const height = cardRef.current.offsetHeight;
				setCardHeight(height);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				transition={{ ease: "easeOut", duration: 1 }}
				whileInView={{ x: whileInViewXpos, opacity: 1 }}
				viewport={{ once: true }}
				className="mb-4"
				ref={cardRef}
			>
				<div className="p-4 w-1/4 bg-gray-500 text-white min-h-[300px] max-h-[1200px] border-2">
					<CompanyBubble
						icon={experience.icon}
						company_name={experience.company_name}
						leftORright={LoR}
						cardHeight={cardHeight}
					/>

					<Title
						title={experience.title}
						company_name={experience.company_name}
					/>
					<ul className="list-disc ml-5 space-y-2 p-2">
						{experience.points.map((p) => (
							<li
								id={`experience-point-${index}`}
								className="text-white-100 text-[14px] tracking-wider"
							>
								{p}
							</li>
						))}
					</ul>
					<span className="p-4">{experience.date}</span>
				</div>
			</motion.div>
		</>
	);
};

const Experience2 = () => {
	return (
		<>
			<motion.div variants={textVariant(1)} className="mb-4">
				<h2 className={`${styles.sectionHeadText} text-center`}>
					Work Experience.
				</h2>
			</motion.div>
			{experiences.map((experience, key) => (
				<ExperienceCard key={key} experience={experience} index={key} />
			))}
		</>
	);
};

export default Experience2;
