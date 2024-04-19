import { useSelector } from "react-redux";
import { useSupabase } from "./useSupabase";

// When manually wanting to get the user do this
const useGetLoggedInUser = () => {
	const { supabase } = useSupabase();

	const getUser = (loggedUser, force = false, demo) => {
		if (demo) return loggedUser;
		if (force || loggedUser == null || (loggedUser && !Object.keys(loggedUser).length)) {
			return supabase.auth.getUser().then((value) => {
				if (value.data?.user?.user_metadata) {
					return supabase
						.from("users")
						.select()
						.eq("id", value.data?.user?.user_metadata.provider_id)
						.single()
						.then((e) => {
							if (!e.data) return { id: null };
							return e.data;
						});
				} else {
					return { id: null };
				}
			});
		} else {
			console.log("Returned from store");
			return loggedUser;
		}
	};

	return { getUser };
};

export default useGetLoggedInUser;
