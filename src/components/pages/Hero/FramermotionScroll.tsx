import { motion } from "framer-motion";

const FramermotionScroll = ({ scrollTo }: { scrollTo: string }) => {
	const scrollTarget = `#${scrollTo}`;
	return (
		<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
