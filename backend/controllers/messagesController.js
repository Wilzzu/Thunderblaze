const asyncHandler = require("express-async-handler");
const Messages = require("../models/messagesModel");

// @desc    Get messages
// @route   GET /api/stats/discord/messages
const getMessages = asyncHandler(async (req, res) => {
	// Find all timeouts and return them
	const messages = await Messages.find();
	res.status(200).json(messages);
});

// @desc    Set message
// @route   POST /api/stats/discord/messages
const setMessages = asyncHandler(async (req, res) => {
	const bulk = req?.body?.cache?.map((user) => ({
		updateOne: {
			filter: { id: user.id },
			update: {
				$inc: { messages: user.newMessageAmount },
				$setOnInsert: { name: user.name },
				avatar: user.avatar,
			},
			upsert: true,
		},
	}));

	// Write to database
	if (bulk.length) await Messages.bulkWrite(bulk);

	res.status(200).json("Messages updated to database");
});

// Export functions
module.exports = {
	getMessages,
	setMessages,
};
