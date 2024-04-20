import HomeWheelTemp from "../../assets/HomeWheelTemp.jsx";
import HomeStatsTemp from "../../assets/HomeStatsTemp.jsx";

import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";

const OtherApps = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div className="relative">
			{/* Spacer */}
			<div className="waveSpacer waveAspect2 wave2 mt-12" />
			{/* Main block */}
			<div className="flex lg:h-[1050px] pt-24 lg:pt-0 flex-col items-center justify-center gap-12 lg:gap-24 bg-blackish px-2 lg:px-[100px] pb-28 text-white text-balance">
				<h1
					ref={ref}
					style={{
						transform: isInView ? "none" : "translateY(-10px)",
						opacity: isInView ? 1 : 0,
						transition: "all .4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
					}}
					className="font-poppins text-5xl lg:text-6xl font-black text-lime">
					OTHER FEATURES
				</h1>
				<div
					style={{
						transform: isInView ? "none" : "translateY(40px)",
						opacity: isInView ? 1 : 0,
						transition: "all .8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
					}}
					className="mb-8 lg:mb-12 flex items-center justify-center gap-4 lg:gap-28">
					{/* LEFT */}
					<a
						href="https://dcwheel.wilzzu.dev"
						target="_blank"
						rel="noreferrer noopener"
						className="group w-1/2 duration-200 hover:scale-105">
						<h1 className="mb-2 lg:mb-7 font-poppins text-2xl lg:text-4xl font-bold duration-200">
							DCWheel
						</h1>
						<div className="flex p-6 lg:p-0 h-[14.5rem] lg:h-[25rem] lg:w-[17rem] flex-col items-center justify-center gap-4 rounded-2xl lg:rounded-[2.5rem] border-2 lg:border-4 border-lime bg-blackish duration-200 group-hover:bg-lime group-hover:text-blackish">
							<HomeWheelTemp />
							<p className="lg:pb-7 text-sm lg:text-base font-semibold">
								Quickly create teams for 5vs5 matches using a spinning wheel!
							</p>
						</div>
					</a>
					{/* RIGHT */}
					<Link to="/stats" className="group w-1/2 duration-200 hover:scale-105">
						<h1 className="mb-2 lg:mb-7 font-poppins text-2xl lg:text-4xl font-bold">Statistics</h1>
						<div className="flex p-6 lg:p-0 h-[14.5rem] lg:h-[25rem] lg:w-[17rem] flex-col items-center justify-center gap-4 rounded-2xl lg:rounded-[2.5rem] border-2 lg:border-4 border-lime bg-blackish group-hover:bg-lime">
							<HomeStatsTemp />
							<p className="lg:px-6 lg:pb-5 text-sm lg:text-base font-semibold text-white group-hover:text-blackish">
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
