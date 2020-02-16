import mongoose, { Schema } from "mongoose";

const Product = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  location: String,
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
   - Files Url 
   - Views
   */
});

export default mongoose.model("Product", Product);
