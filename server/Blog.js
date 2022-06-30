const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  likes: Number,
  comments: [
    {
      name: { type: String, required: true },
      comment: { type: String, required: true },
      date: {type: Date, default: ()=> Date().now, immutable: true},
    },
  ],
  createdAt: {type: Date, default: ()=> Date().now, immutable: true},
  updatedAt: {type: Date, default: ()=> Date().now, immutable: true},
});

module.exports = mongoose.model("Blog", blogSchema);
