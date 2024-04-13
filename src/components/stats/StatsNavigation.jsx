import NavItem from "./NavItem";

const StatsNavigation = (props) => {
	return (
		<div className="flex w-96 flex-col rounded-xl bg-whiteishDark pt-8 font-poppins">
			<NavItem selected={props.selected} name="Discord" social="discord" link="/stats/timeouts" />
			<NavItem selected={props.selected} name="Steam" social="steam" link="/stats/timeouts" />
			<NavItem selected={props.selected} name="Shakki" social="lichess" link="/stats/timeouts" />
		</div>
	);
};

export default StatsNavigation;
