const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30,
  },
  description: {
    type: String,
    required: true,
    maxlength: 256,
  },
});

const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
