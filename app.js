const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./database");

connectDb();
app.use(express.json());
app.use("/posts", postsRoutes);
app.use(morgan("dev"));
app.use(cors());
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
