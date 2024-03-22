import { motion } from "framer-motion";
import { styles } from "../../utils/styles";
import { services } from "../../utils/constants";
import { fadeIn, textVariant } from "../../utils/motion";
// import StarWrapper from "./SectionWrapper";

const ServiceCard = ({ index, title, icon }: any) => (
	<motion.div
		whileHover={{ scale: 1.2 }}
		variants={fadeIn("right", "spring", index * 0.5, 0.75)}
		className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
	>
		<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
			<img
				src={icon}
				alt="web-development"
				className="w-16 h-16 object-contain"
			/>

			<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
		</div>
	</motion.div>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant(0.5)} className="p-10">
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				animate={{ x: [0, 100, 0] }}
				className="text-secondary text-[17px] leading-[30px] w-full pl-10 pr-5"
			>
				I'm a passionate web developer fluent in the languages of TypeScript,
				JavaScript and Python. I enjoy dabbling in projects with frameworks and
				libraries like NextJs, Django and Three.js and many more. With an
				insatiable thirst for learning, I enthusiatic about building things into
				vibrant, scalable, and intuitive solutions that tackle real-world
				challenges head-on. Let's join forces and breathe life into your ideas!
			</motion.p>

			<div className="mt-20 grid grid-cols-3 gap-10 p-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}

				<div className="w-48 h-72 bg-white rounded-lg shadow-md transform transition-transform ease-in-out hover:rotate-3">
					<div className="p-5">
						<h2 className="text-xl font-semibold">Title</h2>
						<p className="text-sm text-gray-700">Description</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
