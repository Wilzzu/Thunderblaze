import { useInView } from "framer-motion";
import DiscordIcon from "../../assets/social/DiscordIcon";
import { useRef } from "react";

const Stats = () => {
	const ref = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const inView = useInView(ref, { once: true });
	const inView2 = useInView(ref2, { once: true });
	const inView3 = useInView(ref3, { once: true });

	return (
		<div className="relative bg-redish flex flex-col items-center justify-center overflow-hidden">
			<ul className="lg:h-[800px] p-14 py-24 lg:p-0 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6 lg:w-2/3 text-whiteish font-poppins list-none">
				<li
					style={{
						transform: inView ? "none" : "translateY(40px)",
						opacity: inView ? 1 : 0,
						transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
					}}
					className="flex flex-col items-center justify-center gap-7">
					<span ref={ref} className="drop-shadow-lg text-center">
						<h1 className="text-5xl lg:text-6xl">100+</h1>
						<h2 className="text-xl lg:text-2xl">DISCORD MEMBERS</h2>
					</span>
					<div className="w-2/3 max-w-72 rounded-full bg-[#E93C40] aspect-square p-11 lg:p-14 shadow-custom3">
						<DiscordIcon />
					</div>
				</li>
				<li
					style={{
						transform: inView2 ? "none" : "translateY(40px)",
						opacity: inView2 ? 1 : 0,
						transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.45s",
					}}
					className="flex flex-col items-center justify-center gap-7">
					<span ref={ref2} className="drop-shadow-lg text-center">
						<h1 className="text-5xl lg:text-6xl">1,500,000+</h1>
						<h2 className="text-xl lg:text-2xl">VIEWS ON YOUTUBE</h2>
					</span>
					<div className="w-2/3 max-w-72 rounded-full bg-[#E93C40] aspect-square p-11 lg:p-14 shadow-custom3 flex items-center justify-center">
						<img className="ml-3 lg:ml-6" src="play-47.svg" alt="Play button icon" />
					</div>
				</li>
				<li
					style={{
						transform: inView3 ? "none" : "translateY(40px)",
						opacity: inView3 ? 1 : 0,
						transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
					}}
					className="flex flex-col items-center justify-center gap-7">
					<span ref={ref3} className="drop-shadow-lg text-center">
						<h1 className="text-5xl lg:text-6xl">30,000+</h1>
						<h2 className="text-xl lg:text-2xl text-nowrap">HOURS IN COUNTER-STRIKE</h2>
					</span>
					<div className="w-2/3 max-w-72 aspect-square flex items-center justify-center">
						<img
							className="border-[6px] lg:border-8 border-white opacity-95 w-full h-full shadow-custom3"
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
