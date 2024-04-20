import StatsSubNavigation from "../../components/stats/StatsSubNavigation";
import useGetTimeouts from "../../hooks/stats/useGetTimeouts";
import LoadingDots from "../../assets/LoadingDots";
// import axios from "axios";
// import settings from "../../settings.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PodiumItem from "../../components/stats/PodiumItem";

const Timeouts = () => {
	const { data, isLoading, isError } = useGetTimeouts();
	const [timeouts, setTimeouts] = useState([]);

	// For getting most up to date info
	// const getUserInfo = () => {
	// 	axios.get(`${settings.apiLocation}/discord/members`).then((res) => {
	// 		data.forEach((member) => {
	// 			let user = res.data.find((members) => member.id === members.id);
	// 			if (user)
	// 				setTimeouts((e) => [
	// 					...e,
	// 					{
	// 						id: user.id,
	// 						name: user.nickname,
	// 						avatar: user.avatar,
	// 						timeouts: member.timeouts,
	// 					},
	// 				]);
	// 		});
	// 	});
	// };

	// For demo purposes
	const getUserInfo = () => {
		setTimeouts(data);
	};

	useEffect(() => {
		if (data && Object.keys(data).length) getUserInfo();
	}, [data]);

	if (isLoading) {
		return (
			<div className="centerDiv flex min-h-[900px] max-w-[1280px] justify-center gap-24 bg-whiteish py-16">
				<div className="flex w-full flex-col gap-4 lg:gap-10">
					<StatsSubNavigation selected="timeouts" />
					<div className="flex h-[24.5rem] w-full animate-pulse flex-col items-center justify-center gap-5 rounded-2xl bg-whiteishDark py-12 font-poppins font-bold">
						<h1 className="font-placeholder text-5xl text-whiteishDarker">TOP 3 TIMEOUTS</h1>
						<div className="relative flex h-24 w-1/2 justify-center rounded-3xl bg-whiteishDarker" />
						<div className="relative flex h-16 w-1/2 justify-center rounded-3xl bg-whiteishDarker" />
						<div className="relative flex h-12 w-1/2 justify-center rounded-3xl bg-whiteishDarker" />
					</div>
					<div className="h-full animate-pulse rounded-2xl bg-whiteishDark pt-10">
						<div className="flex flex-col items-center justify-center gap-3 font-hanken text-lg">
							<h1>Loading timeout statistics</h1>
							<LoadingDots color="black" />
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="centerDiv flex min-h-[900px] max-w-[1280px] justify-center gap-24 bg-whiteish py-16">
				<div className="flex w-full flex-col gap-4 lg:gap-10">
					<StatsSubNavigation selected="timeouts" />
					<div className="flex justify-center font-hanken text-black">
						<div className="py-2 px-5 border-4 border-red-600 rounded-xl">
							<p className="text-xl">An error occurred while trying to fetch the data.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="centerDiv flex min-h-[900px] max-w-[1280px] justify-center gap-24 bg-whiteish py-16">
			<div className="flex w-full flex-col gap-4 lg:gap-10">
				<StatsSubNavigation selected="timeouts" />
				{timeouts.length > 0 && (
					<div>
						{/* Top 3 */}
						<div className="flex w-full items-center justify-center rounded-t-2xl bg-whiteishDark pt-12">
							<h1 className="mb-4 lg:w-1/2 text-center font-poppins text-2xl font-bold text-blackishLight">
								TOP 3 TIMEOUTS:
							</h1>
						</div>
						<div className="mb-10 flex flex-col items-center gap-5 rounded-b-2xl bg-whiteishDark pb-12 px-2 font-poppins font-bold">
							{/* Top 3 Cards */}
							{timeouts.map((e, i) => {
								return i <= 2 && <PodiumItem key={e.id} user={e} pos={i} value={"timeouts"} />;
							})}
						</div>

						{/* Full leaderboard*/}
						<div className="rounded-2xl bg-whiteishDark py-12">
							<motion.h1 className="mb-2 font-poppins text-xl font-semibold text-blackishLight">
								Timeout standings:
							</motion.h1>
							<div className="flex flex-col items-center justify-center font-hanken">
								<div className="mt-4 flex w-full lg:w-1/2 items-center justify-between px-4 font-poppins text-sm opacity-30">
									<div className="flex gap-5 lg:gap-7">
										<h1>#</h1>
										<h1>User</h1>
									</div>
									<h1>Timeouts</h1>
								</div>
								{timeouts?.map((e, i) => {
									return (
										<div
											key={e.id}
											className={`flex h-16 w-full lg:w-1/2 items-center justify-between px-4 pt-1
										${i !== 0 && "border-t-2"}`}>
											{/* User information */}
											<motion.div
												viewport={{ once: true, amount: 1 }}
												whileInView={{ x: 0, opacity: 1 }}
												initial={{ x: -16, opacity: 0 }}
												transition={{ type: "spring", stiffness: 50 }}
												className="flex items-center gap-2 font-medium">
												<h1 className="mr-3 lg:mr-5 w-3">{i + 1}.</h1>
												<img
													src={e.avatar}
													alt={e.name + "'S AVATAR"}
													className="h-8 rounded-full"
												/>
												<h1>{e.name}</h1>
											</motion.div>
											{/* Timeout amount */}
											<motion.h1
												viewport={{ once: true, amount: 1 }}
												whileInView={{ x: 0, opacity: 1 }}
												initial={{ x: 16, opacity: 0 }}
												transition={{ type: "spring", stiffness: 50 }}
												className="font-bold text-blackishLight">
												{e.timeouts}
											</motion.h1>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Timeouts;
