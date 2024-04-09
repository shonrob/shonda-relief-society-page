const mongoose = require("mongoose");

const feedMissionariesSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  date: { type: Date },
  time: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
});

module.exports = mongoose.model("MissionaryMeal", feedMissionariesSchema);
