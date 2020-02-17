import express from "express";
import { meDetail, editMe } from "./me.ctrl";
import checkLoggedIn from "../../lib/checkLoggedIn";
import getMe from "../../lib/getMe";

const me = express.Router();

me.get("/", checkLoggedIn, getMe, meDetail);
me.patch("/", checkLoggedIn, getMe, editMe);

export default me;
