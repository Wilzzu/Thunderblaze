import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import settings from "../../settings.json";

const useGetPublicVideos = () => {
	const {
		data: publicData,
		isLoading: publicLoading,
		isError: publicIsError,
	} = useQuery(
		["publicVideos"],
		async () => {
			return axios.get(`${settings.apiLocation}/videos/public`).then((res) => {
				return res.data;
			});
		},
		{ staleTime: Infinity }
	);

	return { publicData, publicLoading, publicIsError };
};

export default useGetPublicVideos;
