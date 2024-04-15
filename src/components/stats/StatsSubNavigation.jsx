import SubNavItem from "./SubNavItem";
const StatsSubNavigation = (props) => {
	return (
		<div className="flex h-12 w-full items-center justify-center gap-10 rounded-2xl bg-whiteishDark py-4 font-poppins">
			<SubNavItem selected={props.selected} name="Timeouts" link="/stats/timeouts" />
			<SubNavItem selected={props.selected} name="Messages" link="/stats/timeouts" />
		</div>
	);
};

export default StatsSubNavigation;
