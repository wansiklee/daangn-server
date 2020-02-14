require("dotenv").config();

import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import api from "./api";
import routes from "./routes";
import jwtMiddleware from "./lib/jwtMiddleware";

// database
import "./db";
import "./db/models/User";

const app = express();

const PORT = process.env.PORT || 4000;

// Express Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(jwtMiddleware);

// Routes
app.use(routes.api, api);

app.listen(PORT, () => {
  console.log(`♬  daangn server is listening on port ${PORT}!`);
});
