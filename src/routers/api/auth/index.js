import express from "express";
import routes from "../../../routes";
import { signup, login, check, logout } from "./auth.ctrl";

const auth = express.Router();

auth.post(routes.signup, signup);
auth.post(routes.login, login);
auth.get(routes.check, check);
auth.post(routes.logout, logout);

export default auth;
