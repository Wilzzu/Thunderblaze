import { useSelector } from "react-redux";
import LichessIcon from "../../assets/social/LichessIcon";
import SteamIcon from "../../assets/social/SteamIcon";

import SocialCard from "./SocialCard";

const LinkedAccounts = () => {
	const loggedUser = useSelector((state) => state.loggedUser.user);

	return (
		<div className="w-full rounded-[30px] bg-blackishDark">
			<div className="flex h-full flex-col gap-3 p-8">
				<h1 className="w-full text-left font-poppins font-semibold text-whiteish">
					Social accounts:
				</h1>
				<div className="flex w-full flex-col gap-3">
					<SocialCard
						user={loggedUser}
						social={"steam"}
						icon={<SteamIcon />}
						name="Steam"
						linked={loggedUser.steam}
						style="w-[1.90rem] ml-[4px] mr-[6.5px]"
					/>
					<SocialCard
						user={loggedUser}
						social={"lichess"}
						icon={<LichessIcon />}
						name="Lichess"
						linked={loggedUser.lichess}
						style="w-7 ml-[6px] mr-[7px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default LinkedAccounts;
