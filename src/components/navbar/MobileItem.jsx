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
				className="flex items-center px-6 justify-between py-4 hover:font-semibold">
				<h1 className="text-lg font-poppins">{props.item.name}</h1>
				<div className="h-[28px] mb-1">{props.item.icon}</div>
			</motion.div>
		</Link>
	);
};

export default MobileItem;
