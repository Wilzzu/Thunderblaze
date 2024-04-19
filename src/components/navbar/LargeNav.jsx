import { Link, useLocation } from "react-router-dom";
import ProfileButton from "../login/ProfileButton";
import LoginButton from "../login/LoginButton";
import NavItem from "./NavItem";
import logo from "../../assets/logo-256.png";

const LargeNav = (props) => {
	const { pathname } = useLocation();
	return (
		<div
			className={
				"hidden md:flex h-[3.90rem] w-full content-center justify-between py-2 px-6 " +
				(pathname === "/videos"
					? "bg-[#0F0F0F] text-whiteish"
					: pathname === "/feedback" || pathname === "/profile"
					? "bg-blackishDark text-whiteish"
					: "bg-[#f8f8f8] text-black")
			}>
			{/* Left clan icon */}
			<Link to="/">
				<div className="h-full w-32 lg:w-64">
					<img
						src={logo}
						alt=""
						className="max-h-full opacity-95 duration-150 hover:scale-105 hover:opacity-100"
					/>
				</div>
			</Link>
			{/* Navigation */}
			<div className="flex items-center justify-center gap-10 font-poppins text-sm font-light">
				{/* Navbar items */}
				{props.items.map((e, i) => {
					return <NavItem key={i} item={e} currentPath={props.path} />;
				})}
			</div>
			{/* Login button */}
			<div className="flex w-32 lg:w-64 content-center items-center justify-end">
				{props.isLoading ? (
					<div className="h-11 w-[7.6rem] animate-pulseLight rounded-xl bg-blackishLight opacity-30" />
				) : (
					<>
						{props.user && Object.keys(props.user).length && props.user?.id ? (
							<ProfileButton discord={props.user.discord} demo={props?.user?.demo} />
						) : (
							<LoginButton
								hover="hover:scale-[1.03] hover:shadow-custom4 hover:shadow-[#000000] hover:bg-transparent hover:text-blackishLight group"
								changeIcon={true}
								default={
									" h-11 w-11 lg:w-[7.6rem] border-2 border-blackishLight bg-blackishLight lg:rounded-xl"
								}
							/>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default LargeNav;
