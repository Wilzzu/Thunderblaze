const useSortVideos = (sorting, videos) => {
	switch (sorting) {
		case "dateDesc":
			videos.sort(
				(a, b) =>
					new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime()
			);
			break;

		case "dateAsc":
			videos.sort(
				(a, b) =>
					new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime()
			);
			break;

		case "viewsDesc":
			videos.sort((a, b) => b.statistics.viewCount - a.statistics.viewCount);
			break;

		case "viewsAsc":
			videos.sort((a, b) => a.statistics.viewCount - b.statistics.viewCount);
			break;
	}

	return videos;
};

export default useSortVideos;
