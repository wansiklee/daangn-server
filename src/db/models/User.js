import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const User = new Schema({
  username: String,
  email: String,
  thumbnail: String,
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

// Password Encrypt
User.methods.setPassword = async function(password) {
  const hash = await bcrypt.hash(password, 10); // 10: saltRounds
  this.password = hash;
};

// Delete unnecessary field password
User.methods.serialize = function() {
  const data = this.toJSON();
  delete data.password;
  return data;
};

// Check username / email existancy
User.statics.findExistancy = function({ username, email }) {
  return this.findOne({
    $or: [{ username }, { email }]
  });
};

export default mongoose.model("User", User);
