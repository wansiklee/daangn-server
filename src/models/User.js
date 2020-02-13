import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema({
  username: String,
  email: String,
  imageUrl: String,
  social: {
    facebook: {
      id: String,
      accessToken: String
    },
    google: {
      id: String,
      accessToken: String
    }
  },
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("User", User);
