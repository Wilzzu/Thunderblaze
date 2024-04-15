import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const item = {
	open: { y: 0, opacity: 1, transition: { y: { type: "spring", stiffness: 35, velocity: -100 } } },
	closed: { y: 20, opacity: 0 },
};

const MobileItem = (props) => {
	return (
		<Link to={props.item.path} onClick={props.setToggled}>
			<motion.div
				variants={item}
				className="flex items-center w-full px-6 gap-4 py-4 hover:font-semibold">
				<div className="h-[28px] mb-1">{props.item.icon}</div>
				<h1 className="text-lg font-poppins text-left">{props.item.name}</h1>
			</motion.div>
		</Link>
	);
};

export default MobileItem;
