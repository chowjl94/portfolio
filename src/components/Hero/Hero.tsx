import ComputersCanvas from "../canvas/Computers";
import { styles } from "../../utils/styles";
import FramermotionScroll from "./FramermotionScroll";

const Hero = () => {
	return (
		<section className={`relative w-full h-screen mx-auto`}>
			<div
				className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				{/* <div className="flex flex-col justify-center items-center mt-5">
					<div className={`w-5 h-5 rounded-full bg-[${fontColor}]`} />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div> */}

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className={`text-blue-500`}>Jing Lun</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						Web dev enthusiast <br className="sm:block hidden" />
						with a passion for developing web applications
					</p>
				</div>
			</div>

			<ComputersCanvas />

			<FramermotionScroll />
		</section>
	);
};

export default Hero;
