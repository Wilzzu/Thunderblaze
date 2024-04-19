import { useEffect, useState } from "react";
import useSortVideos from "../../hooks/videos/useSortVideos";
import VideoCard from "./VideoCard";
import privateVids from "../../assets/privateVids.png";
import LoginButton from "../login/LoginButton";
import { motion } from "framer-motion";
import LoadingDots from "../../assets/LoadingDots";

const PrivateVideos = (props) => {
	console.log(props.user);

	if (Object.keys(props.user).length > 0 && props.user?.id == null) {
		return (
			<motion.div
				animate={{ y: 0, opacity: 1 }}
				initial={{ y: 20, opacity: 0 }}
				transition={{ type: "spring", stiffness: 50 }}
				exit={{ y: 20, opacity: 0 }}
				className="flex justify-center">
				<div className="relative flex w-2/3 min-h-[170px] items-center justify-center overflow-hidden rounded-2xl md:border-2 border-goldXD md:bg-[#0d1520]">
					<div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-4 md:gap-2">
						<h1 className="font-poppins text-whiteish shadow-black text-shadow text-sm  md:text-base">
							Log in to watch private videos:
						</h1>
						<LoginButton
							default={
								" border-2 w-[11rem] bg-blackishLight h-[3.4rem] lg:w-36 lg:h-12 rounded-[0.75rem] border-whiteish border-opacity-70 hover:border-opacity-100 shadow-[#000000af] shadow-md hover:shadow-md hover:shadow-[#000000a1]"
							}
							hover={"hover:scale-[1.03] hover:shadow-custom4 hover:shadow-[#000000]"}
							textEnable={true}
						/>
					</div>
					<img src={privateVids} alt="" className="opacity-80 hidden md:block" />
				</div>
			</motion.div>
		);
	}
	if (props.user?.discord?.groupMember == false) {
		return (
			<div className="flex h-[185px] items-center justify-center">
				<p>Only Thunderblaze members can watch private videos.</p>
			</div>
		);
	}

	if (props.loading) {
		return (
			<div className="flex h-[185px] items-center justify-center gap-2">
				<p>Loading private videos</p>
				<LoadingDots color={"white"} />
			</div>
		);
	}

	if (props.error) {
		return (
			<div className="flex justify-center font-hanken text-white">
				<div className="py-2 px-5 border-4 border-red-600 rounded-xl">
					<p className="text-xl">An error occurred while trying to fetch private videos.</p>
				</div>
			</div>
		);
	}

	const [videos, setVideos] = useState([...props.data]);

	useEffect(() => {
		if (videos) setVideos([...useSortVideos(props.sort, props.data)]);
	}, [props.sort]);

	return (
		<div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{videos &&
				videos.map((e) => {
					return (
						<motion.div key={e.id} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
							<VideoCard
								id={e.id}
								setSelectedVideo={props.setSelectedVideo}
								thumbnail={e.snippet.thumbnails.medium.url}
								title={e.snippet.title}
								views={e.statistics.viewCount}
								duration={e.contentDetails.duration}
								date={e.snippet.publishedAt}
							/>
						</motion.div>
					);
				})}
		</div>
	);
};

export default PrivateVideos;
