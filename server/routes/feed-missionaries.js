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

// POST
// router.post("/", async (req, res, next) => {
//   try {
//     const meal = new Meal({
//       _id: "100",
//       name: req.body.name,
//       date: req.body.date,
//       time: req.body.time,
//       phoneNumber: req.body.phoneNumber,
//       address: req.body.address,
//     });
//     // console.log(meal);
//     meal.save().then((createdMeal) => {
//       return res.status(201).json({
//         message: "Meal added successfully.",
//         meal: createdMeal,
//       });
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "An error occurred saving the meal.",
//       error: error,
//     });
//   }
// });
// POST method to add a new schedule
router.post("/", async (req, res, next) => {
  try {
    const newSchedule = await FeedMissionaries.create(req.body);
    console.log("Post trying to figure this out", newSchedule);
    res.status(201).json({ newSchedule });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT
router.put("/:id", (req, res, next) => {
  Meal.findOne({ id: req.params.id })
    .then((meal) => {
      (meal.name = req.body.name),
        (meal.date = req.body.date),
        (meal.time = req.body.time),
        (meal.phoneNumber = req.body.phoneNumber),
        (meal.address = req.body.address);
      Meal.updateOne({ id: req.params.id }, meal)
        .then((result) => {
          res.status(204).json({
            message: "Meal updated successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred in trying to update",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Meal not found.",
        error: { meal: "Meal not found" },
      });
    });
});

// DELETE

router.delete("/:id", (req, res, next) => {
  Meal.findOne({ id: req.params.id })
    .then((meal) => {
      Meal.deleteOne({ id: req.params.id })
        .then((result) => {
          res.status(204).json({
            message: "Meal deleted successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred in trying to delete",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Meal not found.",
        error: { meal: "Meal not found" },
      });
    });
});

module.exports = router;
