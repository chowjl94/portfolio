import BallCanvas from "../../UI/canvas/Ball";
import SectionWrapper from "../../Wrapper/SectionWrapper";
import { technologies } from "../../../utils/constants";

const Technology = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-20">
			{technologies.map((technology) => (
				<div className="w-28 h-28" key={technology.name}>
					<BallCanvas icon={technology.icon} name={technology.name} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Technology, "");
