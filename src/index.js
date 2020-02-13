require("dotenv").config();

import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import api from "./routers/api";
import global from "./routers/global";
import user from "./routers/user";
import routes from "./routes";
import "./db";

const app = express();

const PORT = process.env.PORT || 4000;

// Express Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use(routes.api, api);
app.use(routes.home, global);
app.use(routes.users, user);

app.listen(PORT, () => {
  console.log(`♬  daangn server is listening on port ${PORT}!`);
});
