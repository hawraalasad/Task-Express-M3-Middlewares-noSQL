const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  image: String,
});

const Post = model("Post", PostSchema);
module.exports = Post;
