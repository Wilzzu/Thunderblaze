import logoGold from "../../assets/logo-gold-256.png";
import GroupBenefit from "./GroupBenefit";

const GroupCard = () => {
	return (
		<div className="relative grid h-56 w-full rounded-[40px] pl-16 border-2 border-goldXD bg-gradient-to-r from-[#232323] to-[#333333] shadow-custom2 shadow-[#ffd0377e]">
			<img
				src={logoGold}
				alt="Golden logo"
				className="absolute left-[-4rem] top-[1.8rem] w-[9.25rem] -rotate-6 shadow-[#fff] drop-shadow-[0_10px_10px_rgba(255,208,55,0.10)]"
			/>
			<div className="h-full w-full flex flex-col items-center justify-center gap-2">
				<h1 className="font-poppins text-3xl font-bold text-goldXD shadow-[#ffd9004d] text-shadow-big">
					THUNDERBLAZE MEMBER
				</h1>
				<li className="flex list-none flex-col items-start gap-2 font-hanken text-[0.95rem] text-whiteish">
					<GroupBenefit content="Watch Thunderblaze's private videos" delay={0.1} />
					<GroupBenefit content="Send feedback to the moderation team" delay={0.5} />
					<GroupBenefit content="Track your own statistics" delay={0.95} />
				</li>
			</div>
		</div>
	);
};

export default GroupCard;
