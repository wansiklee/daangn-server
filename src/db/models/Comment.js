import mongoose, { Schema, Mongoose } from "mongoose";

const Comment = new Schema({
  text: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }
});

export default mongoose.model("Comment", Comment);
