const express = require("express");
const router = express.Router();
const Video = require("../models/video.js");
const { json } = require("body-parser");

router.post("/", async (req, res) => {
  const video = new Video({
    url_image: req.body.url_image,
  });
  try {
    const videoToSave = await video.save();
    res.status(200).json(videoToSave);
  } catch (error) {
    res.status(400).json({
      message: "Failed to add video",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const videosToShow = await Video.find();
    res.status(200).json(videosToShow);
  } catch (error) {
    res.status(500),
      json({
        message: error.message,
      });
  }
});

module.exports = router;
