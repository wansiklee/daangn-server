import mongoose, { Schema } from "mongoose";

const Like = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }
});

export default mongoose.model("Like", Like);
