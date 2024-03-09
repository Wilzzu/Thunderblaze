import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import settings from "../../settings.json";

const useGetPrivateVideos = (auth = null) => {
	const [enable, setEnable] = useState(false);

	const {
		data: privateData,
		isLoading: privateLoading,
		isError: privateIsError,
		refetch,
	} = useQuery(
		["privateVideos"],
		async () => {
			return axios
				.get(`${settings.apiLocation}/videos/private`, {
					headers: { Authorization: `Bearer ${auth}` },
				})
				.then((res, err) => {
					if (res) {
						return res.data;
					} else console.log(err);
					setEnable(false);
				});
		},
		{ enabled: enable, retry: false }
	);

	const refetchPrivateData = () => {
		refetch();
	};

	return { privateData, privateLoading, privateIsError, refetchPrivateData, setEnable };
};

export default useGetPrivateVideos;
