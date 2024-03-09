import moment from "moment/min/moment-with-locales";
// import momentDurationFormatSetup from "moment-duration-format";

const VideoCard = (props) => {
	// momentDurationFormatSetup(moment);
	// moment.updateLocale("fi", {
	// 	relativeTime: {
	// 		future: "%s",
	// 		past: "%s sitten",
	// 		s: "muutama sekunti",
	// 		ss: "%d sekuntia",
	// 		m: "minuutti",
	// 		mm: "%d minuuttia",
	// 		h: "tunti",
	// 		hh: "%d tuntia",
	// 		d: "päivä",
	// 		dd: "%d päivää",
	// 		w: "viikko",
	// 		ww: "%d viikkoa",
	// 		M: "kuukausi",
	// 		MM: "%d kuukautta",
	// 		y: "%d vuosi",
	// 		yy: "%d vuotta",
	// 	},
	// });

	const handleClick = () => {
		props.setSelectedVideo({
			id: props.id,
			title: props.title,
			views: props.views,
			date: moment(props.date).fromNow(),
		});
		window.scrollTo({ top: 0 });
	};

	return (
		<div
			className="group mb-3 font-hanken duration-150 hover:scale-105 hover:cursor-pointer"
			onClick={handleClick}>
			<div className="relative aspect-video select-none overflow-hidden rounded-xl bg-transparent duration-150 group-hover:shadow-2xl group-hover:shadow-[#6d6d6d31]">
				<div className="absolute right-1 bottom-1 rounded-[0.3rem] bg-black bg-opacity-80 px-[0.325rem] py-[0.15rem] font-poppins text-xs font-medium tracking-wider">
					<h1>{moment.duration(props.duration).format("m.ss", { trim: false })}</h1>
				</div>
				<img src={props.thumbnail} alt="" className="w-full object-fill" />
			</div>
			<div className="mt-2 flex flex-col justify-start gap-1">
				<h1 className="pr-2 text-left font-medium line-clamp-1">{props.title}</h1>

				<div className="flex gap-[0.35rem] text-xs opacity-70">
					<p>{props.views} views</p>
					<p className="font-bold">·</p>
					<p>{moment(props.date).locale("fi").fromNow()}</p>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
