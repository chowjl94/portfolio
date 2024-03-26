import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../../Wrapper/SectionWrapper";
import { slideIn } from "../../../utils/motion";
import { styles } from "../../../utils/styles";
import Form from "./Form";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_EJS_SERVICE_KEY,
				import.meta.env.VITE_EJS_TEMPLATE_KEY,
				{
					from_name: form.name,
					to_name: "Jing Lun",
					from_email: form.email,
					to_email: "chowjl94@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_EJS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible.");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert("Ahh, something went wrong. Please try again.");
				}
			);
	};

	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden w-full min-w-full`}
		>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact Me</h3>
				<Form
					formRef={formRef}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					formData={form}
					loading={loading}
				/>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
