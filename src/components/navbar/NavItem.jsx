import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavItem = (props) => {
	// Refresh page if clicking on the same path
	const handleClick = () => {
		if (props.item.path !== "/who") return;
		if (window.location.href === `${import.meta.env.VITE_WEBSITEADDRESS}who`) {
			window.location.href = "/who";
		}
	};
	return (
		<Link
			className={`relative hover:font-medium ${props.item.width} ${
				(props.currentPath == props.item.path ||
					(props.currentPath.includes("stats") && props.item.path == "/stats")) &&
				"font-medium"
			}`}
			onClick={() => handleClick()}
			to={props.item.path}>
			{/* Item name */}
			<h1>{props.item.name}</h1>
			{/* Moving underline */}
			{(props.currentPath == props.item.path ||
				(props.currentPath.includes("stats") && props.item.path == "/stats")) && (
				<motion.div
					layoutId="underline"
					className="absolute bottom-0 left-0 h-[3px] w-full bg-lime"
					style={{ originY: "0px" }}
				/>
			)}
		</Link>
	);
};

export default NavItem;
