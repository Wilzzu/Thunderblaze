const express = require("express");
const session = require("express-session");
var cors = require("cors");
const colors = require("colors");
const port = process.env.PORT || 5000;

const connectDB = require("./config/db");

const app = express();
connectDB();

// Let our app use cors, json and urlencoded
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add api endpoints
app.use("/api/feedback", require("./routes/feedbackRoutes"));
app.use("/api/stats/discord/timeouts", require("./routes/timeoutsRoutes"));
app.use("/api/discord", require("./routes/discordRoutes"));
app.use("/api/steam", require("./routes/steamRoutes"));
app.use("/api/lichess", require("./routes/lichessRoutes"));
app.use("/api/videos", require("./routes/videosRoutes"));
app.use(
	session({
		resave: true,
		secret: "bae0f1cea21504986c0522248c1790f55a8d6c60b54a846d7cca0c945bcb97b2",
		saveUninitialized: true,
	})
);

app.listen(port, () => console.log(`Server started on port ${port}`.yellow));
