import useGetLoggedInUser from "../hooks/login/useGetLoggedInUser";
import useHandleLogout from "../hooks/login/useHandleLogout";
import Navigation from "../components/profile/Navigation";
import GroupCard from "../components/profile/GroupCard";
import LoginButton from "../components/login/LoginButton";
import LinkedAccounts from "../components/profile/LinkedAccounts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
	const loggedUser = useSelector((state) => state.loggedUser.user);
	const [isLoading, setIsLoading] = useState(true);
	const { getUser } = useGetLoggedInUser();
	const { logoutHandler } = useHandleLogout();
	const [user, setUser] = useState(loggedUser);

	const getUserLogin = async (curUser) => {
		setUser(await getUser(curUser));
		setIsLoading(false);
	};

	useEffect(() => {
		getUserLogin(loggedUser);
	}, []);

	return (
		<div className="h-[110vh] bg-blackishDark">
			{isLoading ? (
				<h1 className="pt-52 font-hanken text-xl text-white opacity-50">Loading profile...</h1>
			) : user?.id ? (
				<div className="flex h-full w-full">
					{/* Left navigation bar */}
					<Navigation logoutHandler={logoutHandler} />
					{/* User dashboard */}
					<div className="flex w-full flex-col items-center justify-start gap-5 bg-blackish rounded-tl-bigger">
						{/* User info card*/}
						<div className="flex w-2/3 items-start justify-center">
							<div className="mt-20 flex h-44 w-full items-center justify-start gap-5 rounded-[75px] bg-blackishDark">
								<img src={user.discord.picture} alt="" className="ml-9 w-28 rounded-full" />
								<div className="flex flex-col items-start justify-center text-whiteish">
									<h1 className="font-poppins text-5xl font-bold">{user.discord.name}</h1>
									<p className="font-hanken font-medium">ID: {user.id}</p>
								</div>
							</div>
						</div>

						<div className="grid w-2/3 grid-cols-2 gap-5">
							{/* Group Info card */}
							{user.discord.groupMember ? <GroupCard /> : <div>Not a member</div>}
							{/* Link accounts card */}
							<LinkedAccounts />
							{/* Privacy policy settings will be here */}
							{/* <div className="w-full bg-blackishDarkest text-whiteish font-poppins font-semibold h-24 flex items-center justify-center rounded-2xl">Privacy policy</div> */}
						</div>
					</div>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center gap-4 pt-52">
					<div>
						<h1 className="font-poppins text-xl text-red-600">You are not logged in!</h1>
						<h1 className="font-hanken text-base text-whiteish">Log in to access this page:</h1>
					</div>
					<LoginButton
						default={
							" w-[12rem] h-[3.5rem] lg:w-[7.6rem] bg-blackishLight rounded-[0.75rem] border-2 border-white"
						}
						hover={"hover:scale-[1.03] hover:shadow-custom4 hover:shadow-[#000000]"}
						textEnable={true}
					/>
				</div>
			)}
		</div>
	);
};

export default Profile;
