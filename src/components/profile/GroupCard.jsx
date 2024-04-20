import logoGold from "../../assets/logo-gold-256.png";
import GroupBenefit from "./GroupBenefit";

const GroupCard = () => {
	return (
		<div className="relative grid h-56 w-full rounded-bigger lg:rounded-[40px] lg:pl-16 border-2 border-goldXD overflow-hidden lg:overflow-visible bg-gradient-to-tl from-[#232323] to-[#333333] shadow-custom2 shadow-[#ffd0377e]">
			<img
				src={logoGold}
				alt="Golden logo"
				className="absolute -right-20 -bottom-6 lg:left-[-4rem] lg:top-[1.8rem] lg:w-[9.25rem] -rotate-12 lg:-rotate-6 shadow-[#fff] drop-shadow-[0_10px_10px_rgba(255,208,55,0.10)] z-0 opacity-20 lg:opacity-100"
			/>
			<div className="h-full w-full flex flex-col items-center justify-center gap-2 z-10 drop-shadow-lg lg:drop-shadow-none">
				<h1 className="font-poppins text-xl lg:text-3xl font-bold text-goldXD shadow-[#ffd9004d] text-shadow-big">
					THUNDERBLAZE MEMBER
				</h1>
				<li className="flex list-none flex-col items-start gap-2 font-hanken text-[0.85rem] lg:text-[0.95rem] text-whiteish">
					<GroupBenefit content="Watch Thunderblaze's private videos" delay={0.1} />
					<GroupBenefit content="Send feedback to the moderation team" delay={0.5} />
					<GroupBenefit content="Track your own statistics" delay={0.95} />
				</li>
			</div>
		</div>
	);
};

export default GroupCard;
