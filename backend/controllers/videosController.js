const { default: axios } = require("axios");
const asyncHandler = require("express-async-handler");
require("dotenv").config();

const getVideoDetails = async (playlistId) => {
	// Search all the videos in playlist/channel
	return axios
		.get(
			`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=500&playlistId=${playlistId}&key=${process.env.YTAPI}`
		)
		.then((res, err) => {
			if (res.data.items) {
				const allVideos = [];
				res.data.items.forEach((e) => {
					allVideos.push(e.contentDetails.videoId);
				});
				// Search all video details
				return axios
					.get(
						`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${allVideos.join(
							"%2C"
						)}&key=${process.env.YTAPI}`
					)
					.then((res, err) => {
						if (res.data.items)
							return {
								status: 200,
								res: res.data.items,
							};
						else
							return {
								status: 404,
								res: err,
							};
					});
			} else
				return {
					status: 404,
					res: err,
				};
		});
};

// @desc    Get public videos
// @route   GET /api/videos/public
const getPublicVideos = asyncHandler(async (req, res) => {
	const data = await getVideoDetails(process.env.YTCHANNELID);
	res.status(data.status).json(data.res);
});

// @desc    Get private videos
// @route   GET /api/videos/private
const getPrivateVideos = asyncHandler(async (req, res) => {
	const data = await getVideoDetails(process.env.YTPRIVATEID);
	res.status(data.status).json(data.res);
});

// Export functions
module.exports = {
	getPublicVideos,
	getPrivateVideos,
};
