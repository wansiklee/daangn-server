import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routers/routes";
import globalRouter from "./routers/global";
import userRouter from "./routers/user";
import productRouter from "./routers/product";

const app = express();

const PORT = 4000;

// Express Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// Routers
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.products, productRouter);

app.listen(PORT, () => {
  console.log(`♬  daangn server is listening on port ${PORT}!`);
});
