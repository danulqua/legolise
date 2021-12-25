const mongoose = require("mongoose");
const { Schema } = mongoose;

const postsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pictures: { type: Array, required: true },
  likes: { type: Array, required: true },
  createdOn: { type: Date, required: true },
  createdBy: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
});

const Posts = mongoose.model("posts", postsSchema);

module.exports = Posts;
