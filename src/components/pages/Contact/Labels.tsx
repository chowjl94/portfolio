import { ChangeEvent } from "react";

export const LabelInputs = ({
	span,
	type,
	name,
	formData,
	onChange,
	placeholder,
}: {
	span: string;
	type: string;
	name: string;
	formData: {
		name: string;
		email: string;
		message: string;
	};
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	placeholder: string;
}) => {
	return (
		<>
			<label className="flex flex-col">
				<span className="text-white font-medium mb-4">{span}</span>
				<input
					type={type}
					name={name}
					value={formData.name}
					onChange={onChange}
					placeholder={placeholder}
					className="bg-tertiary py-4 px-6 placeholder-gray-500 text-secondary text-white rounded-lg outline-none border-none font-medium"
				/>
			</label>
		</>
	);
};

export const LabelTextarea = ({
	span,
	name,
	formData,
	handleChange,
	placeholder,
}: {
	span: string;
	name: string;
	formData: {
		name: string;
		email: string;
		message: string;
	};
	handleChange: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	placeholder: string;
}) => {
	return (
		<label className="flex flex-col">
			<span className="text-white font-medium mb-4">{span}</span>
			<textarea
				rows={7}
				name={name}
				value={formData.message}
				onChange={handleChange}
				placeholder={placeholder}
				className="bg-tertiary py-4 px-6 placeholder-gray-500 text-white rounded-lg outline-none border-none font-medium"
			/>
		</label>
	);
};
