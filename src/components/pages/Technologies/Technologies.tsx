import BallCanvas from "../../UI/canvas/Ball";
import SectionWrapper from "../../Wrapper/SectionWrapper";
import { technologies } from "../../../utils/constants";

const Technology = () => {
	return (
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
	);
};

export default SectionWrapper(Technology, "");
