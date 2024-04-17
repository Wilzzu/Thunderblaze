import { Link } from "react-router-dom";

const SubNavItem = (props) => {
	return (
		<Link to={props.link}>
			<h1
				className={
					`w-20 duration-75 ` +
					(props.selected == props.name.toLowerCase()
						? "font-semibold text-blackish underline decoration-goldXD decoration-[3px] underline-offset-2"
						: "hover:font-bold hover:text-goldXD")
				}>
				{props.name}
			</h1>
		</Link>
	);
};

export default SubNavItem;
