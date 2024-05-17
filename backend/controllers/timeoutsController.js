const asyncHandler = require("express-async-handler");
const Timeout = require("../models/timeoutModel");

// @desc    Get timeouts
// @route   GET /api/stats/discord/timeouts
const getTimeouts = asyncHandler(async (req, res) => {
	// Find all timeouts and return them
	const timeouts = await Timeout.find();
	res.status(200).json(timeouts);
});

// Export functions
module.exports = {
	getTimeouts,
};
