const express = require("express");
const router = express.Router();

const {
	getMembers,
	getVoiceMembers,
	getValidatedImg,
} = require("../controllers/discordController");

// Add routes to the endpoints
router.get(["/members", "/members/:refresh"], getMembers);
router.get("/voicemembers", getVoiceMembers);
router.get("/validateimg", getValidatedImg);

module.exports = router;
