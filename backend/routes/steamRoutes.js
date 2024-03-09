const express = require("express");
const router = express.Router();

const { getSteamLogin, getSteamAuthenticate } = require("../controllers/steamController");

// Add routes to the endpoints
router.get("/:id", getSteamLogin);
router.get("/authenticate/:id", getSteamAuthenticate);

module.exports = router;
