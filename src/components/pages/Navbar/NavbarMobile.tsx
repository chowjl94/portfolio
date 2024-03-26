import { navLinks } from "../../../utils/constants";
import { menu, close } from "../../../assets";

type Props = {
	toggle: boolean;
	setToggle: (value: boolean) => void;
	active: string;
	setActive: (value: string) => void;
};

const NavbarMobile = ({ toggle, setToggle, active, setActive }: Props) => {
	return (
		<div className="sm:hidden flex flex-1 justify-end items-center">
			<img
				src={toggle ? close : menu}
				alt="menu"
				className="w-[28px] h-[28px] object-contain"
				onClick={() => setToggle(!toggle)}
			/>

			<div
				className={`${
					!toggle ? "hidden" : "flex"
				} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
			>
				<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`font-poppins font-medium cursor-pointer text-[16px] ${
								active === nav.title ? "text-white" : "text-secondary"
							}`}
							onClick={() => {
								setToggle(!toggle);
								setActive(nav.title);
							}}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default NavbarMobile;
