const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// Connect to database
const connectDB = async () => {
	try {
		const uri = `mongodb+srv://wilzzu:${process.env.MONGOPASS}@cluster0.c8e7sfx.mongodb.net/?retryWrites=true&w=majority`;
		const conn = await mongoose.connect(uri);

		console.log(`MongoDB connected: ${conn.connection.host}`.green);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
