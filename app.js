// imports
const express = require("express");

const postsRoutes = require("./api/posts/posts.routes");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const connectDB = require("./database");

// init
const app = express();
const PORT = process.env.PORT || 8000;
connectDB();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/posts", postsRoutes);

app.use("/media", express.static(path.join(__dirname, "media")));
app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});
