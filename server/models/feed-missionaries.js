const mongoose = require("mongoose");

const feedMissionariesSchema = mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date },
  time: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
});

module.exports = mongoose.model("FeedMissionaries", feedMissionariesSchema);
