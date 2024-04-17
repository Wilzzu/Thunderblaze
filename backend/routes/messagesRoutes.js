const express = require("express");
const { setMessages, getMessages } = require("../controllers/messagesController");
const router = express.Router();

// Add routes to the endpoints
router.get("/", getMessages);
router.post("/", setMessages);
module.exports = router;
