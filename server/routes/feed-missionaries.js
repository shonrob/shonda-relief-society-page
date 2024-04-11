const express = require("express");
const router = express.Router();

const FeedMissionaries = require("../models/feed-missionaries");

// THIS IS WHERE ALL THE GET PUT POST DELETE Methods will be

router.get("/", async (req, res, next) => {
  try {
    const schedule = await FeedMissionaries.find();
    console.log(schedule);
    res.status(200).json({ schedule });
  } catch (error) {
    res.status(500).json({ error: error.schedule });
  }
});

// POST method to add a new schedule
router.post("/", async (req, res, next) => {
  try {
    const newSchedule = await FeedMissionaries.create(req.body);
    res.status(201).json({ newSchedule });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT method to update an existing schedule
router.put("/update/:id", async (req, res, next) => {
  try {
    const updatedSchedule = await FeedMissionaries.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ updatedSchedule });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE method to delete an existing schedule
router.delete("/:id", async (req, res, next) => {
  try {
    await FeedMissionaries.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Schedule deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
