import { motion } from "framer-motion";
import { styles } from "../../../utils/styles";
import { services } from "../../../utils/constants";
import { fadeIn, textVariant } from "../../../utils/motion";

const ServiceCard = ({ index, title, icon }: any) => (
	<motion.div
		whileHover={{
			scale: 1.1,
			background: "linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)",
			boxShadow: "0px 35px 120px -15px rgba(33, 30, 53, 0.5)",
		}}
		variants={fadeIn("right", "spring", index * 0.5, 0.75)}
		className="w-full p-[1px] rounded-[20px]"
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
		<div id="about">
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
			</div>
		</div>
	);
};

export default About;
