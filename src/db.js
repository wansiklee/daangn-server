import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/daangn", {
  useUnifiedTopology: true,
  useNewUrlParser: true
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
