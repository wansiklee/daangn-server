import express from "express";
import routes from "./routes";

import { signup, login, logout } from "../controllers/user";
import { home, search } from "../controllers/product";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.signup, signup);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
