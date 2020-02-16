import mongoose, { Schema } from "mongoose";

const Product = new Schema({
  name: String,
  description: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
  /*
    To Do
    -Category
    -Likes
  */
});

export default mongoose.model("Product", Product);
