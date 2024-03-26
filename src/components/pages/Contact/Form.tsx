import { ChangeEvent, FormEvent } from "react";
import { LabelTextarea, LabelInputs } from "./Labels";

type Props = {
	formRef: any;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	handleChange: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	formData: {
		name: string;
		email: string;
		message: string;
	};
	loading: any;
};

const LABELS = [
	{
		span: "Your Name",
		type: "text",
		name: "name",
		placeHolder: "eg. Jane Doe",
	},
	{
		span: "Your email",
		type: "email",
		name: "email",
		placeHolder: "example@gmail.com",
	},
];

const ContactForm = ({
	formRef,
	handleSubmit,
	handleChange,
	formData,
	loading,
}: Props) => {
	return (
		<>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="mt-12 flex flex-col gap-8"
			>
				{LABELS.map((label) => {
					return (
						<LabelInputs
							span={label.span}
							type={label.type}
							name={label.name}
							formData={formData}
							onChange={handleChange}
							placeholder={label.placeHolder}
						/>
					);
				})}
				<LabelTextarea
					span={"Your Message"}
					name={"message"}
					formData={formData}
					handleChange={handleChange}
					placeholder={"Leave me a message"}
				/>

				<button
					type="submit"
					className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
				>
					{loading ? "Sending..." : "Send"}
				</button>
			</form>
		</>
	);
};

export default ContactForm;
