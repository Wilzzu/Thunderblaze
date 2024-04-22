import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import settings from "../../settings.json";

const useGetTimeouts = () => {
	const { data, isLoading, isError } = useQuery(["discordTimeouts"], async () => {
		return axios.get(`${settings.apiLocation}/api/stats/discord/timeouts`).then((res) => {
			return res.data.sort((a, b) => b.timeouts - a.timeouts);
		});
	});

	return { data, isLoading, isError };
};

export default useGetTimeouts;
