import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useGetLoggedInUser from "../hooks/login/useGetLoggedInUser";
import { addUserInfo } from "../store";
import LargeNav from "../components/navbar/LargeNav";
import MobileNav from "../components/navbar/MobileNav";
import HomeIcon from "../assets/HomeIcon";
import { PiTelevisionBold } from "react-icons/pi";
import { IoIosStats } from "react-icons/io";
import { BiEnvelope } from "react-icons/bi";

const navItems = [
	{
		name: "Home",
		path: "/",
		width: "w-[50px]",
		icon: <HomeIcon fill={"transparent"} stroke={"#000"} strokeWidth={40} height={28} width={28} />,
	},
	{
		name: "Videos",
		path: "/videos",
		width: "w-[48px]",
		icon: <PiTelevisionBold fill="black" className="w-full h-full" />,
	},
	{
		name: "Statistics",
		path: "/stats",
		width: "w-[65px]",
		icon: <IoIosStats fill="black" className="w-full h-full" />,
	},
	{
		name: "Feedback",
		path: "/feedback",
		width: "w-[70px]",
		icon: <BiEnvelope fill="black" className="w-full h-full" />,
	},
];

const Navbar = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState({});
	const dispatch = useDispatch();
	const loggedUser = useSelector((state) => state.loggedUser.user);
	const demoUser = useSelector((state) => state.demoUser.user);
	const { getUser } = useGetLoggedInUser();
	const { pathname } = useLocation();

	// Get user session info and put it to loggedUser store
	const getUserLogin = async (loggedUser, demo) => {
		let userLogin = await getUser(loggedUser, false, demo);
		setUser(userLogin);

		setIsLoading(false);

		if (userLogin?.id !== null && !userLogin?.demo) {
			dispatch(addUserInfo(userLogin));
		}
	};

	useEffect(() => {
		if (demoUser && Object.keys(demoUser)?.length) getUserLogin(demoUser, true);
		else {
			console.log(loggedUser);
			getUserLogin(loggedUser, false);
		}
	}, [loggedUser, demoUser]);

	return (
		<div className="sticky top-0 z-[999]">
			<LargeNav items={navItems} path={pathname} user={user} isLoading={isLoading} />
			<MobileNav items={navItems} user={user} isLoading={isLoading} />
		</div>
	);
};

export default Navbar;
