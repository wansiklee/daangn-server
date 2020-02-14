require("dotenv").config();

import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

// error
db.on("error", error => {
  console.log(`Error on DB Connection:${error}`);
});

// connect
db.once("open", () => {
  console.log("Successfully Connected to DB");
});
