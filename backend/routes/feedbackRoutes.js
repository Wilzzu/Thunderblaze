const express = require("express");
const router = express.Router();

const { getFeedback, setFeedback, deleteFeedback } = require("../controllers/feedbackController");

// Add routes to the endpoints
router.get("/", getFeedback); // will be /api/feedback because app.use("/api/feedback", require("./routes/feedbackRoutes")) in index.js
router.post("/", setFeedback); // same for these two
router.delete("/:id", deleteFeedback);
module.exports = router;
