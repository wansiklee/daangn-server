import express from "express";
import routes from "../../routes";
import { home, search } from "./global.ctrl";

const global = express.Router();

global.get(routes.home, home);
global.get(routes.search, search);

export default global;
