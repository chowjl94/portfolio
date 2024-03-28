const Title = ({
	title,
	company_name,
}: {
	title: string;
	company_name: string;
}) => {
	return (
		<>
			<h3 className="text-white-100 text-[16px] lg:text-[22px] md:text-[22px] sm:text-[20px] xs:text-[18px] font-bold">
				{title}
			</h3>
			<p
				className="text-secondary text-[14px] lg:text-[18px] md:text-[18px] sm:text-[16px] xs:text-[14px] font-semibold"
				style={{ margin: "0" }}
			>
				{company_name}
			</p>
		</>
	);
};

export default Title;
