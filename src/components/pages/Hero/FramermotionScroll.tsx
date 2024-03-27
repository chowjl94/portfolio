import { motion } from "framer-motion";

const FramermotionScroll = ({
	scrollTo,
	abs,
}: {
	scrollTo: string;
	abs: boolean;
}) => {
	const scrollTarget = `#${scrollTo}`;
	const parentCss = abs
		? "absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
		: "flex xs:bottom-10 bottom-32 w-full flex justify-center items-center";
	return (
		<div className={parentCss}>
			<a href={scrollTarget}>
				<div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#f5f5f7] flex justify-center items-start p-2">
					<motion.div
						animate={{
							y: [0, 20, 0],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							repeatType: "loop",
						}}
						className="w-3 h-3 rounded-full bg-[#f5f5f7] mb-1"
					/>
				</div>
			</a>
		</div>
	);
};

export default FramermotionScroll;
