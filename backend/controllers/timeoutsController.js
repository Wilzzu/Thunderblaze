const asyncHandler = require("express-async-handler");
const Timeout = require("../models/timeoutModel");

// @desc    Get timeouts
// @route   GET /api/stats/discord/timeouts
const getTimeouts = asyncHandler(async (req, res) => {
	// Find all timeouts and return them
	const timeouts = await Timeout.find();
	res.status(200).json(timeouts);
});

// @desc    Set timeout
// @route   POST /api/stats/discord/timeouts/:id
const setTimeouts = asyncHandler(async (req, res) => {
	const userExists = await Timeout.exists({ id: req.params.id });
	if (userExists) {
		Timeout.findOneAndUpdate(
			{ id: req.params.id },
			{ $inc: { timeouts: 1 }, avatar: req.body.avatar }
		).exec(function (err, result) {
			if (err) throw err;
			else res.status(200).json(result);
		});
	} else {
		const timeout = await Timeout.create({
			id: req.body.id,
			name: req.body.name,
			avatar: req.body.avatar,
			timeouts: 1,
		});

		res.status(200).json(timeout);
	}
});

// Export functions
module.exports = {
	getTimeouts,
	setTimeouts,
};
