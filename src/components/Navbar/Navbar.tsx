import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../utils/styles";
import { navLinks } from "../../utils/constants";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`${
				styles.paddingX
			} w-full flex items-center py-5 fixed top-0 z-20 ${
				scrolled ? "bg-primary" : "bg-transparent"
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					{/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
					<p className="text-white text-[18px] font-bold cursor-pointer flex ">
						Chow &nbsp;
						<span className="sm:block hidden"> | Web Dev</span>
					</p>
				</Link>

				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`${
								active === nav.title ? "text-white" : "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				<NavbarMobile
					toggle={toggle}
					setToggle={setToggle}
					active={active}
					setActive={setActive}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
