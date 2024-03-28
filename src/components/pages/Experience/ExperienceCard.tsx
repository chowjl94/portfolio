import { motion } from "framer-motion";
import CompanyBubble from "./Bubble/CompanyBubble";
import Title from "./Title/Title";
import { ExperienceCardProps } from "./type";
import { useEffect, useRef, useState } from "react";

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const [cardHeight, setCardHeight] = useState<number | null>(20);
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
		<div className="w-full overflow-hidden hidden xl:block">
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
