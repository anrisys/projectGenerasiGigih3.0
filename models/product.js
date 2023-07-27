const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  videoID: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  link: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Product", commentsSchema);
