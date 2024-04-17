import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import settings from "../../settings.json";

const useGetMessages = () => {
	const { data, isLoading, isError } = useQuery(["discordMessages"], async () => {
		return axios.get(`${settings.apiLocation}/stats/discord/messages`).then((res) => {
			return res.data.sort((a, b) => b.messages - a.messages);
		});
	});

	return { data, isLoading, isError };
};

export default useGetMessages;
