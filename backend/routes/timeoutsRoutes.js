const express = require("express");
const router = express.Router();

const { getTimeouts } = require("../controllers/timeoutsController");

// Add routes to the endpoints
router.get("/", getTimeouts);
module.exports = router;
