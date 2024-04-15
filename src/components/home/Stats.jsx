import { useInView } from "framer-motion";
import DiscordIcon from "../../assets/social/DiscordIcon";
import { useRef } from "react";

const Stats = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div className="relative bg-redish flex flex-col items-center justify-center overflow-hidden">
			<ul className="h-[800px] grid grid-cols-3 gap-6 w-2/3 text-whiteish font-poppins list-none">
				<li
					style={{
						transform: isInView ? "none" : "translateY(40px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
					className="flex flex-col items-center justify-center gap-7">
					<span ref={ref} className="drop-shadow-lg text-center">
						<h1 className="text-6xl">100+</h1>
						<h2 className="text-2xl">DISCORD MEMBERS</h2>
					</span>
					<div className="w-2/3 max-w-72 rounded-full bg-[#E93C40] aspect-square p-14 shadow-custom3">
						<DiscordIcon />
					</div>
				</li>
				<li
					style={{
						transform: isInView ? "none" : "translateY(40px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
					}}
					className="flex flex-col items-center justify-center gap-7">
					<span className="drop-shadow-lg text-center">
						<h1 className="text-6xl">1,500,000+</h1>
						<h2 className="text-2xl">VIEWS ON YOUTUBE</h2>
					</span>
					<div className="w-2/3 max-w-72 rounded-full bg-[#E93C40] aspect-square p-14 shadow-custom3 flex items-center justify-center">
						<img className="ml-6" src="play-47.svg" alt="Play button icon" />
					</div>
				</li>
				<li
					style={{
						mixBlendMode: "lighten",
						transform: isInView ? "none" : "translateY(40px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.05s",
					}}
					className="flex flex-col items-center justify-center gap-7">
					<span className="drop-shadow-lg text-center">
						<h1 className="text-6xl">30,000+</h1>
						<h2 className="text-2xl">HOURS IN COUNTER-STRIKE</h2>
					</span>
					<div className="w-2/3 max-w-72 aspect-square flex items-center justify-center">
						<img
							className="border-8 mix-blend-lighten opacity-95 w-full h-full"
							src="cs-icon.svg"
							alt="Play button icon"
						/>
					</div>
				</li>
			</ul>
			<div className="cutSpacer cutAspect1 cut1" />
		</div>
	);
};

export default Stats;
