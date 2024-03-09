import { useDispatch } from "react-redux";
import { removeUserInfo } from "../../store";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(import.meta.env.VITE_SUPAURL, import.meta.env.VITE_SUPAAPI);

const useHandleLogout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutHandler = async () => {
		// When user logs out clear user info and transfer them back to main page
		supabase.auth.onAuthStateChange(async (event) => {
			if (event == "SIGNED_OUT") {
				console.log("logged out");
				dispatch(removeUserInfo());
				navigate("/");
				location.reload();
			}
		});

		// Do the actual logout
		const { error } = await supabase.auth.signOut();
		if (error) console.log(error);
	};

	return { logoutHandler };
};
export default useHandleLogout;
