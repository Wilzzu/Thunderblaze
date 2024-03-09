import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import settings from "../settings.json";

const useGetUser = (id) => {
	const {
		data: userData,
		isLoading: userIsLoading,
		isError: userIsError,
	} = useQuery(["userInfo", id], () => {
		return axios
			.get(`${settings.apiLocation}/discord/members`)
			.then((res) => {
				return res.data.find((members) => id === members.id);
			})
			.catch((error) => {
				console.error("There was an error fetching the user!", error);
				return 500;
			});
	});

	return { userData, userIsLoading, userIsError };
};

export default useGetUser;
