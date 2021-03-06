import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const User = new Schema({
  username: String,
  email: String,
  thumbnail: {
    type: String,
    default:
      "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png"
  },
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
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }
  ]
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

User.methods.generateToken = function() {
  const token = jwt.sign(
    // payload
    {
      _id: this._id,
      username: this.username
    },
    // secret key
    process.env.JWT_SECRET,
    // options
    {
      expiresIn: "7d"
    }
  );
  return token;
};

// Check Valid Password
User.methods.checkPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// Check username / email existancy
User.statics.findExistancy = function({ username, email }) {
  return this.findOne({
    $or: [{ username }, { email }]
  });
};

User.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

export default mongoose.model("User", User);
