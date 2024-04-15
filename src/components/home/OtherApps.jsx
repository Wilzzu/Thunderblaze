import HomeWheelTemp from "../../assets/HomeWheelTemp.jsx";
import HomeStatsTemp from "../../assets/HomeStatsTemp.jsx";

import { Link } from "react-router-dom";

const OtherApps = () => {
	return (
		<div className="relative">
			{/* Spacer */}
			<div className="waveSpacer waveAspect2 wave2 mt-12" />
			{/* Main block */}
			<div className="flex h-[1050px] flex-col items-center justify-center gap-24 bg-blackish px-[100px] pb-28 text-white text-balance">
				<h1 className="font-poppins text-6xl font-black text-lime">OTHER FEATURES</h1>
				<div className="mb-12 flex items-center justify-center gap-28">
					{/* LEFT */}
					<a
						href="https://dcwheel.wilzzu.dev"
						target="_blank"
						rel="noreferrer noopener"
						className="group duration-200 hover:scale-105">
						<h1 className="mb-7 font-poppins text-4xl font-bold duration-200">DCWheel</h1>
						<div className="flex h-[25rem] w-[17rem] flex-col items-center justify-center gap-4 rounded-[2.5rem] border-4 border-lime duration-200 group-hover:bg-lime group-hover:text-blackish">
							<HomeWheelTemp />
							<p className="pb-7 font-semibold">
								Quickly create teams for 5vs5 matches using a spinning wheel!
							</p>
						</div>
					</a>
					{/* RIGHT */}
					<Link to="/stats" className="group duration-200 hover:scale-105">
						<h1 className="mb-7 font-poppins text-4xl font-bold">Statistics</h1>
						<div className="flex h-[25rem] w-[17rem] flex-col items-center justify-center gap-4 rounded-[2.5rem] border-4 border-lime bg-blackish group-hover:bg-lime">
							<HomeStatsTemp />
							<p className="px-6 pb-5 font-semibold text-white group-hover:text-blackish">
								Statistics of all Thunderblaze members.
							</p>
						</div>
					</Link>
				</div>
			</div>
			{/* Spacer */}
			<div className="cutSpacer cutAspect2 cut2 absolute bottom-[3.75rem] mb-[-3.75rem]" />
		</div>
	);
};

export default OtherApps;
