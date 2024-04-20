import { motion } from "framer-motion";

const styles = [
	"h-24 rounded-3xl from-[#ffd756] to-[#ffc917] shadow-custom shadow-goldXD",
	"h-16 rounded-3xl from-[#c9c8c8] to-[#bdbdbd]",
	"h-12 rounded-[1.15rem] from-[#dd9a64] to-[#db9154]",
];

const numStyles = {
	timeouts: [
		"w-60 right-[-164px] lg:right-[-190px] text-6xl lg:text-8xl text-[#fff8e4] shadow-goldXD",
		"w-60 right-[-175px] lg:right-[-210px] lg:top-[0.20rem] text-4xl lg:text-6xl text-[#f3f3f3] shadow-[#C0C0C0]",
		"w-28 right-[-54px] lg:right-[-90px] text-2xl lg:text-4xl text-[#fff9ed] shadow-[#b4915b]",
	],
	messages: [
		"w-60 right-[-128px] lg:right-[-70px] text-4xl lg:text-8xl text-[#fff8e4] shadow-goldXD",
		"w-60 right-[-134px] lg:right-[-110px] lg:top-[0.20rem] text-3xl lg:text-6xl text-[#f3f3f3] shadow-[#C0C0C0]",
		"w-28 right-[-17px] lg:right-[-40px] text-2xl lg:text-4xl text-[#fff9ed] shadow-[#b4915b]",
	],
};

const transition = [
	{ dur: 0.6, del: 0.3 },
	{ dur: 0.5, del: 0.15 },
	{ dur: 0.5, del: 0 },
];

const PodiumItem = (props) => {
	return (
		<motion.div
			animate={{ y: 0, opacity: 1 }}
			initial={{ y: 100, opacity: 0 }}
			transition={{
				type: "tween",
				duration: transition[props.pos].dur,
				ease: "backOut",
				delay: transition[props.pos].del,
			}}
			className={
				"relative flex items-center w-full lg:w-1/2 justify-center bg-gradient-to-t " +
				styles[props.pos]
			}>
			{/* User information */}
			<div className="flex w-full items-center lg:justify-center px-5 gap-3 text-whiteish">
				{/* Image */}
				<img
					src={props.user.avatar}
					alt={props.user.name + "'S AVATAR"}
					className={
						"rounded-full " +
						(props.pos === 0 ? "h-12 lg:h-14" : props.pos === 1 ? "h-9 lg:h-10" : "h-7 lg:h-8")
					}
				/>
				{/* Name */}
				<div>
					<h1
						className={
							"truncate text-shadow-normal " +
							(props.pos === 0
								? "text-2xl lg:text-3xl shadow-[#807e7652]"
								: props.pos === 1
								? "text-lg lg:text-xl shadow-[#46464652]"
								: "text-base lg:text-lg shadow-[#5e5b5352]")
						}>
						{props.user.name}
					</h1>
					{/* <p
						className={
							"block lg:hidden font-semibold font-hanken text-shadow-normal " +
							(props.pos === 0
								? "text-lg shadow-[#807e7652]"
								: props.pos === 1
								? "text-base shadow-[#46464652]"
								: "text-sm shadow-[#5e5b5352]")
						}>
						{props.user[props.value] + " " + props.value}
					</p> */}
				</div>
			</div>
			{/* Amount */}
			<motion.h1
				animate={{ x: 0, opacity: 1 }}
				initial={{ x: 100, opacity: 0 }}
				transition={{
					type: "tween",
					duration: 0.6,
					ease: "backOut",
					delay: props.pos === 0 ? 0.8 : props.pos === 1 ? 1 : 1.2,
				}}
				className={
					"absolute text-left font-black text-shadow-lg " + numStyles[props.value][props.pos]
				}>
				{props.user[props.value]}
			</motion.h1>
		</motion.div>
	);
};

export default PodiumItem;
