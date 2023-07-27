const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  videoID: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  comment: {
    required: true,
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", commentsSchema);
