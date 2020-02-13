import express from "express";
import routes from "../../../routes";
import { signup, login, logout } from "./auth.ctrl";

const auth = express.Router();

auth.post(routes.signup, signup);
auth.post(routes.login, login);
auth.post(routes.logout, logout);

export default auth;
