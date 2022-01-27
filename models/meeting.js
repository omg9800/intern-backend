const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  stime: { type: String, required: true },
  etime: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Meeting", schema);
