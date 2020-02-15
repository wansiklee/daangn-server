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
  }
  /*
    To Do
    -file URL
    -User
    -Category
    -Views
    -Comments
    -Likes
  */
});

export default mongoose.model("Product", Product);
