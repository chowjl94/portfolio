import { motion } from "framer-motion";
import { styles } from "../../../utils/styles";
import { projects } from "../../../utils/constants";
import SectionWrapper from "../../Wrapper/SectionWrapper";
import { fadeIn, textVariant } from "../../../utils/motion";
import { github } from "../../../assets";

type Project = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link: string;
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}: Project) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<div className="mb-5">
				<h3 className="text-white font-bold text-[24px]">{name}</h3>
				<p className="mt-2 text-secondary text-[14px]">{description}</p>
			</div>
			<div className="relative w-full h-[230px]">
				<motion.div
					whileHover={{ scale: 1.05 }}
					className="relative w-full h-full rounded-2xl border-white border-2"
				>
					<img
						src={image}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>
				</motion.div>

				<div className="absolute left-2 top-0 flex justify-end m-3 card-img_hover">
					<div
						onClick={() => window.open(source_code_link, "_blank")}
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer  border border-transparent hover:border-white"
					>
						<img
							src={github}
							alt="source code"
							className="w-1/2 h-1/2 object-contain"
						/>
					</div>
				</div>
			</div>

			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
						#{tag.name}
					</p>
				))}
			</div>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant(0.5)}>
				<p className={`${styles.sectionSubText} `}>My work</p>
				<h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
			</motion.div>

			<motion.p
				animate={{ x: [0, 100, 0] }}
				className="text-secondary text-[17px] leading-[30px] w-full"
			>
				Below are the various projects that I have worked on myself , they are
				examples of my work and each project is briefly described below. Feel
				free to explore the websites that, and allow me to showcase how i solve
				problems and build projects with various technologies
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "Project");
