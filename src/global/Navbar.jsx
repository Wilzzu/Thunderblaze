import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useGetLoggedInUser from "../hooks/login/useGetLoggedInUser";
import { addUserInfo } from "../store";
import LargeNav from "../components/navbar/LargeNav";
import MobileNav from "../components/navbar/MobileNav";
import HomeIcon from "../assets/HomeIcon";

const navItems = [
	{
		name: "Etusivu",
		path: "/",
		width: "w-[50px]",
		icon: <HomeIcon fill={"transparent"} stroke={"#000"} strokeWidth={40} height={28} width={28} />,
	},
	{
		name: "Videos",
		path: "/videos",
		width: "w-[48px]",
		icon: <HomeIcon fill={"transparent"} stroke={"#000"} strokeWidth={40} height={28} width={28} />,
	},
	{
		name: "Statistics",
		path: "/stats",
		width: "w-[65px]",
		icon: <HomeIcon fill={"transparent"} stroke={"#000"} strokeWidth={40} height={28} width={28} />,
	},
	{
		name: "Feedback",
		path: "/feedback",
		width: "w-[70px]",
		icon: <HomeIcon fill={"transparent"} stroke={"#000"} strokeWidth={40} height={28} width={28} />,
	},
];

const Navbar = () => {
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();
	const loggedUser = useSelector((state) => state.loggedUser.user);
	const { getUser } = useGetLoggedInUser();
	const { pathname } = useLocation();

	// Get user session info and put it to loggedUser store
	const getUserLogin = async (loggedUser) => {
		let userLogin = await getUser(loggedUser);
		setIsLoading(false);

		if (userLogin?.id !== null) {
			dispatch(addUserInfo(userLogin));
		}
	};

	useEffect(() => {
		getUserLogin(loggedUser);
	}, []);

	return (
		<div className="sticky top-0 z-[999]">
			<LargeNav items={navItems} path={pathname} user={loggedUser} isLoading={isLoading} />
			<MobileNav items={navItems} user={loggedUser} isLoading={isLoading} />
		</div>
	);
};

export default Navbar;
