import { Link } from "react-router-dom";
import logo from "../../assets/logo-256.png";
import { useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import MobileItem from "./MobileItem";
import { AnimatePresence, motion } from "framer-motion";
import LoginButton from "../login/LoginButton";
import ProfileButton from "../login/ProfileButton";
import { Sling as Hamburger } from "hamburger-react";

// Framer motion variants
const container = {
	open: {
		x: 0,
		transition: {
			type: "tween",
			duration: 0.35,
			ease: "easeOut",
			delayChildren: 0.15,
			staggerChildren: 0.18,
		},
	},
	closed: {
		x: 450,
	},
};

const login = {
	open: {
		y: 0,
		opacity: 1,
		transition: { y: { type: "spring", stiffness: 35, velocity: -100 } },
	},
	closed: {
		y: 20,
		opacity: 0,
	},
};

const buttons = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			duration: 0.35,
			ease: "easeOut",
			staggerChildren: 0.12,
		},
	},
	closed: {
		y: 20,
		opacity: 0,
	},
};

const MobileNav = (props) => {
	const [toggled, setToggled] = useState(false);

	return (
		<div className="md:hidden">
			{/* Side nav */}
			<AnimatePresence>
				{toggled && (
					<RemoveScroll>
						{/* Main container */}
						<motion.div
							variants={container}
							initial="closed"
							animate="open"
							exit={{ x: 450, transition: { type: "tween", duration: 0.3, ease: "easeOut" } }}
							className="absolute right-0 top-0 h-dvh w-3/5 bg-whiteish opacity-[97%] z-20 rounded-l-2xl">
							{/* Close button */}
							<div className="h-20 px-5 items-center flex">
								<img src={logo} className="w-10 opacity-50" alt="" />
							</div>
							{/* Login button */}
							<div className="h-24 border-y-2 flex items-center justify-center">
								<motion.div variants={login}>
									{props.isLoading ? (
										<div className="h-11 w-[7.6rem] animate-pulseLight rounded-xl bg-blackishLight opacity-30" />
									) : (
										<>
											{props.user && Object.keys(props.user).length ? (
												<ProfileButton
													discord={props.user.discord}
													textEnable={true}
													rounded={true}
												/>
											) : (
												<LoginButton
													hover="hover:scale-[1.03] hover:shadow-custom4 hover:shadow-[#000000] hover:bg-whiteish hover:text-blackishLight group "
													default={
														" w-[11rem] h-[3.4rem] bg-blackishLight rounded-[0.75rem] border-2 border-blackishLight lg:w-[7.6rem] lg:rounded-xl"
													}
													textEnable={true}
													changeIcon={true}
												/>
											)}
										</>
									)}
								</motion.div>
							</div>
							{/* Buttons */}
							<motion.div variants={buttons} className="flex flex-col gap-2 py-4 px-2">
								{props.items.map((e, i) => {
									return <MobileItem key={i} item={e} setToggled={() => setToggled(false)} />;
								})}
							</motion.div>
						</motion.div>
						{/* Dark background */}
						<motion.div
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							onClick={() => setToggled(false)}
							className="bg-black bg-opacity-50 w-full h-full absolute z-10"></motion.div>
					</RemoveScroll>
				)}
			</AnimatePresence>
			{/* Navbar */}
			<div className="flex h-[3.90rem] w-full content-center justify-between bg-[#f8f8f8] py-2 px-6">
				<Link to="/">
					<div className="h-full md:w-32 lg:w-64 flex gap-6 items-center">
						<img
							src={logo}
							alt=""
							className="max-h-full opacity-90 duration-150 hover:scale-[1.04] hover:opacity-100"
						/>
						<div className="border-r-2 h-2/3 border-black opacity-50" />
						<h1 className="text-xl font-poppins font-bold text-blackishDarkest tracking-wider">
							THUNDERBLAZE
						</h1>
					</div>
				</Link>
				<div
					className={
						"absolute z-30 duration-300 " +
						(toggled ? "right-2 top-[1rem]" : "right-2 top-[0.4rem]")
					}>
					<Hamburger
						toggled={toggled}
						toggle={setToggled}
						rounded
						duration={0.6}
						easing="ease-in-out"
						color="#333333"
						label="Show menu"
					/>
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
