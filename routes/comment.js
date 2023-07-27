const express = require("express");
const router = express.Router();
const Comment = require("../models/comments.js");

router.post("/", async (req, res) => {
  const comment = new Comment({
    videoID: req.body.videoID,
    username: req.body.username,
    comment: req.body.comment,
  });

  try {
    const commentToSave = await comment.save();
    res.status(200).json({
      commentToSave,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const videoID = req.query;
    const commentsToShow = await Comment.find(videoID).select(
      "username comment created_at"
    );
    res.json({
      commentsToShow,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
