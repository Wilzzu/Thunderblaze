import LargeFooter from "../components/footer/LargeFooter";
import MobileFooter from "../components/footer/MobileFooter";

const footerItems = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Videos",
		path: "/videos",
	},
	{
		name: "Stats",
		path: "/stats",
	},
	{
		name: "Feedback",
		path: "/feedback",
	},
	{
		name: "Privacy Policy",
		path: "/privacy",
	},
];

const Footer = () => {
	return (
		<div>
			<LargeFooter items={footerItems} />
			<MobileFooter items={footerItems} />
		</div>
	);
};

export default Footer;
