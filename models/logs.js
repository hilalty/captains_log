const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  title: { type: String, required: true },
  entry: { type: String, required: true },
  shipIsBroken: Boolean,
});

const Log = mongoose.model("Log", fruitSchema);

module.exports = Log;