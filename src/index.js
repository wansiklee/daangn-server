require("dotenv").config();

import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import api from "./api";
import jwtMiddleware from "./lib/jwtMiddleware";
import { uploadImage, uploadController } from "./lib/uploadMiddleware";

// database
import "./db";
import "./db/models/User";

const app = express();

const PORT = process.env.PORT || 4000;

// Express Middlewares
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(jwtMiddleware);

// Routes
app.use("/api", api);
app.use("/api/upload", uploadImage, uploadController);

app.listen(PORT, () => {
  console.log(`♬  daangn server is listening on port ${PORT}!`);
});
