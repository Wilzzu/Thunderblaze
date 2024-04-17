const asyncHandler = require("express-async-handler");
const Feedback = require("../models/feedbackModel");

// @desc    Get feedback
// @route   GET /api/feedback
const getFeedback = asyncHandler(async (req, res) => {
	// Find all feedbacks and return them
	const feedback = await Feedback.find();

	// Redact all feedbacks for demo purposes
	feedback.forEach((e) => {
		e.text = "[REDACTED FOR DEMO]";
	});

	res.status(200).json(feedback);
});

// @desc    Set feedback
// @route   POST /api/feedback
const setFeedback = asyncHandler(async (req, res) => {
	// If no text has been added to the POST request return error
	if (!req.body.text) {
		res.status(400);
		throw new Error("Please add a text field");
	}
	if (!req.body.id) {
		res.status(400);
		throw new Error("Please add a id field");
	}
	if (!req.body.name) {
		res.status(400);
		throw new Error("Please add a name field");
	}
	if (req.body.anon === null) {
		res.status(400);
		throw new Error("Please add a anon field");
	}

	// Create new feedback with given input
	const feedback = await Feedback.create({
		id: req.body.id,
		name: req.body.name,
		text: req.body.text,
		anon: req.body.anon,
	});

	// Return created feedback info
	res.status(200).json(feedback);
});

// @desc    Delete feedback
// @route   DELETE /api/feedback/:id
const deleteFeedback = asyncHandler(async (req, res) => {
	// Find feedback with given ID
	const feedback = await Feedback.findById(req.params.id);

	// If feedback doesn't exist with given ID return an error
	if (!feedback) {
		res.status(400);
		throw new Error("Feedback with given ID was not found");
	}

	// Remove feedback and return removed feedback's ID
	await feedback.remove();
	res.status(200).json({ id: req.params.id });
});

// Export functions
module.exports = {
	getFeedback,
	setFeedback,
	deleteFeedback,
};
