import LichessIcon from "../../assets/social/LichessIcon";
import SteamIcon from "../../assets/social/SteamIcon";

import SocialCard from "./SocialCard";

const LinkedAccounts = (props) => {
	return (
		<div className="w-full rounded-[30px] bg-gradient-to-tl from-[#232323] to-[#333333] shadow-custom2">
			<div className="flex h-full flex-col gap-3 p-8">
				<h1 className="w-full text-left font-poppins font-semibold text-whiteish">
					Social accounts:
				</h1>
				<div className="flex w-full flex-col gap-3">
					{props.user?.demo && (
						<p className="text-whiteish font-hanken text-sm text-balance p-2 bg-blackish rounded-lg border-2 border-red-500">
							You are currently in demo mode. Linking social accounts is disabled. Please log in to
							link social accounts.
						</p>
					)}
					<SocialCard
						user={props.user}
						social={"steam"}
						icon={<SteamIcon />}
						name="Steam"
						linked={props.user.steam}
						style="w-[1.90rem] ml-[4px] mr-[6.5px]"
					/>
					<SocialCard
						user={props.user}
						social={"lichess"}
						icon={<LichessIcon />}
						name="Lichess"
						linked={props.user.lichess}
						style="w-7 ml-[6px] mr-[7px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default LinkedAccounts;
