import StatsNavigation from "../../components/stats/StatsNavigation";
import StatsSubNavigation from "../../components/stats/StatsSubNavigation";

const Debts = () => {
	return (
		<div className="centerDiv flex min-h-[900px] max-w-[1280px] justify-center gap-24 bg-whiteish py-16">
			<StatsNavigation selected="discord" />
			<div className="flex w-full flex-col gap-10">
				<StatsSubNavigation selected="debts" />
				<h1>Debts</h1>
			</div>
		</div>
	);
};

export default Debts;
