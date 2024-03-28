import { useEffect, useRef, useState } from "react";
import ExperienceCardMobile from "./ExperienceCardMobile";
import ExperienceCard from "./ExperienceCard";
import { ExperiencePointerProps } from "./type";

const ExperiencePointer = ({ experience, index }: ExperiencePointerProps) => {
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
				console.log(cardRef.current);
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
		<>
			<ExperienceCard
				experience={experience}
				index={index}
				whileInViewXpos={whileInViewXpos}
				cardRef={cardRef}
				LoR={LoR}
				cardHeight={cardHeight!}
			/>
			<ExperienceCardMobile
				experience={experience}
				index={index}
				whileInViewXpos={0}
				cardRef={cardRef}
				LoR={"right"}
				cardHeight={cardHeight!}
			/>
		</>
	);
};

export default ExperiencePointer;
