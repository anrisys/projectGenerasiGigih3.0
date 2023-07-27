const express = require("express");
const router = express.Router();
const Product = require("../models/product.js");

router.post("/", async (req, res) => {
  const product = new Product({
    videoID: req.body.videoID,
    name: req.body.name,
    link: req.body.link,
    price: req.body.price,
  });

  try {
    const productToSave = await product.save();
    res.status(200).json({
      productToSave,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.get("/list", async (req, res) => {
  try {
    const videoID = req.query;
    const productToShow = await Product.find(videoID).select(
      "_id name link price"
    );
    res.status(200).json({
      productToShow,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
