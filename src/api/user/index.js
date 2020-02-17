import express from "express";
import { userDetail } from "./user.ctrl";
import checkLoggedIn from "../../lib/checkLoggedIn";
import getUserById from "../../lib/getUserById";

const user = express.Router();

user.get("/:id", checkLoggedIn, getUserById, userDetail);

export default user;
