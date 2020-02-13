import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import api from "./routers";

const app = express();

const PORT = 4000;

// Express Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`♬  daangn server is listening on port ${PORT}!`);
});
