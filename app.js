require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const commentsRoutes = require("./routes/comment.js");
const productsRoutes = require("./routes/product.js");
const videosRoutes = require("./routes/video.js");
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);
const database = mongoose.connection;

database.on("error", (Error) => {
  console.log(Error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

// Close the connection when the Node.js process is terminated
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed due to application termination");
    process.exit(0);
  });
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Routes map for the app
app.use("/api", videosRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/comments", commentsRoutes);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
