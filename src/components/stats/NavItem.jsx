import { Link } from "react-router-dom";

const NavItem = (props) => {
	return (
		<Link to={props.link}>
			<div
				className={
					`flex h-16 items-center justify-center rounded-md duration-75 hover:bg-whiteish hover:font-bold hover:text-goldXD hover:shadow-md ` +
					(props.selected == props.social && ` bg-whiteish font-bold text-goldXD shadow-md`)
				}>
				<h1>{props.name}</h1>
			</div>
		</Link>
	);
};

export default NavItem;
