import mongoose, { Schema } from "mongoose";

const Product = new Schema({
  image: String,
  title: String,
  description: String,
  price: Number,
  category: Number,
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
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like"
    }
  ]
  /*
   To do
   - Views
   */
});

export default mongoose.model("Product", Product);
