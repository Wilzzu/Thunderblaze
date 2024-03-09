import { useEffect, useState } from "react";
import useSortVideos from "../../hooks/videos/useSortVideos";
import VideoCard from "./VideoCard";
import { motion } from "framer-motion";

const PublicVideos = (props) => {
	if (props.loading) return <p>Ladataan julkisia videoita...</p>;

	if (props.error)
		return (
			<div className="flex justify-center font-hanken text-white">
				<div className="py-2 px-5 border-4 border-red-600 rounded-xl">
					<p className="text-xl">An error occurred while trying to fetch public videos.</p>
				</div>
			</div>
		);

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

export default PublicVideos;
