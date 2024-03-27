import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
		lineLeft: `absolute -top-4 -left-40 w-[4px] bg-white`,
		lineRight: `absolute -top-4 -right-40 w-[4px] bg-white`,
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
				<div className="absolute w-4 h-4 bg-tertiary transform -rotate-45"></div>
			</div>
			<div className={bubblePosition}>
				<div className="absolute w-14 h-14 bg-tertiary transform rounded-full border-2 ">
					<img
						src={icon}
						alt={company_name}
						className="absolute top-2 left-2 w-[70%] h-[70%] object-contain"
					/>
				</div>
			</div>
			<div className={linePosition} style={{ height: `${cardHeight}px` }}>
				<div className="absolute w-5 h-5 -top-5 -left-2 bg-white transform -rotate-45"></div>
			</div>
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
	const [cardWitdh, setCardWidth] = useState<number | null>(null);
	const [componentWidth, setComponentWidth] = useState<number | null>(null);

	const LoR = (index + 1) % 2 === 0 ? "left" : "right";
	const whileInViewXpos =
		index % 2 === 0
			? componentWidth! / 2
			: componentWidth! / 2 + cardWitdh! + 280;

	useEffect(() => {
		const handleResize = () => {
			if (cardRef.current) {
				setCardHeight(cardRef.current.offsetHeight);
				setCardWidth(cardRef.current.offsetWidth);
				setComponentWidth(cardRef.current.offsetWidth + 140);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="w-full overflow-hidden">
			<motion.div
				initial={{ opacity: 0, scale: 0.7 }}
				transition={{ ease: "easeOut", duration: 0.7 }}
				whileInView={{ x: whileInViewXpos, opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				className="w-full"
				style={{ minWidth: "100vw" }}
			>
				<div
					className="p-4 w-1/4 bg-tertiary text-white min-h-[300px] max-h-[1200px] border-2 "
					ref={cardRef}
					style={{
						borderImage: "linear-gradient(90deg, #00cea8, #bf61ff) 2",
						borderImageSlice: "2",
					}}
				>
					<CompanyBubble
						icon={experience.icon}
						company_name={experience.company_name}
						leftORright={LoR}
						cardHeight={cardHeight!}
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
		</div>
	);
};

export default ExperienceCard;
