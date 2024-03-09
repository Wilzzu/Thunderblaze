const express = require("express");
const router = express.Router();

const { getLogin, getCallback } = require("../controllers/lichessController");

// Add routes to the endpoints
router.get("/:id", getLogin);
router.get("/callback/:id", getCallback);
module.exports = router;
