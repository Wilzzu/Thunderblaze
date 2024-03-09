import Stats from "../components/home/Stats";
import Videos from "../components/home/Videos";
import Feedback from "../components/home/Feedback";
import OtherApps from "../components/home/OtherApps";

const Home = () => {
	return (
		<div>
			<Videos />
			<Stats />
			<Feedback />
			<OtherApps />
		</div>
	);
};

export default Home;
