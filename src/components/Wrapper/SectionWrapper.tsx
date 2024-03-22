import { motion } from "framer-motion";
import { styles } from "../../utils/styles";
import { staggerContainer } from "../../utils/motion";
import React from "react";

const SectionWrapper = (
	Component: React.ComponentType<any>, // Adjust the type to accept any React component
	idName: string | undefined
) => {
	return function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
			>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>

				<Component />
			</motion.section>
		);
	};
};

export default SectionWrapper;
