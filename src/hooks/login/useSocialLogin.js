import axios from "axios";
import settings from "../../settings.json";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPAURL, import.meta.env.VITE_SUPAAPI);

const useSocialLogin = (user, social) => {
	// Handle login
	// The API address for logging in should look like this for all: /api/SOCIAL/:id
	// The API response should be a redirect to the login website
	const login = async () => {
		// await axios.get(`${settings.apiLocation}/${social}/${user.id}`).then((res) => {
		// 	window.location.replace(res.data);
		// });
		window.location.replace(`${settings.apiLocation}/${social}/${user.id}`);
	};

	// Handle logout
	const logout = async () => {
		const { data, error } = await supabase
			.from("users")
			.update({ [social]: null })
			.eq("id", user.id)
			.select();
		if (data) location.reload();

		if (error) {
			console.log(error);
		}
	};

	return { login, logout };
};

export default useSocialLogin;
