const mongoose = require("mongoose");

// Create new schema which will be used to create new entries to the DB
const feedbackSchema = mongoose.Schema(
	{
		id: {
			type: String,
			require: true,
		},
		name: {
			type: String,
			require: true,
		},
		text: {
			type: String,
			require: [true, "Please add a text value"],
		},
		anon: {
			type: Boolean,
			require: true,
		},
		demo: {
			type: Boolean,
			require: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Feedback", feedbackSchema);
