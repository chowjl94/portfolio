import { position } from "../constants";

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
			<div className={linePosition} style={{ height: `${cardHeight! + 20}px` }}>
				<div className="absolute w-5 h-5 -top-5 -left-2 bg-white transform -rotate-45"></div>
			</div>
		</div>
	);
};

export default CompanyBubble;
