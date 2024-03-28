import { motion } from "framer-motion";
import CompanyBubble from "./Bubble/CompanyBubble";
import Title from "./Title/Title";
import { ExperienceCardProps } from "./type";
import { useEffect, useRef, useState } from "react";

const ExperienceCardMobile = ({ experience, index }: ExperienceCardProps) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const [cardHeight, setCardHeight] = useState<number | null>(null);
	const [cardWitdh, setCardWidth] = useState<number | null>(null);
	const [componentWidth, setComponentWidth] = useState<number | null>(null);

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
		<div className="pl-8 pb-4 overflow-hidden xl:hidden">
			<motion.div
				initial={{ opacity: 0, scale: 0.7 }}
				transition={{ ease: "easeOut", duration: 0.7 }}
				whileInView={{ x: 0, opacity: 1, scale: 1 }}
				viewport={{ once: true }}
			>
				<div
					className="p-4 w-4/6 lg:w-4/6 md:w-4/6 sm:w-4/6 xs:w-3/6 bg-tertiary text-white min-h-[300px] max-h-[1400px] border-2"
					ref={cardRef}
					style={{
						borderImage: "linear-gradient(90deg, #00cea8, #bf61ff) 2",
						borderImageSlice: "2",
					}}
				>
					<CompanyBubble
						icon={experience.icon}
						company_name={experience.company_name}
						leftORright={"right"}
						cardHeight={cardHeight}
					/>

					<Title
						title={experience.title}
						company_name={experience.company_name}
					/>
					<ul className="list-disc ml-2 space-y-2 p-2">
						{experience.points.map((p) => (
							<li
								id={`experience-point-${index}`}
								className="text-white-100 text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[10px] tracking-wider"
							>
								{p}
							</li>
						))}
					</ul>
					<span className="p-4 text-[14px] lg:text-[18px] md:text-[18px] sm:text-[16px] xs:text-[14px]">
						{experience.date}
					</span>
				</div>
			</motion.div>
		</div>
	);
};

export default ExperienceCardMobile;
