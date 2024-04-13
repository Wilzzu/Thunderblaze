import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const YTEmbed = (props) => {
	const [showCopyAlert, setShowCopyAlert] = useState(false);

	const copyLink = () => {
		navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${props.video.id}`);
		setShowCopyAlert(true);
		setTimeout(() => setShowCopyAlert(false), 5000);
	};

	// Pause the video and open it in YouTube
	const openYT = () => {
		document
			.querySelector(".videoPlayer")
			.contentWindow.postMessage(
				'{"event":"command","func":"' + "pauseVideo" + '","args":""}',
				"*"
			);
		window.open(`https://www.youtube.com/watch?v=${props.video.id}`, "_blank", "noreferrer");
	};

	return (
		<div>
			{/* Video player */}
			<div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
				<iframe
					className="videoPlayer"
					src={`https://www.youtube.com/embed/${props.video.id}?autoplay=1`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					width="100%"
					height="100%"></iframe>
			</div>
			{/* Information container */}
			<div className="mt-3 flex h-16 md:h-28 justify-between gap-1 pl-1 font-poppins">
				{/* Info and stats */}
				<div className="flex flex-col gap-1">
					<h1 className="line-clamp-1 pr-2 text-left text-base md:text-xl font-medium">
						{props.video.title}
					</h1>
					<div className="flex gap-[0.35rem] text-xs md:text-sm opacity-70">
						<p>{props.video.views} views</p>
						<p className="font-bold">·</p>
						<p>{props.video.date}</p>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex-col gap-2 hidden md:flex">
					<div className="flex h-12 justify-end gap-2">
						<button onClick={openYT} className="h-full rounded-lg bg-[#ff1f1f] px-2 text-sm">
							Watch on YouTube
						</button>
						<button onClick={copyLink} className="aspect-square h-full rounded-lg bg-whiteish">
							<p className="opacity-75">🔗</p>
						</button>
					</div>
					<AnimatePresence>
						{showCopyAlert && (
							<motion.div
								animate={{ scale: 1, opacity: 1 }}
								initial={{ scale: 0, opacity: 0 }}
								exit={{ scale: 0, opacity: 0 }}
								transition={{ type: "tween", duration: 0.25, ease: "backOut" }}
								className="mt-1 rounded-md bg-whiteish py-2 px-4 text-right text-blackish">
								<p>Link copied to clipboard.</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default YTEmbed;
