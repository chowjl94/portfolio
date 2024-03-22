import { experiences } from "../../utils/constants";

const Experience2 = () => {
	const events = experiences;
	return (
		<div className="w-full">
			{events.map((event, index) => (
				<div key={index} className="flex mb-4">
					<div className="w-4 h-4 bg-gray-700 rounded-full"></div>
					<div className="ml-4">
						<h3 className="text-lg font-bold mb-1">{event.title}</h3>
						{/* <p className="text-base mb-1">{event.description}</p> */}
						<span className="text-sm text-gray-600">{event.date}</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default Experience2;
