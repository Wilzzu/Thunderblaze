const asyncHandler = require("express-async-handler");
require("dotenv").config();
const crypto = require("crypto");
const axios = require("axios");
const clientId = "0551b0b2d3b9c9590d04fec6d0973";
const settings = require("../../src/settings.json");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.VITE_SUPAURL, process.env.VITE_SUPAAPI);

const base64URLEncode = (str) => {
	return str.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
};

const sha256 = (buffer) => crypto.createHash("sha256").update(buffer).digest();

const createVerifier = () => base64URLEncode(crypto.randomBytes(32));

const createChallenge = (verifier) => base64URLEncode(sha256(verifier));

// @desc    Lichess login
// @route   GET /api/lichess/:id
const getLogin = asyncHandler(async (req, res) => {
	const verifier = createVerifier();
	const challenge = createChallenge(verifier);

	req.session.codeVerifier = verifier;
	res.redirect(
		"https://lichess.org/oauth?" +
			new URLSearchParams({
				response_type: "code",
				client_id: clientId,
				redirect_uri: `${process.env.VITE_WEBSITEADDRESS}api/lichess/callback/${req.params.id}`,
				scope: "preference:read",
				code_challenge_method: "S256",
				code_challenge: challenge,
				user_id: req.params.id,
			})
	);
});

const getLichessToken = async (authCode, verifier, url, user_id) => {
	return await axios
		.post(
			"https://lichess.org/api/token",
			JSON.stringify({
				grant_type: "authorization_code",
				redirect_uri: `${url}api/lichess/callback/${user_id}`,
				client_id: clientId,
				code: authCode,
				code_verifier: verifier,
			}),
			{ headers: { "Content-Type": "application/json" } }
		)
		.then((res) => {
			return res.data;
		});
};

const getLichessUser = async (accessToken) => {
	return await axios
		.get("https://lichess.org/api/account", {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
		.then((res) => {
			return res.data;
		});
};

// @desc    Lichess callback from login
// @route   GET /api/lichess/callback
const getCallback = asyncHandler(async (req, res) => {
	const verifier = req.session.codeVerifier;
	const lichessToken = await getLichessToken(
		req.query.code,
		verifier,
		process.env.VITE_WEBSITEADDRESS,
		req.params.id
	);

	if (!lichessToken.access_token) {
		res.send("Failed getting token");
		return;
	}

	const user = await getLichessUser(lichessToken.access_token);

	const supaUser = {
		id: user.id,
		name: user.username,
	};

	const { error } = await supabase
		.from("users")
		.update({ lichess: supaUser })
		.eq("id", req.params.id);

	if (error) {
		console.log(error);
	}

	res.status(200).redirect(process.env.VITE_WEBSITEADDRESS + "profile");
});

// Export functions
module.exports = {
	getLogin,
	getCallback,
};
