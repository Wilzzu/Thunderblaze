import DiscordIcon from "../../assets/social/DiscordIcon.jsx";
import { useLocation } from "react-router-dom";
import { useSupabase } from "../../hooks/login/useSupabase.js";

const LoginButton = (props) => {
	const { supabase } = useSupabase();
	const location = useLocation();

	// Save current path to cookie and use it later to redirect back to same LoginPage
	// Send user to login page
	async function signInWithDiscord() {
		document.cookie = `LOGIN_REDIRECT=${location.pathname}; path=/;`;
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "discord",
			options: {
				redirectTo: import.meta.env.VITE_WEBSITEADDRESS + "login",
			},
		});
		if (error) console.log(error);
	}

	return (
		<button
			onClick={signInWithDiscord}
			className={
				"group flex items-center justify-center gap-2 rounded-full font-poppins font-bold text-white duration-150 " +
				props.hover +
				props.default
			}>
			<div className={props.iconShadow ? "text-shadow-lg shadow-[#000000bb] w-6" : "w-5"}>
				<DiscordIcon changeIcon={props.changeIcon} />
			</div>
			<h1
				className={
					"lg:block font-hanken font-medium " + props.textShadow + (!props.textEnable && " hidden")
				}>
				Login
			</h1>
		</button>
	);
};

export default LoginButton;
