import { motion } from "framer-motion";

const styles = [
	"h-24 rounded-3xl from-[#ffd756] to-[#ffc917] shadow-custom shadow-goldXD",
	"h-16 rounded-3xl from-[#c9c8c8] to-[#bdbdbd]",
	"h-12 rounded-[1.15rem] from-[#dd9a64] to-[#db9154]",
];

const numStyles = [
	"w-60 right-[-190px] text-8xl text-[#fff8e4] shadow-goldXD",
	"w-60 right-[-210px] top-[0.20rem] text-6xl text-[#f3f3f3] shadow-[#C0C0C0]",
	"w-28 right-[-90px] text-4xl text-[#fff9ed] shadow-[#b4915b]",
];

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
				"relative flex items-center w-1/2 justify-center bg-gradient-to-t " + styles[props.pos]
			}>
			{/* User information */}
			<div className="flex w-full items-center justify-center gap-3 text-whiteish">
				{/* Image */}
				<img
					src={props.user.avatar}
					alt={props.user.name + "'S AVATAR"}
					className={
						"rounded-full " + (props.pos === 0 ? "h-14" : props.pos === 1 ? "h-10" : "h-8")
					}
				/>
				{/* Name */}
				<h1
					className={
						"truncate text-shadow-normal " +
						(props.pos === 0
							? "text-3xl shadow-[#807e7652]"
							: props.pos === 1
							? "text-xl shadow-[#46464652]"
							: "text-lg shadow-[#5e5b5352]")
					}>
					{props.user.name}
				</h1>
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
				className={"absolute text-left font-black text-shadow-lg " + numStyles[props.pos]}>
				{props.user.timeouts}
			</motion.h1>
		</motion.div>
	);
};

export default PodiumItem;
