const express = require("express");
const router = express.Router();
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.VITE_SUPAURL, process.env.VITE_SUPAAPI);

const authenticate = async (req, res, next) => {
	// Check for valid session token
	const token = req.headers.authorization?.split(" ")[1];

	if (!token || token == "null") {
		return res.status(401).json({ message: "Authentication required" });
	}

	// Verify token and retrieve user data
	const {
		error,
		data: { user },
	} = await supabase.auth.getUser(token);
	if (error || !user) {
		return res.status(400).json({ message: "Invalid token" });
	}

	// Check if user is part of the group
	if (user) {
		const { data, error } = await supabase
			.from("users")
			.select()
			.eq("id", user.user_metadata.provider_id)
			.single();

		if (error) {
			console.log(error);
			return res.status(400).json({ message: "Couldn't fetch user" });
		}

		if (data) {
			if (!data.discord.groupMember)
				return res.status(401).json({ message: "User is not part of the Discord group" });
		}
	}

	next();
};

const { getPublicVideos, getPrivateVideos } = require("../controllers/videosController");

// Add routes to the endpoints
router.get("/public", getPublicVideos);
router.get("/private", authenticate, getPrivateVideos);
module.exports = router;
