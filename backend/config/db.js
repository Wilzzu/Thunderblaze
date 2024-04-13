const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

// Connect to database
const connectDB = async () => {
	try {
		const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@cluster0.yzaem6e.mongodb.net/?retryWrites=true&w=majority`;
		console.log(uri);
		const conn = await mongoose.connect(uri);

		console.log(`MongoDB connected: ${conn.connection.host}`.green);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
