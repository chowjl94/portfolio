import BallCanvas from "../../UI/canvas/Ball";
import SectionWrapper from "../../Wrapper/SectionWrapper";
import { technologies } from "../../../utils/constants";
import { motion } from "framer-motion";
import { styles } from "../../../utils/styles";
import { textVariant } from "../../../utils/motion";
import FramermotionScroll from "../Hero/FramermotionScroll";

const Technology = () => {
	return (
		<div id="Tech">
			<div className="flex flex-row justify-between items-center p-10">
				<motion.div variants={textVariant(0.5)} className="p-10">
					<p className={styles.sectionSubText}>Click them!</p>
					<h2 className={styles.sectionHeadText}>Tech Stack</h2>
				</motion.div>
				<div className="items-center">
					<FramermotionScroll scrollTo="Project" abs={false} />
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
				{technologies.map((technology) => (
					<div
						className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
						key={technology.name}
					>
						<BallCanvas icon={technology.icon} name={technology.name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Technology, "");
