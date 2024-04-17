const mongoose = require("mongoose");

// Create new schema which will be used to create new entries to the DB
const messagesSchema = mongoose.Schema({
	id: {
		type: String,
		require: true,
	},
	name: {
		type: String,
		require: true,
	},
	avatar: {
		type: String,
		require: true,
	},
	messages: {
		type: Number,
		require: true,
	},
});

module.exports = mongoose.model("Messages", messagesSchema);
