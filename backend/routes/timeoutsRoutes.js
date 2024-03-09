const express = require("express");
const router = express.Router();

const { getTimeouts, setTimeouts } = require("../controllers/timeoutsController");

// Add routes to the endpoints
router.get("/", getTimeouts);
router.post("/:id", setTimeouts);
module.exports = router;
