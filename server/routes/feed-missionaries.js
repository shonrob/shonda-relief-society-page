const express = require("express");
const router = express.Router();

const FeedMissionaries = require("../models/feed-missionaries");

// THIS IS WHERE ALL THE GET PUT POST DELETE Methods will be
// router.get("/", (req, res) => {
//   res.send("Hello from feed-missionaries route!");
// });
router.get("/", async (req, res, next) => {
  try {
    const schedule = await FeedMissionaries.find();
    res.status(200).json({ schedule });
  } catch (error) {
    res.status(500).json({ error: error.schedule });
  }
});

module.exports = router;
