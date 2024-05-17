const asyncHandler = require("express-async-handler");
require("dotenv").config();
const settings = require("../../src/settings.json");
const { createClient } = require("@supabase/supabase-js");

const SteamAuth = require("node-steam-openid");
const supabase = createClient(process.env.VITE_SUPAURL, process.env.VITE_SUPAAPI);

// @desc    Steam Login
// @route   GET /api/steam/:id
const getSteamLogin = asyncHandler(async (req, res) => {
	const steam = new SteamAuth({
		realm: process.env.VITE_WEBSITEADDRESS, // Site name displayed to users on logon
		returnUrl: process.env.VITE_WEBSITEADDRESS + "api/steam/authenticate/" + req.params.id, // Your return route
		apiKey: process.env.STEAM_API_KEY, // Steam API key
	});

	const redirectUrl = await steam.getRedirectUrl();
	return res.redirect(redirectUrl);
});

// @desc    Add user's Steam account to the database
// @route   GET /api/steam/authenticate/:id
const getSteamAuthenticate = asyncHandler(async (req, res) => {
	const steam = new SteamAuth({
		realm: process.env.VITE_WEBSITEADDRESS, // Site name displayed to users on logon
		returnUrl: process.env.VITE_WEBSITEADDRESS + "api/steam/authenticate/" + req.params.id, // Your return route
		apiKey: process.env.STEAM_API_KEY, // Steam API key
	});

	try {
		const user = await steam.authenticate(req);
		const supaUser = {
			id: user.steamid,
			name: user.username,
			picture: user.avatar,
		};

		const { error } = await supabase
			.from("users")
			.update({ steam: supaUser })
			.eq("id", req.params.id);

		if (error) {
			console.log(error);
		}

		res.status(200).redirect(process.env.VITE_WEBSITEADDRESS + "profile");
	} catch (error) {
		console.error(error);
	}
});

// Export functions
module.exports = {
	getSteamLogin,
	getSteamAuthenticate,
};
