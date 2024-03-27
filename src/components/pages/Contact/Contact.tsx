import { motion } from "framer-motion";
import SectionWrapper from "../../Wrapper/SectionWrapper";
import { styles } from "../../../utils/styles";
import { fadeIn } from "../../../utils/motion";
import { Github, Linkedin, Smartphone, Mail } from "lucide-react";

const SOCIALS = [
	{ text: "Github", icon: <Github />, link: "https://github.com/chowjl94" },
	{
		text: "LinkedIn",
		icon: <Linkedin />,
		link: "www.linkedin.com/in/chowjinglun",
	},
	{ text: "Contact", icon: <Smartphone />, link: "+65 91283531" },
	{ text: "Mail", icon: <Mail />, link: "chowjl94@gmail.com" },
];

const ContactCard = ({
	text,
	icon,
	link,
}: {
	text: string;
	icon: any;
	link?: string;
}) => {
	return (
		<div className="flex flex-col items-center justify-between border-2 rounded-md p-4 w-64 h-32">
			<h3 className="text-white text-[14px] font-bol123d">{text}</h3>
			<div className="flex items-center justify-center">{icon}</div>
			<div className="flex items-center text-[14px] justify-center">{link}</div>
		</div>
	);
};

const Contact = () => {
	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden w-full min-w-full`}
		>
			<motion.div
				variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
				className="w-full p-[1px] rounded-[20px]"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h1 className={styles.sectionHeadText}>Socials</h1>
				<div className="bg-tertiary rounded-[20px]  min-h-[140px] flex justify-evenly flex-col">
					<div className="grid grid-cols-4 justify-items-center p-4">
						{SOCIALS.slice(0, 2).map((social, index) => (
							<a
								key={index}
								href={social.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<ContactCard
									text={social.text}
									icon={social.icon}
									link={social.link}
								/>
							</a>
						))}
						{SOCIALS.slice(2, 4).map((social) => (
							<ContactCard
								text={social.text}
								icon={social.icon}
								link={social.link}
							/>
						))}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "Socials");
