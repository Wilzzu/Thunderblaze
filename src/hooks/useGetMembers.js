import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import settings from "../settings.json";

const useGetMembers = (parameter = "", enabled = true) => {
	const {
		data: membersData,
		isLoading: isMembersLoading,
		isError: isMembersError,
		isFetching: isMembersFetching,
		refetch,
	} = useQuery(
		["allMembers"],
		() => {
			return axios
				.get(`${settings.apiLocation}/api/discord/members/${parameter}`)
				.then((res) => res.data);
		},
		{ staleTime: Infinity, enabled: enabled }
	);

	const refetchMembers = () => {
		refetch();
	};

	return { membersData, isMembersLoading, isMembersError, isMembersFetching, refetchMembers };
};

export default useGetMembers;
