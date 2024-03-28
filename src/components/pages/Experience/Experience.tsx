import { motion } from "framer-motion";
import { experiences } from "../../../utils/constants";
import { textVariant } from "../../../utils/motion";
import { styles } from "../../../utils/styles";
import FramermotionScroll from "../Hero/FramermotionScroll";
import ExperiencePointer from "./ExperiencePointer";

const Experience = () => {
	return (
		<div className="w-full">
			<span className="hash-span" id={"Experience"}>
				&nbsp;
			</span>
			<div className="px-4 overflowX-hidden">
				<div className="flex flex-row justify-between items-center p-10">
					<motion.div variants={textVariant(0.5)} className="mb-4">
						<h2 className={`${styles.sectionHeadText} text-center`}>
							Work Experience
						</h2>
					</motion.div>
					<div className="items-center">
						<FramermotionScroll scrollTo="Tech" abs={false} />
					</div>
				</div>

				{experiences.map((experience, key) => (
					<ExperiencePointer key={key} experience={experience} index={key} />
				))}
			</div>
		</div>
	);
};

export default Experience;
